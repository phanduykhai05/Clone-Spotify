'use client';

import Link from 'next/link';
import { useLanguage } from '@/hooks/useLanguage';

function InstallIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M12 3a9 9 0 1 0 0 18A9 9 0 0 0 12 3zM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12z" />
      <path d="M12 6a1 1 0 0 1 1 1v6.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L11 13.586V7a1 1 0 0 1 1-1z" />
    </svg>
  );
}

export function HeaderNav() {
  const { t } = useLanguage();

  return (
    <nav className="flex items-center gap-6 flex-shrink-0">
      <Link href="/premium" className="text-sm font-bold text-white hover:text-[#1db954] transition-colors whitespace-nowrap">
        {t.header.premium}
      </Link>
      <Link href="/support" className="text-sm font-bold text-white hover:text-[#1db954] transition-colors">
        {t.header.support}
      </Link>
      <Link href="/download" className="text-sm font-bold text-white hover:text-[#1db954] transition-colors">
        {t.header.download}
      </Link>

      <div className="w-px h-5 bg-[#3a3a3a]" />

      <Link href="/download" className="flex items-center gap-2 text-sm font-bold text-white hover:text-[#1db954] transition-colors whitespace-nowrap">
        <InstallIcon />
        {t.header.installApp}
      </Link>

      <Link href="/signup" className="text-sm font-bold text-[#a7a7a7] hover:text-white transition-colors whitespace-nowrap">
        {t.header.signUp}
      </Link>

      <Link href="/login" className="h-12 px-8 rounded-full bg-white text-black text-sm font-bold hover:scale-105 hover:bg-[#f0f0f0] transition-all whitespace-nowrap flex items-center">
        {t.header.logIn}
      </Link>
    </nav>
  );
}
