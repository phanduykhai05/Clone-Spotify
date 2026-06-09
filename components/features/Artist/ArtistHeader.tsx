'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { formatFollowers } from '@/lib/utils';
import { usePlayer } from '@/hooks/usePlayer';
import type { Artist, Track } from '@/types/music';

interface ArtistHeaderProps {
  artist: Artist;
  topTrack?: Track;
}

export function ArtistHeader({ artist, topTrack }: ArtistHeaderProps) {
  const { play } = usePlayer();

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
            Verified Artist
          </div>
        )}
        <h1 className="text-7xl font-black text-white leading-none">{artist.name}</h1>
        {artist.followers != null && (
          <p className="text-sm text-white">{formatFollowers(artist.followers)} followers</p>
        )}
        <div className="flex items-center gap-4 mt-2">
          <button
            onClick={() => topTrack && play(topTrack)}
            aria-label="Play"
            className="w-14 h-14 bg-[#1db954] rounded-full flex items-center justify-center hover:scale-105 hover:bg-[#1ed760] transition-all cursor-pointer shadow-lg"
          >
            <svg className="w-6 h-6 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
          <Button variant="outline" size="md">Follow</Button>
          <Button variant="ghost">...</Button>
        </div>
      </div>
    </div>
  );
}
