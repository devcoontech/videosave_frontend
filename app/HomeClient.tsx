'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { PlatformSelector } from '../src/components/PlatformSelector';
import { UrlInput } from '../src/components/UrlInput';
import { MediaPreview } from '../src/components/MediaPreview';
import { QualitySelector } from '../src/components/QualitySelector';
import { ProgressBar } from '../src/components/ProgressBar';
import { ErrorMessage } from '../src/components/ErrorMessage';
import { SkeletonLoader } from '../src/components/SkeletonLoader';
import { useMediaInfo } from '../src/hooks/useMediaInfo';
import { useDownloadProgress } from '../src/hooks/useDownloadProgress';
import { useAutoFileDownload } from '../src/hooks/useAutoFileDownload';
import { createDownload } from '../services/api';
import { isYoutubePlaylistUrl } from '../src/utils/helpers';

export const HomeClient: React.FC = () => {
  const router = useRouter();
  const [platform, setPlatform] = useState<string>('youtube');
  const { loading, mediaInfo, error, fetchInfo, reset: resetInfo } = useMediaInfo();
  const [selectedFormatId, setSelectedFormatId] = useState<string>('best');
  const [activeJobId, setActiveJobId] = useState<string | null>(null);
  const [downloadError, setDownloadError] = useState<{ code: string; message: string } | null>(null);

  const { progressData } = useDownloadProgress(activeJobId);
  useAutoFileDownload(activeJobId, progressData);

  const handleFetch = (url: string) => {
    // If playlist link detected, navigate to youtube-playlist route
    if (isYoutubePlaylistUrl(url)) {
      router.push(`/youtube-playlist?url=${encodeURIComponent(url)}`);
      return;
    }

    setActiveJobId(null);
    setDownloadError(null);
    fetchInfo(url);
  };

  const handlePlatformChange = (newPlatform: string) => {
    setPlatform(newPlatform);
    if (newPlatform === 'youtube_playlist') {
      router.push('/youtube-playlist');
    }
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
    <div className="space-y-8 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in">
      {/* Hero Header */}
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 dark:text-zinc-100 tracking-tight leading-tight">
          Download High-Quality Videos <br className="hidden sm:inline" />
          <span className="text-[#2563EB] dark:text-[#3B82F6]">
            In One Click
          </span>
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-400 font-medium max-w-xl mx-auto">
          Fast, free online downloader for YouTube, Playlists, Instagram, and Facebook.
        </p>
      </div>




      {/* Main Glass Downloader Card */}
      <div className="bg-white dark:bg-[#11131F] border border-slate-200/90 dark:border-zinc-800/90 rounded-3xl p-6 sm:p-10 shadow-xl shadow-slate-200/50 dark:shadow-2xl dark:shadow-black/50 space-y-6">
        <PlatformSelector activePlatform={platform as any} onSelectPlatform={handlePlatformChange} />

        <UrlInput
          placeholder={`Paste ${platform.replace('_', ' ')} link...`}
          exampleUrl={
            platform === 'youtube'
              ? 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
              : platform === 'instagram'
              ? 'https://www.instagram.com/reel/C123456789/'
              : 'https://www.facebook.com/reel/123456789/'
          }
          buttonLabel="Fetch Media"
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
                    : 'Downloading media file...'
                }
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};


