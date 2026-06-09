import { Card } from '@/components/ui/Card';
import type { Album } from '@/types/music';

interface DiscographySectionProps {
  albums: Album[];
}

export function DiscographySection({ albums }: DiscographySectionProps) {
  return (
    <section className="px-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-white">Discography</h2>
        <button className="text-sm font-bold text-[#a7a7a7] hover:text-white transition-colors cursor-pointer">
          Show all
        </button>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {albums.map(album => (
          <Card
            key={album.id}
            href={`/album/${album.id}`}
            title={album.name}
            subtitle={`${album.year} • ${album.type.charAt(0).toUpperCase() + album.type.slice(1)}`}
            imageUrl={album.coverUrl}
            onPlay={() => {}}
          />
        ))}
      </div>
    </section>
  );
}
