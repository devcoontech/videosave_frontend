import React from 'react';
import { Download, Loader2 } from 'lucide-react';

interface DownloadButtonProps {
  jobId: string | null;
  status: string | null;
  qualityLabel?: string;
  onStartDownload: () => void;
  onReset: () => void;
}

export const DownloadButton: React.FC<DownloadButtonProps> = ({
  status,
  qualityLabel = '1080p',
  onStartDownload,
}) => {
  const isCompleted = status === 'completed';
  const isDownloading = status === 'extracting' || status === 'downloading' || status === 'processing';

  if (isCompleted) {
    return null;
  }

  return (
    <button
      onClick={onStartDownload}
      disabled={isDownloading}
      className={`w-full py-4 px-6 rounded-xl font-bold text-base shadow-lg transition-all duration-200 flex items-center justify-center gap-2.5 min-h-[52px] cursor-pointer ${
        isDownloading
          ? 'bg-slate-100 dark:bg-zinc-800 text-slate-400 dark:text-zinc-500 cursor-not-allowed shadow-none border border-slate-200 dark:border-zinc-700/50'
          : 'bg-[#2563EB] hover:bg-[#1D4ED8] text-white shadow-md shadow-[#2563EB]/25 active:scale-[0.99]'
      }`}
    >
      {isDownloading ? (
        <>
          <Loader2 className="w-5 h-5 animate-spin text-[#2563EB]" />
          <span>Processing Download...</span>
        </>
      ) : (
        <>
          <span>Download {qualityLabel}</span>
          <Download className="w-5 h-5" />
        </>
      )}
    </button>
  );
};





