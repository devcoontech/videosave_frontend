import React, { Suspense } from 'react';
import { PlaylistClient } from './PlaylistClient';
import { SeoFaq } from '../../components/SeoFaq';
import { JsonLd } from '../../components/JsonLd';
import { SkeletonLoader } from '../../src/components/SkeletonLoader';
import { Layers, Play, CheckSquare, StopCircle, RefreshCw, ShieldCheck, Zap, HardDrive } from 'lucide-react';

export const metadata = {
  title: 'Free YouTube Playlist Downloader - Download Full Playlists Online | VideoSave ',
  description: 'Download full YouTube playlists in bulk. Batch selection, custom per-video quality, pause and resume downloads, auto-save to device online.',
  keywords: [
    'youtube playlist downloader',
    'download full youtube playlist',
    'bulk youtube downloader',
    'download multiple youtube videos',
    'free youtube playlist saver',
    'batch youtube video downloader',
  ],
  alternates: {
    canonical: 'https://VideoSave .media/youtube-playlist',
  },
};

export default function YoutubePlaylistPage() {
  const playlistFaqs = [
    {
      question: 'How do I download an entire YouTube playlist at once?',
      answer: 'Paste the YouTube playlist URL into the input field above and click "Fetch Playlist". VideoSave will extract all items in the playlist. You can choose specific videos or select all, pick your preferred quality (1080p, 720p, 480p), and click "Download Videos". Each video will process and save to your local folder automatically.',
    },
    {
      question: 'Can I stop a playlist download and resume it later?',
      answer: 'Yes! Click "Stop Download" at any time to pause batch processing. When you click "Resume Playlist Download", VideoSave automatically skips already finished videos and continues right from where you stopped.',
    },
    {
      question: 'Is there a limit on how many videos I can download in a playlist?',
      answer: 'No fixed limit. VideoSave can process playlists containing dozens of videos seamlessly.',
    },
    {
      question: 'Can I select individual videos from a playlist to download?',
      answer: 'Yes. VideoSave provides checkboxes for every video item so you can uncheck unwanted videos and download only the ones you need.',
    },
  ];

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://VideoSave .media' },
      { '@type': 'ListItem', position: 2, name: 'YouTube Playlist Downloader', item: 'https://VideoSave .media/youtube-playlist' },
    ],
  };

  return (
    <div className="space-y-16 py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <JsonLd data={breadcrumbSchema} />

      <Suspense fallback={<SkeletonLoader />}>
        <PlaylistClient />
      </Suspense>

      {/* Comprehensive SEO Content Section for Playlist Downloader */}
      <section className="max-w-5xl mx-auto space-y-12 py-8 border-t border-slate-200 dark:border-[#1E2436]">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/40 text-[#2563EB] dark:text-[#3B82F6] border border-blue-200/60 dark:border-blue-800/60 font-semibold text-xs shadow-xs">
            <Layers className="w-4 h-4" /> Batch Bulk Playlist Processor
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-zinc-100 tracking-tight">
            Batch <span className="text-[#2563EB] dark:text-[#3B82F6]">YouTube Playlist Downloader</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Batch download full YouTube playlists, educational courses, and music collections with 1-click controls.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white dark:bg-[#121520] border border-slate-200 dark:border-[#1E2436] rounded-2xl p-5 space-y-2.5 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-[#2563EB] dark:text-[#3B82F6] flex items-center justify-center font-bold">
              <CheckSquare className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-zinc-100">Selective Batch Check</h3>
            <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
              Select or deselect specific videos from the playlist before launching bulk downloading.
            </p>
          </div>

          <div className="bg-white dark:bg-[#121520] border border-slate-200 dark:border-[#1E2436] rounded-2xl p-5 space-y-2.5 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-500 flex items-center justify-center font-bold">
              <StopCircle className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-zinc-100">Pause & Resume</h3>
            <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
              Stop batch downloading at any moment and resume directly from the exact video where you stopped.
            </p>
          </div>

          <div className="bg-white dark:bg-[#121520] border border-slate-200 dark:border-[#1E2436] rounded-2xl p-5 space-y-2.5 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold">
              <HardDrive className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-zinc-100">Sequential Auto-Saving</h3>
            <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
              Each playlist video saves to your computer's local downloads folder automatically upon completion.
            </p>
          </div>

          <div className="bg-white dark:bg-[#121520] border border-slate-200 dark:border-[#1E2436] rounded-2xl p-5 space-y-2.5 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center font-bold">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-zinc-100">Quality Preset Selector</h3>
            <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
              Choose output quality preset (1080p Full HD, 720p HD, 480p) applied uniformly across all playlist items.
            </p>
          </div>
        </div>

        {/* Detailed Indexable Guide */}
        <article className="bg-white dark:bg-[#121520] border border-slate-200 dark:border-[#1E2436] rounded-3xl p-6 sm:p-10 space-y-6 text-slate-700 dark:text-zinc-300 text-sm leading-relaxed shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-zinc-100 border-b border-slate-200 dark:border-[#1E2436] pb-4">
            How to Bulk Download Full YouTube Playlists
          </h2>

          <p>
            Downloading an entire playlist manually video-by-video takes hours. VideoSave automates the process by fetching
            the full video catalog, allowing custom quality selection, and downloading each item sequentially to your device.
          </p>


          <div className="space-y-4 pt-2">
            <h3 className="text-lg font-bold text-slate-900 dark:text-zinc-100">Top Use Cases for YouTube Playlist Downloads</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 list-none p-0 text-xs">
              <li className="bg-slate-50 dark:bg-[#1A1E2E] p-3.5 rounded-xl border border-slate-200/60 dark:border-[#1E2436] flex items-start gap-2.5">
                <Play className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                <span><strong>Educational Courses:</strong> Save multi-part tutorials and lectures for offline study.</span>
              </li>
              <li className="bg-slate-50 dark:bg-[#1A1E2E] p-3.5 rounded-xl border border-slate-200/60 dark:border-[#1E2436] flex items-start gap-2.5">
                <Play className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                <span><strong>Music Playlists:</strong> Archive your favorite album tracks and live performances.</span>
              </li>
              <li className="bg-slate-50 dark:bg-[#1A1E2E] p-3.5 rounded-xl border border-slate-200/60 dark:border-[#1E2436] flex items-start gap-2.5">
                <Play className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                <span><strong>Travel & Offline Viewing:</strong> Prepare video series before long flights or trips without internet access.</span>
              </li>
              <li className="bg-slate-50 dark:bg-[#1A1E2E] p-3.5 rounded-xl border border-slate-200/60 dark:border-[#1E2436] flex items-start gap-2.5">
                <Play className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                <span><strong>Content Backups:</strong> Archive your own channel playlists and video series safely.</span>
              </li>
            </ul>
          </div>
        </article>
      </section>




      {/* SEO FAQ Accordion */}
      <SeoFaq
        title="YouTube Playlist Downloader FAQ"
        subtitle="Learn how to batch download playlists effortlessly with VideoSave ."
        items={playlistFaqs}
      />
    </div>
  );
}
