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
  title: 'VideoSave - Free Online Video & Playlist Downloader (4K, 1080p, MP4)',
  description: 'Download YouTube videos, full playlists, Instagram Reels, and Facebook Reels in HD & 4K for free. Fast, no account required, high quality online media downloader.',
  icons: {
    icon: '/assets/videoSaveIcon.png',
    shortcut: '/assets/videoSaveIcon.png',
    apple: '/assets/videoSaveIcon.png',
  },


  keywords: [
    'video save',
    'video save downloader',
    'youtube downloader',
    'youtube playlist downloader',
    'instagram reel downloader',
    'facebook reel downloader',
    'download 1080p video',
    'free 4k video downloader',
    'mp4 downloader',
    'online video saver',
  ],
  authors: [{ name: 'VideoSave  Media' }],
  creator: 'VideoSave ',
  publisher: 'VideoSave ',
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
    url: 'https://VideoSave .media',
    siteName: 'VideoSave  Media Downloader',
    title: 'VideoSave  - Free Multi-Platform Video & Playlist Downloader',
    description: 'Download YouTube Videos, Playlists, Instagram Reels, and Facebook Reels in highest quality MP4.',
    images: [
      {
        url: 'https://VideoSave .media/og-image.png',
        width: 1200,
        height: 630,
        alt: 'VideoSave  Multi-Platform Video Downloader',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VideoSave  - Free Video & Playlist Downloader',
    description: 'Fast, free 4K and 1080p video downloader for YouTube, Instagram, and Facebook.',
    images: ['https://VideoSave .media/og-image.png'],
  },
  alternates: {
    canonical: 'https://VideoSave .media',
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
    name: 'VideoSave Media Downloader',
    url: 'https://VideoSave .media',
    applicationCategory: 'MultimediaApplication',
    operatingSystem: 'Windows, macOS, Linux, Android, iOS',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description: 'Free online video and playlist downloader for YouTube, Instagram Reels, and Facebook Reels.',
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


