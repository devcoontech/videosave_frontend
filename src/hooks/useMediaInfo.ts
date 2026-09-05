import { useState } from 'react';
import { MediaInfo, ApiError } from '../types/media';
import { getMediaInfo } from '../services/api';

export function useMediaInfo() {
  const [loading, setLoading] = useState<boolean>(false);
  const [mediaInfo, setMediaInfo] = useState<MediaInfo | null>(null);
  const [error, setError] = useState<ApiError | null>(null);

  const fetchInfo = async (url: string) => {
    setLoading(true);
    setError(null);
    setMediaInfo(null);

    try {
      const data = await getMediaInfo(url);
      setMediaInfo(data);
    } catch (err: any) {
      const code = typeof err?.code === 'string' ? err.code : 'EXTRACTION_FAILED';
      const message =
        typeof err?.message === 'string' && err.message
          ? err.message
          : 'Failed to fetch media details. Check the URL and try again.';
      setError({ code, message });
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setLoading(false);
    setMediaInfo(null);
    setError(null);
  };

  return { loading, mediaInfo, error, fetchInfo, reset };
}
