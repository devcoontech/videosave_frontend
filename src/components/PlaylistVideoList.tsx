import React from 'react';
import { PlaylistItem } from '../types/media';
import { formatDuration } from '../utils/helpers';
import { CheckSquare, Square, Clock } from 'lucide-react';

interface PlaylistVideoListProps {
  videos: PlaylistItem[];
  selectedUrls: string[];
  onToggleSelect: (url: string) => void;
  onSelectAll: () => void;
  onClearAll: () => void;
}

export const PlaylistVideoList: React.FC<PlaylistVideoListProps> = ({
  videos,
  selectedUrls,
  onToggleSelect,
  onSelectAll,
  onClearAll,
}) => {
  return (
    <div className="w-full bg-slate-50/80 dark:bg-[#0B0D14] border border-slate-200/80 dark:border-zinc-800/90 rounded-2xl p-4 sm:p-5 shadow-xs space-y-4">
      {/* Controls header */}
      <div className="flex items-center justify-between border-b border-slate-200/80 dark:border-zinc-800/80 pb-3.5">
        <span className="font-bold text-sm text-slate-900 dark:text-zinc-100">
          {selectedUrls.length} of {videos.length} videos selected
        </span>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onSelectAll}
            className="px-3 py-1.5 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-[#2563EB] dark:text-[#3B82F6] border border-blue-200/60 dark:border-blue-800/60 font-semibold text-xs hover:bg-blue-100 dark:hover:bg-blue-900/60 transition-colors cursor-pointer"
          >
            Select All
          </button>
          <button
            type="button"
            onClick={onClearAll}
            className="px-3 py-1.5 rounded-lg bg-white dark:bg-zinc-800 border border-slate-200/80 dark:border-zinc-700 text-slate-600 dark:text-zinc-300 font-semibold text-xs hover:bg-slate-100 dark:hover:bg-zinc-700 transition-colors cursor-pointer"
          >
            Clear All
          </button>
        </div>
      </div>

      {/* Scrollable list */}
      <div className="max-h-[380px] overflow-y-auto space-y-2 pr-1 custom-scrollbar">
        {videos.map((item) => {
          const isSelected = selectedUrls.includes(item.url);

          return (
            <div
              key={item.id + item.index}
              onClick={() => onToggleSelect(item.url)}
              className={`flex items-center justify-between p-2.5 sm:p-3 rounded-xl border cursor-pointer transition-all duration-200 ${
                isSelected
                  ? 'border-[#2563EB]/70 dark:border-[#3B82F6]/70 bg-white dark:bg-[#181B2C] text-slate-900 dark:text-zinc-100 shadow-xs'
                  : 'border-slate-200/70 dark:border-zinc-800/80 bg-white dark:bg-[#11131F] hover:border-slate-300 dark:hover:border-zinc-700 text-slate-700 dark:text-zinc-300'
              }`}
            >
              <div className="flex items-center gap-3 min-w-0">
                <button type="button" className="text-[#2563EB] dark:text-[#3B82F6] shrink-0">
                  {isSelected ? (
                    <CheckSquare className="w-5 h-5" />
                  ) : (
                    <Square className="w-5 h-5 text-slate-300 dark:text-zinc-700" />
                  )}
                </button>





                <span className="font-mono text-xs font-bold text-slate-400 w-5 shrink-0 text-center">
                  {item.index}
                </span>

                {item.thumbnail ? (
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-14 h-9 object-cover rounded-lg shrink-0 border border-slate-200/50 dark:border-zinc-800"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-14 h-9 rounded-lg bg-slate-200 dark:bg-zinc-800 shrink-0" />
                )}

                <span className="font-semibold text-sm truncate">{item.title}</span>
              </div>

              {item.duration && (
                <span className="text-xs font-medium text-slate-400 shrink-0 flex items-center gap-1 ml-2">
                  <Clock className="w-3 h-3" />
                  {formatDuration(item.duration)}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

