export const SIDEBAR_WIDTH = 280;
export const PLAYER_HEIGHT = 72;

export const SPOTIFY_GREEN = '#1DB954';
export const SPOTIFY_BLACK = '#000000';
export const SPOTIFY_DARK = '#121212';
export const SPOTIFY_SURFACE = '#181818';
export const SPOTIFY_HIGHLIGHT = '#282828';
export const SPOTIFY_TEXT_SUBDUED = '#A7A7A7';

export const CATEGORY_COLORS: Record<string, string> = {
  pop: '#8400e7',
  'hip-hop': '#ba5d07',
  rock: '#e61e32',
  indie: '#477d95',
  electronic: '#0d73ec',
  'r-n-b': '#e91429',
  latin: '#e8115b',
  country: '#1e3264',
  jazz: '#503750',
  classical: '#27856a',
  metal: '#1e3264',
  punk: '#e61e32',
  podcasts: '#8d67ab',
  'new-releases': '#e61e32',
  charts: '#1e3264',
  mood: '#1e3264',
  party: '#e8115b',
  chill: '#477d95',
  workout: '#e61e32',
  focus: '#0d73ec',
};

export const LIBRARY_FILTERS = ['Playlists', 'Podcasts & Shows', 'Albums', 'Artists'] as const;
export type LibraryFilter = (typeof LIBRARY_FILTERS)[number];
