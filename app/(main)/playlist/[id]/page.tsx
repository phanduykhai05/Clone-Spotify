import { PlaylistPage } from '@/components/features/Playlist';
import { getPlaylist } from '@/lib/spotify';
import { notFound } from 'next/navigation';

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  let playlist;
  try {
    playlist = await getPlaylist(id);
  } catch {
    notFound();
  }

  return <PlaylistPage playlist={playlist} />;
}
