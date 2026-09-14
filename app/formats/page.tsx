import React from 'react';
import { HomeClient } from '../HomeClient';
import { ShieldCheck, Zap, Layers, Sparkles, CheckCircle2, Film, Music, FileVideo, Cpu } from 'lucide-react';

export const metadata = {
  title: 'Supported Video & Audio Formats (4K, 1080p MP4, MP3) | VideoSave',
  description: 'Learn about all video resolutions and audio formats supported by VideoSave including 4K UHD, 1080p Full HD, 720p, MP3 320kbps, and M4A audio extraction.',
  alternates: {
    canonical: 'https://videosave.site/formats',
  },
};

export default function FormatsPage() {
  const formats = [
    {
      name: 'MP4 Video (4K 2160p & 2K 1440p)',
      icon: Film,
      badge: 'Ultra HD 4K',
      description: 'Maximum resolution download mode. Combines pristine 4K video streams with high-fidelity audio tracks for large screens and 4K displays.',
      specs: ['Resolution: 3840x2160 / 2560x1440', 'Container: MP4 (H.264 / VP9)', 'Bitrate: Up to 45 Mbps', 'Ideal for TV & desktop viewing'],
    },
    {
      name: 'MP4 Video (1080p Full HD)',
      icon: FileVideo,
      badge: 'Most Popular',
      description: 'Standard high-definition standard for smartphones, tablets, and laptops. Outstanding clarity with minimal file storage footprint.',
      specs: ['Resolution: 1920x1080', 'Frame Rate: 30fps / 60fps', 'Universal playback support', 'Fast download speed'],
    },
    {
      name: 'MP4 Video (720p & 480p HD)',
      icon: Zap,
      badge: 'Data Saver',
      description: 'Optimized for fast downloads on mobile network connections or devices with limited storage capacity.',
      specs: ['Resolution: 1280x720 / 854x480', 'Compact file size', 'Instant streaming download', 'Great for low data usage'],
    },
    {
      name: 'MP3 Audio (320kbps High Bitrate)',
      icon: Music,
      badge: 'Audio Extract',
      description: 'Extract pure audio soundtrack from any TikTok sound, Instagram Reel, or video without video overhead.',
      specs: ['Format: MP3 Audio', 'Bitrate: Up to 320 kbps', 'Compatible with all music players', 'Ideal for podcasts & music'],
    },
  ];

  return (
    <div className="space-y-16 animate-fade-in pb-16">
      {/* Downloader Hero Header */}
      <HomeClient />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Title */}
        <div className="text-center space-y-4 max-w-3xl mx-auto pt-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-500 dark:text-blue-400 font-bold text-xs sm:text-sm border border-blue-500/30">
            <Cpu className="w-4 h-4" /> Processing Acceleration Engine
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Supported Video & Audio <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">Formats</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400 font-medium">
            VideoSave supports all industry-standard video resolutions and audio formats for offline media playback on any device.
          </p>
        </div>

        {/* Formats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {formats.map((fmt, idx) => {
            const IconComp = fmt.icon;
            return (
              <div
                key={idx}
                className="bg-white dark:bg-[#11131F] border border-slate-200 dark:border-[#1E2338] rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm hover:shadow-lg hover:border-blue-500/50 transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-500 flex items-center justify-center font-bold">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-blue-500/10 text-blue-500 border border-blue-500/20">
                    {fmt.badge}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{fmt.name}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
                    {fmt.description}
                  </p>
                </div>

                <div className="space-y-2 pt-4 border-t border-slate-100 dark:border-[#1E2338]">
                  {fmt.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Technical SEO Section */}
        <article className="prose dark:prose-invert max-w-5xl mx-auto bg-slate-100/60 dark:bg-[#11131F]/60 border border-slate-200 dark:border-[#1E2338] rounded-3xl p-8 sm:p-12 space-y-6 text-sm text-slate-700 dark:text-zinc-300">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            High-Performance Server-Side Video Processing & Conversion
          </h2>
          <p className="leading-relaxed">
            Modern video platforms serve high-definition video (1080p, 4K) and audio in separate adaptive streams (DASH). VideoSave uses a high-performance backend engine to seamlessly combine high-resolution video streams with uncompressed audio tracks into single, ready-to-play MP4 files.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 text-center">
            <div className="p-4 rounded-2xl bg-white/50 dark:bg-[#1A1F36]/50 border border-slate-200 dark:border-[#1E2338]">
              <h4 className="font-extrabold text-blue-500 text-lg">H.264 / AAC</h4>
              <p className="text-xs text-slate-600 dark:text-zinc-400">100% device compatibility across iPhone, Android & PC</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/50 dark:bg-[#1A1F36]/50 border border-slate-200 dark:border-[#1E2338]">
              <h4 className="font-extrabold text-blue-500 text-lg">320 kbps MP3</h4>
              <p className="text-xs text-slate-600 dark:text-zinc-400">Studio audio fidelity for music and podcasts</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/50 dark:bg-[#1A1F36]/50 border border-slate-200 dark:border-[#1E2338]">
              <h4 className="font-extrabold text-blue-500 text-lg">Zero Compression</h4>
              <p className="text-xs text-slate-600 dark:text-zinc-400">Original video clarity without quality degradation</p>
            </div>
          </div>
        </article>

      </div>
    </div>
  );
}

