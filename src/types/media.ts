export interface MediaFormat {
  format_id: string;
  quality: string;
  height?: number;
  width?: number;
  fps?: number;
  ext: string;
  has_video: boolean;
  has_audio: boolean;
  filesize?: number;
  filesize_approx?: number;
}

export interface MediaInfo {
  success: boolean;
  platform: 'youtube' | 'youtube_playlist' | 'instagram' | 'facebook' | 'unsupported';
  type: 'video' | 'reel' | 'playlist';
  id: string;
  title: string;
  thumbnail?: string;
  duration?: number;
  uploader?: string;
  webpage_url: string;
  formats: MediaFormat[];
}

export interface PlaylistItem {
  id: string;
  url: string;
  title: string;
  thumbnail?: string;
  duration?: number;
  index: number;
}

export interface PlaylistInfo {
  success: boolean;
  playlist_id: string;
  title: string;
  uploader?: string;
  total_videos: number;
  videos: PlaylistItem[];
}

export type JobStatus =
  | 'queued'
  | 'extracting'
  | 'downloading'
  | 'processing'
  | 'completed'
  | 'failed'
  | 'cancelled';

export interface DownloadJob {
  id: string;
  url: string;
  platform: string;
  status: JobStatus;
  progress: number;
  downloaded_bytes: number;
  total_bytes?: number;
  speed?: string;
  eta?: string;
  title?: string;
  filename?: string;
  filepath?: string;
  error?: string;
}

export interface DownloadProgressEvent {
  job_id: string;
  status: JobStatus;
  progress: number;
  speed?: string;
  eta?: string;
  downloaded_bytes: number;
  total_bytes?: number;
  filename?: string;
  error?: string;
}

export interface ApiError {
  code: string;
  message: string;
}
