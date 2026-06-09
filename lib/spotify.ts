import type { Artist, Album, Track, Playlist, Category } from '@/types/music';
import { CATEGORY_COLORS } from './constants';

// ─── Spotify API Response Types ──────────────────────────────────────────────

interface SpotifyImage {
  url: string;
  height: number | null;
  width: number | null;
}

interface SpotifySimplifiedArtist {
  id: string;
  name: string;
}

interface SpotifyArtist extends SpotifySimplifiedArtist {
  followers: { href: null; total: number };
  genres: string[];
  images: SpotifyImage[];
  popularity: number;
  type: 'artist';
  uri: string;
}

interface SpotifySimplifiedAlbum {
  id: string;
  name: string;
  album_type: 'album' | 'single' | 'compilation';
  release_date: string;
  images: SpotifyImage[];
  artists: SpotifySimplifiedArtist[];
  total_tracks: number;
}

interface SpotifySimplifiedTrack {
  id: string;
  name: string;
  duration_ms: number;
  explicit: boolean;
  track_number: number;
  disc_number: number;
  preview_url: string | null;
  artists: SpotifySimplifiedArtist[];
}

interface SpotifyTrack extends SpotifySimplifiedTrack {
  album: SpotifySimplifiedAlbum;
  popularity: number;
}

interface SpotifyAlbum extends SpotifySimplifiedAlbum {
  tracks: { items: SpotifySimplifiedTrack[]; total: number };
  genres: string[];
  label: string;
  popularity: number;
}

interface SpotifySimplifiedPlaylist {
  id: string;
  name: string;
  description: string | null;
  images: SpotifyImage[];
  owner: { id: string; display_name: string };
  public: boolean | null;
  tracks: { href: string; total: number };
}

interface SpotifyPlaylist extends SpotifySimplifiedPlaylist {
  followers: { total: number };
  tracks: {
    items: Array<{ track: SpotifyTrack | null; added_at: string }>;
    total: number;
    href: string;
  };
}

interface SpotifyCategory {
  id: string;
  name: string;
  icons: SpotifyImage[];
}

// ─── Token Management ─────────────────────────────────────────────────────────

let cachedToken: { access_token: string; expires_at: number } | null = null;

async function getAccessToken(): Promise<string> {
  if (cachedToken && Date.now() < cachedToken.expires_at) {
    return cachedToken.access_token;
  }

  const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } = process.env;
  if (!SPOTIFY_CLIENT_ID || !SPOTIFY_CLIENT_SECRET) {
    console.error('[Spotify] Missing env vars — set SPOTIFY_CLIENT_ID and SPOTIFY_CLIENT_SECRET in .env.local');
    throw new Error('Missing SPOTIFY_CLIENT_ID or SPOTIFY_CLIENT_SECRET env vars');
  }
  console.log('[Spotify] Requesting new access token...');

  const credentials = Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString('base64');
  const res = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${credentials}`,
    },
    body: 'grant_type=client_credentials',
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error(`Spotify token request failed: ${res.status} ${res.statusText}`);
  }

  const data = await res.json();
  cachedToken = {
    access_token: data.access_token,
    expires_at: Date.now() + (data.expires_in - 60) * 1000,
  };
  console.log('[Spotify] Token obtained, expires in', data.expires_in, 's');
  return cachedToken.access_token;
}

// ─── Core Fetcher ─────────────────────────────────────────────────────────────

async function spotifyFetch<T>(
  path: string,
  params: Record<string, string> = {}
): Promise<T> {
  const token = await getAccessToken();
  const url = new URL(`https://api.spotify.com/v1${path}`);
  Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v));

  const res = await fetch(url.toString(), {
    headers: { Authorization: `Bearer ${token}` },
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    const body = await res.text().catch(() => '');
    console.error(`[Spotify] ${path} → ${res.status} ${res.statusText}`, body.slice(0, 200));
    throw new Error(`Spotify API ${path} failed: ${res.status} ${res.statusText}`);
  }

  return res.json() as Promise<T>;
}

