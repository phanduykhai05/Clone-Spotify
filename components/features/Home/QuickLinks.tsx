import Image from 'next/image';
import Link from 'next/link';
import type { LibraryItem } from '@/types/music';

const TYPE_HREF: Record<LibraryItem['type'], string> = {
  playlist: '/playlist',
  album: '/album',
  artist: '/artist',
  podcast: '/show',
};

interface QuickLinksProps {
  items: Pick<LibraryItem, 'id' | 'type' | 'name' | 'imageUrl'>[];
}

export function QuickLinks({ items }: QuickLinksProps) {
  if (items.length === 0) return null;

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
      {items.map(item => (
        <Link
          key={item.id}
          href={`${TYPE_HREF[item.type]}/${item.id}`}
          className="flex items-center gap-3 bg-[#ffffff1a] hover:bg-[#ffffff2a] rounded overflow-hidden transition-colors group"
        >
          <div className="w-14 h-14 flex-shrink-0 relative bg-[#282828]">
            {item.imageUrl ? (
              <Image src={item.imageUrl} alt={item.name} fill className="object-cover" sizes="56px" />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-[#4a235a]">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
                </svg>
              </div>
            )}
          </div>
          <span className="text-sm font-bold text-white pr-3 truncate">{item.name}</span>
        </Link>
      ))}
    </div>
  );
}
