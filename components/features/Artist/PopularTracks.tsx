import { TrackItem } from '@/components/features/Album/TrackItem';
import type { Track } from '@/types/music';

interface PopularTracksProps {
  tracks: Track[];
}

export function PopularTracks({ tracks }: PopularTracksProps) {
  return (
    <section className="px-6">
      <h2 className="text-xl font-bold text-white mb-4">Popular</h2>
      <div>
        {tracks.slice(0, 5).map((track, i) => (
          <TrackItem key={track.id} track={track} index={i} showAlbum />
        ))}
      </div>
    </section>
  );
}