// ─── Mappers ──────────────────────────────────────────────────────────────────

function mapSimplifiedArtist(a: SpotifySimplifiedArtist): Artist {
  return { id: a.id, name: a.name };
}

function mapArtist(a: SpotifyArtist): Artist {
  return {
    id: a.id,
    name: a.name,
    imageUrl: a.images?.[0]?.url,
    followers: a.followers?.total,
    verified: (a.followers?.total ?? 0) > 1_000_000,
  };
}

function mapSimplifiedAlbumBase(a: SpotifySimplifiedAlbum): Omit<Album, 'tracks'> {
  return {
    id: a.id,
    name: a.name,
    artists: a.artists.map(mapSimplifiedArtist),
    coverUrl: a.images?.[0]?.url ?? '',
    year: new Date(a.release_date).getFullYear(),
    type: a.album_type === 'single' ? 'single' : 'album',
  };
}

function mapAlbumTrack(t: SpotifySimplifiedTrack, album: Album): Track {
  return {
    id: t.id,
    name: t.name,
    artists: t.artists.map(mapSimplifiedArtist),
    album,
    durationMs: t.duration_ms,
    explicit: t.explicit,
    trackNumber: t.track_number,
    previewUrl: t.preview_url ?? undefined,
  };
}

function mapTrack(t: SpotifyTrack): Track {
  const partialAlbum: Album = { ...mapSimplifiedAlbumBase(t.album), tracks: [] };
  return {
    id: t.id,
    name: t.name,
    artists: t.artists.map(mapSimplifiedArtist),
    album: partialAlbum,
    durationMs: t.duration_ms,
    explicit: t.explicit,
    trackNumber: t.track_number,
    previewUrl: t.preview_url ?? undefined,
  };
}

const FALLBACK_COLORS = [
  '#8400e7', '#ba5d07', '#e61e32', '#477d95', '#0d73ec',
  '#e91429', '#e8115b', '#1e3264', '#503750', '#27856a',
];

// ─── Public API Functions ─────────────────────────────────────────────────────

export async function getNewReleases(limit = 20): Promise<Album[]> {
  const data = await spotifyFetch<{ albums: { items: SpotifySimplifiedAlbum[] } }>(
    '/browse/new-releases',
    { limit: String(limit) }
  );
  return data.albums.items.map(a => ({ ...mapSimplifiedAlbumBase(a), tracks: [] }));
}

export async function searchPlaylists(q: string, limit = 8): Promise<Playlist[]> {
  const data = await spotifyFetch<{ playlists: { items: (SpotifySimplifiedPlaylist | null)[] } }>(
    '/search',
    { q, type: 'playlist', limit: String(limit), market: 'VN' }
  );
  return (data.playlists?.items ?? [])
    .filter((p): p is SpotifySimplifiedPlaylist => p !== null)
    .map(p => ({
      id: p.id,
      name: p.name,
      description: p.description ?? undefined,
      coverUrl: p.images?.[0]?.url,
      owner: { id: p.owner.id, name: p.owner.display_name ?? 'Spotify' },
      tracks: [],
      public: p.public ?? true,
      totalTracks: p.tracks?.total ?? 0,
    }));
}

export async function getAlbum(id: string): Promise<Album> {
  const data = await spotifyFetch<SpotifyAlbum>(`/albums/${id}`, { market: 'VN' });
  const album: Album = {
    id: data.id,
    name: data.name,
    artists: data.artists.map(mapSimplifiedArtist),
    coverUrl: data.images?.[0]?.url ?? '',
    year: new Date(data.release_date).getFullYear(),
    type: data.album_type === 'single' ? 'single' : 'album',
    tracks: [],
  };
  album.tracks = data.tracks.items.map(t => mapAlbumTrack(t, album));
  return album;
}

export async function getArtist(id: string): Promise<Artist> {
  const data = await spotifyFetch<SpotifyArtist>(`/artists/${id}`);
  return mapArtist(data);
}

