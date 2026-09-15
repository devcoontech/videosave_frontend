import React from 'react';
import { RedditClient } from './RedditClient';
import { SeoFaq } from '../../components/SeoFaq';
import { JsonLd } from '../../components/JsonLd';
import { Sparkles, ShieldCheck, Smartphone, Video, Zap } from 'lucide-react';

export const metadata = {
  title: 'Reddit Video Downloader with Audio - Download Reddit Videos MP4 | VideoSave',
  description: 'Download Reddit videos (v.redd.it) with sound merged in HD 1080p MP4 format. Free online Reddit video saver for mobile, Mac, and Windows.',
  keywords: [
    'reddit video downloader',
    'download reddit video with audio',
    'reddit video saver mp4',
    'v.redd.it downloader',
    'reddit video with sound',
    'free reddit video saver',
  ],
  alternates: {
    canonical: 'https://videosave.site/reddit',
  },
};

export default function RedditPage() {
  const redditFaqs = [
    {
      question: 'Why do some Reddit video downloaders lack audio?',
      answer: 'Reddit stores video and audio streams separately on v.redd.it servers. VideoSave automatically merges the video and audio tracks together so your downloaded file plays with crystal clear sound.',
    },
    {
      question: 'How do I download a video from a Reddit post?',
      answer: 'Copy the post URL from Reddit, paste it into VideoSave, click "Fetch Reddit Video", and select your desired MP4 quality option.',
    },
    {
      question: 'Can I download videos from NSFW or private subreddits?',
      answer: 'VideoSave processes all publicly accessible Reddit posts. Content that requires an age verification login or private subreddit approval cannot be downloaded.',
    },
  ];

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://videosave.site' },
      { '@type': 'ListItem', position: 2, name: 'Reddit Video Downloader', item: 'https://videosave.site/reddit' },
    ],
  };

  return (
    <div className="space-y-16 py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <JsonLd data={breadcrumbSchema} />
      <RedditClient />

      <section className="max-w-5xl mx-auto space-y-12 py-8 border-t border-slate-200 dark:border-[#1E2436]">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 text-orange-500 font-bold text-xs">
            <Sparkles className="w-4 h-4" /> HD Reddit Video & Audio Merger
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-zinc-100 tracking-tight">
            Fast & Free <span className="text-[#2563EB] dark:text-[#3B82F6]">Reddit Video Downloader</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Extract Reddit posts and v.redd.it media links with synced audio in 1080p MP4 format.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white dark:bg-[#121520] border border-slate-200 dark:border-[#1E2436] rounded-2xl p-5 space-y-2.5 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center font-bold">
              <Video className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-zinc-100">Synced Audio Stream</h3>
            <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
              Solves Reddit's muted video issue by automatically stitching audio tracks into the MP4 file.
            </p>
          </div>

          <div className="bg-white dark:bg-[#121520] border border-slate-200 dark:border-[#1E2436] rounded-2xl p-5 space-y-2.5 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-zinc-100">1080p HD Quality</h3>
            <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
              Extracts original high bitrate v.redd.it source files directly.
            </p>
          </div>

          <div className="bg-white dark:bg-[#121520] border border-slate-200 dark:border-[#1E2436] rounded-2xl p-5 space-y-2.5 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-[#2563EB] dark:text-[#3B82F6] flex items-center justify-center font-bold">
              <Smartphone className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-zinc-100">Mobile & App Links</h3>
            <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
              Supports shortened share links from Reddit mobile apps (`redd.it`).
            </p>
          </div>

          <div className="bg-white dark:bg-[#121520] border border-slate-200 dark:border-[#1E2436] rounded-2xl p-5 space-y-2.5 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-zinc-100">Instant Extraction</h3>
            <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
              Parses Reddit post metadata in seconds.
            </p>
          </div>
        </div>

        <article className="bg-white dark:bg-[#121520] border border-slate-200 dark:border-[#1E2436] rounded-3xl p-6 sm:p-10 space-y-6 text-slate-700 dark:text-zinc-300 text-sm leading-relaxed shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-zinc-100 border-b border-slate-200 dark:border-[#1E2436] pb-4">
            How to Download Reddit Videos with Sound
          </h2>

          <ol className="grid grid-cols-1 md:grid-cols-3 gap-6 list-none p-0">
            <li className="bg-slate-50 dark:bg-[#1A1E2E] border border-slate-200/80 dark:border-[#1E2436] rounded-2xl p-5 space-y-2">
              <span className="w-8 h-8 rounded-full bg-[#2563EB] text-white font-extrabold flex items-center justify-center text-xs">1</span>
              <h3 className="font-bold text-slate-900 dark:text-zinc-100">Copy Reddit Post Link</h3>
              <p className="text-xs text-slate-600 dark:text-zinc-400">
                Tap Share on any Reddit post containing a video and copy the link.
              </p>
            </li>

            <li className="bg-slate-50 dark:bg-[#1A1E2E] border border-slate-200/80 dark:border-[#1E2436] rounded-2xl p-5 space-y-2">
              <span className="w-8 h-8 rounded-full bg-[#2563EB] text-white font-extrabold flex items-center justify-center text-xs">2</span>
              <h3 className="font-bold text-slate-900 dark:text-zinc-100">Paste in VideoSave</h3>
              <p className="text-xs text-slate-600 dark:text-zinc-400">
                Paste the URL into VideoSave and click "Fetch Reddit Video".
              </p>
            </li>

            <li className="bg-slate-50 dark:bg-[#1A1E2E] border border-slate-200/80 dark:border-[#1E2436] rounded-2xl p-5 space-y-2">
              <span className="w-8 h-8 rounded-full bg-[#2563EB] text-white font-extrabold flex items-center justify-center text-xs">3</span>
              <h3 className="font-bold text-slate-900 dark:text-zinc-100">Download MP4 File</h3>
              <p className="text-xs text-slate-600 dark:text-zinc-400">
                Click download to get the MP4 video with full stereo audio included.
              </p>
            </li>
          </ol>
        </article>
      </section>

      <SeoFaq
        title="Reddit Downloader FAQ"
        subtitle="Frequently asked questions about downloading Reddit videos."
        items={redditFaqs}
      />
    </div>
  );
}
