'use client';

import Link from 'next/link';
import { useLanguage } from '@/hooks/useLanguage';

interface HScrollSectionProps {
  title: string;
  href?: string;
  children: React.ReactNode;
}

export function HScrollSection({ title, href, children }: HScrollSectionProps) {
  const { t } = useLanguage();

  return (
    <section>
      <div className="flex items-end justify-between mb-4">
        <h2 className="text-xl font-bold text-white hover:underline cursor-pointer">{title}</h2>
        {href && (
          <Link href={href} className="text-sm font-bold text-[#a7a7a7] hover:text-white transition-colors">
            {t.home.showAll}
          </Link>
        )}
      </div>
      <div className="flex gap-4 overflow-x-auto pb-3 scrollbar-hide snap-x">
        {children}
      </div>
    </section>
  );
}
