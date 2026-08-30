import React, { useState, useEffect, useRef } from 'react';
import { Clipboard, ArrowRight, Loader2, Link2, X, Globe, CheckCircle2 } from 'lucide-react';


interface UrlInputProps {
  placeholder?: string;
  exampleUrl?: string;
  buttonLabel?: string;
  isLoading?: boolean;
  onSubmit: (url: string) => void;
}

export const UrlInput: React.FC<UrlInputProps> = ({
  placeholder = 'Paste link here...',
  exampleUrl,
  buttonLabel = 'Fetch Media',
  isLoading = false,
  onSubmit,
}) => {
  const [url, setUrl] = useState('');
  const lastFetchedUrl = useRef<string>('');

  const getPlatformDetected = (val: string): string | null => {
    const v = val.toLowerCase();
    if (v.includes('youtube.com') || v.includes('youtu.be')) {
      return v.includes('list') || v.includes('playlist') ? 'YouTube Playlist' : 'YouTube';
    }
    if (v.includes('instagram.com')) return 'Instagram Reel';
    if (v.includes('facebook.com') || v.includes('fb.watch')) return 'Facebook Reel';
    if (v.includes('tiktok.com')) return 'TikTok Video';
    return null;
  };

  const isValidUrl = (val: string) => {
    try {
      const parsed = new URL(val.trim());
      return parsed.protocol === 'http:' || parsed.protocol === 'https:';
    } catch {
      return false;
    }
  };

  const detectedPlatform = isValidUrl(url) ? getPlatformDetected(url) : null;

  // Auto-fetch debounced on input paste or valid entry
  useEffect(() => {
    const trimmed = url.trim();
    if (isValidUrl(trimmed) && trimmed !== lastFetchedUrl.current && !isLoading) {
      const timer = setTimeout(() => {
        lastFetchedUrl.current = trimmed;
        onSubmit(trimmed);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [url, isLoading, onSubmit]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = url.trim();
    if (trimmed && !isLoading) {
      lastFetchedUrl.current = trimmed;
      onSubmit(trimmed);
    }
  };

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      if (text && text.trim()) {
        const cleaned = text.trim();
        setUrl(cleaned);
        if (isValidUrl(cleaned) && !isLoading) {
          lastFetchedUrl.current = cleaned;
          onSubmit(cleaned);
        }
      }
    } catch (err) {
      console.warn('Clipboard access error:', err);
    }
  };

  return (
    <div className="w-full space-y-3">
      <form onSubmit={handleSubmit} className="w-full">
        <div className="flex flex-col sm:flex-row items-stretch gap-2.5 p-2 rounded-2xl bg-slate-50/80 dark:bg-[#0B0D14] border border-slate-200 dark:border-zinc-800 focus-within:border-[#2563EB] dark:focus-within:border-[#3B82F6] focus-within:ring-4 focus-within:ring-[#2563EB]/15 transition-all duration-200 shadow-inner">
          <div className="relative flex-1 flex items-center min-h-[48px]">
            <Link2 className="w-5 h-5 text-slate-400 dark:text-zinc-500 absolute left-3.5 pointer-events-none shrink-0" />
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder={placeholder}
              disabled={isLoading}
              required
              className="w-full pl-11 pr-20 py-3 text-sm font-medium bg-transparent text-slate-900 dark:text-zinc-100 placeholder-slate-400 dark:placeholder-zinc-500 focus:outline-none disabled:opacity-50"
            />
            {url ? (
              <button
                type="button"
                onClick={() => {
                  setUrl('');
                  lastFetchedUrl.current = '';
                }}
                className="absolute right-3 p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-zinc-200 hover:bg-slate-200/60 dark:hover:bg-zinc-800 transition-colors"
                title="Clear input"
              >
                <X className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="button"
                onClick={handlePaste}
                title="Paste link from clipboard"
                className="absolute right-2 text-xs flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-200/70 hover:bg-slate-300/80 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-slate-700 dark:text-zinc-300 transition-colors font-semibold shadow-xs"
              >
                <Clipboard className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Paste</span>
              </button>
            )}
          </div>

          <button
            type="submit"
            disabled={!url.trim() || isLoading}
            className="w-full sm:w-auto px-7 py-3 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] disabled:bg-slate-200 dark:disabled:bg-zinc-800 text-white disabled:text-slate-400 dark:disabled:text-zinc-500 font-bold text-sm shadow-md shadow-[#2563EB]/20 disabled:shadow-none transition-all duration-200 flex items-center justify-center gap-2 active:scale-[0.98] min-h-[48px] shrink-0 cursor-pointer"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-white" />
                <span>Fetching...</span>
              </>
            ) : (
              <>
                <span>{buttonLabel}</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </form>

      {/* Platform Detection Tag & Example */}
      <div className="flex flex-wrap items-center justify-between gap-2 px-1 text-xs">
        {detectedPlatform ? (
          <span className="inline-flex items-center gap-1.5 font-semibold text-[#2563EB] dark:text-[#3B82F6] bg-blue-50 dark:bg-blue-950/40 px-3 py-1 rounded-full border border-blue-200/80 dark:border-blue-900/60 animate-fade-in shadow-xs">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB]" />
            {detectedPlatform} link detected
          </span>
        ) : (
          <span className="text-slate-400 dark:text-zinc-500 font-medium flex items-center gap-1">
            <Globe className="w-3.5 h-3.5 text-[#2563EB]" />
            Supports YouTube videos, playlists, Instagram & Facebook reels
          </span>

        )}

        {exampleUrl && (
          <button
            type="button"
            onClick={() => {
              setUrl(exampleUrl);
              lastFetchedUrl.current = exampleUrl;
              onSubmit(exampleUrl);
            }}
            className="text-slate-500 dark:text-zinc-400 hover:text-[#2563EB] dark:hover:text-[#3B82F6] font-medium underline underline-offset-2 transition-colors ml-auto cursor-pointer"
          >
            Try example link
          </button>
        )}
      </div>
    </div>
  );
};





