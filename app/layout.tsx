import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { JsonLd } from '../components/JsonLd';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'VidGrab - Download Videos from Any Platform (Free 4K, MP4, MP3)',
  description: 'Download YouTube videos, TikTok no watermark, Instagram Reels, and Facebook videos in HD & 4K for free. Fast, unlimited, no sign-up required online video downloader.',
  keywords: [
    'vidgrab',
    'video downloader',
    'youtube downloader',
    'tiktok downloader no watermark',
    'instagram reel downloader',
    'facebook reel downloader',
    'download 1080p video',
    'free 4k video downloader',
    'mp4 downloader',
    'online video saver',
  ],
  authors: [{ name: 'VidGrab Media' }],
  creator: 'VidGrab',
  publisher: 'VidGrab',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vidgrab.media',
    siteName: 'VidGrab Media Downloader',
    title: 'VidGrab - Free Multi-Platform Video Downloader',
    description: 'Download YouTube Videos, TikTok No Watermark, Instagram Reels, and Facebook Reels in highest quality MP4.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VidGrab - Free Video Downloader',
    description: 'Fast, free 4K and 1080p video downloader for YouTube, TikTok, Instagram, and Facebook.',
  },
  alternates: {
    canonical: 'https://vidgrab.media',
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'VidGrab Media Downloader',
    url: 'https://vidgrab.media',
    applicationCategory: 'MultimediaApplication',
    operatingSystem: 'Windows, macOS, Linux, Android, iOS',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description: 'Free online video downloader for YouTube, TikTok no watermark, Instagram Reels, and Facebook videos.',
  };

  return (
    <html lang="en" className={`${inter.className} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <JsonLd data={webAppSchema} />
      </head>
      <body className={`${inter.className} antialiased font-sans bg-slate-50 dark:bg-[#0D0504] text-slate-900 dark:text-zinc-100 min-h-screen flex flex-col transition-colors duration-200`}>
        <Navbar />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}


