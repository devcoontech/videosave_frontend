'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import { UrlInput } from '../../src/components/UrlInput';
import { PlaylistVideoList } from '../../src/components/PlaylistVideoList';
import { ErrorMessage } from '../../src/components/ErrorMessage';
import { SkeletonLoader } from '../../src/components/SkeletonLoader';
import { ProgressBar } from '../../src/components/ProgressBar';
import { PlatformIcon } from '../../src/components/PlatformIcon';
import { PlaylistInfo, ApiError } from '../../src/types/media';
import { getPlaylistInfo, createPlaylistDownload, cancelPlaylistDownload, getDownloadFileUrl, apiClient } from '../../services/api';
import { Download, Settings2, StopCircle, Play } from 'lucide-react';
import { validateUrlForPlatform } from '../../src/utils/helpers';

export const PlaylistClient: React.FC = () => {
  const searchParams = useSearchParams();
  const urlParam = searchParams.get('url');

  const [loading, setLoading] = useState<boolean>(false);
  const [playlistInfo, setPlaylistInfo] = useState<PlaylistInfo | null>(null);
  const [selectedUrls, setSelectedUrls] = useState<string[]>([]);
  const [quality, setQuality] = useState<string>('best');
  const [error, setError] = useState<ApiError | null>(null);

  const [playlistJobId, setPlaylistJobId] = useState<string | null>(null);
  const [batchStatus, setBatchStatus] = useState<any | null>(null);
  const [isDownloading, setIsDownloading] = useState<boolean>(false);
  const downloadedJobIdsRef = useRef<Set<string>>(new Set());

  useEffect(() => {
    if (urlParam) {
      handleFetchPlaylist(urlParam);
    }
  }, [urlParam]);

  const handleFetchPlaylist = async (url: string) => {
    const check = validateUrlForPlatform(url, 'youtube_playlist');
    if (!check.valid) {
      setError({
        code: check.errorCode || 'PLATFORM_MISMATCH',
        message: check.errorMessage || 'Invalid platform URL.',
      });
      return;
    }
    setLoading(true);
    setError(null);
    setPlaylistInfo(null);
    setSelectedUrls([]);
    setPlaylistJobId(null);
    setBatchStatus(null);
    downloadedJobIdsRef.current.clear();

    try {
      const data = await getPlaylistInfo(url);
      setPlaylistInfo(data);
      setSelectedUrls(data.videos.map((v) => v.url));
    } catch (err: any) {
      setError({
        code: typeof err?.code === 'string' ? err.code : 'PLAYLIST_FAILED',
        message:
          typeof err?.message === 'string' && err.message
            ? err.message
            : 'Failed to fetch playlist details. Check the URL and try again.',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleToggleSelect = (url: string) => {
    setSelectedUrls((prev) =>
      prev.includes(url) ? prev.filter((u) => u !== url) : [...prev, url]
    );
  };

  const handleSelectAll = () => {
    if (playlistInfo) {
      setSelectedUrls(playlistInfo.videos.map((v) => v.url));
    }
  };

  const handleClearAll = () => {
    setSelectedUrls([]);
  };

  const handleStartBatchDownload = async () => {
    if (!playlistInfo || selectedUrls.length === 0) return;
    setError(null);
    setIsDownloading(true);

    try {
      const res = await createPlaylistDownload(playlistInfo.title, selectedUrls, quality, playlistJobId);
      if (res.success && res.playlist_job_id) {
        setPlaylistJobId(res.playlist_job_id);
      }
    } catch (err: any) {
      setError({
        code: err.code || 'BATCH_FAILED',
        message: err.message || 'Failed to start playlist batch download.',
      });
      setIsDownloading(false);
    }
  };

  const handleStopBatchDownload = async () => {
    if (!playlistJobId) return;
    try {
      await cancelPlaylistDownload(playlistJobId);
      setIsDownloading(false);
      setBatchStatus((prev: any) => (prev ? { ...prev, status: 'cancelled' } : null));
    } catch (err) {
      console.warn('Failed to stop playlist download:', err);
    }
  };

  // Poll playlist job status and auto-download each video as soon as it completes
  useEffect(() => {
    if (!playlistJobId || !isDownloading) return;

    const interval = setInterval(async () => {
      try {
        const res = await apiClient.get(`/playlist/job/${playlistJobId}`);
        if (res.data) {
          setBatchStatus(res.data);

          if (res.data.status === 'cancelled') {
            setIsDownloading(false);
            clearInterval(interval);
            return;
          }

          if (Array.isArray(res.data.video_jobs)) {
            res.data.video_jobs.forEach((v: any) => {
              if (v.status === 'completed' && !downloadedJobIdsRef.current.has(v.job_id)) {
                downloadedJobIdsRef.current.add(v.job_id);
                const downloadUrl = getDownloadFileUrl(v.job_id);
                const link = document.createElement('a');
                link.href = downloadUrl;
                link.download = '';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }
            });
          }

          if (res.data.completed_videos + res.data.failed_videos >= res.data.total_videos) {
            setIsDownloading(false);
            clearInterval(interval);
          }
        }
      } catch (err) {
        console.warn('Error fetching playlist job status:', err);
      }
    }, 1200);

    return () => clearInterval(interval);
  }, [playlistJobId, isDownloading]);

  const isStopped = batchStatus?.status === 'cancelled';

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in relative pb-28">
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/40 border border-blue-200/80 dark:border-blue-900/50 text-[#2563EB] font-semibold text-xs shadow-xs">
          <PlatformIcon platform="youtube_playlist" className="w-4 h-4" /> YouTube Playlist Downloader
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-zinc-100 tracking-tight">
          YouTube Playlist Downloader
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400 max-w-xl mx-auto">
          Select the videos you want and download them together in your preferred quality.
        </p>
      </div>

      {/* Input & Container */}
      <div className="bg-white dark:bg-[#11131F] border border-slate-200/90 dark:border-zinc-800/90 rounded-3xl p-6 sm:p-9 shadow-xl shadow-slate-200/50 dark:shadow-2xl dark:shadow-black/50 space-y-6">
        <UrlInput
          placeholder="Paste YouTube playlist link..."
          exampleUrl="https://www.youtube.com/playlist?list=PLrAXtmErZgOeiKm4sgNOknGvNjby9efdf"
          buttonLabel="Fetch Playlist"
          isLoading={loading}
          onSubmit={handleFetchPlaylist}
        />

        {loading && <SkeletonLoader />}
        <ErrorMessage error={error} />

        {/* Playlist Content */}
        {playlistInfo && !loading && (
          <div className="space-y-6 animate-slide-up">
            {/* Metadata & Quality Selector Card */}
            <div className="bg-slate-50/80 dark:bg-[#0B0D14] border border-slate-200/80 dark:border-zinc-800/90 rounded-2xl p-4 sm:p-5 flex flex-wrap items-center justify-between gap-4">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-zinc-100">{playlistInfo.title}</h3>
                <p className="text-xs text-slate-500 dark:text-zinc-400 mt-0.5">
                  {playlistInfo.total_videos} videos · {playlistInfo.uploader}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <Settings2 className="w-4 h-4 text-[#2563EB]" />
                <label className="text-xs font-bold text-slate-700 dark:text-zinc-300">Quality:</label>
                <select
                  value={quality}
                  disabled={isDownloading}
                  onChange={(e) => setQuality(e.target.value)}
                  className="px-3.5 py-2 rounded-xl border border-slate-200/80 dark:border-zinc-700 bg-white dark:bg-[#181B2C] text-xs font-semibold text-slate-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-[#2563EB] shadow-xs disabled:opacity-50"
                >
                  <option value="best">Best Available Quality</option>
                  <option value="1080p">1080p (Full HD)</option>
                  <option value="720p">720p (HD)</option>
                  <option value="480p">480p (Standard)</option>
                  <option value="360p">360p (Small)</option>
                  <option value="240p">240p (Low)</option>
                </select>
              </div>
            </div>

            <PlaylistVideoList
              videos={playlistInfo.videos}
              selectedUrls={selectedUrls}
              onToggleSelect={handleToggleSelect}
              onSelectAll={handleSelectAll}
              onClearAll={handleClearAll}
            />

            {batchStatus && (
              <ProgressBar
                overallProgress={batchStatus.overall_progress}
                label={
                  batchStatus.status === 'cancelled'
                    ? `🛑 Stopped at video ${batchStatus.completed_videos} of ${batchStatus.total_videos}. Click Resume to continue.`
                    : batchStatus.completed_videos + batchStatus.failed_videos >= batchStatus.total_videos
                    ? '✓ Playlist Batch Download Complete!'
                    : `Downloading & saving ${batchStatus.completed_videos + 1} of ${batchStatus.total_videos} videos...`
                }
              />
            )}
          </div>
        )}
      </div>

      {playlistInfo && !loading && (
        <div className="fixed bottom-6 left-4 right-4 max-w-4xl mx-auto z-40 bg-slate-900/90 dark:bg-[#11131F]/95 backdrop-blur-md border border-slate-800 dark:border-zinc-800 text-white rounded-2xl p-4 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-4 animate-slide-up">
          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold">
            <span>{selectedUrls.length} videos selected</span>
            <span className="text-slate-500">•</span>
            <div className="flex items-center gap-2">
              <span className="text-slate-300">Quality:</span>
              <select
                value={quality}
                disabled={isDownloading}
                onChange={(e) => setQuality(e.target.value)}
                className="px-2.5 py-1 rounded-lg border border-slate-700 bg-slate-800 text-white text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-[#2563EB] disabled:opacity-50"
              >
                <option value="best">Best Available</option>
                <option value="1080p">1080p (Full HD)</option>
                <option value="720p">720p (HD)</option>
                <option value="480p">480p (Standard)</option>
                <option value="360p">360p (Small)</option>
                <option value="240p">240p (Low)</option>
              </select>
            </div>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            {isDownloading ? (
              <button
                onClick={handleStopBatchDownload}
                className="w-full sm:w-auto py-3 px-6 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-semibold text-sm shadow-md transition-all flex items-center justify-center gap-2 active:scale-95 shrink-0 cursor-pointer"
              >
                <StopCircle className="w-4 h-4" />
                <span>Stop Download</span>
              </button>
            ) : (
              <button
                onClick={handleStartBatchDownload}
                disabled={selectedUrls.length === 0}
                className="w-full sm:w-auto py-3 px-6 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] disabled:bg-slate-800 text-white font-bold text-sm shadow-md shadow-[#2563EB]/20 transition-all flex items-center justify-center gap-2 active:scale-95 shrink-0 cursor-pointer"
              >
                {isStopped ? (
                  <>
                    <Play className="w-4 h-4 fill-white" />
                    <span>Resume Playlist Download</span>
                  </>
                ) : (
                  <>
                    <span>Download {selectedUrls.length} Videos</span>
                    <Download className="w-4 h-4" />
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};





