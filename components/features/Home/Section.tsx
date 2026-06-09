import Link from 'next/link';
import { SectionCard } from './SectionCard';

interface SectionItem {
  id: string;
  type: 'album' | 'playlist' | 'artist';
  name: string;
  subtitle?: string;
  coverUrl?: string;
}

interface SectionProps {
  title: string;
  items: SectionItem[];
  href?: string;
}

export function Section({ title, items, href }: SectionProps) {
  return (
    <section>
      <div className="flex items-end justify-between mb-4">
        <h2 className="text-xl font-bold text-white hover:underline cursor-pointer">{title}</h2>
        {href && (
          <Link href={href} className="text-sm font-bold text-[#a7a7a7] hover:text-white transition-colors">
            Show all
          </Link>
        )}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {items.slice(0, 6).map(item => (
          <SectionCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}
