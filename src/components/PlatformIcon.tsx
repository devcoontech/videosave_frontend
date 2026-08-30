import React from 'react';
import { Youtube, Instagram, Facebook, ListVideo, Video } from 'lucide-react';

interface PlatformIconProps {
  platform: 'youtube' | 'youtube_playlist' | 'instagram' | 'facebook' | 'tiktok' | string;
  className?: string;
}

export const PlatformIcon: React.FC<PlatformIconProps> = ({ platform, className = "w-5 h-5" }) => {
  switch (platform) {
    case 'youtube':
      return <Youtube className={`${className} text-[#FF0033]`} />;
    case 'youtube_playlist':
      return <ListVideo className={`${className} text-[#2563EB]`} />;
    case 'instagram':
      return <Instagram className={`${className} text-[#E4405F]`} />;
    case 'facebook':
      return <Facebook className={`${className} text-[#1877F2]`} />;
    case 'tiktok':
      return <Video className={`${className} text-[#2563EB]`} />;
    default:
      return <Video className={`${className} text-slate-500`} />;
  }
};


