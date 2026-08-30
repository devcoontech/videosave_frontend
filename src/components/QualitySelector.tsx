import React from 'react';
import { MediaFormat } from '../types/media';
import { formatBytes } from '../utils/helpers';
import { Download, Loader2, BadgeCheck, Film, Volume2 } from 'lucide-react';

interface QualitySelectorProps {
  formats: MediaFormat[];
  selectedFormatId: string;
  onSelectFormat: (formatId: string) => void;
  onSelectAndDownload?: (formatId: string) => void;
  isDownloading?: boolean;
}

export const QualitySelector: React.FC<QualitySelectorProps> = ({
  formats,
  selectedFormatId,
  onSelectFormat,
  onSelectAndDownload,
  isDownloading = false,
}) => {
  if (!formats || formats.length === 0) return null;

  const getQualitySubtitle = (height?: number, quality?: string) => {
    if (quality?.includes('Best')) return 'Best available quality';
    if (height && height >= 2160) return 'Ultra HD 4K';
    if (height && height >= 1440) return '2K Quad HD';
    if (height && height >= 1080) return 'Full HD';
    if (height && height >= 720) return 'HD';
    if (height && height >= 480) return 'Standard quality';
    if (height && height >= 360) return 'Small file size';
    return 'Standard resolution';
  };

  const handleCardClick = (formatId: string) => {
    onSelectFormat(formatId);
    if (onSelectAndDownload && !isDownloading) {
      onSelectAndDownload(formatId);
    }
  };

  return (
    <div className="w-full space-y-4 bg-slate-50/80 dark:bg-[#0B0D14] border border-slate-200/80 dark:border-zinc-800/90 rounded-2xl p-4 sm:p-5 shadow-xs">
      <div className="flex items-center justify-between gap-2 flex-wrap">
        <div className="space-y-0.5">
          <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-zinc-100 flex items-center gap-2">
            <span>Select Quality to Download</span>
            {formats.some(f => (f.height && f.height >= 1080) || f.quality.includes('Best')) && (
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/60 text-[#2563EB] dark:text-[#3B82F6] border border-blue-200/60 dark:border-blue-800/60">
                <BadgeCheck className="w-3.5 h-3.5" /> High Quality
              </span>
            )}
          </h4>

          <p className="text-xs text-slate-500 dark:text-zinc-400">
            Click any quality option below to start download immediately
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {formats.map((fmt) => {
          const isSelected = selectedFormatId === fmt.format_id;
          const subtitle = getQualitySubtitle(fmt.height, fmt.quality);
          const sizeLabel = formatBytes(fmt.filesize || fmt.filesize_approx);
          const isCurrentDownloading = isDownloading && isSelected;

          return (
            <button
              key={fmt.format_id}
              type="button"
              disabled={isDownloading}
              onClick={() => handleCardClick(fmt.format_id)}
              className={`flex items-center justify-between p-3.5 sm:p-4 rounded-xl border text-left transition-all duration-200 group cursor-pointer ${
                isSelected
                  ? 'border-[#2563EB] dark:border-[#3B82F6] bg-blue-50/30 dark:bg-blue-950/20 ring-2 ring-[#2563EB]/20 shadow-sm'
                  : 'border-slate-200/80 dark:border-zinc-800/80 hover:border-[#2563EB]/60 dark:hover:border-[#3B82F6]/60 bg-white dark:bg-[#11131F] hover:shadow-xs'
              } ${isDownloading && !isSelected ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <div className="min-w-0 space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-base text-slate-900 dark:text-zinc-100">
                    {fmt.quality}
                  </span>
                  <span className="uppercase text-[10px] font-extrabold px-1.5 py-0.5 rounded bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-300 border border-slate-200/60 dark:border-zinc-700/60">
                    {fmt.ext}
                  </span>
                </div>

                <div className="text-xs text-slate-500 dark:text-zinc-400 flex items-center gap-1.5 truncate">
                  <span>{subtitle}</span>
                  {sizeLabel !== 'Unknown' && <span>• {sizeLabel}</span>}
                  <div className="flex items-center gap-1 ml-1 shrink-0">
                    {fmt.has_video && <Film className="w-3 h-3 text-slate-400" />}
                    {fmt.has_audio && <Volume2 className="w-3 h-3 text-slate-400" />}
                  </div>
                </div>
              </div>

              <div className="shrink-0 ml-3">
                {isCurrentDownloading ? (
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-2 rounded-lg bg-blue-50 dark:bg-blue-950/80 text-[#2563EB] dark:text-[#3B82F6] border border-blue-200/80 dark:border-blue-800/80">
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    <span>Processing</span>
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3.5 py-2 rounded-lg bg-[#2563EB] group-hover:bg-[#1D4ED8] text-white shadow-xs group-hover:shadow-md transition-all duration-200">
                    <Download className="w-3.5 h-3.5" />
                    <span>Download</span>
                  </span>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};






