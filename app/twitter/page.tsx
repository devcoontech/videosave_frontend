import React from 'react';
import { TwitterClient } from './TwitterClient';
import { SeoFaq } from '../../components/SeoFaq';
import { JsonLd } from '../../components/JsonLd';
import { Sparkles, ShieldCheck, Smartphone, Video, Zap } from 'lucide-react';

export const metadata = {
  title: 'Twitter (X) Video Downloader - Download HD Twitter Videos & GIFs Online | VideoSave',
  description: 'Free online Twitter (X) video downloader. Save Twitter videos and GIFs in 1080p HD MP4 format for fast, offline viewing on iPhone, Android, and PC.',
  keywords: [
    'twitter video downloader',
    'x video downloader',
    'download twitter video mp4',
    'twitter gif downloader',
    'free twitter video saver',
    'save x videos 1080p',
  ],
  alternates: {
    canonical: 'https://videosave.site/twitter',
  },
};

export default function TwitterPage() {
  const twitterFaqs = [
    {
      question: 'How do I download videos from Twitter (X)?',
      answer: 'Find the tweet containing the video, click the share button, copy the tweet link, paste it into VideoSave, and click "Fetch Video". Select your preferred resolution to download the MP4 file.',
    },
    {
      question: 'Can I download GIFs from Twitter?',
      answer: 'Yes! Twitter converts uploaded GIFs into MP4 format automatically. VideoSave lets you download these GIFs as smooth MP4 files.',
    },
    {
      question: 'Does VideoSave work on mobile devices?',
      answer: 'Absolutely. VideoSave works seamlessly across iOS Safari, Android Chrome, tablet, and desktop browsers.',
    },
    {
      question: 'Is it free to download Twitter videos?',
      answer: 'Yes, VideoSave is 100% free with no hidden fees, accounts, or software installation required.',
    },
  ];

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://videosave.site' },
      { '@type': 'ListItem', position: 2, name: 'Twitter Video Downloader', item: 'https://videosave.site/twitter' },
    ],
  };

  return (
    <div className="space-y-16 py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <JsonLd data={breadcrumbSchema} />
      <TwitterClient />

      <section className="max-w-5xl mx-auto space-y-12 py-8 border-t border-slate-200 dark:border-[#1E2436]">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 text-sky-500 font-bold text-xs">
            <Sparkles className="w-4 h-4" /> HD Twitter / X Media Saver
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-zinc-100 tracking-tight">
            Fast & Free <span className="text-[#2563EB] dark:text-[#3B82F6]">Twitter / X Video Downloader</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Extract high-resolution videos and GIFs directly from Twitter (X) tweets in crisp MP4 quality.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white dark:bg-[#121520] border border-slate-200 dark:border-[#1E2436] rounded-2xl p-5 space-y-2.5 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-500 flex items-center justify-center font-bold">
              <Video className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-zinc-100">Original 1080p Quality</h3>
            <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
              Extract highest bitrate video streams without additional re-encoding loss.
            </p>
          </div>

          <div className="bg-white dark:bg-[#121520] border border-slate-200 dark:border-[#1E2436] rounded-2xl p-5 space-y-2.5 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-zinc-100">GIF Support</h3>
            <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
              Easily convert Twitter animation loops and GIFs into downloadable MP4 videos.
            </p>
          </div>

          <div className="bg-white dark:bg-[#121520] border border-slate-200 dark:border-[#1E2436] rounded-2xl p-5 space-y-2.5 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-[#2563EB] dark:text-[#3B82F6] flex items-center justify-center font-bold">
              <Smartphone className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-zinc-100">All Devices Supported</h3>
            <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
              Compatible with iOS, Android, macOS, Windows, and Linux browsers.
            </p>
          </div>

          <div className="bg-white dark:bg-[#121520] border border-slate-200 dark:border-[#1E2436] rounded-2xl p-5 space-y-2.5 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-zinc-100">Instant Processing</h3>
            <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
              High-speed backend nodes process media links in milliseconds.
            </p>
          </div>
        </div>

        <article className="bg-white dark:bg-[#121520] border border-slate-200 dark:border-[#1E2436] rounded-3xl p-6 sm:p-10 space-y-6 text-slate-700 dark:text-zinc-300 text-sm leading-relaxed shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-zinc-100 border-b border-slate-200 dark:border-[#1E2436] pb-4">
            How to Download Twitter (X) Videos & GIFs Step-by-Step
          </h2>

          <ol className="grid grid-cols-1 md:grid-cols-3 gap-6 list-none p-0">
            <li className="bg-slate-50 dark:bg-[#1A1E2E] border border-slate-200/80 dark:border-[#1E2436] rounded-2xl p-5 space-y-2">
              <span className="w-8 h-8 rounded-full bg-[#2563EB] text-white font-extrabold flex items-center justify-center text-xs">1</span>
              <h3 className="font-bold text-slate-900 dark:text-zinc-100">Copy Tweet URL</h3>
              <p className="text-xs text-slate-600 dark:text-zinc-400">
                Open Twitter/X, tap the share icon under the tweet, and select "Copy Link".
              </p>
            </li>

            <li className="bg-slate-50 dark:bg-[#1A1E2E] border border-slate-200/80 dark:border-[#1E2436] rounded-2xl p-5 space-y-2">
              <span className="w-8 h-8 rounded-full bg-[#2563EB] text-white font-extrabold flex items-center justify-center text-xs">2</span>
              <h3 className="font-bold text-slate-900 dark:text-zinc-100">Paste Link</h3>
              <p className="text-xs text-slate-600 dark:text-zinc-400">
                Paste the tweet link into the input field above and click "Fetch Video".
              </p>
            </li>

            <li className="bg-slate-50 dark:bg-[#1A1E2E] border border-slate-200/80 dark:border-[#1E2436] rounded-2xl p-5 space-y-2">
              <span className="w-8 h-8 rounded-full bg-[#2563EB] text-white font-extrabold flex items-center justify-center text-xs">3</span>
              <h3 className="font-bold text-slate-900 dark:text-zinc-100">Download Video</h3>
              <p className="text-xs text-slate-600 dark:text-zinc-400">
                Choose HD 1080p, 720p, or MP4 resolution to download the video directly to your storage.
              </p>
            </li>
          </ol>
        </article>
      </section>

      <SeoFaq
        title="Twitter (X) Downloader FAQ"
        subtitle="Frequently asked questions about saving Twitter videos."
        items={twitterFaqs}
      />
    </div>
  );
}
