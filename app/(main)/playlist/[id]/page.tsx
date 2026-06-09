import { PlaylistPage } from '@/components/features/Playlist';
import type { Playlist } from '@/types/music';

async function getPlaylist(id: string): Promise<Playlist> {
  return {
    id,
    name: 'Liked Songs',
    description: 'Your liked songs',
    coverUrl: '',
    owner: { id: 'user-1', name: 'User' },
    tracks: [],
    public: false,
    followers: 0,
    totalTracks: 0,
  };
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const playlist = await getPlaylist(id);
  return <PlaylistPage playlist={playlist} />;
}
