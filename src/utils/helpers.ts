export function formatBytes(bytes?: number): string {
  if (!bytes || bytes <= 0) return 'Size unavailable';
  const units = ['B', 'KB', 'MB', 'GB', 'TB'];
  let i = 0;
  let count = bytes;
  while (count >= 1024 && i < units.length - 1) {
    count /= 1024;
    i++;
  }
  return `~${count.toFixed(1)} ${units[i]}`;
}

export function formatDuration(seconds?: number): string {
  if (!seconds || seconds <= 0) return '00:00';
  const totalSec = Math.floor(seconds);
  const hours = Math.floor(totalSec / 3600);
  const minutes = Math.floor((totalSec % 3600) / 60);
  const sec = totalSec % 60;

  const pad = (n: number) => n.toString().padStart(2, '0');
  if (hours > 0) {
    return `${pad(hours)}:${pad(minutes)}:${pad(sec)}`;
  }
  return `${pad(minutes)}:${pad(sec)}`;
}

export function getPlatformGradient(platform: string): string {
  switch (platform) {
    case 'youtube':
    case 'youtube_playlist':
      return 'bg-red-600';
    case 'instagram':
      return 'bg-pink-600';
    case 'facebook':
      return 'bg-blue-600';
    case 'tiktok':
      return 'bg-slate-900';
    default:
      return 'bg-indigo-600';
  }
}

