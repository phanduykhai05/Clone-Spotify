'use client';

import { useLibrary } from '@/hooks/useLibrary';
import { LibraryHeader } from './LibraryHeader';
import { LibraryFilters } from './LibraryFilters';
import { LibraryItem } from './LibraryItem';

export function Library() {
  const { items, activeFilter, setActiveFilter } = useLibrary();

  return (
    <div className="flex flex-col flex-1 bg-[#121212] rounded-lg overflow-hidden">
      <LibraryHeader />
      <LibraryFilters active={activeFilter} onChange={setActiveFilter} />
      <div className="flex-1 overflow-y-auto px-2 pb-2 space-y-0.5">
        {items.map(item => (
          <LibraryItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
