import { TopBar } from '@/components/layout/TopBar';
import { PlaylistHeader } from './PlaylistHeader';
import { PlaylistTrackList } from './PlaylistTrackList';
import type { Playlist } from '@/types/music';

interface PlaylistPageProps {
  playlist: Playlist;
}

export function PlaylistPage({ playlist }: PlaylistPageProps) {
  return (
    <>
      <TopBar transparent />
      <div className="flex-1 overflow-y-auto">
        <PlaylistHeader playlist={playlist} />
        <PlaylistTrackList tracks={playlist.tracks} />
      </div>
    </>
  );
}
