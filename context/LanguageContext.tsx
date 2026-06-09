'use client';

import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import vi from '@/locales/vi.json';
import en from '@/locales/en.json';

export type Language = 'vi' | 'en';
export type Translations = typeof vi;

const dictionaries: Record<Language, Translations> = { vi, en };

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('vi');

  useEffect(() => {
    const saved = localStorage.getItem('sp_lang') as Language | null;
    if (saved === 'en' || saved === 'vi') setLanguageState(saved);
  }, []);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('sp_lang', lang);
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: dictionaries[language] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
