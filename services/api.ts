import axios from 'axios';
import { MediaInfo, DownloadJob, PlaylistInfo } from '../src/types/media';

const envApiUrl = typeof process !== 'undefined' ? process.env?.NEXT_PUBLIC_API_URL : undefined;
const API_BASE_URL = envApiUrl
  ? (envApiUrl.endsWith('/api') ? envApiUrl : `${envApiUrl.replace(/\/$/, '')}/api`)
  : '/api';

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export async function getMediaInfo(url: string): Promise<MediaInfo> {
  try {
    const response = await apiClient.post<MediaInfo>('/media/info', { url });
    return response.data;
  } catch (error: any) {
    if (error.response?.data?.detail) {
      throw error.response.data.detail;
    }
    throw { code: 'NETWORK_ERROR', message: 'Unable to connect to the backend server.' };
  }
}

export async function createDownload(url: string, formatId: string): Promise<{ success: boolean; job_id: string }> {
  try {
    const response = await apiClient.post<{ success: boolean; job_id: string }>('/download', {
      url,
      format_id: formatId,
    });
    return response.data;
  } catch (error: any) {
    if (error.response?.data?.detail) {
      throw error.response.data.detail;
    }
    throw { code: 'DOWNLOAD_FAILED', message: 'Failed to initialize download request.' };
  }
}

export async function getDownloadStatus(jobId: string): Promise<DownloadJob> {
  try {
    const response = await apiClient.get<DownloadJob>(`/download/${jobId}`);
    return response.data;
  } catch (error: any) {
    if (error.response?.data?.detail) {
      throw error.response.data.detail;
    }
    throw { code: 'STATUS_CHECK_FAILED', message: 'Could not retrieve job status.' };
  }
}

export async function getPlaylistInfo(url: string): Promise<PlaylistInfo> {
  try {
    const response = await apiClient.post<PlaylistInfo>('/playlist/info', { url });
    return response.data;
  } catch (error: any) {
    if (error.response?.data?.detail) {
      throw error.response.data.detail;
    }
    throw { code: 'PLAYLIST_FAILED', message: 'Could not extract playlist entries.' };
  }
}

export async function createPlaylistDownload(
  playlistUrl: string,
  videoUrls: string[],
  quality: string = 'best',
  playlistJobId?: string | null
): Promise<{ success: boolean; playlist_job_id: string }> {
  try {
    const response = await apiClient.post<{ success: boolean; playlist_job_id: string }>('/playlist/download', {
      playlist_url: playlistUrl,
      video_urls: videoUrls,
      quality,
      format_id: quality,
      playlist_job_id: playlistJobId || undefined,
    });
    return response.data;
  } catch (error: any) {
    if (error.response?.data?.detail) {
      throw error.response.data.detail;
    }
    throw { code: 'PLAYLIST_DOWNLOAD_FAILED', message: 'Failed to start playlist batch download.' };
  }
}

export async function cancelPlaylistDownload(playlistJobId: string): Promise<{ success: boolean; message: string }> {
  try {
    const response = await apiClient.post<{ success: boolean; message: string }>(`/playlist/job/${playlistJobId}/cancel`);
    return response.data;
  } catch (error: any) {
    if (error.response?.data?.detail) {
      throw error.response.data.detail;
    }
    throw { code: 'CANCEL_FAILED', message: 'Failed to cancel playlist download.' };
  }
}

export function getDownloadFileUrl(jobId: string): string {
  return `${API_BASE_URL}/download/${jobId}/file`;
}
