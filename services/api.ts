import axios from 'axios';
import { MediaInfo, DownloadJob, PlaylistInfo } from '../src/types/media';

const envApiUrl = typeof process !== 'undefined' ? process.env?.NEXT_PUBLIC_API_URL : undefined;
const API_BASE_URL = envApiUrl
  ? (envApiUrl.endsWith('/api') ? envApiUrl : `${envApiUrl.replace(/\/$/, '')}/api`)
  : '/api';

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 180000,
  headers: {
    'Content-Type': 'application/json',
  },
});

function throwApiError(error: any, fallbackCode: string, fallbackMessage: string): never {
  const detail = error?.response?.data?.detail;
  if (detail && typeof detail === 'object' && !Array.isArray(detail) && (detail.code || detail.message)) {
    throw {
      code: detail.code || fallbackCode,
      message: detail.message || fallbackMessage,
    };
  }
  if (Array.isArray(detail) && detail[0]?.msg) {
    throw { code: fallbackCode, message: detail[0].msg };
  }
  if (typeof detail === 'string') {
    throw { code: fallbackCode, message: detail };
  }
  throw {
    code: error?.code === 'ECONNABORTED' ? 'REQUEST_TIMEOUT' : fallbackCode,
    message: error?.message || fallbackMessage,
  };
}

export async function getMediaInfo(url: string): Promise<MediaInfo> {
  try {
    const response = await apiClient.post<MediaInfo>('/media/info', { url });
    return response.data;
  } catch (error: any) {
    throwApiError(error, 'NETWORK_ERROR', 'Unable to connect to the backend server.');
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
    throwApiError(error, 'DOWNLOAD_FAILED', 'Failed to initialize download request.');
  }
}

export async function getDownloadStatus(jobId: string): Promise<DownloadJob> {
  try {
    const response = await apiClient.get<DownloadJob>(`/download/${jobId}`);
    return response.data;
  } catch (error: any) {
    throwApiError(error, 'STATUS_CHECK_FAILED', 'Could not retrieve job status.');
  }
}

export async function getPlaylistInfo(url: string): Promise<PlaylistInfo> {
  try {
    const response = await apiClient.post<PlaylistInfo>('/playlist/info', { url });
    return response.data;
  } catch (error: any) {
    throwApiError(error, 'PLAYLIST_FAILED', 'Could not extract playlist entries.');
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
    throwApiError(error, 'PLAYLIST_DOWNLOAD_FAILED', 'Failed to start playlist batch download.');
  }
}

export async function cancelPlaylistDownload(playlistJobId: string): Promise<{ success: boolean; message: string }> {
  try {
    const response = await apiClient.post<{ success: boolean; message: string }>(`/playlist/job/${playlistJobId}/cancel`);
    return response.data;
  } catch (error: any) {
    throwApiError(error, 'CANCEL_FAILED', 'Failed to cancel playlist download.');
  }
}

export function getDownloadFileUrl(jobId: string): string {
  return `${API_BASE_URL}/download/${jobId}/file`;
}
