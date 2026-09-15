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
  switch (platform.toLowerCase()) {
    case 'instagram':
      return 'bg-pink-600';
    case 'facebook':
      return 'bg-blue-600';
    case 'tiktok':
      return 'bg-zinc-900';
    case 'twitter':
    case 'x':
      return 'bg-sky-500';
    case 'vimeo':
      return 'bg-cyan-500';
    case 'dailymotion':
      return 'bg-blue-500';
    case 'reddit':
      return 'bg-orange-600';
    case 'pinterest':
      return 'bg-red-500';
    default:
      return 'bg-[#2563EB]';
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

export function validateUrlForPlatform(
  url: string,
  expectedPlatform: 'instagram' | 'facebook' | 'tiktok' | 'twitter' | 'vimeo' | 'dailymotion' | 'reddit' | 'pinterest'
): { valid: boolean; errorCode?: string; errorMessage?: string } {
  const v = (normalizeMediaUrl(url) || url).trim().toLowerCase();

  const isIg = v.includes('instagram.com');
  const isFb = v.includes('facebook.com') || v.includes('fb.watch');
  const isTt = v.includes('tiktok.com');
  const isTw = v.includes('twitter.com') || v.includes('x.com');
  const isVm = v.includes('vimeo.com');
  const isDm = v.includes('dailymotion.com') || v.includes('dai.ly');
  const isRd = v.includes('reddit.com') || v.includes('redd.it');
  const isPin = v.includes('pinterest.com') || v.includes('pin.it');

  if (expectedPlatform === 'tiktok' && !isTt) {
    if (isIg) return { valid: false, errorMessage: 'This is an Instagram link. Please use our Instagram Downloader tool.' };
    if (isFb) return { valid: false, errorMessage: 'This is a Facebook link. Please use our Facebook Downloader tool.' };
    if (isTw) return { valid: false, errorMessage: 'This is a Twitter / X link. Please use our Twitter Downloader tool.' };
  }

  if (expectedPlatform === 'instagram' && !isIg) {
    if (isTt) return { valid: false, errorMessage: 'This is a TikTok link. Please use our TikTok Downloader tool.' };
    if (isFb) return { valid: false, errorMessage: 'This is a Facebook link. Please use our Facebook Downloader tool.' };
  }

  if (expectedPlatform === 'facebook' && !isFb) {
    if (isTt) return { valid: false, errorMessage: 'This is a TikTok link. Please use our TikTok Downloader tool.' };
    if (isIg) return { valid: false, errorMessage: 'This is an Instagram link. Please use our Instagram Downloader tool.' };
  }

  if (expectedPlatform === 'twitter' && !isTw) {
    if (isTt) return { valid: false, errorMessage: 'This is a TikTok link. Please use our TikTok Downloader tool.' };
    if (isIg) return { valid: false, errorMessage: 'This is an Instagram link. Please use our Instagram Downloader tool.' };
  }

  if (expectedPlatform === 'vimeo' && !isVm) {
    if (isTt || isIg || isFb) return { valid: false, errorMessage: 'Please paste a valid Vimeo video URL.' };
  }

  if (expectedPlatform === 'dailymotion' && !isDm) {
    if (isTt || isIg || isFb) return { valid: false, errorMessage: 'Please paste a valid Dailymotion video URL.' };
  }

  if (expectedPlatform === 'reddit' && !isRd) {
    if (isTt || isIg || isFb) return { valid: false, errorMessage: 'Please paste a valid Reddit post URL.' };
  }

  if (expectedPlatform === 'pinterest' && !isPin) {
    if (isTt || isIg || isFb) return { valid: false, errorMessage: 'Please paste a valid Pinterest pin URL.' };
  }

  return { valid: true };
}

