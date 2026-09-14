import React from 'react';
import Link from 'next/link';
import { VideoSaveLogo } from '../src/components/DroplyLogo';
import { PlatformIcon } from '../src/components/PlatformIcon';
import { ShieldCheck, Heart, Code2, CheckCircle2 } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-auto border-t border-slate-200 dark:border-[#331510] bg-white dark:bg-[#0D0504] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        
        {/* Top Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand Col (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="inline-block">
              <VideoSaveLogo size="md" />
            </Link>
            <p className="text-sm text-slate-600 dark:text-zinc-400 max-w-sm leading-relaxed font-medium">
              Free online video downloader. Download 4K, 1080p videos, and MP3 audio from YouTube, TikTok, Instagram, Facebook, and X instantly.
            </p>
            
            {/* Powered by Devcoon Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-[#FF4D26]/30 text-xs font-semibold text-slate-700 dark:text-zinc-300 shadow-xs">
              <Code2 className="w-3.5 h-3.5 text-[#FF4D26]" />
              <span>Powered by <strong className="text-[#FF4D26] font-bold">Devcoon</strong></span>
            </div>
          </div>

          {/* Site Navigation (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 dark:text-white">
              Navigation & Pages
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-semibold">
              <li>
                <Link href="/" className="text-slate-600 dark:text-zinc-400 hover:text-[#FF4D26] dark:hover:text-[#FF4D26] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/platforms" className="text-slate-600 dark:text-zinc-400 hover:text-[#FF4D26] dark:hover:text-[#FF4D26] transition-colors">
                  Supported Platforms
                </Link>
              </li>
              <li>
                <Link href="/formats" className="text-slate-600 dark:text-zinc-400 hover:text-[#FF4D26] dark:hover:text-[#FF4D26] transition-colors">
                  Download Formats & Quality
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-slate-600 dark:text-zinc-400 hover:text-[#FF4D26] dark:hover:text-[#FF4D26] transition-colors">
                  FAQ & Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Features Highlights (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 dark:text-white">
              Why Choose VidGrab
            </h4>
            <div className="space-y-2 text-xs text-slate-600 dark:text-zinc-400 font-semibold">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>100% Free & Unlimited</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FF4D26] shrink-0" />
                <span>No Watermark TikTok Downloads</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-rose-500 shrink-0" />
                <span>No Sign-Up or App Needed</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright & disclaimer */}
        <div className="pt-6 border-t border-slate-200 dark:border-[#331510] flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 dark:text-zinc-400 gap-4">
          <div>
            © {new Date().getFullYear()} VidGrab Media Downloader. All rights reserved.
          </div>
          
          <div className="flex items-center gap-1.5 text-slate-700 dark:text-zinc-300 font-semibold bg-slate-100 dark:bg-[#180907] px-3.5 py-1 rounded-full border border-slate-200 dark:border-[#331510]">
            <span>Powered by</span>
            <span className="text-[#FF4D26] font-bold">Devcoon</span>
          </div>

          <p className="text-center md:text-right max-w-xs text-[11px] leading-tight text-slate-400 dark:text-zinc-500">
            Download files with content owner permission. Respect copyright terms.
          </p>
        </div>

      </div>
    </footer>
  );
};

