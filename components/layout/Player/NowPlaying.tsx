'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePlayer } from '@/hooks/usePlayer';
import { useLanguage } from '@/hooks/useLanguage';

export function NowPlaying() {
  const { currentTrack } = usePlayer();
  const { t } = useLanguage();

  if (!currentTrack) return <div className="w-[30%] min-w-0" />;

  const artist = currentTrack.artists[0];

  return (
    <div className="flex items-center gap-3 w-[30%] min-w-0">
      <div className="w-14 h-14 relative flex-shrink-0 bg-[#282828] rounded">
        {currentTrack.album.coverUrl && (
          <Image src={currentTrack.album.coverUrl} alt={currentTrack.album.name} fill className="object-cover rounded" sizes="56px" />
        )}
      </div>
      <div className="flex flex-col min-w-0">
        <Link href={`/album/${currentTrack.album.id}`} className="text-sm text-white truncate hover:underline">
          {currentTrack.name}
        </Link>
        {artist && (
          <Link href={`/artist/${artist.id}`} className="text-xs text-[#a7a7a7] truncate hover:text-white hover:underline">
            {artist.name}
          </Link>
        )}
      </div>
      <button
        aria-label={t.player.saveToLibrary}
        className="w-8 h-8 flex-shrink-0 flex items-center justify-center text-[#a7a7a7] hover:text-white transition-colors cursor-pointer"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 0 1 6.364 0L12 7.636l1.318-1.318a4.5 4.5 0 0 1 6.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 0 1 0-6.364z" />
        </svg>
      </button>
    </div>
  );
}
