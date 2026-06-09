import { AlbumPage } from '@/components/features/Album';
import type { Album } from '@/types/music';

async function getAlbum(id: string): Promise<Album> {
  return {
    id,
    name: 'After Hours',
    artists: [{ id: 'artist-1', name: 'The Weeknd', verified: true, followers: 35000000 }],
    coverUrl: '',
    year: 2020,
    type: 'album',
    tracks: [],
  };
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const album = await getAlbum(id);
  return <AlbumPage album={album} />;
}
