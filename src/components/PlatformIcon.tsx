import React from 'react';
import { Twitter, Instagram, Facebook, Video, Play, Share2, Pin, MessageSquare } from 'lucide-react';

interface PlatformIconProps {
  platform: string;
  className?: string;
}

export const PlatformIcon: React.FC<PlatformIconProps> = ({ platform, className = "w-5 h-5" }) => {
  switch (platform.toLowerCase()) {
    case 'instagram':
      return <Instagram className={`${className} text-[#E4405F]`} />;
    case 'facebook':
      return <Facebook className={`${className} text-[#1877F2]`} />;
    case 'tiktok':
      return <Video className={`${className} text-[#00F2FE]`} />;
    case 'twitter':
    case 'x':
      return <Twitter className={`${className} text-[#1DA1F2]`} />;
    case 'vimeo':
      return <Play className={`${className} text-[#1AB7EA]`} />;
    case 'dailymotion':
      return <Share2 className={`${className} text-[#0066DC]`} />;
    case 'reddit':
      return <MessageSquare className={`${className} text-[#FF4500]`} />;
    case 'pinterest':
      return <Pin className={`${className} text-[#E60023]`} />;
    default:
      return <Video className={`${className} text-slate-500`} />;
  }
};



