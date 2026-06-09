'use client';

import Link from 'next/link';
import { cn, formatDuration } from '@/lib/utils';
import { usePlayer } from '@/hooks/usePlayer';
import { useLanguage } from '@/hooks/useLanguage';
import type { Track } from '@/types/music';

interface TrackItemProps {
  track: Track;
  index: number;
  showAlbum?: boolean;
}

export function TrackItem({ track, index, showAlbum = false }: TrackItemProps) {
  const { currentTrack, isPlaying, play } = usePlayer();
  const { t } = useLanguage();
  const isCurrent = currentTrack?.id === track.id;

  return (
    <div
      className={cn(
        'group grid items-center gap-4 px-4 py-2 rounded-md transition-colors cursor-pointer',
        'hover:bg-[#ffffff1a]',
        showAlbum ? 'grid-cols-[16px_4fr_3fr_minmax(60px,1fr)]' : 'grid-cols-[16px_4fr_minmax(60px,1fr)]',
      )}
      onDoubleClick={() => play(track)}
    >
      <div className="flex items-center justify-center">
        {isCurrent ? (
          <svg className="w-3 h-3 text-[#1db954]" fill="currentColor" viewBox="0 0 24 24">
            {isPlaying
              ? <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              : <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606" />}
          </svg>
        ) : (
          <>
            <span className="text-[#a7a7a7] text-sm group-hover:hidden">{index + 1}</span>
            <button
              onClick={() => play(track)}
              className="hidden group-hover:flex items-center justify-center text-white cursor-pointer"
              aria-label={`${t.player.play} ${track.name}`}
            >
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606" />
              </svg>
            </button>
          </>
        )}
      </div>

      <div className="flex items-center gap-3 min-w-0">
        <div className="flex flex-col min-w-0">
          <span className={cn('text-sm truncate', isCurrent ? 'text-[#1db954]' : 'text-white')}>{track.name}</span>
          <div className="flex items-center gap-1 min-w-0">
            {track.explicit && (
              <span className="flex-shrink-0 text-[10px] font-bold bg-[#a7a7a7] text-black px-1 rounded">E</span>
            )}
            <span className="text-xs text-[#a7a7a7] truncate">
              {track.artists.map((a, i) => (
                <span key={a.id}>
                  {i > 0 && ', '}
                  <Link href={`/artist/${a.id}`} className="hover:text-white hover:underline">{a.name}</Link>
                </span>
              ))}
            </span>
          </div>
        </div>
      </div>

      {showAlbum && (
        <Link href={`/album/${track.album.id}`} className="text-xs text-[#a7a7a7] hover:text-white hover:underline truncate">
          {track.album.name}
        </Link>
      )}

      <div className="flex items-center justify-end gap-3">
        <button
          aria-label={t.player.saveToLibrary}
          className="w-6 h-6 flex items-center justify-center text-[#a7a7a7] hover:text-white opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 0 1 6.364 0L12 7.636l1.318-1.318a4.5 4.5 0 0 1 6.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 0 1 0-6.364z" />
          </svg>
        </button>
        <span className="text-xs text-[#a7a7a7] tabular-nums">{formatDuration(track.durationMs)}</span>
      </div>
    </div>
  );
}
