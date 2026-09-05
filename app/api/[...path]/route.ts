import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';
export const maxDuration = 300;

const backendBase = (
  process.env.INTERNAL_BACKEND_URL ||
  process.env.NEXT_PUBLIC_API_URL ||
  'http://127.0.0.1:8000'
).replace(/\/$/, '');

const HOP_BY_HOP = new Set([
  'connection',
  'keep-alive',
  'proxy-authenticate',
  'proxy-authorization',
  'te',
  'trailers',
  'transfer-encoding',
  'upgrade',
  'host',
  'content-length',
]);

function backendUrl(path: string[], search: string): string {
  const suffix = path.join('/');
  const prefix = backendBase.endsWith('/api') ? backendBase : `${backendBase}/api`;
  return `${prefix}/${suffix}${search}`;
}

async function proxyRequest(req: NextRequest, path: string[]): Promise<Response> {
  const url = backendUrl(path, req.nextUrl.search);
  const headers = new Headers();
  req.headers.forEach((value, key) => {
    if (!HOP_BY_HOP.has(key.toLowerCase())) {
      headers.set(key, value);
    }
  });

  const init: RequestInit = {
    method: req.method,
    headers,
    cache: 'no-store',
    signal: AbortSignal.timeout(180_000),
  };

  if (req.method !== 'GET' && req.method !== 'HEAD') {
    init.body = await req.arrayBuffer();
  }

  let lastError: unknown;
  for (let attempt = 0; attempt < 3; attempt += 1) {
    try {
      const upstream = await fetch(url, init);
      const responseHeaders = new Headers();
      upstream.headers.forEach((value, key) => {
        if (!HOP_BY_HOP.has(key.toLowerCase())) {
          responseHeaders.set(key, value);
        }
      });
      return new Response(upstream.body, {
        status: upstream.status,
        statusText: upstream.statusText,
        headers: responseHeaders,
      });
    } catch (error) {
      lastError = error;
      if (attempt < 2) {
        await new Promise((resolve) => setTimeout(resolve, 400 * (attempt + 1)));
      }
    }
  }

  const message =
    lastError instanceof Error ? lastError.message : 'Unable to reach the backend server.';
  return NextResponse.json(
    {
      detail: {
        code: 'BACKEND_UNAVAILABLE',
        message:
          'The API is starting or temporarily unreachable. Wait a moment and try again.',
        cause: message,
      },
    },
    { status: 503 }
  );
}

type RouteContext = { params: { path: string[] } };

async function handle(req: NextRequest, context: RouteContext) {
  return proxyRequest(req, context.params.path || []);
}

export const GET = handle;
export const POST = handle;
export const PUT = handle;
export const PATCH = handle;
export const DELETE = handle;
export const HEAD = handle;
export const OPTIONS = handle;
