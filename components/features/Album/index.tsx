import { TopBar } from '@/components/layout/TopBar';
import { AlbumHeader } from './AlbumHeader';
import { TrackList } from './TrackList';
import type { Album } from '@/types/music';

interface AlbumPageProps {
  album: Album;
}

export function AlbumPage({ album }: AlbumPageProps) {
  return (
    <>
      <TopBar transparent />
      <div className="flex-1 overflow-y-auto">
        <AlbumHeader album={album} />
        <TrackList tracks={album.tracks} />
      </div>
    </>
  );
}
