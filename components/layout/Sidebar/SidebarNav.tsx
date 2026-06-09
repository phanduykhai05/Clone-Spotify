'use client';

import { useLanguage } from '@/hooks/useLanguage';
import { SidebarNavItem } from './SidebarNavItem';

function HomeOutline() {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
      <path d="M12.5 3.247a1 1 0 0 0-1 0L4 7.577V20h4.5v-6h3v6H16V7.577l-3.5-4.33z" />
    </svg>
  );
}

function HomeFilled() {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
      <path d="m12.721 2.75 8.263 9.535-.013.011L21 12.25a1 1 0 0 1-1 1h-1.25V21h-5v-5.5h-3.5V21h-5v-7.75H4a1 1 0 0 1-1-1l.029-.004-1.02-.747L11.279 2.75a1 1 0 0 1 1.442 0z" />
    </svg>
  );
}

function SearchOutline() {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
      <path d="M10.533 1.279c-5.18 0-9.407 4.927-9.407 10.107s4.227 10.107 9.407 10.107c2.234 0 4.29-.863 5.882-2.299l3.848 3.848a1 1 0 0 0 1.414-1.414l-3.848-3.848c1.436-1.592 2.3-3.65 2.3-5.394 0-5.18-4.227-10.107-9.407-10.107zm-7.407 10.107c0-4.15 3.303-8.107 7.407-8.107s7.407 3.957 7.407 8.107-3.303 8.107-7.407 8.107-7.407-3.957-7.407-8.107z" />
    </svg>
  );
}

export function SidebarNav() {
  const { t } = useLanguage();

  return (
    <nav className="px-3 py-2 flex flex-col gap-1">
      <SidebarNavItem href="/" label={t.nav.home} icon={<HomeOutline />} activeIcon={<HomeFilled />} />
      <SidebarNavItem href="/search" label={t.nav.search} icon={<SearchOutline />} activeIcon={<SearchOutline />} />
    </nav>
  );
}
