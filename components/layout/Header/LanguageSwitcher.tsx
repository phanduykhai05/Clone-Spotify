'use client';

import { useState } from 'react';
import { useLanguage, type Language } from '@/hooks/useLanguage';
import { cn } from '@/lib/utils';

const LANGUAGES: { code: Language; flag: string }[] = [
  { code: 'vi', flag: '🇻🇳' },
  { code: 'en', flag: '🇺🇸' },
];

function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
    </svg>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn('w-3 h-3 transition-transform duration-150', open && 'rotate-180')}
    >
      <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth={2} strokeLinecap="round" fill="none" />
    </svg>
  );
}

export function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(prev => !prev)}
        className="flex items-center gap-1.5 text-sm font-bold text-white hover:text-[#1db954] transition-colors cursor-pointer px-2 py-1 rounded"
        aria-label="Change language"
      >
        <GlobeIcon />
        <span className="uppercase text-xs tracking-wide">{language}</span>
        <ChevronIcon open={open} />
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-full mt-2 w-44 bg-[#282828] rounded-md shadow-2xl z-20 overflow-hidden py-1">
            {LANGUAGES.map(({ code, flag }) => (
              <button
                key={code}
                onClick={() => { setLanguage(code); setOpen(false); }}
                className={cn(
                  'w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors cursor-pointer',
                  language === code
                    ? 'text-[#1db954] font-bold bg-[#3e3e3e]'
                    : 'text-white hover:bg-[#3e3e3e]',
                )}
              >
                <span>{flag}</span>
                <span>{t.language[code]}</span>
                {language === code && (
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 ml-auto text-[#1db954]">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
