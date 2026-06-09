'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { cn } from '@/lib/utils';

function HomeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="m12.721 2.75 8.263 9.535-.013.011L21 12.25a1 1 0 0 1-1 1h-1.25V21h-5v-5.5h-3.5V21h-5v-7.75H4a1 1 0 0 1-1-1l.029-.004-1.02-.747L11.279 2.75a1 1 0 0 1 1.442 0z" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 flex-shrink-0 text-[#a7a7a7]">
      <path d="M10.533 1.279c-5.18 0-9.407 4.927-9.407 10.107s4.227 10.107 9.407 10.107c2.234 0 4.29-.863 5.882-2.299l3.848 3.848a1 1 0 0 0 1.414-1.414l-3.848-3.848c1.436-1.592 2.3-3.65 2.3-5.394 0-5.18-4.227-10.107-9.407-10.107zm-7.407 10.107c0-4.15 3.303-8.107 7.407-8.107s7.407 3.957 7.407 8.107-3.303 8.107-7.407 8.107-7.407-3.957-7.407-8.107z" />
    </svg>
  );
}

function BrowseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 flex-shrink-0">
      <path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1.5.866l7-4a1 1 0 0 0 0-1.732l-7-4a1 1 0 0 0 0-1.732l7-4a1 1 0 0 0 0-1.268zM7 2a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2H7zm0 9a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2H7zm0 9a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2H7z" />
    </svg>
  );
}

export function SearchBar() {
  const pathname = usePathname();
  const router = useRouter();
  const [query, setQuery] = useState('');
  const isHome = pathname === '/';

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) router.push(`/search?q=${encodeURIComponent(query.trim())}`);
  };

  return (
    <div className="flex items-center gap-2">
      {/* Home button */}
      <Link
        href="/"
        aria-label="Home"
        className={cn(
          'w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 transition-colors',
          isHome
            ? 'bg-white text-black'
            : 'bg-[#1a1a1a] text-[#a7a7a7] hover:text-white hover:bg-[#2a2a2a]',
        )}
      >
        <HomeIcon />
      </Link>

      {/* Search bar */}
      <form
        onSubmit={handleSearch}
        className="flex items-center bg-[#1a1a1a] hover:bg-[#2a2a2a] focus-within:bg-[#2a2a2a] rounded-full h-12 px-4 gap-3 w-[440px] transition-colors"
      >
        <SearchIcon />
        <input
          type="search"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="What do you want to play?"
          autoComplete="off"
          className="flex-1 bg-transparent text-white placeholder:text-[#a7a7a7] text-sm outline-none border-none"
        />
        <div className="w-px h-6 bg-[#3a3a3a]" />
        <Link
          href="/search"
          aria-label="Browse"
          className="text-[#a7a7a7] hover:text-white transition-colors"
        >
          <BrowseIcon />
        </Link>
      </form>
    </div>
  );
}
