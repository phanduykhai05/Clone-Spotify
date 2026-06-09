'use client';

import { useLanguage } from '@/hooks/useLanguage';

function getGreetingKey(): 'goodMorning' | 'goodAfternoon' | 'goodEvening' {
  const hour = new Date().getHours();
  if (hour < 12) return 'goodMorning';
  if (hour < 18) return 'goodAfternoon';
  return 'goodEvening';
}

export function Greeting() {
  const { t } = useLanguage();
  return (
    <h1 className="text-2xl font-bold text-white">{t.home[getGreetingKey()]}</h1>
  );
}
