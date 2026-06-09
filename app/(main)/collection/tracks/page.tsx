import { PlaylistPage } from '@/components/features/Playlist';

const LIKED_SONGS_PLACEHOLDER = {
  id: 'liked-songs',
  name: 'Liked Songs',
  description: '',
  owner: { id: 'user', name: 'You' },
  tracks: [],
  public: false,
};

export default function Page() {
  return <PlaylistPage playlist={LIKED_SONGS_PLACEHOLDER} />;
}
