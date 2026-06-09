'use client';

import { useState } from 'react';
import type { LibraryItem } from '@/types/music';
import type { LibraryFilter } from '@/lib/constants';

const MOCK_LIBRARY: LibraryItem[] = [
  { id: '1', type: 'playlist', name: 'Liked Songs', subtitle: 'Playlist • 245 songs', pinned: true },
  { id: '2', type: 'playlist', name: 'Chill Vibes', subtitle: 'Playlist • You', imageUrl: '' },
  { id: '3', type: 'album', name: 'After Hours', subtitle: 'Album • The Weeknd', imageUrl: '' },
  { id: '4', type: 'artist', name: 'Drake', subtitle: 'Artist', imageUrl: '' },
  { id: '5', type: 'playlist', name: 'Top Hits 2024', subtitle: 'Playlist • Spotify', imageUrl: '' },
  { id: '6', type: 'podcast', name: 'Lex Fridman Podcast', subtitle: 'Podcast • Lex Fridman', imageUrl: '' },
];

export function useLibrary() {
  const [items] = useState<LibraryItem[]>(MOCK_LIBRARY);
  const [activeFilter, setActiveFilter] = useState<LibraryFilter | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = items.filter(item => {
    if (activeFilter === 'Playlists' && item.type !== 'playlist') return false;
    if (activeFilter === 'Podcasts & Shows' && item.type !== 'podcast') return false;
    if (activeFilter === 'Albums' && item.type !== 'album') return false;
    if (activeFilter === 'Artists' && item.type !== 'artist') return false;
    if (searchQuery) return item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return true;
  });

  return { items: filtered, activeFilter, setActiveFilter, searchQuery, setSearchQuery };
}
