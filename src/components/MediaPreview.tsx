import React from 'react';
import { Clock, User, ExternalLink, Play } from 'lucide-react';
import { MediaInfo } from '../types/media';
import { formatDuration } from '../utils/helpers';
import { PlatformIcon } from './PlatformIcon';

interface MediaPreviewProps {
  info: MediaInfo;
}

export const MediaPreview: React.FC<MediaPreviewProps> = ({ info }) => {
  return (
    <div className="w-full bg-slate-50/80 dark:bg-[#0B0D14] border border-slate-200/80 dark:border-zinc-800/90 rounded-2xl p-4 sm:p-5 shadow-xs transition-all">
      <div className="flex flex-col md:flex-row gap-5 items-start">
        {/* Thumbnail Preview */}
        <div className="relative w-full md:w-60 aspect-video rounded-xl overflow-hidden bg-slate-900 shrink-0 border border-slate-200/80 dark:border-zinc-800 group shadow-sm">
          {info.thumbnail ? (
            <img
              src={info.thumbnail}
              alt={info.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-slate-500">
              <Play className="w-10 h-10" />
            </div>
          )}

          {/* Duration Badge Overlay */}
          {info.duration && (
            <div className="absolute bottom-2 right-2 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md text-white text-xs font-semibold flex items-center gap-1.5 shadow-md">
              <Clock className="w-3 h-3 text-slate-300" />
              {formatDuration(info.duration)}
            </div>
          )}
        </div>

        {/* Media Details */}
        <div className="flex-1 space-y-2.5 w-full min-w-0">
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white dark:bg-[#181B2C] border border-slate-200/80 dark:border-zinc-700/60 text-slate-800 dark:text-zinc-200 shadow-xs">
              <PlatformIcon platform={info.platform} className="w-3.5 h-3.5" />
              <span className="capitalize">{info.platform.replace('_', ' ')}</span>
            </span>

            <a
              href={info.webpage_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-[#2563EB] dark:text-zinc-400 dark:hover:text-[#3B82F6] transition-colors font-semibold"
            >
              Original Source <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-zinc-100 leading-snug line-clamp-2 tracking-tight">
            {info.title}
          </h3>

          <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-600 dark:text-zinc-400 pt-2 border-t border-slate-200/60 dark:border-zinc-800/80">
            {info.uploader && (
              <span className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-[#2563EB] shrink-0" />
                <span className="truncate max-w-[200px]">{info.uploader}</span>
              </span>
            )}
            {info.duration && (
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#2563EB] shrink-0" />
                <span>Duration: {formatDuration(info.duration)}</span>
              </span>
            )}
          </div>




        </div>
      </div>
    </div>
  );
};

