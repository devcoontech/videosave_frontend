import React from 'react';
import { DailymotionClient } from './DailymotionClient';
import { SeoFaq } from '../../components/SeoFaq';
import { JsonLd } from '../../components/JsonLd';
import { Sparkles, ShieldCheck, Smartphone, Video, Zap } from 'lucide-react';

export const metadata = {
  title: 'Dailymotion Video Downloader - Download Dailymotion Videos HD | VideoSave',
  description: 'Download Dailymotion videos online in original 1080p, 720p, and MP4 quality. Fast, free Dailymotion video downloader for mobile and PC.',
  keywords: [
    'dailymotion video downloader',
    'download dailymotion video',
    'dailymotion to mp4 converter',
    'online dailymotion saver',
    'dailymotion 1080p downloader',
  ],
  alternates: {
    canonical: 'https://videosave.site/dailymotion',
  },
};

export default function DailymotionPage() {
  const dailymotionFaqs = [
    {
      question: 'How do I download Dailymotion videos for free?',
      answer: 'Copy the video link from Dailymotion, paste it into VideoSave, click "Fetch Video", select your desired quality, and hit download.',
    },
    {
      question: 'Can I convert Dailymotion videos to MP4?',
      answer: 'Yes, VideoSave automatically extracts and packages Dailymotion videos into universally compatible MP4 video files.',
    },
    {
      question: 'Is there a limit on how many Dailymotion videos I can save?',
      answer: 'No limits! VideoSave provides free, unlimited downloads for all supported public Dailymotion videos.',
    },
  ];

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://videosave.site' },
      { '@type': 'ListItem', position: 2, name: 'Dailymotion Downloader', item: 'https://videosave.site/dailymotion' },
    ],
  };

  return (
    <div className="space-y-16 py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <JsonLd data={breadcrumbSchema} />
      <DailymotionClient />

      <section className="max-w-5xl mx-auto space-y-12 py-8 border-t border-slate-200 dark:border-[#1E2436]">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 text-blue-500 font-bold text-xs">
            <Sparkles className="w-4 h-4" /> HD Dailymotion Media Saver
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-zinc-100 tracking-tight">
            Fast <span className="text-[#2563EB] dark:text-[#3B82F6]">Dailymotion Video Downloader</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Save trending videos, news clips, and shows from Dailymotion straight to your storage.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white dark:bg-[#121520] border border-slate-200 dark:border-[#1E2436] rounded-2xl p-5 space-y-2.5 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center font-bold">
              <Video className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-zinc-100">Full HD Clarity</h3>
            <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
              Supports 1080p, 720p, 480p, and standard definition resolutions.
            </p>
          </div>

          <div className="bg-white dark:bg-[#121520] border border-slate-200 dark:border-[#1E2436] rounded-2xl p-5 space-y-2.5 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-zinc-100">No Ads Interruption</h3>
            <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
              Clean MP4 file download without embedded video player ads.
            </p>
          </div>

          <div className="bg-white dark:bg-[#121520] border border-slate-200 dark:border-[#1E2436] rounded-2xl p-5 space-y-2.5 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-[#2563EB] dark:text-[#3B82F6] flex items-center justify-center font-bold">
              <Smartphone className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-zinc-100">Mobile Friendly</h3>
            <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
              Works directly in your mobile browser without installing extra software.
            </p>
          </div>

          <div className="bg-white dark:bg-[#121520] border border-slate-200 dark:border-[#1E2436] rounded-2xl p-5 space-y-2.5 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-zinc-100">Rapid Downloads</h3>
            <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
              High-speed direct downloading with resume support.
            </p>
          </div>
        </div>

        <article className="bg-white dark:bg-[#121520] border border-slate-200 dark:border-[#1E2436] rounded-3xl p-6 sm:p-10 space-y-6 text-slate-700 dark:text-zinc-300 text-sm leading-relaxed shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-zinc-100 border-b border-slate-200 dark:border-[#1E2436] pb-4">
            How to Download Dailymotion Videos Online
          </h2>

          <ol className="grid grid-cols-1 md:grid-cols-3 gap-6 list-none p-0">
            <li className="bg-slate-50 dark:bg-[#1A1E2E] border border-slate-200/80 dark:border-[#1E2436] rounded-2xl p-5 space-y-2">
              <span className="w-8 h-8 rounded-full bg-[#2563EB] text-white font-extrabold flex items-center justify-center text-xs">1</span>
              <h3 className="font-bold text-slate-900 dark:text-zinc-100">Copy Dailymotion URL</h3>
              <p className="text-xs text-slate-600 dark:text-zinc-400">
                Copy the link of your desired video from Dailymotion app or website.
              </p>
            </li>

            <li className="bg-slate-50 dark:bg-[#1A1E2E] border border-slate-200/80 dark:border-[#1E2436] rounded-2xl p-5 space-y-2">
              <span className="w-8 h-8 rounded-full bg-[#2563EB] text-white font-extrabold flex items-center justify-center text-xs">2</span>
              <h3 className="font-bold text-slate-900 dark:text-zinc-100">Paste Link</h3>
              <p className="text-xs text-slate-600 dark:text-zinc-400">
                Paste the URL into VideoSave and click "Fetch Video".
              </p>
            </li>

            <li className="bg-slate-50 dark:bg-[#1A1E2E] border border-slate-200/80 dark:border-[#1E2436] rounded-2xl p-5 space-y-2">
              <span className="w-8 h-8 rounded-full bg-[#2563EB] text-white font-extrabold flex items-center justify-center text-xs">3</span>
              <h3 className="font-bold text-slate-900 dark:text-zinc-100">Save File</h3>
              <p className="text-xs text-slate-600 dark:text-zinc-400">
                Select your preferred quality option to download the MP4 file instantly.
              </p>
            </li>
          </ol>
        </article>
      </section>

      <SeoFaq
        title="Dailymotion Downloader FAQ"
        subtitle="Helpful answers for downloading Dailymotion videos."
        items={dailymotionFaqs}
      />
    </div>
  );
}
