export interface Artist {
  id: string;
  name: string;
  imageUrl?: string;
  followers?: number;
  verified?: boolean;
}

export interface Album {
  id: string;
  name: string;
  artists: Artist[];
  coverUrl: string;
  year: number;
  tracks: Track[];
  type: 'album' | 'single' | 'ep';
}

export interface Track {
  id: string;
  name: string;
  artists: Artist[];
  album: Album;
  durationMs: number;
  explicit?: boolean;
  trackNumber?: number;
  previewUrl?: string;
}

export interface Playlist {
  id: string;
  name: string;
  description?: string;
  coverUrl?: string;
  owner: { id: string; name: string };
  tracks: Track[];
  public: boolean;
  followers?: number;
  totalTracks?: number;
}

export interface Category {
  id: string;
  name: string;
  color: string;
  imageUrl?: string;
}

export interface LibraryItem {
  id: string;
  type: 'playlist' | 'album' | 'artist' | 'podcast';
  name: string;
  subtitle: string;
  imageUrl?: string;
  pinned?: boolean;
}

export interface Section<T> {
  id: string;
  title: string;
  items: T[];
  href?: string;
}
