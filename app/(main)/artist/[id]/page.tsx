import { ArtistPage } from '@/components/features/Artist';
import { getArtist, getArtistTopTracks, getArtistAlbums } from '@/lib/spotify';
import { notFound } from 'next/navigation';

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  let artist, popularTracks, albums;
  try {
    [artist, popularTracks, albums] = await Promise.all([
      getArtist(id),
      getArtistTopTracks(id),
      getArtistAlbums(id, 10),
    ]);
  } catch {
    notFound();
  }

  return <ArtistPage artist={artist} popularTracks={popularTracks} albums={albums} />;
}
