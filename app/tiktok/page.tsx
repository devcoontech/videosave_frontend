import React from 'react';
import { TiktokClient } from './TiktokClient';
import { SeoFaq } from '../../components/SeoFaq';
import { JsonLd } from '../../components/JsonLd';
import { ShieldCheck, Zap, Video, Smartphone, CheckCircle2, Award } from 'lucide-react';

export const metadata = {
  title: 'Free TikTok Video Downloader - Download TikTok Videos HD | VideoSave ',
  description: 'Download TikTok videos in HD MP4 quality without watermarks. Free online TikTok video saver for iPhone, Android, and PC. No registration required.',
  keywords: [
    'tiktok video downloader',
    'download tiktok video without watermark',
    'free tiktok video saver',
    'tiktok to mp4 converter',
    'online tiktok video downloader hd',
  ],
  alternates: {
    canonical: 'https://VideoSave .media/tiktok',
  },
};

export default function TiktokPage() {
  const tiktokFaqs = [
    {
      question: 'How do I download a TikTok video without watermark using VideoSave ?',
      answer: 'Open the TikTok app or website, tap "Share", and click "Copy Link". Paste the URL into the VideoSave TikTok downloader box above, click "Fetch TikTok Video", select your preferred quality option, and your MP4 video will save directly to your device.',
    },
    {
      question: 'Will the downloaded TikTok video have watermarks?',
      answer: 'No! VideoSave extracts clean original video streams without added watermarks, logos, or TikTok branding stamps.',
    },
    {
      question: 'Can I download TikTok videos on iPhone, iPad, or Android?',
      answer: 'Yes. VideoSave is fully responsive and compatible with mobile web browsers on Safari (iOS), Chrome (Android), Firefox, and Edge without installing third-party apps.',
    },
    {
      question: 'Is it free to download TikTok videos on VideoSave ?',
      answer: 'Yes. VideoSave is 100% free with unlimited TikTok downloads, high speeds, and no account sign-in required.',
    },
  ];

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://VideoSave .media' },
      { '@type': 'ListItem', position: 2, name: 'TikTok Video Downloader', item: 'https://VideoSave .media/tiktok' },
    ],
  };

  return (
    <div className="space-y-16 py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <JsonLd data={breadcrumbSchema} />

      {/* Downloader Client Tool */}
      <TiktokClient />

      {/* Comprehensive SEO Content Section for TikTok Downloader */}
      <section className="max-w-5xl mx-auto space-y-12 py-8 border-t border-slate-200 dark:border-[#1E2436]">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/10 dark:bg-zinc-800 text-slate-900 dark:text-zinc-100 font-bold text-xs">
            <Award className="w-4 h-4" /> HD TikTok Video Saver
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-zinc-100 tracking-tight">
            Free <span className="text-[#2563EB] dark:text-[#3B82F6]">TikTok Video Downloader</span> (Without Watermark)
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Save trending TikTok videos in original HD clarity with fast processing and zero watermarks.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white dark:bg-[#121520] border border-slate-200 dark:border-[#1E2436] rounded-2xl p-5 space-y-2.5 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-slate-900/10 dark:bg-zinc-800 text-slate-900 dark:text-zinc-100 flex items-center justify-center font-bold">
              <Video className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-zinc-100">Zero Watermark</h3>
            <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
              Clean video output without added logos, creator tags, or watermark overlays.
            </p>
          </div>

          <div className="bg-white dark:bg-[#121520] border border-slate-200 dark:border-[#1E2436] rounded-2xl p-5 space-y-2.5 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-[#2563EB] dark:text-[#3B82F6] flex items-center justify-center font-bold">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-zinc-100">Original HD Quality</h3>
            <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
              Extracts high-resolution MP4 video and original audio streams with crystal clarity.
            </p>
          </div>

          <div className="bg-white dark:bg-[#121520] border border-slate-200 dark:border-[#1E2436] rounded-2xl p-5 space-y-2.5 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-zinc-100">100% Free & Safe</h3>
            <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
              No registration, account sign-in, or software installation needed.
            </p>
          </div>

          <div className="bg-white dark:bg-[#121520] border border-slate-200 dark:border-[#1E2436] rounded-2xl p-5 space-y-2.5 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center font-bold">
              <Smartphone className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-zinc-100">Mobile & Desktop</h3>
            <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
              Fully optimized for iOS Safari, Android Chrome, and all desktop computers.
            </p>
          </div>
        </div>

        {/* Detailed Guide */}
        <article className="bg-white dark:bg-[#121520] border border-slate-200 dark:border-[#1E2436] rounded-3xl p-6 sm:p-10 space-y-6 text-slate-700 dark:text-zinc-300 text-sm leading-relaxed shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-zinc-100 border-b border-slate-200 dark:border-[#1E2436] pb-4">
            How to Save TikTok Videos to Phone or Computer (3 Easy Steps)
          </h2>


          <ol className="grid grid-cols-1 md:grid-cols-3 gap-6 list-none p-0">
            <li className="bg-slate-50 dark:bg-[#1A1E2E] border border-slate-200/80 dark:border-[#1E2436] rounded-2xl p-5 space-y-2">
              <span className="w-8 h-8 rounded-full bg-[#2563EB] text-white font-extrabold flex items-center justify-center text-xs">1</span>
              <h3 className="font-bold text-slate-900 dark:text-zinc-100">Copy TikTok Link</h3>
              <p className="text-xs text-slate-600 dark:text-zinc-400">
                Open TikTok, select the video you want to save, tap "Share", and select "Copy Link".
              </p>
            </li>

            <li className="bg-slate-50 dark:bg-[#1A1E2E] border border-slate-200/80 dark:border-[#1E2436] rounded-2xl p-5 space-y-2">
              <span className="w-8 h-8 rounded-full bg-[#2563EB] text-white font-extrabold flex items-center justify-center text-xs">2</span>
              <h3 className="font-bold text-slate-900 dark:text-zinc-100">Paste Link in VideoSave </h3>
              <p className="text-xs text-slate-600 dark:text-zinc-400">
                Paste the copied TikTok URL into the VideoSave  downloader box above and click "Fetch TikTok Video".
              </p>
            </li>

            <li className="bg-slate-50 dark:bg-[#1A1E2E] border border-slate-200/80 dark:border-[#1E2436] rounded-2xl p-5 space-y-2">
              <span className="w-8 h-8 rounded-full bg-[#2563EB] text-white font-extrabold flex items-center justify-center text-xs">3</span>
              <h3 className="font-bold text-slate-900 dark:text-zinc-100">Download MP4 File</h3>
              <p className="text-xs text-slate-600 dark:text-zinc-400">
                Select your preferred quality option to download the HD video directly to your local storage.
              </p>
            </li>
          </ol>
        </article>
      </section>




      {/* SEO FAQ Accordion */}
      <SeoFaq
        title="TikTok Video Downloader FAQ"
        subtitle="Answers to common questions about saving TikTok videos without watermarks."
        items={tiktokFaqs}
      />
    </div>
  );
}
