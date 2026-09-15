import React from 'react';
import { VimeoClient } from './VimeoClient';
import { SeoFaq } from '../../components/SeoFaq';
import { JsonLd } from '../../components/JsonLd';
import { Sparkles, ShieldCheck, Smartphone, Video, Zap } from 'lucide-react';

export const metadata = {
  title: 'Free Vimeo Video Downloader - Download 4K & 1080p Vimeo MP4 Videos | VideoSave',
  description: 'Download Vimeo videos in 4K Ultra HD, 1080p, and 720p. Fast online Vimeo video saver for desktop, Mac, iPhone, and Android.',
  keywords: [
    'vimeo video downloader',
    'download vimeo video 1080p',
    'vimeo mp4 converter',
    'vimeo video saver free',
    'save vimeo videos online',
    'vimeo 4k downloader',
  ],
  alternates: {
    canonical: 'https://videosave.site/vimeo',
  },
};

export default function VimeoPage() {
  const vimeoFaqs = [
    {
      question: 'How do I save a video from Vimeo using VideoSave?',
      answer: 'Copy the URL of the Vimeo video, paste it into the search box above, click "Fetch Vimeo Video", choose your resolution (4K, 1080p, 720p), and click download.',
    },
    {
      question: 'Can I download private or password-protected Vimeo videos?',
      answer: 'VideoSave supports public Vimeo videos. Videos restricted by strict access permissions or privacy settings cannot be extracted.',
    },
    {
      question: 'Does VideoSave support 4K and 60fps Vimeo downloads?',
      answer: 'Yes! If the original creator uploaded the video in 4K or high frame rates, VideoSave will present those exact format options.',
    },
  ];

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://videosave.site' },
      { '@type': 'ListItem', position: 2, name: 'Vimeo Video Downloader', item: 'https://videosave.site/vimeo' },
    ],
  };

  return (
    <div className="space-y-16 py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <JsonLd data={breadcrumbSchema} />
      <VimeoClient />

      <section className="max-w-5xl mx-auto space-y-12 py-8 border-t border-slate-200 dark:border-[#1E2436]">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 text-cyan-500 font-bold text-xs">
            <Sparkles className="w-4 h-4" /> HD Vimeo Media Saver
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-zinc-100 tracking-tight">
            High Quality <span className="text-[#2563EB] dark:text-[#3B82F6]">Vimeo Video Downloader</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Save creative portfolio pieces, short films, and high-definition video clips from Vimeo.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white dark:bg-[#121520] border border-slate-200 dark:border-[#1E2436] rounded-2xl p-5 space-y-2.5 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center font-bold">
              <Video className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-zinc-100">4K & 1080p Support</h3>
            <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
              Preserves cinema-grade resolutions up to 4K Ultra HD.
            </p>
          </div>

          <div className="bg-white dark:bg-[#121520] border border-slate-200 dark:border-[#1E2436] rounded-2xl p-5 space-y-2.5 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-zinc-100">Clean Audio</h3>
            <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
              Extracts high bitrate AAC and MP3 soundtrack audio streams.
            </p>
          </div>

          <div className="bg-white dark:bg-[#121520] border border-slate-200 dark:border-[#1E2436] rounded-2xl p-5 space-y-2.5 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-[#2563EB] dark:text-[#3B82F6] flex items-center justify-center font-bold">
              <Smartphone className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-zinc-100">Cross-Platform</h3>
            <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
              Seamless playback and downloading on desktop PCs and smartphones.
            </p>
          </div>

          <div className="bg-white dark:bg-[#121520] border border-slate-200 dark:border-[#1E2436] rounded-2xl p-5 space-y-2.5 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-zinc-100">Fast Extraction</h3>
            <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
              Instant link validation and rapid download links.
            </p>
          </div>
        </div>

        <article className="bg-white dark:bg-[#121520] border border-slate-200 dark:border-[#1E2436] rounded-3xl p-6 sm:p-10 space-y-6 text-slate-700 dark:text-zinc-300 text-sm leading-relaxed shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-zinc-100 border-b border-slate-200 dark:border-[#1E2436] pb-4">
            How to Download Vimeo Videos in 3 Simple Steps
          </h2>

          <ol className="grid grid-cols-1 md:grid-cols-3 gap-6 list-none p-0">
            <li className="bg-slate-50 dark:bg-[#1A1E2E] border border-slate-200/80 dark:border-[#1E2436] rounded-2xl p-5 space-y-2">
              <span className="w-8 h-8 rounded-full bg-[#2563EB] text-white font-extrabold flex items-center justify-center text-xs">1</span>
              <h3 className="font-bold text-slate-900 dark:text-zinc-100">Copy Vimeo Link</h3>
              <p className="text-xs text-slate-600 dark:text-zinc-400">
                Copy the URL of the Vimeo video from your browser address bar or share tab.
              </p>
            </li>

            <li className="bg-slate-50 dark:bg-[#1A1E2E] border border-slate-200/80 dark:border-[#1E2436] rounded-2xl p-5 space-y-2">
              <span className="w-8 h-8 rounded-full bg-[#2563EB] text-white font-extrabold flex items-center justify-center text-xs">2</span>
              <h3 className="font-bold text-slate-900 dark:text-zinc-100">Paste & Process</h3>
              <p className="text-xs text-slate-600 dark:text-zinc-400">
                Paste the URL into VideoSave and click "Fetch Vimeo Video".
              </p>
            </li>

            <li className="bg-slate-50 dark:bg-[#1A1E2E] border border-slate-200/80 dark:border-[#1E2436] rounded-2xl p-5 space-y-2">
              <span className="w-8 h-8 rounded-full bg-[#2563EB] text-white font-extrabold flex items-center justify-center text-xs">3</span>
              <h3 className="font-bold text-slate-900 dark:text-zinc-100">Download MP4</h3>
              <p className="text-xs text-slate-600 dark:text-zinc-400">
                Click download to save the MP4 video file directly to your device.
              </p>
            </li>
          </ol>
        </article>
      </section>

      <SeoFaq
        title="Vimeo Downloader FAQ"
        subtitle="Common questions about downloading videos from Vimeo."
        items={vimeoFaqs}
      />
    </div>
  );
}
