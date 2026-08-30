import React from 'react';
import { Youtube, Instagram, Facebook, ListVideo, Video } from 'lucide-react';

interface PlatformBadgeProps {
  platform: string;
}

export const PlatformBadge: React.FC<PlatformBadgeProps> = ({ platform }) => {
  switch (platform) {
    case 'youtube':
      return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-red-100 dark:bg-red-950/60 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800">
          <Youtube className="w-3.5 h-3.5 fill-red-600 text-red-600 dark:text-red-400" />
          YouTube Video
        </span>
      );
    case 'youtube_playlist':
      return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-red-100 dark:bg-red-950/60 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800">
          <ListVideo className="w-3.5 h-3.5 text-red-600 dark:text-red-400" />
          YouTube Playlist
        </span>
      );
    case 'instagram':
      return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-pink-100 dark:bg-pink-950/60 text-pink-700 dark:text-pink-300 border border-pink-200 dark:border-pink-800">
          <Instagram className="w-3.5 h-3.5 text-pink-600 dark:text-pink-400" />
          Instagram Reel
        </span>
      );
    case 'facebook':
      return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
          <Facebook className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
          Facebook Reel
        </span>
      );
    default:
      return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700">
          <Video className="w-3.5 h-3.5" />
          Media Video
        </span>
      );
  }
};
