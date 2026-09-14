import React from 'react';
import { HomeClient } from '../HomeClient';
import { ShieldCheck, Zap, Layers, Sparkles, CheckCircle2, Globe, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Supported Video Downloader Platforms | VideoSave',
  description: 'Download HD & 4K videos from TikTok without watermark, Instagram Reels, Facebook, X (Twitter), Vimeo, Dailymotion, Reddit, Pinterest, Twitch, and SoundCloud for free.',
  alternates: {
    canonical: 'https://videosave.site/platforms',
  },
};

export default function PlatformsPage() {
  const platforms = [
    {
      id: 'tiktok',
      name: 'TikTok Video Downloader',
      color: 'from-blue-600 to-indigo-700',
      badge: 'No Watermark HD',
      description: 'Save TikTok videos without watermark in original HD resolution. Download viral clips, sounds, and trend videos instantly.',
      features: ['100% Watermark-free', 'HD MP4 download format', 'TikTok Audio MP3 saver', 'Fast instant processing'],
      example: 'https://www.tiktok.com/@username/video/7123456789',
    },
    {
      id: 'instagram',
      name: 'Instagram Reels & Stories',
      color: 'from-purple-600 to-pink-600',
      badge: '1080p Full HD',
      description: 'Download Instagram Reels, IGTV videos, post clips, and Stories in original resolution directly to your phone or desktop.',
      features: ['High quality MP4 Reels', 'Audio sound track extractor', 'Fast inline media preview', 'Works on mobile & PC'],
      example: 'https://www.instagram.com/reel/Cx123456789/',
    },
    {
      id: 'facebook',
      name: 'Facebook Video & Reels',
      color: 'from-blue-600 to-blue-800',
      badge: 'Public & HD Video',
      description: 'Save Facebook public videos, Watch clips, and Reels in Full HD 1080p or standard quality with zero quality loss.',
      features: ['HD & SD format choices', 'Facebook Reels downloader', 'No app installation', 'Private streaming proxy'],
      example: 'https://www.facebook.com/reel/123456789/',
    },
    {
      id: 'twitter',
      name: 'X (Twitter) Video Saver',
      color: 'from-sky-500 to-blue-600',
      badge: 'Multi-Bitrate MP4',
      description: 'Extract and download high-resolution videos and GIFs embedded in tweets on X (Twitter) instantly.',
      features: ['Multiple bitrate resolutions', 'GIF to MP4 conversion', 'Instant tweet media parsing', 'Direct link download'],
      example: 'https://x.com/username/status/123456789',
    },
    {
      id: 'vimeo',
      name: 'Vimeo Video Downloader',
      color: 'from-cyan-500 to-blue-600',
      badge: 'Pro HD Quality',
      description: 'Save Vimeo HD streams, filmmaking documentaries, and showcase videos in crisp 1080p and 2K resolution.',
      features: ['Uncompressed HD clarity', 'Stereo audio preservation', 'Fast bandwidth extraction', 'Unlimited usage'],
      example: 'https://vimeo.com/123456789',
    },
    {
      id: 'reddit',
      name: 'Reddit Video Downloader',
      color: 'from-orange-500 to-red-600',
      badge: 'With Audio',
      description: 'Save Reddit clips and video posts with perfectly synchronized audio tracks in crisp MP4 format.',
      features: ['HD resolution support', 'Audio track merging', 'Instant link conversion', 'No log-in required'],
      example: 'https://www.reddit.com/r/videos/comments/example',
    },
  ];

  return (
    <div className="space-y-16 animate-fade-in pb-16">
      {/* Downloader Hero Header */}
      <HomeClient />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Section Title */}
        <div className="text-center space-y-4 max-w-3xl mx-auto pt-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-500 dark:text-blue-400 font-bold text-xs sm:text-sm border border-blue-500/30">
            <Globe className="w-4 h-4" /> Universal Compatibility
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Supported Video <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">Platforms</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400 font-medium">
            VideoSave supports all major video streaming and social media networks. Simply paste any video link into the universal search box above.
          </p>
        </div>

        {/* Platform Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {platforms.map((p) => (
            <div
              key={p.id}
              className="bg-white dark:bg-[#11131F] border border-slate-200 dark:border-[#1E2338] rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm hover:shadow-xl hover:border-blue-500/50 transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className={`px-3.5 py-1 rounded-full text-xs font-black text-white bg-gradient-to-r ${p.color} shadow-sm`}>
                    {p.badge}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                  {p.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
                  {p.description}
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-[#1E2338]">
                  {p.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <a
                  href="#downloader-hero"
                  className="w-full py-2.5 rounded-xl bg-slate-100 dark:bg-[#1A1F36] hover:bg-blue-600 hover:text-white text-slate-800 dark:text-zinc-200 font-bold text-xs flex items-center justify-center gap-2 transition-colors"
                >
                  <span>Download {p.name.split(' ')[0]} Video</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* SEO Article */}
        <article className="prose dark:prose-invert max-w-5xl mx-auto bg-slate-100/60 dark:bg-[#11131F]/60 border border-slate-200 dark:border-[#1E2338] rounded-3xl p-8 sm:p-12 space-y-6 text-sm text-slate-700 dark:text-zinc-300">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Download Online Videos Across Any Device & Social Network
          </h2>
          <p className="leading-relaxed">
            Whether you want to save viral trending clips from <strong>TikTok without watermarks</strong>, download inspirational <strong>Instagram Reels</strong>, archive high-definition <strong>Facebook Videos</strong>, or grab media from <strong>X (Twitter)</strong> and <strong>Vimeo</strong>, VideoSave provides an effortless multi-platform solution.
          </p>
          <p className="leading-relaxed">
            Our high-speed parsing engine automatically recognizes incoming links from top platforms, fetching video streams, audio bitrates, and metadata instantly. Enjoy seamless browser downloading on iOS Safari, Android Chrome, macOS, Windows, and Linux devices.
          </p>
        </article>

      </div>
    </div>
  );
}

