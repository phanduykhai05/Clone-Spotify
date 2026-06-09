'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePlayer } from '@/hooks/usePlayer';
import { useLanguage } from '@/hooks/useLanguage';
import type { Album } from '@/types/music';

interface AlbumHeaderProps {
  album: Album;
}

export function AlbumHeader({ album }: AlbumHeaderProps) {
  const { play } = usePlayer();
  const { t } = useLanguage();

  return (
    <div className="flex items-end gap-6 px-6 pt-6 pb-6 bg-gradient-to-b from-[#5038a0] to-[#121212]">
      <div className="w-48 h-48 flex-shrink-0 relative shadow-2xl rounded">
        {album.coverUrl ? (
          <Image src={album.coverUrl} alt={album.name} fill className="object-cover rounded" sizes="192px" />
        ) : (
          <div className="w-full h-full bg-[#282828] rounded flex items-center justify-center">
            <svg className="w-20 h-20 text-[#a7a7a7]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
            </svg>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-2 min-w-0">
        <span className="text-xs font-bold uppercase text-white">{album.type}</span>
        <h1 className="text-5xl font-black text-white leading-none">{album.name}</h1>
        <div className="flex items-center gap-1 text-sm text-white mt-2">
          {album.artists.map((a, i) => (
            <span key={a.id}>
              {i > 0 && <span className="text-[#a7a7a7]">, </span>}
              <Link href={`/artist/${a.id}`} className="font-bold hover:underline">{a.name}</Link>
            </span>
          ))}
          <span className="text-[#a7a7a7]"> • {album.year} • {album.tracks.length} {t.playlist.songs}</span>
        </div>
      </div>

      <div className="flex items-center gap-4 mt-6">
        <button
          onClick={() => album.tracks[0] && play(album.tracks[0])}
          aria-label={t.album.play}
          className="w-14 h-14 bg-[#1db954] rounded-full flex items-center justify-center hover:scale-105 hover:bg-[#1ed760] transition-all cursor-pointer shadow-lg"
        >
          <svg className="w-6 h-6 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606" />
          </svg>
        </button>
        <button aria-label={t.album.save} className="text-[#a7a7a7] hover:text-white transition-colors cursor-pointer">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 0 1 6.364 0L12 7.636l1.318-1.318a4.5 4.5 0 0 1 6.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 0 1 0-6.364z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
