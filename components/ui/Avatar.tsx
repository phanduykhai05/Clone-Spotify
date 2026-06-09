import Image from 'next/image';
import { cn } from '@/lib/utils';

interface AvatarProps {
  src?: string;
  alt: string;
  size?: number;
  className?: string;
}

export function Avatar({ src, alt, size = 32, className }: AvatarProps) {
  return (
    <div
      className={cn('relative rounded-full overflow-hidden bg-[#282828] flex-shrink-0', className)}
      style={{ width: size, height: size }}
    >
      {src ? (
        <Image src={src} alt={alt} fill className="object-cover" sizes={`${size}px`} />
      ) : (
        <svg className="w-full h-full text-[#a7a7a7] p-1" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
        </svg>
      )}
    </div>
  );
}
