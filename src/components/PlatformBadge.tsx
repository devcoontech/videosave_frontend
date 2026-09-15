import React from 'react';
import { PlatformIcon } from './PlatformIcon';

interface PlatformBadgeProps {
  platform: string;
}

export const PlatformBadge: React.FC<PlatformBadgeProps> = ({ platform }) => {
  const normalized = platform.toLowerCase();

  switch (normalized) {
    case 'instagram':
      return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-pink-100 dark:bg-pink-950/60 text-pink-700 dark:text-pink-300 border border-pink-200 dark:border-pink-800">
          <PlatformIcon platform="instagram" className="w-3.5 h-3.5" />
          Instagram Reel
        </span>
      );
    case 'facebook':
      return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
          <PlatformIcon platform="facebook" className="w-3.5 h-3.5" />
          Facebook Video
        </span>
      );
    case 'tiktok':
      return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-100 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800">
          <PlatformIcon platform="tiktok" className="w-3.5 h-3.5" />
          TikTok Video
        </span>
      );
    case 'twitter':
    case 'x':
      return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-100 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800">
          <PlatformIcon platform="twitter" className="w-3.5 h-3.5" />
          Twitter / X Media
        </span>
      );
    case 'vimeo':
      return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-100 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800">
          <PlatformIcon platform="vimeo" className="w-3.5 h-3.5" />
          Vimeo HD
        </span>
      );
    case 'dailymotion':
      return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
          <PlatformIcon platform="dailymotion" className="w-3.5 h-3.5" />
          Dailymotion
        </span>
      );
    case 'reddit':
      return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-orange-100 dark:bg-orange-950/60 text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-800">
          <PlatformIcon platform="reddit" className="w-3.5 h-3.5" />
          Reddit Video
        </span>
      );
    case 'pinterest':
      return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-red-100 dark:bg-red-950/60 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800">
          <PlatformIcon platform="pinterest" className="w-3.5 h-3.5" />
          Pinterest Pin
        </span>
      );
    default:
      return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
          <PlatformIcon platform={platform} className="w-3.5 h-3.5" />
          Media Video
        </span>
      );
  }
};

