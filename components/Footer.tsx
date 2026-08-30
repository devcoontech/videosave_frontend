import React from 'react';
import Link from 'next/link';
import { VideoSaveLogo } from '../src/components/DroplyLogo';
import { PlatformIcon } from '../src/components/PlatformIcon';
import { ShieldCheck, Heart, Code2, CheckCircle2 } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-auto border-t border-slate-200/80 dark:border-zinc-800/80 bg-white/70 dark:bg-[#0B0D14]/90 backdrop-blur-md transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        
        {/* Top Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand Col (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="inline-block">
              <VideoSaveLogo size="md" />
            </Link>
            <p className="text-sm text-slate-600 dark:text-zinc-400 max-w-sm leading-relaxed">
              Fast, free online media downloader. Save HD videos, full playlists, and short reels from YouTube, Instagram, Facebook, and TikTok effortlessly.
            </p>
            
            {/* Powered by Devcoon Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/40 border border-blue-200/60 dark:border-blue-900/60 text-xs font-semibold text-slate-700 dark:text-zinc-300 shadow-xs">
              <Code2 className="w-3.5 h-3.5 text-[#2563EB] dark:text-[#3B82F6]" />
              <span>Powered by <strong className="text-[#2563EB] dark:text-[#3B82F6] font-bold">Devcoon</strong></span>
            </div>
          </div>

          {/* Downloaders Navigation (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-zinc-100">
              Platform Downloaders
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <Link href="/youtube" className="inline-flex items-center gap-2 text-slate-600 dark:text-zinc-400 hover:text-[#2563EB] dark:hover:text-[#3B82F6] transition-colors">
                  <PlatformIcon platform="youtube" className="w-3.5 h-3.5" />
                  YouTube Video Downloader
                </Link>
              </li>
              <li>
                <Link href="/youtube-playlist" className="inline-flex items-center gap-2 text-slate-600 dark:text-zinc-400 hover:text-[#2563EB] dark:hover:text-[#3B82F6] transition-colors">
                  <PlatformIcon platform="youtube_playlist" className="w-3.5 h-3.5" />
                  YouTube Playlist Downloader
                </Link>
              </li>
              <li>
                <Link href="/instagram" className="inline-flex items-center gap-2 text-slate-600 dark:text-zinc-400 hover:text-[#2563EB] dark:hover:text-[#3B82F6] transition-colors">
                  <PlatformIcon platform="instagram" className="w-3.5 h-3.5" />
                  Instagram Reel Downloader
                </Link>
              </li>
              <li>
                <Link href="/facebook" className="inline-flex items-center gap-2 text-slate-600 dark:text-zinc-400 hover:text-[#2563EB] dark:hover:text-[#3B82F6] transition-colors">
                  <PlatformIcon platform="facebook" className="w-3.5 h-3.5" />
                  Facebook Reel Downloader
                </Link>
              </li>
              <li>
                <Link href="/tiktok" className="inline-flex items-center gap-2 text-slate-600 dark:text-zinc-400 hover:text-[#2563EB] dark:hover:text-[#3B82F6] transition-colors">
                  <PlatformIcon platform="tiktok" className="w-3.5 h-3.5" />
                  TikTok Video Downloader
                </Link>
              </li>
            </ul>
          </div>

          {/* Features Highlights (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-zinc-100">
              Why Choose VideoSave
            </h4>
            <div className="space-y-2 text-xs text-slate-600 dark:text-zinc-400 font-medium">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>100% Free & Unlimited</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2563EB] dark:text-[#3B82F6] shrink-0" />
                <span>High-Definition 1080p & 4K</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-rose-500 shrink-0" />
                <span>No Registration Needed</span>
              </div>
            </div>
          </div>

        </div>


        {/* Bottom copyright & disclaimer */}
        <div className="pt-6 border-t border-slate-200/80 dark:border-zinc-800/80 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 dark:text-zinc-400 gap-4">
          <div>
            © {new Date().getFullYear()} VideoSave Media Downloader. All rights reserved.
          </div>
          
          <div className="flex items-center gap-1.5 text-slate-700 dark:text-zinc-300 font-semibold bg-slate-100 dark:bg-zinc-800/60 px-3.5 py-1 rounded-full border border-slate-200/80 dark:border-zinc-700/60 shadow-2xs">
            <span>Powered by</span>
            <span className="text-[#2563EB] dark:text-[#3B82F6] font-bold">Devcoon</span>
          </div>

          <p className="text-center md:text-right max-w-xs text-[11px] leading-tight text-slate-400 dark:text-zinc-500">
            Save content with owner permission. Respect platform terms.
          </p>
        </div>

      </div>
    </footer>
  );
};

