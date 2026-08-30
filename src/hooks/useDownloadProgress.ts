import { useState, useEffect, useRef } from 'react';
import { DownloadProgressEvent } from '../types/media';
import { getDownloadStatus } from '../services/api';

export function useDownloadProgress(jobId: string | null) {
  const [progressData, setProgressData] = useState<DownloadProgressEvent | null>(null);
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const wsRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    setProgressData(null);
    if (!jobId) {
      return;
    }

    let pollInterval: any = null;
    let isJobFinished = false;

    const startPollingFallback = () => {
      if (pollInterval || isJobFinished) return;
      pollInterval = setInterval(async () => {
        try {
          const job = await getDownloadStatus(jobId);
          setProgressData({
            job_id: job.id,
            status: job.status,
            progress: job.progress,
            speed: job.speed,
            eta: job.eta,
            downloaded_bytes: job.downloaded_bytes,
            total_bytes: job.total_bytes,
            filename: job.filename,
            error: job.error,
          });

          if (job.status === 'completed' || job.status === 'failed') {
            isJobFinished = true;
            if (pollInterval) clearInterval(pollInterval);
          }
        } catch (e) {
          // If job 404s or server restarted, stop polling
          if (pollInterval) clearInterval(pollInterval);
        }
      }, 1000);
    };

    // Construct WebSocket URL dynamically (supports Render / Vercel / local dev)
    let wsUrl: string;
    const envApiUrl = process.env.NEXT_PUBLIC_API_URL;
    if (envApiUrl && envApiUrl.startsWith('http')) {
      try {
        const parsedUrl = new URL(envApiUrl);
        const wsProtocol = parsedUrl.protocol === 'https:' ? 'wss:' : 'ws:';
        wsUrl = `${wsProtocol}//${parsedUrl.host}/ws/download/${jobId}`;
      } catch (e) {
        const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
        const hostname = window.location.hostname || '127.0.0.1';
        wsUrl = `${protocol}//${hostname}:8000/ws/download/${jobId}`;
      }
    } else {
      const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
      const hostname = window.location.hostname || '127.0.0.1';
      wsUrl = `${protocol}//${hostname}:8000/ws/download/${jobId}`;
    }

    try {
      const ws = new WebSocket(wsUrl);
      wsRef.current = ws;

      ws.onopen = () => {
        setIsConnected(true);
      };

      ws.onmessage = (event) => {
        try {
          const data: DownloadProgressEvent = JSON.parse(event.data);
          setProgressData(data);
          if (data.status === 'completed' || data.status === 'failed') {
            isJobFinished = true;
            if (pollInterval) clearInterval(pollInterval);
          }
        } catch (e) {
          console.error('Failed to parse WebSocket progress payload', e);
        }
      };

      ws.onerror = () => {
        setIsConnected(false);
        startPollingFallback();
      };

      ws.onclose = () => {
        setIsConnected(false);
        if (!isJobFinished) {
          startPollingFallback();
        }
      };
    } catch (e) {
      startPollingFallback();
    }

    return () => {
      if (pollInterval) clearInterval(pollInterval);
      if (wsRef.current && (wsRef.current.readyState === WebSocket.OPEN || wsRef.current.readyState === WebSocket.CONNECTING)) {
        wsRef.current.close();
      }
    };
  }, [jobId]);

  return { progressData, isConnected };
}
