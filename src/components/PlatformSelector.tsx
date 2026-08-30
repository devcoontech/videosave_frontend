import React from 'react';
import { PlatformIcon } from './PlatformIcon';

export type PlatformType = 'youtube' | 'youtube_playlist' | 'instagram' | 'facebook' | 'tiktok';

interface PlatformSelectorProps {
  activePlatform: PlatformType;
  onSelectPlatform: (platform: PlatformType) => void;
}

export const PlatformSelector: React.FC<PlatformSelectorProps> = ({
  activePlatform,
  onSelectPlatform,
}) => {
  const platforms: { id: PlatformType; label: string }[] = [
    { id: 'youtube', label: 'YouTube' },
    { id: 'youtube_playlist', label: 'Playlist' },
    { id: 'instagram', label: 'Instagram' },
    { id: 'facebook', label: 'Facebook' },
    { id: 'tiktok', label: 'TikTok' },
  ];

  return (
    <div className="w-full flex justify-center mb-6">
      <div className="inline-flex p-1.5 rounded-2xl bg-slate-100 dark:bg-[#0B0D14] border border-slate-200/80 dark:border-zinc-800 max-w-full overflow-x-auto custom-scrollbar shadow-inner">
        {platforms.map((p) => {
          const isActive = activePlatform === p.id;
          return (
            <button
              key={p.id}
              type="button"
              onClick={() => onSelectPlatform(p.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 shrink-0 cursor-pointer ${
                isActive
                  ? 'bg-white dark:bg-[#181B2C] text-[#2563EB] dark:text-[#3B82F6] font-bold shadow-md shadow-slate-200/50 dark:shadow-none border border-[#2563EB]/30'
                  : 'text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-100 hover:bg-slate-200/50 dark:hover:bg-zinc-800/40'
              }`}
            >
              <PlatformIcon platform={p.id} className="w-4 h-4 shrink-0" />
              <span>{p.label}</span>
            </button>




          );
        })}
      </div>
    </div>
  );
};

