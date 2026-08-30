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

  if (iconOnly) {
    return (
      <div className={`relative ${iconSizeClasses[size]} ${className} group select-none shrink-0`}>
        <img
          src="/assets/videoSaveIcon.png"
          alt="VideoSave Icon"
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200"
        />
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-2.5 group select-none ${className}`}>
      <div className={`relative ${iconSizeClasses[size]} shrink-0`}>
        <img
          src="/assets/videoSaveIcon.png"
          alt="VideoSave Icon"
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200"
        />
      </div>
      <span className={`font-extrabold tracking-tight text-slate-900 dark:text-white ${textClasses[size]}`}>
        Video<span className="text-[#2563EB] dark:text-[#3B82F6]">Save</span>
      </span>
    </div>
  );
};





