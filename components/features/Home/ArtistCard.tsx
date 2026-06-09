import Image from 'next/image';
import Link from 'next/link';
import type { Artist } from '@/types/music';

interface ArtistCardProps {
  artist: Artist;
  artistLabel: string;
}

export function ArtistCard({ artist, artistLabel }: ArtistCardProps) {
  return (
    <Link
      href={`/artist/${artist.id}`}
      className="flex-shrink-0 w-[160px] snap-start cursor-pointer group text-center"
    >
      <div className="relative w-[160px] h-[160px] rounded-full overflow-hidden mb-3 bg-[#282828] mx-auto">
        {artist.imageUrl ? (
          <Image
            src={artist.imageUrl}
            alt={artist.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="160px"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-[#282828]">
            <svg className="w-16 h-16 text-[#a7a7a7]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </div>
        )}
      </div>
      <p className="text-white text-sm font-medium truncate">{artist.name}</p>
      <p className="text-[#a7a7a7] text-xs mt-0.5">{artistLabel}</p>
    </Link>
  );
}
