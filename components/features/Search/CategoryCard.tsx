import Link from 'next/link';
import type { Category } from '@/types/music';

interface CategoryCardProps {
  category: Category;
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      href={`/genre/${category.id}`}
      className="relative overflow-hidden rounded-lg aspect-[1.5] flex items-end p-3 cursor-pointer"
      style={{ backgroundColor: category.color }}
    >
      <span className="text-white font-bold text-base z-10 leading-tight">{category.name}</span>
    </Link>
  );
}
