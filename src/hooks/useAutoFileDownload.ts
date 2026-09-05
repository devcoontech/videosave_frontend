import { useEffect, useRef } from 'react';
import { DownloadProgressEvent } from '../types/media';
import { getDownloadFileUrl } from '../../services/api';

export function useAutoFileDownload(
  jobId: string | null,
  progressData: DownloadProgressEvent | null
) {
  const savedJobIds = useRef<Set<string>>(new Set());

  useEffect(() => {
    if (!jobId || !progressData) return;
    if (progressData.job_id !== jobId) return;
    if (progressData.status !== 'completed') return;
    if (savedJobIds.current.has(jobId)) return;

    savedJobIds.current.add(jobId);

    const link = document.createElement('a');
    link.href = getDownloadFileUrl(jobId);
    link.download = progressData.filename || '';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, [jobId, progressData]);
}