export function normalizeMediaUrl(raw: string): string | null {
  let value = raw.trim().replace(/^['"]+|['"]+$/g, '');
  if (!value) return null;
  if (!/^https?:\/\//i.test(value)) {
    value = `https://${value}`;
  }
  try {
    const parsed = new URL(value);
    if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') {
      return null;
    }
    return parsed.toString();
  } catch {
    return null;
  }
}

export function isYoutubePlaylistUrl(url: string): boolean {
  const normalized = normalizeMediaUrl(url);
  if (!normalized) return false;
  try {
    const parsed = new URL(normalized);
    const host = parsed.hostname.toLowerCase().replace(/^www\./, '');
    const isYt =
      host === 'youtu.be' ||
      host === 'youtube.com' ||
      host === 'm.youtube.com' ||
      host === 'music.youtube.com';
    if (!isYt) return false;
    if (parsed.pathname.toLowerCase().includes('/playlist')) return true;
    const hasList = parsed.searchParams.has('list');
    const hasVideoId =
      parsed.searchParams.has('v') ||
      host === 'youtu.be' ||
      parsed.pathname.toLowerCase().startsWith('/shorts/') ||
      parsed.pathname.toLowerCase().startsWith('/embed/');
    return hasList && !hasVideoId;
  } catch {
    return false;
  }
}

export function validateUrlForPlatform(
  url: string,
  expectedPlatform: 'youtube' | 'youtube_playlist' | 'instagram' | 'facebook' | 'tiktok'
): { valid: boolean; errorCode?: string; errorMessage?: string } {
  const v = (normalizeMediaUrl(url) || url).trim().toLowerCase();

  const isYt = v.includes('youtube.com') || v.includes('youtu.be');
  const isPlaylist = isYoutubePlaylistUrl(url);
  const isIg = v.includes('instagram.com');
  const isFb = v.includes('facebook.com') || v.includes('fb.watch');
  const isTt = v.includes('tiktok.com');

  if (expectedPlatform === 'tiktok') {
    if (isPlaylist) {
      return {
        valid: false,
        errorCode: 'PLATFORM_MISMATCH_PLAYLIST',
        errorMessage: 'This is a YouTube Playlist link. Please use our YouTube Playlist Downloader tool.',
      };
    }
    if (isYt) {
      return {
        valid: false,
        errorCode: 'PLATFORM_MISMATCH_YOUTUBE',
        errorMessage: 'This is a YouTube link. Please use our YouTube Video Downloader tool.',
      };
    }
    if (isIg) {
      return {
        valid: false,
        errorCode: 'PLATFORM_MISMATCH_INSTAGRAM',
        errorMessage: 'This is an Instagram link. Please use our Instagram Reel Downloader tool.',
      };
    }
    if (isFb) {
      return {
        valid: false,
        errorCode: 'PLATFORM_MISMATCH_FACEBOOK',
        errorMessage: 'This is a Facebook link. Please use our Facebook Reel Downloader tool.',
      };
    }
  }

  if (expectedPlatform === 'youtube') {
    if (isTt) {
      return {
        valid: false,
        errorCode: 'PLATFORM_MISMATCH_TIKTOK',
        errorMessage: 'This is a TikTok link. Please use our TikTok Video Downloader tool.',
      };
    }
    if (isPlaylist) {
      return {
        valid: false,
        errorCode: 'PLATFORM_MISMATCH_PLAYLIST',
        errorMessage: 'This is a YouTube Playlist link. Please use our YouTube Playlist Downloader tool.',
      };
    }
    if (isIg) {
      return {
        valid: false,
        errorCode: 'PLATFORM_MISMATCH_INSTAGRAM',
        errorMessage: 'This is an Instagram link. Please use our Instagram Reel Downloader tool.',
      };
    }
    if (isFb) {
      return {
        valid: false,
        errorCode: 'PLATFORM_MISMATCH_FACEBOOK',
        errorMessage: 'This is a Facebook link. Please use our Facebook Reel Downloader tool.',
      };
    }
  }

  if (expectedPlatform === 'youtube_playlist') {
    if (isTt) {
      return {
        valid: false,
        errorCode: 'PLATFORM_MISMATCH_TIKTOK',
        errorMessage: 'This is a TikTok link. Please use our TikTok Video Downloader tool.',
      };
    }
    if (isIg) {
      return {
        valid: false,
        errorCode: 'PLATFORM_MISMATCH_INSTAGRAM',
        errorMessage: 'This is an Instagram link. Please use our Instagram Reel Downloader tool.',
      };
    }
    if (isFb) {
      return {
        valid: false,
        errorCode: 'PLATFORM_MISMATCH_FACEBOOK',
        errorMessage: 'This is a Facebook link. Please use our Facebook Reel Downloader tool.',
      };
    }
    if (isYt && !isPlaylist) {
      return {
        valid: false,
        errorCode: 'PLATFORM_MISMATCH_YOUTUBE_VIDEO',
        errorMessage: 'This is a single YouTube video link. Please use our YouTube Video Downloader tool.',
      };
    }
  }

  if (expectedPlatform === 'instagram') {
    if (isTt) {
      return {
        valid: false,
        errorCode: 'PLATFORM_MISMATCH_TIKTOK',
        errorMessage: 'This is a TikTok link. Please use our TikTok Video Downloader tool.',
      };
    }
    if (isYt && isPlaylist) {
      return {
        valid: false,
        errorCode: 'PLATFORM_MISMATCH_PLAYLIST',
        errorMessage: 'This is a YouTube Playlist link. Please use our YouTube Playlist Downloader tool.',
      };
    }
    if (isYt) {
      return {
        valid: false,
        errorCode: 'PLATFORM_MISMATCH_YOUTUBE',
        errorMessage: 'This is a YouTube link. Please use our YouTube Video Downloader tool.',
      };
    }
    if (isFb) {
      return {
        valid: false,
        errorCode: 'PLATFORM_MISMATCH_FACEBOOK',
        errorMessage: 'This is a Facebook link. Please use our Facebook Reel Downloader tool.',
      };
    }
  }

  if (expectedPlatform === 'facebook') {
    if (isTt) {
      return {
        valid: false,
        errorCode: 'PLATFORM_MISMATCH_TIKTOK',
        errorMessage: 'This is a TikTok link. Please use our TikTok Video Downloader tool.',
      };
    }
    if (isYt && isPlaylist) {
      return {
        valid: false,
        errorCode: 'PLATFORM_MISMATCH_PLAYLIST',
        errorMessage: 'This is a YouTube Playlist link. Please use our YouTube Playlist Downloader tool.',
      };
    }
    if (isYt) {
      return {
        valid: false,
        errorCode: 'PLATFORM_MISMATCH_YOUTUBE',
        errorMessage: 'This is a YouTube link. Please use our YouTube Video Downloader tool.',
      };
    }
    if (isIg) {
      return {
        valid: false,
        errorCode: 'PLATFORM_MISMATCH_INSTAGRAM',
        errorMessage: 'This is an Instagram link. Please use our Instagram Reel Downloader tool.',
      };
    }
  }

  return { valid: true };
}
