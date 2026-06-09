'use client';

import Image from 'next/image';
import { usePlayer } from '@/hooks/usePlayer';
import { useLanguage } from '@/hooks/useLanguage';
import { formatFollowers } from '@/lib/utils';
import type { Artist, Track } from '@/types/music';

interface ArtistHeaderProps {
  artist: Artist;
  topTrack?: Track;
}

export function ArtistHeader({ artist, topTrack }: ArtistHeaderProps) {
  const { play } = usePlayer();
  const { t } = useLanguage();

  return (
    <div className="relative h-64 overflow-hidden rounded-t-lg">
      {artist.imageUrl ? (
        <Image src={artist.imageUrl} alt={artist.name} fill className="object-cover object-top" sizes="100vw" priority />
      ) : (
        <div className="w-full h-full bg-gradient-to-b from-[#535353] to-[#121212]" />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      <div className="absolute bottom-0 left-0 p-6 flex flex-col gap-2">
        {artist.verified && (
          <div className="flex items-center gap-1 text-xs text-white font-medium">
            <svg className="w-4 h-4 text-[#3d91f4]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
            </svg>
            {t.artist.verified}
          </div>
        )}
        <h1 className="text-7xl font-black text-white leading-none">{artist.name}</h1>
        {artist.followers != null && (
          <p className="text-sm text-white">{formatFollowers(artist.followers)} {t.artist.followers}</p>
        )}
        <div className="flex items-center gap-4 mt-2">
          <button
            onClick={() => topTrack && play(topTrack)}
            aria-label={t.artist.follow}
            className="w-14 h-14 bg-[#1db954] rounded-full flex items-center justify-center hover:scale-105 hover:bg-[#1ed760] transition-all cursor-pointer shadow-lg"
          >
            <svg className="w-6 h-6 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606" />
            </svg>
          </button>
          <button className="h-10 px-6 rounded-full border border-[#727272] text-white text-sm font-bold hover:border-white transition-colors cursor-pointer">
            {t.artist.follow}
          </button>
        </div>
      </div>
    </div>
  );
}
