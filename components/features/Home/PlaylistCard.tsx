import Image from 'next/image';
import Link from 'next/link';
import type { Playlist } from '@/types/music';

interface PlaylistCardProps {
  playlist: Playlist;
}

export function PlaylistCard({ playlist }: PlaylistCardProps) {
  return (
    <Link
      href={`/playlist/${playlist.id}`}
      className="flex-shrink-0 w-[160px] snap-start cursor-pointer group"
    >
      <div className="relative w-[160px] h-[160px] rounded-sm overflow-hidden mb-3 bg-[#282828] shadow-md">
        {playlist.coverUrl ? (
          <Image
            src={playlist.coverUrl}
            alt={playlist.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="160px"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-[#282828]">
            <svg className="w-10 h-10 text-[#a7a7a7]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
            </svg>
          </div>
        )}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200" />
        <button
          aria-label="Play"
          className="absolute bottom-2 right-2 w-10 h-10 bg-[#1db954] rounded-full flex items-center justify-center shadow-lg translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-200 hover:scale-105 hover:bg-[#1ed760]"
          onClick={e => e.preventDefault()}
        >
          <svg className="w-4 h-4 text-black ml-0.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606" />
          </svg>
        </button>
      </div>
      <p className="text-white text-sm font-medium truncate">{playlist.name}</p>
      {playlist.description && (
        <p className="text-[#a7a7a7] text-xs truncate mt-0.5">{playlist.description}</p>
      )}
    </Link>
  );
}
