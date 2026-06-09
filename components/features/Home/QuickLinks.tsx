import Image from 'next/image';
import Link from 'next/link';
import type { LibraryItem } from '@/types/music';

const MOCK_QUICK_LINKS: LibraryItem[] = [
  { id: '1', type: 'playlist', name: 'Liked Songs', subtitle: '', imageUrl: '' },
  { id: '2', type: 'playlist', name: 'Daily Mix 1', subtitle: '', imageUrl: '' },
  { id: '3', type: 'playlist', name: 'Release Radar', subtitle: '', imageUrl: '' },
  { id: '4', type: 'playlist', name: 'Discover Weekly', subtitle: '', imageUrl: '' },
  { id: '5', type: 'album', name: 'After Hours', subtitle: '', imageUrl: '' },
  { id: '6', type: 'playlist', name: 'Top Hits 2024', subtitle: '', imageUrl: '' },
];

const TYPE_HREF: Record<LibraryItem['type'], string> = {
  playlist: '/playlist',
  album: '/album',
  artist: '/artist',
  podcast: '/show',
};

export function QuickLinks() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
      {MOCK_QUICK_LINKS.map(item => (
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
