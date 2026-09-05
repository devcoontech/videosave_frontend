import React, { useState } from 'react';
import { useMediaInfo } from '../hooks/useMediaInfo';
import { useDownloadProgress } from '../hooks/useDownloadProgress';
import { useAutoFileDownload } from '../hooks/useAutoFileDownload';
import { createDownload } from '../services/api';
import { UrlInput } from './UrlInput';
import { MediaPreview } from './MediaPreview';
import { QualitySelector } from './QualitySelector';
import { DownloadButton } from './DownloadButton';
import { ProgressBar } from './ProgressBar';
import { ErrorMessage } from './ErrorMessage';
import { LoadingSpinner } from './LoadingSpinner';
import { LucideIcon } from 'lucide-react';

interface DownloaderPageProps {
  platform: 'youtube' | 'instagram' | 'facebook';
  title: string;
  subtitle: string;
  placeholderUrl: string;
  exampleUrl: string;
  icon: LucideIcon;
  badgeGradient: string;
}

export const DownloaderPage: React.FC<DownloaderPageProps> = ({
  platform,
  title,
  subtitle,
  placeholderUrl,
  exampleUrl,
  icon: Icon,
  badgeGradient,
}) => {
  const { loading, mediaInfo, error, fetchInfo, reset: resetInfo } = useMediaInfo();

  const [selectedFormatId, setSelectedFormatId] = useState<string>('best');
  const [activeJobId, setActiveJobId] = useState<string | null>(null);
  const [downloadError, setDownloadError] = useState<{ code: string; message: string } | null>(null);

  const { progressData } = useDownloadProgress(activeJobId);
  useAutoFileDownload(activeJobId, progressData);

  const handleFetch = (url: string) => {
    setActiveJobId(null);
    setDownloadError(null);
    fetchInfo(url);
  };

  const handleStartDownloadForFormat = async (formatId: string) => {
    if (!mediaInfo) return;
    setSelectedFormatId(formatId);
    setDownloadError(null);

    try {
      const res = await createDownload(mediaInfo.webpage_url, formatId);
      if (res.success && res.job_id) {
        setActiveJobId(res.job_id);
      }
    } catch (err: any) {
      setDownloadError({
        code: err.code || 'DOWNLOAD_FAILED',
        message: err.message || 'Failed to start download job.',
      });
    }
  };

  const handleStartDownload = () => {
    handleStartDownloadForFormat(selectedFormatId);
  };

  const handleResetAll = () => {
    setActiveJobId(null);
    setDownloadError(null);
    resetInfo();
  };

  const selectedFormatObj = mediaInfo?.formats.find(f => f.format_id === selectedFormatId);
  const qualityLabel = selectedFormatObj ? selectedFormatObj.quality : 'Best Quality';
  const isDownloading = progressData?.status === 'extracting' || progressData?.status === 'downloading' || progressData?.status === 'processing';

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 animate-fade-in">
      {/* Hero Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center justify-center p-2.5 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/50 mb-1 shadow-xs">
          <div className="p-2.5 rounded-xl bg-[#2563EB] text-white shadow-md">
            <Icon className="w-6 h-6" />
          </div>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          {title}
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-400 max-w-xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      </div>





      {/* Main Downloader Section Card */}
      <div className="bg-white dark:bg-[#11131F] border border-slate-200/90 dark:border-zinc-800/90 rounded-3xl p-6 sm:p-9 shadow-xl shadow-slate-200/50 dark:shadow-2xl dark:shadow-black/50 space-y-6">
        <UrlInput
          placeholder={placeholderUrl}
          exampleUrl={exampleUrl}
          buttonLabel="Fetch Media"
          isLoading={loading}
          onSubmit={handleFetch}
        />

        {/* Loading state */}
        {loading && <LoadingSpinner label={`Fetching metadata from ${platform}...`} />}

        {/* Error state */}
        <ErrorMessage error={error || downloadError} onRetry={handleResetAll} />

        {/* Extracted Media View */}
        {mediaInfo && !loading && (
          <div className="space-y-6 animate-slide-up">
            <MediaPreview info={mediaInfo} />

            <QualitySelector
              formats={mediaInfo.formats}
              selectedFormatId={selectedFormatId}
              onSelectFormat={setSelectedFormatId}
              onSelectAndDownload={handleStartDownloadForFormat}
              isDownloading={isDownloading}
            />

            {/* Download Progress output */}
            {activeJobId && (
              <ProgressBar
                progress={progressData}
                label={
                  progressData?.status === 'completed'
                    ? '✓ Download Complete'
                    : progressData?.status === 'processing'
                    ? '⚡ Merging Video & Audio with FFmpeg...'
                    : 'Downloading video...'
                }
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};


