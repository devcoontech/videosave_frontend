import React from 'react';
import { HomeClient } from './HomeClient';
import { SeoFaq } from '../components/SeoFaq';
import { ShieldCheck, Zap, Layers, Sparkles, CheckCircle2, Copy, PlayCircle, Download } from 'lucide-react';

export const metadata = {
  title: 'VideoSave - Free Online Video Downloader (TikTok, Instagram, Facebook, X, 4K, MP4)',
  description: 'Download TikTok videos without watermark, Instagram Reels, Facebook Reels, and X (Twitter) videos in HD & 4K for free. Fast, unlimited, no sign-up required online video downloader on videosave.site.',
  alternates: {
    canonical: 'https://videosave.site',
  },
};

export default function HomePage() {
  const homeFaqs = [
    {
      question: 'How do I download videos using VideoSave?',
      answer: 'Simply copy the video or reel link from TikTok, Instagram, Facebook, or X (Twitter), paste it into the universal URL box above, click Analyze, and select your preferred quality (4K, 1080p, MP3 audio) to save the file immediately.',
    },
    {
      question: 'Can I download TikTok videos without watermark?',
      answer: 'Yes! VideoSave automatically strips watermarks from TikTok videos and saves them in full original HD quality.',
    },
    {
      question: 'Is VideoSave completely free with no registration?',
      answer: 'Yes, VideoSave (videosave.site) is 100% free with unlimited downloads. You do not need to create an account, install browser extensions, or pay any subscription.',
    },
    {
      question: 'What video resolutions and formats are available?',
      answer: 'VideoSave supports MP4 video downloads in 4K (2160p), 2K (1440p), Full HD (1080p), HD (720p), 480p, as well as MP3 and M4A audio extraction.',
    },
    {
      question: 'Is it safe to download videos using VideoSave?',
      answer: 'Absolutely. VideoSave operates securely in your web browser. All requests are processed over SSL encryption without storing user activity or personal files.',
    },
  ];

  return (
    <div className="space-y-16 animate-fade-in pb-16">
      {/* Hero Downloader Box */}
      <HomeClient />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* "How It Works" 3-Step Section */}
        <section className="text-center space-y-12 py-8">
          <div className="space-y-3 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
              How It Works
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400 font-medium">
              Three simple steps to download any video. No sign-up, no hassle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Step 1 */}
            <div className="relative bg-white dark:bg-[#11131F] border border-slate-200 dark:border-[#1E2438] rounded-3xl p-8 space-y-4 shadow-sm hover:shadow-md transition-shadow text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[#2563EB] text-white font-black text-lg flex items-center justify-center shadow-lg shadow-[#2563EB]/30">
                1
              </div>
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-[#2563EB] dark:text-[#3B82F6] flex items-center justify-center">
                <Copy className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Copy Video Link</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
                Copy the URL of any video or Reel from TikTok, Instagram, Facebook, X (Twitter), or Vimeo.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative bg-white dark:bg-[#11131F] border border-slate-200 dark:border-[#1E2438] rounded-3xl p-8 space-y-4 shadow-sm hover:shadow-md transition-shadow text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[#2563EB] text-white font-black text-lg flex items-center justify-center shadow-lg shadow-[#2563EB]/30">
                2
              </div>
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-[#2563EB] dark:text-[#3B82F6] flex items-center justify-center">
                <PlayCircle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Paste & Analyze</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
                Paste the copied link into the input field above and click the <strong>Analyze</strong> button.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative bg-white dark:bg-[#11131F] border border-slate-200 dark:border-[#1E2438] rounded-3xl p-8 space-y-4 shadow-sm hover:shadow-md transition-shadow text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[#2563EB] text-white font-black text-lg flex items-center justify-center shadow-lg shadow-[#2563EB]/30">
                3
              </div>
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-[#2563EB] dark:text-[#3B82F6] flex items-center justify-center">
                <Download className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Save Video</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
                Select your preferred resolution (4K, 1080p, MP3) and download directly to your device.
              </p>
            </div>
          </div>
        </section>

        {/* Feature Highlights Grid */}
        <section className="space-y-12">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 text-[#2563EB] dark:text-[#3B82F6] font-bold text-xs border border-[#2563EB]/30">
              <Sparkles className="w-4 h-4" /> Next-Gen Media Downloader
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Why Millions Choose <span className="text-[#2563EB] dark:text-[#3B82F6]">VideoSave</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400">
              High-speed processing, original video quality, and universal multi-platform compatibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white dark:bg-[#11131F] border border-slate-200 dark:border-[#1E2438] rounded-2xl p-6 space-y-3 hover:border-[#2563EB]/50 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-[#2563EB] dark:text-[#3B82F6] flex items-center justify-center font-bold">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">High Speed & 4K Clarity</h3>
              <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
                Download 4K, 1080p, and HD videos at full server speed without artificial rate limiting.
              </p>
            </div>

            <div className="bg-white dark:bg-[#11131F] border border-slate-200 dark:border-[#1E2438] rounded-2xl p-6 space-y-3 hover:border-[#2563EB]/50 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-[#2563EB] dark:text-[#3B82F6] flex items-center justify-center font-bold">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">No Watermark Overlay</h3>
              <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
                Save TikTok videos and social media Reels completely clean without watermark logos.
              </p>
            </div>

            <div className="bg-white dark:bg-[#11131F] border border-slate-200 dark:border-[#1E2438] rounded-2xl p-6 space-y-3 hover:border-[#2563EB]/50 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-[#2563EB] dark:text-[#3B82F6] flex items-center justify-center font-bold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Private & Secure</h3>
              <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
                No user logging or file tracking. Downloads stream safely directly to your browser memory.
              </p>
            </div>
          </div>
        </section>

        {/* Indexable Detailed SEO Article */}
        <article className="prose dark:prose-invert max-w-5xl mx-auto bg-slate-100/60 dark:bg-[#11131F]/60 border border-slate-200 dark:border-[#1E2438] rounded-3xl p-8 sm:p-12 space-y-6 text-sm text-slate-700 dark:text-zinc-300">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Universal Online Video & Audio Downloader Solution
          </h2>
          <p className="leading-relaxed">
            VideoSave (<strong>videosave.site</strong>) is a high-performance web application designed for downloading online media across major social networks, including <strong>TikTok, Instagram Reels, Facebook Videos, X (Twitter), Vimeo, and Dailymotion</strong>. Whether you need to save offline videos, viral short clips, or high-definition Reels in 4K or 1080p MP4, VideoSave handles extraction with maximum speed and reliability.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs sm:text-sm">
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-[#2563EB] dark:text-[#3B82F6] shrink-0 mt-0.5" />
              <span><strong>Supported Formats:</strong> MP4 Video (4K, 1080p, 720p), MP3, M4A, WEBM.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-[#2563EB] dark:text-[#3B82F6] shrink-0 mt-0.5" />
              <span><strong>Cross-Platform Compatibility:</strong> Works seamlessly on iOS, Android, macOS, Windows, Linux.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-[#2563EB] dark:text-[#3B82F6] shrink-0 mt-0.5" />
              <span><strong>No Ads or Malware:</strong> Clean user interface with zero software download required.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-[#2563EB] dark:text-[#3B82F6] shrink-0 mt-0.5" />
              <span><strong>Fast Audio Extractor:</strong> Extract high-bitrate MP3/M4A sound tracks from any video.</span>
            </div>
          </div>
        </article>

        {/* SEO FAQ Accordion */}
        <div className="max-w-5xl mx-auto">
          <SeoFaq items={homeFaqs} />
        </div>
      </div>
    </div>
  );
}
