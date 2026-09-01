/** @type {import('next').NextConfig} */
const backendTarget = (process.env.INTERNAL_BACKEND_URL || process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000').replace(/\/$/, '');

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'i.ytimg.com' },
      { protocol: 'https', hostname: 'scontent.xx.fbcdn.net' },
      { protocol: 'https', hostname: '**.cdninstagram.com' },
      { protocol: 'https', hostname: '**.fbcdn.net' },
      { protocol: 'https', hostname: '**.tiktokcdn.com' },
      { protocol: 'https', hostname: '**.tiktok.com' },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: backendTarget.endsWith('/api') ? `${backendTarget}/:path*` : `${backendTarget}/api/:path*`,
      },
    ];
  },
};

export default nextConfig;
