import { ArtistPage } from '@/components/features/Artist';
import type { Artist, Track, Album } from '@/types/music';

async function getArtistData(id: string): Promise<{
  artist: Artist;
  popularTracks: Track[];
  albums: Album[];
}> {
  const artist: Artist = {
    id,
    name: 'The Weeknd',
    imageUrl: '',
    followers: 35000000,
    verified: true,
  };
  return { artist, popularTracks: [], albums: [] };
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const { artist, popularTracks, albums } = await getArtistData(id);
  return <ArtistPage artist={artist} popularTracks={popularTracks} albums={albums} />;
}
