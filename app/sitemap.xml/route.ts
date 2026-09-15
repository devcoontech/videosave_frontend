import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://videosave.site').replace(/\/$/, '');
  const lastModDate = new Date().toISOString().split('T')[0];

  const pages = [
    { url: `${baseUrl}/`, priority: '1.0', changefreq: 'daily' },
    { url: `${baseUrl}/tiktok`, priority: '0.9', changefreq: 'weekly' },
    { url: `${baseUrl}/instagram`, priority: '0.9', changefreq: 'weekly' },
    { url: `${baseUrl}/facebook`, priority: '0.8', changefreq: 'weekly' },
    { url: `${baseUrl}/twitter`, priority: '0.8', changefreq: 'weekly' },
    { url: `${baseUrl}/vimeo`, priority: '0.8', changefreq: 'weekly' },
    { url: `${baseUrl}/dailymotion`, priority: '0.8', changefreq: 'weekly' },
    { url: `${baseUrl}/reddit`, priority: '0.8', changefreq: 'weekly' },
    { url: `${baseUrl}/pinterest`, priority: '0.8', changefreq: 'weekly' },
    { url: `${baseUrl}/platforms`, priority: '0.7', changefreq: 'monthly' },
    { url: `${baseUrl}/formats`, priority: '0.7', changefreq: 'monthly' },
    { url: `${baseUrl}/faq`, priority: '0.6', changefreq: 'monthly' },
  ];

  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${lastModDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new NextResponse(xmlContent, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=UTF-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400, stale-while-revalidate=86400',
    },
  });
}
