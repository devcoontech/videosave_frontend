import React from 'react';
import { DownloadProgressEvent } from '../types/media';
import { formatBytes } from '../utils/helpers';
import { Zap, Clock, HardDrive, CheckCircle2, AlertCircle } from 'lucide-react';

interface ProgressBarProps {
  progress?: DownloadProgressEvent | null;
  overallProgress?: number;
  label?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  overallProgress,
  label,
}) => {
  const percentage = progress ? progress.progress : overallProgress || 0;
  const status = progress ? progress.status : 'downloading';

  return (
    <div className="w-full space-y-3 bg-slate-50/80 dark:bg-[#0B0D14] border border-slate-200/80 dark:border-zinc-800/90 rounded-2xl p-4 sm:p-5 shadow-xs">
      <div className="flex items-center justify-between gap-2">
        <span className="font-semibold text-sm text-slate-900 dark:text-zinc-100 flex items-center gap-2">
          {status === 'completed' ? (
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
          ) : status === 'failed' ? (
            <AlertCircle className="w-4 h-4 text-rose-500 shrink-0" />
          ) : (
            <Zap className="w-4 h-4 text-[#2563EB] animate-pulse shrink-0" />
          )}
          {label ||
            (status === 'completed'
              ? 'Processing Complete'
              : status === 'processing'
              ? '⚡ Merging Video & Audio with FFmpeg...'
              : 'Downloading Media...')}
        </span>
        <span className="font-bold text-sm text-[#2563EB] font-mono">
          {percentage.toFixed(1)}%
        </span>
      </div>

      {/* Outer progress bar */}
      <div className="w-full h-3 bg-slate-200/80 dark:bg-zinc-800 rounded-full overflow-hidden p-0.5 border border-slate-200/40 dark:border-zinc-700/40">
        <div
          className={`h-full rounded-full transition-all duration-300 ${
            status === 'completed'
              ? 'bg-emerald-500'
              : status === 'failed'
              ? 'bg-rose-500'
              : 'bg-[#2563EB] animate-pulse'
          }`}
          style={{ width: `${Math.min(100, Math.max(0, percentage))}%` }}
        />
      </div>





      {/* Progress metadata stats */}
      {progress && (
        <div className="flex flex-wrap items-center justify-between text-xs text-slate-500 dark:text-zinc-400 gap-2 pt-1 font-medium">
          {progress.speed && (
            <span className="flex items-center gap-1">
              <Zap className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              {progress.speed}
            </span>
          )}
          {progress.downloaded_bytes > 0 && (
            <span className="flex items-center gap-1">
              <HardDrive className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
              {formatBytes(progress.downloaded_bytes)}
              {progress.total_bytes ? ` / ${formatBytes(progress.total_bytes)}` : ''}
            </span>
          )}
          {progress.eta && (
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-violet-500 shrink-0" />
              ETA {progress.eta}
            </span>
          )}
        </div>
      )}
    </div>
  );
};

