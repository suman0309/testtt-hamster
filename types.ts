export interface MediaItem {
  id: string;
  url: string;
  type: 'image' | 'video';
  file?: File;
  caption?: string;
}

export interface Coordinates {
  x: number;
  y: number;
}
