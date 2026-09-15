import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const host = req.headers.get('host') || 'videosave.site';
  const protocol = req.headers.get('x-forwarded-proto') || 'https';
  const currentBaseUrl = `${protocol}://${host}`.replace(/\/$/, '');

  const content = `User-agent: *
Allow: /
Disallow: /api/

Sitemap: https://www.videosave.site/sitemap.xml
Sitemap: https://videosave.site/sitemap.xml`;

  return new NextResponse(content, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=UTF-8',
      'Cache-Control': 'public, max-age=0, must-revalidate',
    },
  });
}
