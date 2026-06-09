import { TopBar } from '@/components/layout/TopBar';
import { ArtistHeader } from './ArtistHeader';
import { PopularTracks } from './PopularTracks';
import { DiscographySection } from './DiscographySection';
import type { Artist, Track, Album } from '@/types/music';

interface ArtistPageProps {
  artist: Artist;
  popularTracks: Track[];
  albums: Album[];
}

export function ArtistPage({ artist, popularTracks, albums }: ArtistPageProps) {
  return (
    <>
      <TopBar transparent />
      <div className="flex-1 overflow-y-auto">
        <ArtistHeader artist={artist} topTrack={popularTracks[0]} />
        <div className="px-0 py-6 space-y-8">
          <PopularTracks tracks={popularTracks} />
          {albums.length > 0 && <DiscographySection albums={albums} />}
        </div>
      </div>
    </>
  );
}
