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
  title: 'VideoSave - Free Online Video Downloader (4K, 1080p, MP4, MP3)',
  description: 'Download TikTok videos without watermark, Instagram Reels, Facebook videos, X (Twitter), Vimeo, and Reddit videos in HD & 4K for free. Fast, unlimited, online video saver.',
  keywords: [
    'videosave',
    'video downloader',
    'tiktok downloader no watermark',
    'instagram reel downloader',
    'facebook reel downloader',
    'twitter video downloader',
    'download 1080p video',
    'free 4k video downloader',
    'mp4 downloader',
    'online video saver',
  ],
  icons: {
    icon: '/assets/videoSaveIcon.png',
    shortcut: '/assets/videoSaveIcon.png',
    apple: '/assets/videoSaveIcon.png',
  },
  authors: [{ name: 'VideoSave Team' }],
  creator: 'VideoSave',
  publisher: 'VideoSave',
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
    url: 'https://videosave.site',
    siteName: 'VideoSave Online Downloader',
    title: 'VideoSave - Free Multi-Platform Video Downloader',
    description: 'Download TikTok No Watermark, Instagram Reels, Facebook Videos, and X Media in highest quality MP4.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VideoSave - Free Video Downloader',
    description: 'Fast, free 4K and 1080p video downloader for TikTok, Instagram, Facebook, X, and Vimeo.',
  },
  alternates: {
    canonical: 'https://videosave.site',
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
    name: 'VideoSave Online Downloader',
    url: 'https://videosave.site',
    applicationCategory: 'MultimediaApplication',
    operatingSystem: 'Windows, macOS, Linux, Android, iOS',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description: 'Free online video downloader for TikTok no watermark, Instagram Reels, Facebook, X (Twitter), Vimeo, and Reddit videos.',
  };

  return (
    <html lang="en" className={`${inter.className} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <JsonLd data={webAppSchema} />
      </head>
      <body className={`${inter.className} antialiased font-sans bg-slate-50 dark:bg-[#090A0F] text-slate-900 dark:text-zinc-100 min-h-screen flex flex-col transition-colors duration-200`}>
        <Navbar />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}



