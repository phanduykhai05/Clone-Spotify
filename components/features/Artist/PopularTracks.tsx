'use client';

import { useLanguage } from '@/hooks/useLanguage';
import { TrackItem } from '@/components/features/Album/TrackItem';
import type { Track } from '@/types/music';

interface PopularTracksProps {
  tracks: Track[];
}

export function PopularTracks({ tracks }: PopularTracksProps) {
  const { t } = useLanguage();

  return (
    <section className="px-6">
      <h2 className="text-xl font-bold text-white mb-4">{t.artist.popular}</h2>
      <div>
        {tracks.slice(0, 5).map((track, i) => (
          <TrackItem key={track.id} track={track} index={i} showAlbum />
        ))}
      </div>
    </section>
  );
}
