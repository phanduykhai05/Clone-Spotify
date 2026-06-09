'use client';

import { Card } from '@/components/ui/Card';

interface SectionCardProps {
  id: string;
  type: 'album' | 'playlist' | 'artist';
  name: string;
  subtitle?: string;
  coverUrl?: string;
}

const TYPE_HREF = { album: '/album', playlist: '/playlist', artist: '/artist' };

export function SectionCard({ id, type, name, subtitle, coverUrl }: SectionCardProps) {
  return (
    <Card
      href={`${TYPE_HREF[type]}/${id}`}
      title={name}
      subtitle={subtitle}
      imageUrl={coverUrl}
      roundedImage={type === 'artist'}
      onPlay={() => {}}
    />
  );
}
