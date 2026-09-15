import React from 'react';
import { PinterestClient } from './PinterestClient';
import { SeoFaq } from '../../components/SeoFaq';
import { JsonLd } from '../../components/JsonLd';
import { Sparkles, ShieldCheck, Smartphone, Video, Zap } from 'lucide-react';

export const metadata = {
  title: 'Pinterest Video Downloader - Download Pinterest Pin Videos HD | VideoSave',
  description: 'Download Pinterest videos and Idea Pins online in HD 1080p MP4. Free, fast Pinterest pin video downloader for iPhone, Android, and PC.',
  keywords: [
    'pinterest video downloader',
    'download pinterest videos',
    'pinterest pin downloader',
    'pinterest video saver hd',
    'pinterest idea pin downloader',
    'free pinterest video saver',
  ],
  alternates: {
    canonical: 'https://videosave.site/pinterest',
  },
};

export default function PinterestPage() {
  const pinterestFaqs = [
    {
      question: 'How do I download a video from Pinterest?',
      answer: 'Open Pinterest, tap the 3 dots or Share button on the pin video, copy the link, paste it into VideoSave, click "Fetch Pin Video", and select your download option.',
    },
    {
      question: 'Can I download Pinterest Idea Pins?',
      answer: 'Yes! VideoSave supports downloading full Pinterest Idea Pins and standard video pins in high definition MP4 format.',
    },
    {
      question: 'Will there be any watermarks on the downloaded Pinterest video?',
      answer: 'No. VideoSave extracts original clean video files from Pinterest without adding watermarks or logos.',
    },
  ];

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://videosave.site' },
      { '@type': 'ListItem', position: 2, name: 'Pinterest Video Downloader', item: 'https://videosave.site/pinterest' },
    ],
  };

  return (
    <div className="space-y-16 py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <JsonLd data={breadcrumbSchema} />
      <PinterestClient />

      <section className="max-w-5xl mx-auto space-y-12 py-8 border-t border-slate-200 dark:border-[#1E2436]">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 text-red-500 font-bold text-xs">
            <Sparkles className="w-4 h-4" /> HD Pinterest Pin Media Saver
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-zinc-100 tracking-tight">
            Fast & Free <span className="text-[#2563EB] dark:text-[#3B82F6]">Pinterest Video Downloader</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Save inspiration clips, DIY tutorials, fashion videos, and Idea Pins directly from Pinterest.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white dark:bg-[#121520] border border-slate-200 dark:border-[#1E2436] rounded-2xl p-5 space-y-2.5 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-500 flex items-center justify-center font-bold">
              <Video className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-zinc-100">Original MP4 Quality</h3>
            <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
              Extracts high resolution original MP4 streams directly from Pinterest.
            </p>
          </div>

          <div className="bg-white dark:bg-[#121520] border border-slate-200 dark:border-[#1E2436] rounded-2xl p-5 space-y-2.5 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-zinc-100">Zero Watermark</h3>
            <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
              Clean video files without added logos or watermark stamps.
            </p>
          </div>

          <div className="bg-white dark:bg-[#121520] border border-slate-200 dark:border-[#1E2436] rounded-2xl p-5 space-y-2.5 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-[#2563EB] dark:text-[#3B82F6] flex items-center justify-center font-bold">
              <Smartphone className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-zinc-100">iOS & Android Ready</h3>
            <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
              Supports iPhone, iPad, Android, macOS, and Windows web browsers.
            </p>
          </div>

          <div className="bg-white dark:bg-[#121520] border border-slate-200 dark:border-[#1E2436] rounded-2xl p-5 space-y-2.5 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-zinc-100">Unlimited Downloads</h3>
            <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
              100% free with no daily limits or sign-up required.
            </p>
          </div>
        </div>

        <article className="bg-white dark:bg-[#121520] border border-slate-200 dark:border-[#1E2436] rounded-3xl p-6 sm:p-10 space-y-6 text-slate-700 dark:text-zinc-300 text-sm leading-relaxed shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-zinc-100 border-b border-slate-200 dark:border-[#1E2436] pb-4">
            How to Save Pinterest Pin Videos Online
          </h2>

          <ol className="grid grid-cols-1 md:grid-cols-3 gap-6 list-none p-0">
            <li className="bg-slate-50 dark:bg-[#1A1E2E] border border-slate-200/80 dark:border-[#1E2436] rounded-2xl p-5 space-y-2">
              <span className="w-8 h-8 rounded-full bg-[#2563EB] text-white font-extrabold flex items-center justify-center text-xs">1</span>
              <h3 className="font-bold text-slate-900 dark:text-zinc-100">Copy Pinterest Pin Link</h3>
              <p className="text-xs text-slate-600 dark:text-zinc-400">
                Locate your favorite pin video on Pinterest, tap share, and select "Copy Link".
              </p>
            </li>

            <li className="bg-slate-50 dark:bg-[#1A1E2E] border border-slate-200/80 dark:border-[#1E2436] rounded-2xl p-5 space-y-2">
              <span className="w-8 h-8 rounded-full bg-[#2563EB] text-white font-extrabold flex items-center justify-center text-xs">2</span>
              <h3 className="font-bold text-slate-900 dark:text-zinc-100">Paste Link in VideoSave</h3>
              <p className="text-xs text-slate-600 dark:text-zinc-400">
                Paste the copied URL into the box above and click "Fetch Pin Video".
              </p>
            </li>

            <li className="bg-slate-50 dark:bg-[#1A1E2E] border border-slate-200/80 dark:border-[#1E2436] rounded-2xl p-5 space-y-2">
              <span className="w-8 h-8 rounded-full bg-[#2563EB] text-white font-extrabold flex items-center justify-center text-xs">3</span>
              <h3 className="font-bold text-slate-900 dark:text-zinc-100">Download MP4 File</h3>
              <p className="text-xs text-slate-600 dark:text-zinc-400">
                Click download to save the MP4 video straight to your device downloads.
              </p>
            </li>
          </ol>
        </article>
      </section>

      <SeoFaq
        title="Pinterest Downloader FAQ"
        subtitle="Frequently asked questions about downloading Pinterest videos."
        items={pinterestFaqs}
      />
    </div>
  );
}
