import React, { useState, useEffect, useRef } from 'react';
import { Clipboard, ArrowRight, Loader2, Link2, X, Globe, CheckCircle2, AlertCircle, Search } from 'lucide-react';
import { normalizeMediaUrl } from '../utils/helpers';


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
  const [localError, setLocalError] = useState<string | null>(null);
  const lastFetchedUrl = useRef<string>('');
  const onSubmitRef = useRef(onSubmit);
  onSubmitRef.current = onSubmit;

  const getPlatformDetected = (val: string): string | null => {
    const v = val.toLowerCase();
    if (v.includes('youtube.com') || v.includes('youtu.be')) {
      return v.includes('/playlist') || (v.includes('list=') && !v.includes('v=') && !v.includes('youtu.be/'))
        ? 'YouTube Playlist'
        : 'YouTube';
    }
    if (v.includes('instagram.com')) return 'Instagram Reel';
    if (v.includes('facebook.com') || v.includes('fb.watch')) return 'Facebook Reel';
    if (v.includes('tiktok.com')) return 'TikTok Video';
    return null;
  };

  const submitUrl = (raw: string) => {
    const normalized = normalizeMediaUrl(raw);
    if (!normalized) {
      setLocalError('Please paste a valid video or playlist link.');
      return;
    }
    setLocalError(null);
    lastFetchedUrl.current = normalized;
    if (normalized !== url) {
      setUrl(normalized);
    }
    onSubmitRef.current(normalized);
  };

  const detectedPlatform = normalizeMediaUrl(url) ? getPlatformDetected(url) : null;

  useEffect(() => {
    const trimmed = url.trim();
    if (!trimmed || isLoading) return;
    const normalized = normalizeMediaUrl(trimmed);
    if (!normalized || normalized === lastFetchedUrl.current) return;
    const timer = setTimeout(() => submitUrl(trimmed), 500);
    return () => clearTimeout(timer);
  }, [url, isLoading]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoading) return;
    submitUrl(url);
  };

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      if (text && text.trim()) {
        setUrl(text.trim());
        submitUrl(text);
      }
    } catch (err) {
      setLocalError('Could not read clipboard. Paste the link with Ctrl+V, then click Fetch.');
      console.warn('Clipboard access error:', err);
    }
  };

  return (
    <div className="w-full space-y-3">
      <form onSubmit={handleSubmit} noValidate className="w-full">
        <div className="flex flex-col sm:flex-row items-stretch gap-2.5 p-2 rounded-full bg-white/10 dark:bg-[#2A1411]/70 border border-white/20 dark:border-[#4D2019] backdrop-blur-md focus-within:border-[#FF4D26] dark:focus-within:border-[#FF4D26] focus-within:ring-4 focus-within:ring-[#FF4D26]/20 transition-all duration-200 shadow-xl">
          <div className="relative flex-1 flex items-center min-h-[52px]">
            <Search className="w-5 h-5 text-slate-400 dark:text-zinc-400 absolute left-4 pointer-events-none shrink-0" />
            <input
              type="text"
              inputMode="url"
              autoComplete="url"
              value={url}
              onChange={(e) => {
                setUrl(e.target.value);
                if (localError) setLocalError(null);
              }}
              placeholder={placeholder}
              disabled={isLoading}
              className="w-full pl-12 pr-12 py-3 text-base sm:text-sm font-medium bg-transparent text-slate-900 dark:text-zinc-100 placeholder-slate-400 dark:placeholder-zinc-400 focus:outline-none disabled:opacity-50"
            />
            {url ? (
              <button
                type="button"
                onClick={() => {
                  setUrl('');
                  lastFetchedUrl.current = '';
                  setLocalError(null);
                }}
                className="absolute right-3 p-1.5 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-zinc-200 hover:bg-slate-200/60 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
                title="Clear input"
              >
                <X className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="button"
                onClick={handlePaste}
                title="Paste link from clipboard"
                className="absolute right-3 p-2 rounded-lg text-slate-400 hover:text-[#FF4D26] dark:text-zinc-400 dark:hover:text-[#FF4D26] hover:bg-white/10 transition-colors cursor-pointer"
              >
                <Clipboard className="w-4 h-4" />
              </button>
            )}
          </div>

          <button
            type="submit"
            disabled={!url.trim() || isLoading}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#FF4D26] hover:bg-[#E63E15] disabled:bg-slate-300 dark:disabled:bg-zinc-800 text-white disabled:text-slate-500 dark:disabled:text-zinc-500 font-extrabold text-sm sm:text-base shadow-lg shadow-[#FF4D26]/30 disabled:shadow-none transition-all duration-200 flex items-center justify-center gap-2 active:scale-[0.98] min-h-[52px] shrink-0 cursor-pointer"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin text-white" />
                <span>Analyzing...</span>
              </>
            ) : (
              <span>{buttonLabel}</span>
            )}
          </button>
        </div>
      </form>

      {localError && (
        <p className="flex items-center justify-center gap-1.5 px-1 text-xs sm:text-sm font-semibold text-rose-500 dark:text-rose-400 animate-fade-in">
          <AlertCircle className="w-4 h-4 shrink-0" />
          {localError}
        </p>
      )}

      {detectedPlatform && (
        <div className="flex items-center justify-center pt-1 animate-fade-in">
          <span className="inline-flex items-center gap-1.5 font-semibold text-[#FF4D26] dark:text-[#FF6642] bg-orange-500/10 px-3.5 py-1 rounded-full border border-[#FF4D26]/30 text-xs">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#FF4D26]" />
            {detectedPlatform} link detected
          </span>
        </div>
      )}
    </div>
  );
};
