import React from 'react';
import { YoutubeClient } from './YoutubeClient';
import { SeoFaq } from '../../components/SeoFaq';
import { JsonLd } from '../../components/JsonLd';
import { ShieldCheck, Zap, Video, CheckCircle2, Award, Download, Cpu, HardDrive, Sparkles, Smartphone } from 'lucide-react';


export const metadata = {
  title: 'Free YouTube Video Downloader - Download 4K, 1080p, MP4 Online | VideoSave ',
  description: 'Download YouTube videos in 4K, 2K, 1080p Full HD, and 720p HD MP4 format for free. Ultra-fast, no registration, no watermarks, online YouTube converter.',
  keywords: [
    'youtube video downloader',
    'download 1080p youtube video',
    '4k youtube downloader',
    'youtube to mp4 converter',
    'free youtube video saver',
    'online youtube downloader hd',
    'youtube 60fps downloader',
  ],
  alternates: {
    canonical: 'https://VideoSave .media/youtube',
  },
};

export default function YoutubePage() {
  const youtubeFaqs = [
    {
      question: 'How do I download YouTube videos in 1080p HD or 4K with VideoSave ?',
      answer: 'Copy the URL of the YouTube video you wish to save, paste it into the VideoSave search box above, and click "Fetch Video". Once the available formats load, select your desired resolution (1080p Full HD, 1440p 2K, or 2160p 4K), and the download will start automatically to your device.',
    },
    {
      question: 'Is VideoSave 100% free to use for downloading YouTube videos?',
      answer: 'Yes! VideoSave is completely free with no hidden fees, paid subscriptions, account registrations, or software downloads required.',
    },
    {
      question: 'Will the downloaded YouTube videos have audio?',
      answer: 'Yes. VideoSave uses high-performance FFmpeg video and audio multiplexing to merge high-bitrate video streams with clear audio tracks into a standard MP4 file.',
    },
    {
      question: 'Can I download YouTube videos on my mobile phone (iPhone or Android)?',
      answer: 'Absolutely. VideoSave is fully responsive and compatible with mobile web browsers on Safari (iOS), Chrome (Android), Firefox, and Edge without installing third-party mobile apps.',
    },
    {
      question: 'What is the maximum resolution supported for YouTube downloads?',
      answer: 'VideoSave supports downloading videos up to 4K Ultra HD (2160p) and 60fps when available on the original YouTube source video.',
    },
  ];

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://VideoSave .media' },
      { '@type': 'ListItem', position: 2, name: 'YouTube Video Downloader', item: 'https://VideoSave .media/youtube' },
    ],
  };

  return (
    <div className="space-y-16 py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <JsonLd data={breadcrumbSchema} />

      {/* Downloader Client Tool */}
      <YoutubeClient />

      {/* Comprehensive SEO Content Section for YouTube Downloader */}
      <section className="max-w-5xl mx-auto space-y-12 py-8 border-t border-slate-200 dark:border-[#1E2436]">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 text-red-500 font-bold text-xs">
            <Sparkles className="w-4 h-4" /> 4K & 1080p Video Converter
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-zinc-100 tracking-tight">
            Best Free <span className="text-[#2563EB] dark:text-[#3B82F6]">YouTube Video Downloader</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Convert and save YouTube videos in 4K, 1080p, 720p, 480p, and MP3 audio instantly.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white dark:bg-[#121520] border border-slate-200 dark:border-[#1E2436] rounded-2xl p-5 space-y-2.5 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-500 flex items-center justify-center font-bold">
              <Video className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-zinc-100">4K & 1080p Resolution</h3>
            <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
              Full HD 1080p and 60fps 4K video extraction with audio merged seamlessly.
            </p>
          </div>

          <div className="bg-white dark:bg-[#121520] border border-slate-200 dark:border-[#1E2436] rounded-2xl p-5 space-y-2.5 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-[#2563EB] dark:text-[#3B82F6] flex items-center justify-center font-bold">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-zinc-100">Fast FFmpeg Merging</h3>
            <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
              High-speed backend engine merges high-definition video and audio streams instantly.
            </p>
          </div>

          <div className="bg-white dark:bg-[#121520] border border-slate-200 dark:border-[#1E2436] rounded-2xl p-5 space-y-2.5 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-zinc-100">100% Free & Unlimited</h3>
            <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
              No daily limits, registration, or hidden subscriptions required.
            </p>
          </div>

          <div className="bg-white dark:bg-[#121520] border border-slate-200 dark:border-[#1E2436] rounded-2xl p-5 space-y-2.5 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center font-bold">
              <Smartphone className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-zinc-100">All Devices Supported</h3>
            <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
              Fully optimized for Windows, macOS, Android, iPhone Safari, and Linux browsers.
            </p>
          </div>
        </div>

        {/* Detailed Guide */}
        <article className="bg-white dark:bg-[#121520] border border-slate-200 dark:border-[#1E2436] rounded-3xl p-6 sm:p-10 space-y-6 text-slate-700 dark:text-zinc-300 text-sm leading-relaxed shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-zinc-100 border-b border-slate-200 dark:border-[#1E2436] pb-4">
            How to Download YouTube Videos in 1080p / 4K
          </h2>


          <ol className="grid grid-cols-1 md:grid-cols-3 gap-6 list-none p-0">
            <li className="bg-slate-50 dark:bg-[#1A1E2E] border border-slate-200/80 dark:border-[#1E2436] rounded-2xl p-5 space-y-2">
              <span className="w-8 h-8 rounded-full bg-[#2563EB] text-white font-extrabold flex items-center justify-center text-xs">1</span>
              <h3 className="font-bold text-slate-900 dark:text-zinc-100">Copy Video URL</h3>
              <p className="text-xs text-slate-600 dark:text-zinc-400">
                Copy the link of the YouTube video you want to download from your browser bar or share button.
              </p>
            </li>

            <li className="bg-slate-50 dark:bg-[#1A1E2E] border border-slate-200/80 dark:border-[#1E2436] rounded-2xl p-5 space-y-2">
              <span className="w-8 h-8 rounded-full bg-[#2563EB] text-white font-extrabold flex items-center justify-center text-xs">2</span>
              <h3 className="font-bold text-slate-900 dark:text-zinc-100">Paste & Fetch Formats</h3>
              <p className="text-xs text-slate-600 dark:text-zinc-400">
                Paste the copied URL into the VideoSave  search box above and click "Fetch Video".
              </p>
            </li>

            <li className="bg-slate-50 dark:bg-[#1A1E2E] border border-slate-200/80 dark:border-[#1E2436] rounded-2xl p-5 space-y-2">
              <span className="w-8 h-8 rounded-full bg-[#2563EB] text-white font-extrabold flex items-center justify-center text-xs">3</span>
              <h3 className="font-bold text-slate-900 dark:text-zinc-100">Select Resolution & Save</h3>
              <p className="text-xs text-slate-600 dark:text-zinc-400">
                Choose your preferred quality preset (1080p, 720p, 480p) and your video will download immediately.
              </p>
            </li>
          </ol>

          <div className="space-y-4 pt-4 border-t border-slate-200 dark:border-[#1E2436]">
            <h3 className="text-xl font-bold text-slate-900 dark:text-zinc-100">
              Supported YouTube Resolutions & Output Quality
            </h3>
            <p>
              VideoSave analyzes the original source stream and dynamically presents only available resolutions for each specific video. Unlike generic downloaders that force heavy compression, VideoSave preserves original bitrates:
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="bg-slate-50 dark:bg-[#1A1E2E] p-3 rounded-xl border border-slate-200/60 dark:border-[#1E2436] text-center">
                <span className="font-extrabold text-[#0E897E] text-sm block">2160p (4K)</span>
                <span className="text-[11px] text-slate-500 dark:text-zinc-400">Ultra High Definition</span>
              </div>
              <div className="bg-slate-50 dark:bg-[#1A1E2E] p-3 rounded-xl border border-slate-200/60 dark:border-[#1E2436] text-center">
                <span className="font-extrabold text-[#0E897E] text-sm block">1440p (2K)</span>
                <span className="text-[11px] text-slate-500 dark:text-zinc-400">Quad High Definition</span>
              </div>
              <div className="bg-slate-50 dark:bg-[#1A1E2E] p-3 rounded-xl border border-slate-200/60 dark:border-[#1E2436] text-center">
                <span className="font-extrabold text-[#0E897E] text-sm block">1080p (FHD)</span>
                <span className="text-[11px] text-slate-500 dark:text-zinc-400">Full High Definition</span>
              </div>
              <div className="bg-slate-50 dark:bg-[#1A1E2E] p-3 rounded-xl border border-slate-200/60 dark:border-[#1E2436] text-center">
                <span className="font-extrabold text-[#0E897E] text-sm block">720p (HD)</span>
                <span className="text-[11px] text-slate-500 dark:text-zinc-400">Standard High Definition</span>
              </div>
            </div>
          </div>
        </article>
      </section>


      {/* SEO FAQ Accordion */}
      <SeoFaq
        title="YouTube Video Downloader FAQ"
        subtitle="Common questions about downloading YouTube videos in high quality."
        items={youtubeFaqs}
      />
    </div>
  );
}
