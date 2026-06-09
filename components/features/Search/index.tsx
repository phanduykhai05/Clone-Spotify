import { TopBar } from '@/components/layout/TopBar';
import { CategoryGrid } from './CategoryGrid';
import type { Category } from '@/types/music';

function SearchInput() {
  return (
    <div className="relative">
      <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
        <path d="M10.533 1.279c-5.18 0-9.407 4.927-9.407 10.107s4.227 10.107 9.407 10.107c2.234 0 4.29-.863 5.882-2.299l3.848 3.848a1 1 0 0 0 1.414-1.414l-3.848-3.848c1.436-1.592 2.3-3.65 2.3-5.394 0-5.18-4.227-10.107-9.407-10.107zm-7.407 10.107c0-4.15 3.303-8.107 7.407-8.107s7.407 3.957 7.407 8.107-3.303 8.107-7.407 8.107-7.407-3.957-7.407-8.107z" />
      </svg>
      <input
        type="search"
        placeholder="What do you want to play?"
        className="w-80 h-10 pl-9 pr-4 rounded-full bg-white text-black text-sm placeholder:text-[#6a6a6a] focus:outline-none focus:ring-2 focus:ring-white"
        autoComplete="off"
      />
    </div>
  );
}

interface SearchPageProps {
  categories: Category[];
}

export function SearchPage({ categories }: SearchPageProps) {
  return (
    <>
      <TopBar>
        <SearchInput />
      </TopBar>
      <div className="flex-1 overflow-y-auto px-6 pb-8 space-y-8 pt-2">
        <CategoryGrid categories={categories} />
      </div>
    </>
  );
}
