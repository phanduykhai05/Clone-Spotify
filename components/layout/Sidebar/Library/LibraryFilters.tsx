'use client';

import { useLanguage } from '@/hooks/useLanguage';
import { cn } from '@/lib/utils';
import type { LibraryItem } from '@/types/music';

type FilterType = LibraryItem['type'];

const FILTER_TYPES: FilterType[] = ['playlist', 'podcast', 'album', 'artist'];

interface LibraryFiltersProps {
  active: FilterType | null;
  onChange: (filter: FilterType | null) => void;
}

export function LibraryFilters({ active, onChange }: LibraryFiltersProps) {
  const { t } = useLanguage();

  return (
    <div className="flex gap-2 px-2 py-2 flex-wrap">
      {FILTER_TYPES.map(type => (
        <button
          key={type}
          onClick={() => onChange(active === type ? null : type)}
          className={cn(
            'px-3 py-1 rounded-full text-xs font-medium transition-colors cursor-pointer',
            active === type
              ? 'bg-white text-black'
              : 'bg-[#282828] text-white hover:bg-[#3e3e3e]',
          )}
        >
          {t.library.filters[type]}
        </button>
      ))}
    </div>
  );
}
