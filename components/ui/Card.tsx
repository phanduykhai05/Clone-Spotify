'use client';

import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface CardProps {
  href: string;
  title: string;
  subtitle?: string;
  imageUrl?: string;
  imageAlt?: string;
  roundedImage?: boolean;
  className?: string;
  onPlay?: () => void;
}

export function Card({
  href,
  title,
  subtitle,
  imageUrl,
  imageAlt,
  roundedImage = false,
  className,
  onPlay,
}: CardProps) {
  return (
    <Link
      href={href}
      className={cn(
        'group relative flex flex-col gap-4 p-4 rounded-md bg-[#181818] hover:bg-[#282828] transition-colors cursor-pointer',
        className,
      )}
    >
      <div className="relative w-full aspect-square overflow-hidden shadow-lg">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={imageAlt ?? title}
            fill
            className={cn('object-cover', roundedImage ? 'rounded-full' : 'rounded')}
            sizes="(max-width: 768px) 50vw, 20vw"
          />
        ) : (
          <div className={cn('w-full h-full bg-[#282828] flex items-center justify-center', roundedImage ? 'rounded-full' : 'rounded')}>
            <svg className="w-12 h-12 text-[#a7a7a7]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
            </svg>
          </div>
        )}

        {onPlay && (
          <button
            onClick={e => { e.preventDefault(); onPlay(); }}
            aria-label={`Play ${title}`}
            className="absolute bottom-2 right-2 w-10 h-10 bg-[#1db954] rounded-full flex items-center justify-center shadow-xl opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-200 hover:scale-105 hover:bg-[#1ed760]"
          >
            <svg className="w-5 h-5 text-black ml-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        )}
      </div>

      <div className="flex flex-col gap-1 min-w-0">
        <span className="text-sm font-semibold text-white truncate">{title}</span>
        {subtitle && <span className="text-xs text-[#a7a7a7] line-clamp-2">{subtitle}</span>}
      </div>
    </Link>
  );
}
