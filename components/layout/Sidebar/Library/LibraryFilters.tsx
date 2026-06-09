'use client';

import { cn } from '@/lib/utils';
import { LIBRARY_FILTERS, type LibraryFilter } from '@/lib/constants';

interface LibraryFiltersProps {
  active: LibraryFilter | null;
  onChange: (filter: LibraryFilter | null) => void;
}

export function LibraryFilters({ active, onChange }: LibraryFiltersProps) {
  return (
    <div className="flex gap-2 px-2 py-2 flex-wrap">
      {LIBRARY_FILTERS.map(filter => (
        <button
          key={filter}
          onClick={() => onChange(active === filter ? null : filter)}
          className={cn(
            'px-3 py-1 rounded-full text-xs font-medium transition-colors cursor-pointer',
            active === filter
              ? 'bg-white text-black'
              : 'bg-[#282828] text-white hover:bg-[#3e3e3e]',
          )}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
