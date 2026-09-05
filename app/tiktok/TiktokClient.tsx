'use client';

import React, { useState } from 'react';
import { UrlInput } from '../../src/components/UrlInput';
import { MediaPreview } from '../../src/components/MediaPreview';
import { QualitySelector } from '../../src/components/QualitySelector';
import { ProgressBar } from '../../src/components/ProgressBar';
import { ErrorMessage } from '../../src/components/ErrorMessage';
import { SkeletonLoader } from '../../src/components/SkeletonLoader';
import { PlatformIcon } from '../../src/components/PlatformIcon';
import { useMediaInfo } from '../../src/hooks/useMediaInfo';
import { useDownloadProgress } from '../../src/hooks/useDownloadProgress';
import { useAutoFileDownload } from '../../src/hooks/useAutoFileDownload';
import { createDownload } from '../../services/api';
import { validateUrlForPlatform } from '../../src/utils/helpers';

export const TiktokClient: React.FC = () => {
  const { loading, mediaInfo, error, fetchInfo, reset: resetInfo } = useMediaInfo();
  const [selectedFormatId, setSelectedFormatId] = useState<string>('best');
  const [activeJobId, setActiveJobId] = useState<string | null>(null);
  const [downloadError, setDownloadError] = useState<{ code: string; message: string } | null>(null);

  const { progressData } = useDownloadProgress(activeJobId);
  useAutoFileDownload(activeJobId, progressData);

  const handleFetch = (url: string) => {
    const check = validateUrlForPlatform(url, 'tiktok');
    if (!check.valid) {
      setDownloadError({
        code: check.errorCode || 'PLATFORM_MISMATCH',
        message: check.errorMessage || 'Invalid platform URL.',
      });
      return;
    }
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

  const handleResetAll = () => {
    setActiveJobId(null);
    setDownloadError(null);
    resetInfo();
  };

  const isDownloading = progressData?.status === 'extracting' || progressData?.status === 'downloading' || progressData?.status === 'processing';

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/10 dark:bg-zinc-800 text-slate-900 dark:text-zinc-100 font-bold text-xs">
          <PlatformIcon platform="tiktok" className="w-4 h-4" /> TikTok Video
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-zinc-100 tracking-tight">
          TikTok Video Downloader
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400 max-w-xl mx-auto">
          Paste a public TikTok video link and download it without watermarks.
        </p>
      </div>

      <div className="bg-white dark:bg-[#121520] border border-slate-200 dark:border-[#1E2436] rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">

        <UrlInput
          placeholder="Paste TikTok video link..."
          exampleUrl="https://www.tiktok.com/@user/video/123456789"
          buttonLabel="Fetch TikTok Video"
          isLoading={loading}
          onSubmit={handleFetch}
        />

        {loading && <SkeletonLoader />}
        <ErrorMessage error={error || downloadError} onRetry={handleResetAll} />

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
            {activeJobId && (
              <ProgressBar
                progress={progressData}
                label={
                  progressData?.status === 'completed'
                    ? 'Download ready! Auto-saving file...'
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

