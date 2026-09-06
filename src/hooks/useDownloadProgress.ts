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

    let pollInterval: ReturnType<typeof setInterval> | null = null;
    let isJobFinished = false;

    const applyJob = (job: {
      id: string;
      status: DownloadProgressEvent['status'];
      progress: number;
      speed?: string;
      eta?: string;
      downloaded_bytes: number;
      total_bytes?: number;
      filename?: string;
      error?: string;
    }) => {
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
        if (pollInterval) {
          clearInterval(pollInterval);
          pollInterval = null;
        }
      }
    };

    const pollOnce = async () => {
      if (isJobFinished) return;
      try {
        const job = await getDownloadStatus(jobId);
        applyJob(job);
      } catch (error: any) {
        if (error?.code === 'RATE_LIMIT_EXCEEDED' || error?.response?.status === 429) {
          return;
        }
        if (error?.code === 'FILE_NOT_FOUND' || error?.response?.status === 404) {
          isJobFinished = true;
          if (pollInterval) {
            clearInterval(pollInterval);
            pollInterval = null;
          }
        }
      }
    };

    const startPollingFallback = () => {
      if (pollInterval || isJobFinished) return;
      void pollOnce();
      pollInterval = setInterval(() => {
        void pollOnce();
      }, 1500);
    };

    let wsUrl: string;
    const envWsUrl = process.env.NEXT_PUBLIC_WS_URL;
    const envApiUrl = process.env.NEXT_PUBLIC_API_URL;
    if (envWsUrl) {
      wsUrl = `${envWsUrl.replace(/\/$/, '')}/ws/download/${jobId}`;
    } else if (envApiUrl && envApiUrl.startsWith('http')) {
      try {
        const parsedUrl = new URL(envApiUrl);
        const wsProtocol = parsedUrl.protocol === 'https:' ? 'wss:' : 'ws:';
        wsUrl = `${wsProtocol}//${parsedUrl.host}/ws/download/${jobId}`;
      } catch (e) {
        const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
        if (window.location.port === '3000' || window.location.port === '5173') {
          wsUrl = `${protocol}//${window.location.hostname}:8000/ws/download/${jobId}`;
        } else {
          wsUrl = `${protocol}//${window.location.host}/ws/download/${jobId}`;
        }
      }
    } else if (typeof window !== 'undefined') {
      const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
      if (window.location.port === '3000' || window.location.port === '5173') {
        wsUrl = `${protocol}//${window.location.hostname}:8000/ws/download/${jobId}`;
      } else {
        wsUrl = `${protocol}//${window.location.host}/ws/download/${jobId}`;
      }
    } else {
      wsUrl = `ws://127.0.0.1:8000/ws/download/${jobId}`;
    }

    startPollingFallback();

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
            if (pollInterval) {
              clearInterval(pollInterval);
              pollInterval = null;
            }
          }
        } catch (e) {
          console.error('Failed to parse WebSocket progress payload', e);
        }
      };

      ws.onerror = () => {
        setIsConnected(false);
      };

      ws.onclose = () => {
        setIsConnected(false);
      };
    } catch (e) {
      // Polling already started
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
