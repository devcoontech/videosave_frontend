import React from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';
import { ApiError } from '../types/media';

interface ErrorMessageProps {
  error: ApiError | null;
  onRetry?: () => void;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ error, onRetry }) => {
  if (!error) return null;

  const getFriendlyDetails = (code: string) => {
    switch (code) {
      case 'INVALID_URL':
        return 'Please enter a valid video or playlist link.';
      case 'PLAYLIST_URL_DETECTED':
        return 'This link is a YouTube playlist. Switch to the Playlist tab to download multiple videos.';
      case 'UNSUPPORTED_PLATFORM':
        return 'This domain is not supported. Please use YouTube, Instagram, Facebook, or TikTok links.';
      case 'VIDEO_UNAVAILABLE':
        return 'This video is unavailable or has been removed by creator.';
      case 'PRIVATE_VIDEO':
        return 'This video is private or requires platform login.';
      case 'GEO_RESTRICTED':
        return 'This content is restricted in your area.';
      case 'BOT_VERIFICATION_REQUIRED':
        return 'YouTube security check triggered. Please try clicking Try Again or test another YouTube video.';
      case 'LOGIN_REQUIRED':
        return 'Age-restricted content requiring account sign-in.';
      default:
        return 'We couldn\'t fetch this video. Check the URL and try again.';
    }
  };

  return (
    <div className="w-full bg-[#FEF2F2] dark:bg-red-950/30 border border-[#FECACA] dark:border-red-900/60 rounded-2xl p-4 flex items-start gap-3 text-[#B91C1C] dark:text-red-300 animate-fade-in shadow-sm">
      <AlertCircle className="w-5 h-5 shrink-0 text-[#DC2626] dark:text-red-400 mt-0.5" />
      <div className="flex-1 space-y-0.5">
        <h5 className="font-bold text-sm text-red-900 dark:text-red-200">
          We couldn't fetch this video
        </h5>
        <p className="text-xs text-red-700 dark:text-red-300 font-medium">
          {error.message || getFriendlyDetails(error.code)}
        </p>
      </div>

      {onRetry && (
        <button
          onClick={onRetry}
          className="px-3 py-1.5 rounded-lg bg-red-100 dark:bg-red-900/40 hover:bg-red-200 dark:hover:bg-red-900 text-xs font-bold transition-colors flex items-center gap-1 shrink-0 text-red-800 dark:text-red-200"
        >
          <RefreshCw className="w-3 h-3" />
          Try Again
        </button>
      )}
    </div>
  );
};
