import type { Track } from '@/types/music';
import { TrackItem } from './TrackItem';

interface TrackListProps {
  tracks: Track[];
  showAlbum?: boolean;
}

export function TrackList({ tracks, showAlbum = false }: TrackListProps) {
  return (
    <div className="px-2">
      <div className={`grid text-xs text-[#a7a7a7] uppercase tracking-wider px-4 py-2 border-b border-[#ffffff1a] mb-2 ${showAlbum ? 'grid-cols-[16px_4fr_3fr_minmax(60px,1fr)]' : 'grid-cols-[16px_4fr_minmax(60px,1fr)]'}`}>
        <span className="flex items-center justify-center">#</span>
        <span>Title</span>
        {showAlbum && <span>Album</span>}
        <div className="flex justify-end">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M11.5 2C6.81 2 3 5.81 3 10.5S6.81 19 11.5 19h.5v3c4.86-2.34 8-7 8-11.5C20 5.81 16.19 2 11.5 2zm1 14.5h-2v-2h2v2zm0-4h-2c0-3.25 3-3 3-5 0-1.1-.9-2-2-2s-2 .9-2 2h-2c0-2.21 1.79-4 4-4s4 1.79 4 4c0 2.5-3 2.75-3 5z" />
          </svg>
        </div>
      </div>
      {tracks.map((track, i) => (
        <TrackItem key={track.id} track={track} index={i} showAlbum={showAlbum} />
      ))}
    </div>
  );
}
