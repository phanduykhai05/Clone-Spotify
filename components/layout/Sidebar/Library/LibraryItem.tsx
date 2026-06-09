import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import type { LibraryItem as TLibraryItem } from '@/types/music';

const TYPE_HREF: Record<TLibraryItem['type'], string> = {
  playlist: '/playlist',
  album: '/album',
  artist: '/artist',
  podcast: '/show',
};

interface LibraryItemProps {
  item: TLibraryItem;
  active?: boolean;
}

export function LibraryItem({ item, active }: LibraryItemProps) {
  const href = `${TYPE_HREF[item.type]}/${item.id}`;

  return (
    <Link
      href={href}
      className={cn(
        'flex items-center gap-3 px-2 py-2 rounded-md transition-colors',
        active ? 'bg-[#282828]' : 'hover:bg-[#1a1a1a]',
      )}
    >
      <div className="w-10 h-10 flex-shrink-0 relative overflow-hidden bg-[#282828]">
        {item.imageUrl ? (
          <Image
            src={item.imageUrl}
            alt={item.name}
            fill
            className={cn('object-cover', item.type === 'artist' ? 'rounded-full' : 'rounded')}
            sizes="40px"
          />
        ) : (
          <div className={cn('w-full h-full bg-[#282828] flex items-center justify-center', item.type === 'artist' ? 'rounded-full' : 'rounded')}>
            <svg className="w-5 h-5 text-[#a7a7a7]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
            </svg>
          </div>
        )}
      </div>
      <div className="flex flex-col min-w-0 flex-1">
        <span className={cn('text-sm truncate', active ? 'text-[#1db954]' : 'text-white')}>{item.name}</span>
        <span className="text-xs text-[#a7a7a7] truncate capitalize">{item.subtitle}</span>
      </div>
      {item.pinned && (
        <svg className="w-3 h-3 text-[#1db954] flex-shrink-0" fill="currentColor" viewBox="0 0 16 16">
          <path d="M10.625.596a.75.75 0 0 1 .55.184l4.046 4.046a.75.75 0 0 1-.096 1.152l-2.533 1.51.804 2.412a.75.75 0 0 1-.178.768l-1.5 1.5a.75.75 0 0 1-1.061 0L8 9.414l-3.157 3.157a.75.75 0 0 1-1.06-1.06L6.939 8.35 4.289 5.7a.75.75 0 0 1 0-1.06L5.79 3.138a.75.75 0 0 1 .768-.178l2.412.804L10.48.648a.75.75 0 0 1 .145-.052z" />
        </svg>
      )}
    </Link>
  );
}
