import { CategoryCard } from './CategoryCard';
import { CATEGORY_COLORS } from '@/lib/constants';
import type { Category } from '@/types/music';

const CATEGORIES: Category[] = Object.entries(CATEGORY_COLORS).map(([id, color]) => ({
  id,
  name: id.charAt(0).toUpperCase() + id.slice(1).replace(/-/g, ' '),
  color,
}));

export function CategoryGrid() {
  return (
    <section>
      <h2 className="text-xl font-bold text-white mb-4">Browse all</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {CATEGORIES.map(cat => (
          <CategoryCard key={cat.id} category={cat} />
        ))}
      </div>
    </section>
  );
}
