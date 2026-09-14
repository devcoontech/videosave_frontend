import React from 'react';

interface VideoSaveLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  iconOnly?: boolean;
}

export const VideoSaveLogo: React.FC<VideoSaveLogoProps> = ({ size = 'md', iconOnly = false, className = '' }) => {
  const iconSizeClasses = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-11 h-11',
  };

  const textClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
  };

  const LogoIcon = (
    <div className={`relative ${iconSizeClasses[size]} shrink-0 flex items-center justify-center rounded-full bg-gradient-to-tr from-[#E63E15] to-[#FF5E3A] text-white shadow-md shadow-[#FF4D26]/30 group-hover:scale-105 transition-transform duration-200`}>
      <svg className="w-1/2 h-1/2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
    </div>
  );

  if (iconOnly) {
    return <div className={`${className} select-none shrink-0`}>{LogoIcon}</div>;
  }

  return (
    <div className={`flex items-center gap-2.5 group select-none ${className}`}>
      {LogoIcon}
      <span className={`font-black tracking-tight text-slate-900 dark:text-white ${textClasses[size]}`}>
        Vid<span className="text-[#FF4D26]">Grab</span>
      </span>
    </div>
  );
};





