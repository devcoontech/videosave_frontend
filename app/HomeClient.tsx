'use client';

import React, { useState } from 'react';
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
import { downloadProgressLabel } from '../src/utils/downloadLabels';
import { Zap, ShieldCheck, Globe, Sparkles } from 'lucide-react';

export const HomeClient: React.FC = () => {
  const { loading, mediaInfo, sourceUrl, error, fetchInfo, reset: resetInfo } = useMediaInfo();
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
      const res = await createDownload(sourceUrl || mediaInfo.webpage_url, formatId);
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

  const platformsList = [
    { name: 'TikTok', color: 'bg-zinc-900' },
    { name: 'Instagram', color: 'bg-fuchsia-600' },
    { name: 'Facebook', color: 'bg-blue-600' },
    { name: 'X (Twitter)', color: 'bg-sky-500' },
    { name: 'Vimeo', color: 'bg-cyan-500' },
    { name: 'Dailymotion', color: 'bg-blue-500' },
    { name: 'Reddit', color: 'bg-orange-600' },
    { name: 'Pinterest', color: 'bg-red-500' },
  ];

  return (
    <div id="downloader-hero" className="relative w-full bg-gradient-to-b from-[#0B0D14] via-[#11131F] to-[#090A0F] text-white py-12 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-[#1E2438] overflow-hidden">
      {/* Background Ambient Royal Blue Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[200px] sm:h-[350px] bg-[#2563EB]/15 blur-[80px] sm:blur-[120px] pointer-events-none rounded-full" />

      <div className="relative max-w-4xl mx-auto space-y-6 sm:space-y-8 text-center animate-fade-in">
        
        {/* Top Tag Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-[#2563EB]/30 text-zinc-300 font-semibold text-xs sm:text-sm shadow-md backdrop-blur-md">
          <Zap className="w-4 h-4 text-[#3B82F6]" />
          <span>Free · Fast · Unlimited</span>
        </div>

        {/* Hero Headline */}
        <div className="space-y-3 sm:space-y-4">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight sm:leading-tight">
            Download Videos from <br className="hidden sm:inline" />
            <span className="text-[#2563EB] dark:text-[#3B82F6]">Any Platform</span>
          </h1>
          <p className="text-xs sm:text-base md:text-lg text-zinc-300 max-w-2xl mx-auto leading-relaxed font-normal px-2">
            Free, fast, and unlimited online downloader for TikTok, Instagram, Facebook, X, and more. No sign-up required.
          </p>
        </div>

        {/* Central URL Downloader Input Box */}
        <div className="max-w-2xl mx-auto space-y-5 sm:space-y-6">
          <UrlInput
            placeholder="Paste video URL here..."
            buttonLabel="Analyze"
            isLoading={loading}
            onSubmit={handleFetch}
          />

          {/* Micro Trust Badges Row */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm text-zinc-300 pt-1 font-medium">
            <div className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] sm:text-xs">
              <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 shrink-0" />
              <span>100% Safe</span>
            </div>
            <div className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] sm:text-xs">
              <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 shrink-0" />
              <span>Lightning Fast</span>
            </div>
            <div className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] sm:text-xs">
              <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#3B82F6] shrink-0" />
              <span>14+ Platforms</span>
            </div>
          </div>

          {/* Supported Platforms Pills Row */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 pt-1">
            {platformsList.map((item, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-[11px] sm:text-xs font-semibold text-zinc-300 transition-colors cursor-default"
              >
                <span className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${item.color}`} />
                {item.name}
              </span>
            ))}
          </div>
        </div>

        {/* Media Results / Loader / Error Display Container */}
        {(loading || mediaInfo || error || downloadError) && (
          <div className="max-w-3xl mx-auto pt-6 text-left">
            <div className="bg-[#11131F]/90 border border-[#1E2438] rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl space-y-6">
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
                      label={downloadProgressLabel(progressData?.status, selectedFormatId, progressData?.error)}
                    />
                  )}
                </div>
              )}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};


