export function downloadProgressLabel(status?: string | null, formatId?: string): string {
  const isMp3 = (formatId || '').toLowerCase() === 'mp3';
  switch (status) {
    case 'completed':
      return 'Download ready! Auto-saving file...';
    case 'failed':
      return 'Download failed.';
    case 'processing':
      return isMp3 ? 'Converting to MP3...' : 'Merging video and audio...';
    case 'extracting':
      return 'Preparing download...';
    default:
      return isMp3 ? 'Downloading audio...' : 'Downloading video...';
  }
}
