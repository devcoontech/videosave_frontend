import React from 'react';
import { InstagramClient } from './InstagramClient';
import { SeoFaq } from '../../components/SeoFaq';
import { JsonLd } from '../../components/JsonLd';
import { Sparkles, ShieldCheck, Smartphone, Download, Zap, Video, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Free Instagram Reel Downloader - Download HD Instagram Reels Online | VideoSave ',
  description: 'Download Instagram Reels and videos in original HD MP4 quality without watermarks. Fast online Instagram video saver for iPhone, Android, and PC.',
  keywords: [
    'instagram reel downloader',
    'download instagram reels hd',
    'instagram video saver without watermark',
    'free instagram reel download mp4',
    'instagram reels video saver',
  ],
  alternates: {
    canonical: 'https://VideoSave .media/instagram',
  },
};

export default function InstagramPage() {
  const instagramFaqs = [
    {
      question: 'How do I download an Instagram Reel using VideoSave ?',
      answer: 'Open the Instagram app or website, click the "Share" or "..." button on the Reel, and copy the link. Paste the URL into VideoSave , click "Fetch Reel", and select your desired resolution to download.',
    },
    {
      question: 'Will the downloaded Instagram Reel contain watermarks or logos?',
      answer: 'No! VideoSave downloads original video files directly from Instagram servers without adding watermarks, logos, or brand overlays.',
    },
    {
      question: 'Can I download Instagram Reels on my iPhone or iPad?',
      answer: 'Yes. VideoSave works seamlessly in Safari on iOS and iPadOS. Simply paste the Reel link and the MP4 video file will download straight to your Safari Downloads or Files app.',
    },
    {
      question: 'Do I need to log into my Instagram account to download Reels?',
      answer: 'No login or Instagram account authorization is required. VideoSave extracts public Reels safely and anonymously.',
    },
  ];

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://VideoSave .media' },
      { '@type': 'ListItem', position: 2, name: 'Instagram Reel Downloader', item: 'https://VideoSave .media/instagram' },
    ],
  };

  return (
    <div className="space-y-16 py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <JsonLd data={breadcrumbSchema} />

      {/* Downloader Client Tool */}
      <InstagramClient />

      {/* Comprehensive SEO Content Section for Instagram Reel Downloader */}
      <section className="max-w-5xl mx-auto space-y-12 py-8 border-t border-slate-200 dark:border-[#1E2436]">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-500/10 text-pink-500 font-bold text-xs">
            <Sparkles className="w-4 h-4" /> HD Instagram Media Saver
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-zinc-100 tracking-tight">
            Fast & Free <span className="text-[#2563EB] dark:text-[#3B82F6]">Instagram Reel Downloader</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Save Instagram Reels and short videos in original high-definition MP4 format with crisp audio.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white dark:bg-[#121520] border border-slate-200 dark:border-[#1E2436] rounded-2xl p-5 space-y-2.5 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-pink-500/10 text-pink-500 flex items-center justify-center font-bold">
              <Video className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-zinc-100">Original HD Resolution</h3>
            <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
              Extracts original 1080p video clarity with zero compression or quality loss.
            </p>
          </div>

          <div className="bg-white dark:bg-[#121520] border border-slate-200 dark:border-[#1E2436] rounded-2xl p-5 space-y-2.5 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-zinc-100">Zero Watermark</h3>
            <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
              Clean video output without added logos, usernames, or watermark stamps.
            </p>
          </div>

          <div className="bg-white dark:bg-[#121520] border border-slate-200 dark:border-[#1E2436] rounded-2xl p-5 space-y-2.5 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-[#2563EB] dark:text-[#3B82F6] flex items-center justify-center font-bold">
              <Smartphone className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-zinc-100">Mobile & iOS Optimized</h3>
            <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
              Fully optimized for iPhone Safari, Android Chrome, iPad, and desktop web browsers.
            </p>
          </div>

          <div className="bg-white dark:bg-[#121520] border border-slate-200 dark:border-[#1E2436] rounded-2xl p-5 space-y-2.5 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-zinc-100">No Account Required</h3>
            <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
              No Instagram login or sign-in needed. Paste any public link and save immediately.
            </p>
          </div>
        </div>

        {/* Detailed Guide */}
        <article className="bg-white dark:bg-[#121520] border border-slate-200 dark:border-[#1E2436] rounded-3xl p-6 sm:p-10 space-y-6 text-slate-700 dark:text-zinc-300 text-sm leading-relaxed shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-zinc-100 border-b border-slate-200 dark:border-[#1E2436] pb-4">
            How to Download Instagram Reels to Your Phone or PC
          </h2>


          <ol className="grid grid-cols-1 md:grid-cols-3 gap-6 list-none p-0">
            <li className="bg-slate-50 dark:bg-[#1A1E2E] border border-slate-200/80 dark:border-[#1E2436] rounded-2xl p-5 space-y-2">
              <span className="w-8 h-8 rounded-full bg-[#2563EB] text-white font-extrabold flex items-center justify-center text-xs">1</span>
              <h3 className="font-bold text-slate-900 dark:text-zinc-100">Copy Reel URL</h3>
              <p className="text-xs text-slate-600 dark:text-zinc-400">
                Open Instagram, locate the Reel you want, tap the share icon, and select "Copy Link".
              </p>
            </li>

            <li className="bg-slate-50 dark:bg-[#1A1E2E] border border-slate-200/80 dark:border-[#1E2436] rounded-2xl p-5 space-y-2">
              <span className="w-8 h-8 rounded-full bg-[#2563EB] text-white font-extrabold flex items-center justify-center text-xs">2</span>
              <h3 className="font-bold text-slate-900 dark:text-zinc-100">Paste Link in VideoSave </h3>
              <p className="text-xs text-slate-600 dark:text-zinc-400">
                Paste the copied link into the VideoSave  Instagram box and click "Fetch Reel".
              </p>
            </li>

            <li className="bg-slate-50 dark:bg-[#1A1E2E] border border-slate-200/80 dark:border-[#1E2436] rounded-2xl p-5 space-y-2">
              <span className="w-8 h-8 rounded-full bg-[#2563EB] text-white font-extrabold flex items-center justify-center text-xs">3</span>
              <h3 className="font-bold text-slate-900 dark:text-zinc-100">Download MP4 File</h3>
              <p className="text-xs text-slate-600 dark:text-zinc-400">
                Select your preferred quality option to download the HD Reel straight to your camera roll or downloads folder.
              </p>
            </li>
          </ol>
        </article>
      </section>




      {/* SEO FAQ Accordion */}
      <SeoFaq
        title="Instagram Reel Downloader FAQ"
        subtitle="Quick answers about downloading Instagram Reels and videos."
        items={instagramFaqs}
      />
    </div>
  );
}
