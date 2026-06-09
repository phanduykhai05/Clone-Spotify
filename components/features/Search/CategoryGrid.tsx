'use client';

import { useLanguage } from '@/hooks/useLanguage';
import { CategoryCard } from './CategoryCard';
import type { Category } from '@/types/music';

interface CategoryGridProps {
  categories: Category[];
}

export function CategoryGrid({ categories }: CategoryGridProps) {
  const { t } = useLanguage();

  return (
    <section>
      <h2 className="text-xl font-bold text-white mb-4">{t.search.browseAll}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {categories.map(cat => (
          <CategoryCard key={cat.id} category={cat} />
        ))}
      </div>
    </section>
  );
}
