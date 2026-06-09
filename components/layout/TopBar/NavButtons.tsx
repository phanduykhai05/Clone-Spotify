'use client';

import { useRouter } from 'next/navigation';
import { useLanguage } from '@/hooks/useLanguage';

export function NavButtons() {
  const router = useRouter();
  const { t } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => router.back()}
        aria-label={t.nav.goBack}
        className="w-8 h-8 flex items-center justify-center bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors cursor-pointer"
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M15.957 2.793a1 1 0 0 1 0 1.414L8.164 12l7.793 7.793a1 1 0 0 1-1.414 1.414L5.336 12l9.207-9.207a1 1 0 0 1 1.414 0z" />
        </svg>
      </button>
      <button
        onClick={() => router.forward()}
        aria-label={t.nav.goForward}
        className="w-8 h-8 flex items-center justify-center bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors cursor-pointer"
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8.043 2.793a1 1 0 0 0 0 1.414L15.836 12l-7.793 7.793a1 1 0 0 0 1.414 1.414L18.664 12 9.457 2.793a1 1 0 0 0-1.414 0z" />
        </svg>
      </button>
    </div>
  );
}
