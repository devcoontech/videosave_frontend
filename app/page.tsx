import React from 'react';
import { HomeClient } from './HomeClient';
import { SeoFaq } from '../components/SeoFaq';
import { JsonLd } from '../components/JsonLd';
import { ShieldCheck, Zap, Layers, Cpu, Sparkles, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'VideoSave - Free Online Video & Playlist Downloader (4K, 1080p, MP4)',
  description: 'Download YouTube videos, full playlists, Instagram Reels, and Facebook Reels in HD & 4K for free. Fast, no registration required, instant high quality media downloading.',
  alternates: {
    canonical: 'https://VideoSave .media',
  },
};

export default function HomePage() {
  const homeFaqs = [
    {
      question: 'How do I download videos using VideoSave ?',
      answer: 'Simply copy the video link from YouTube, Instagram, or Facebook, paste it into the VideoSave input box, choose your preferred quality (1080p, 720p, 480p, 4K), and click to download directly to your device.',
    },
    {
      question: 'Can I download full YouTube playlists at once?',
      answer: 'Yes! VideoSave features a dedicated YouTube Playlist Downloader that extracts all videos in a playlist, allows you to select specific videos, choose output quality, and automatically saves each video sequentially to your device.',
    },
    {
      question: 'Is VideoSave free to use without an account?',
      answer: 'Absolutely. VideoSave is 100% free with no registration, software installation, or subscription required.',
    },
    {
      question: 'What video resolutions and formats are supported?',
      answer: 'VideoSave supports MP4 video downloads in 4K (2160p), 2K (1440p), Full HD (1080p), HD (720p), 480p, 360p, and 240p resolutions.',
    },
    {
      question: 'Does VideoSave store my downloaded files?',
      answer: 'No. All processed files are temporarily held in memory for immediate browser streaming and are automatically deleted after retention for your privacy and data security.',
    },
  ];

  return (
    <div className="space-y-20 py-10 animate-fade-in max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Downloader Interactive Client Core */}
      <HomeClient />

      {/* Rich SEO Content & Features Section for Google Indexing */}
      <section className="max-w-5xl mx-auto space-y-12 py-8 border-t border-slate-200 dark:border-[#1E2436]">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/40 text-[#2563EB] dark:text-[#3B82F6] border border-blue-200/60 dark:border-blue-800/60 font-semibold text-xs shadow-xs">
            <Sparkles className="w-4 h-4" /> Built for Speed & High Quality
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-zinc-100 tracking-tight">
            Why Millions Choose <span className="text-[#2563EB] dark:text-[#3B82F6]">VideoSave </span> Media Downloader
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Experience effortless, high-speed media downloading without ads, popups, or limits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-[#11131F] border border-slate-200/90 dark:border-zinc-800/90 rounded-2xl p-6 shadow-xs space-y-3 hover:border-[#2563EB]/50 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/50 text-[#2563EB] dark:text-[#3B82F6] flex items-center justify-center font-bold">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-zinc-100">Ultra-Fast 4K Downloads</h3>
            <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
              Powered by high-bandwidth servers and FFmpeg acceleration to process 4K, 1080p, and HD videos in seconds.
            </p>
          </div>

          <div className="bg-white dark:bg-[#11131F] border border-slate-200/90 dark:border-zinc-800/90 rounded-2xl p-6 shadow-xs space-y-3 hover:border-purple-500/50 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-purple-50 dark:bg-purple-950/50 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-zinc-100">Full Playlist Support</h3>
            <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
              Download entire YouTube playlists with 1-click batch selection, sequential local auto-saving, and custom quality controls.
            </p>
          </div>

          <div className="bg-white dark:bg-[#11131F] border border-slate-200/90 dark:border-zinc-800/90 rounded-2xl p-6 shadow-xs space-y-3 hover:border-emerald-500/50 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-zinc-100">100% Free & Secure</h3>
            <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
              No account creation required. All downloads are private, encrypted, and automatically cleaned up after retention.
            </p>
          </div>
        </div>





        {/* Indexable Detailed SEO Article Section */}
        <article className="prose dark:prose-invert max-w-none bg-slate-100/60 dark:bg-[#121520]/60 border border-slate-200/80 dark:border-[#1E2436] rounded-3xl p-8 sm:p-12 space-y-6 text-sm text-slate-700 dark:text-zinc-300">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-zinc-100">
            The Ultimate Multi-Platform Video Downloader Web Application
          </h2>
          <p className="leading-relaxed">
            VideoSave is engineered as a modern, unified SaaS platform designed to streamline video downloading across
            <strong>YouTube, YouTube Playlists, Instagram Reels, and Facebook Reels</strong>. Whether you need to save an educational course playlist, offline entertainment, or high-resolution Reels, VideoSave delivers high performance without compromising quality.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
              <span><strong>Supported Formats:</strong> MP4 Video, high bitrate M4A audio.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
              <span><strong>Device Compatibility:</strong> Windows, macOS, Linux, iOS, Android.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
              <span><strong>No Ads or Watermarks:</strong> Original video clarity with zero watermark overlay.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
              <span><strong>Automated Resume:</strong> Interrupt and resume playlist batch downloads on demand.</span>
            </div>
          </div>
        </article>
      </section>

      {/* SEO FAQ Accordion with Schema.org JSON-LD */}
      <SeoFaq items={homeFaqs} />
    </div>
  );
}
