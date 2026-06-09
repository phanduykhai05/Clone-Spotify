import { AlbumPage } from '@/components/features/Album';
import { getAlbum } from '@/lib/spotify';
import { notFound } from 'next/navigation';

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  let album;
  try {
    album = await getAlbum(id);
  } catch {
    notFound();
  }

  return <AlbumPage album={album} />;
}