export async function getArtistTopTracks(id: string): Promise<Track[]> {
  const data = await spotifyFetch<{ tracks: SpotifyTrack[] }>(
    `/artists/${id}/top-tracks`,
    { market: 'VN' }
  );
  return data.tracks.map(mapTrack);
}

export async function getArtistAlbums(id: string, limit = 10): Promise<Album[]> {
  const data = await spotifyFetch<{ items: SpotifySimplifiedAlbum[] }>(
    `/artists/${id}/albums`,
    { limit: String(limit), market: 'VN', include_groups: 'album,single' }
  );
  return data.items.map(a => ({ ...mapSimplifiedAlbumBase(a), tracks: [] }));
}

export async function getPlaylist(id: string): Promise<Playlist> {
  const data = await spotifyFetch<SpotifyPlaylist>(`/playlists/${id}`);
  const playlist: Playlist = {
    id: data.id,
    name: data.name,
    description: data.description ?? undefined,
    coverUrl: data.images?.[0]?.url,
    owner: { id: data.owner.id, name: data.owner.display_name ?? 'Spotify' },
    tracks: [],
    public: data.public ?? true,
    followers: data.followers?.total,
    totalTracks: data.tracks?.total ?? 0,
  };

  playlist.tracks = data.tracks.items
    .filter((item): item is { track: SpotifyTrack; added_at: string } => item.track?.id != null)
    .map(item => {
      const t = item.track;
      const partialAlbum: Album = { ...mapSimplifiedAlbumBase(t.album), tracks: [] };
      return mapAlbumTrack(t, partialAlbum);
    });

  return playlist;
}

export async function searchCategories(limit = 20): Promise<Category[]> {
  // /browse/categories was removed by Spotify (Nov 2023). Use search to get genre-based content.
  const queries = ['pop', 'hip-hop', 'rock', 'indie', 'electronic', 'r&b', 'latin', 'country', 'jazz', 'classical'];
  return queries.slice(0, limit).map((genre, i) => ({
    id: genre,
    name: genre.charAt(0).toUpperCase() + genre.slice(1),
    color: CATEGORY_COLORS[genre] ?? FALLBACK_COLORS[i % FALLBACK_COLORS.length],
  }));
}

export async function search(
  q: string,
  types: ('track' | 'artist' | 'album')[],
  limit = 10
): Promise<{ tracks: Track[]; artists: Artist[]; albums: Album[] }> {
  const data = await spotifyFetch<{
    tracks?: { items: SpotifyTrack[] };
    artists?: { items: SpotifyArtist[] };
    albums?: { items: SpotifySimplifiedAlbum[] };
  }>('/search', {
    q,
    type: types.join(','),
    limit: String(limit),
    market: 'VN',
  });

  return {
    tracks: (data.tracks?.items ?? []).map(mapTrack),
    artists: (data.artists?.items ?? []).map(mapArtist),
    albums: (data.albums?.items ?? []).map(a => ({ ...mapSimplifiedAlbumBase(a), tracks: [] })),
  };
}

export async function getTrack(id: string): Promise<Track> {
  const data = await spotifyFetch<SpotifyTrack>(`/tracks/${id}`, { market: 'VN' });
  return mapTrack(data);
}

export async function getMultipleArtists(ids: string[]): Promise<Artist[]> {
  if (ids.length === 0) return [];
  const data = await spotifyFetch<{ artists: (SpotifyArtist | null)[] }>(
    '/artists',
    { ids: ids.slice(0, 50).join(',') }
  );
  return data.artists.filter((a): a is SpotifyArtist => a !== null).map(mapArtist);
}

export async function getPlaylistMetadata(id: string): Promise<Pick<Playlist, 'id' | 'name' | 'description' | 'coverUrl' | 'owner'>> {
  const data = await spotifyFetch<SpotifySimplifiedPlaylist>(`/playlists/${id}`, {
    fields: 'id,name,description,images,owner',
  });
  return {
    id: data.id,
    name: data.name,
    description: data.description ?? undefined,
    coverUrl: data.images?.[0]?.url,
    owner: { id: data.owner.id, name: data.owner.display_name ?? 'Spotify' },
  };
}
