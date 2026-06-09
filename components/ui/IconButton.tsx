import { cn } from '@/lib/utils';

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  size?: 'sm' | 'md' | 'lg';
  active?: boolean;
}

const sizeClasses = { sm: 'w-8 h-8 text-base', md: 'w-10 h-10 text-lg', lg: 'w-12 h-12 text-xl' };

export function IconButton({ label, size = 'md', active, className, children, ...props }: IconButtonProps) {
  return (
    <button
      aria-label={label}
      className={cn(
        'inline-flex items-center justify-center rounded-full transition-all cursor-pointer',
        'text-[#a7a7a7] hover:text-white disabled:opacity-40 disabled:pointer-events-none',
        active && 'text-[#1db954] hover:text-[#1ed760]',
        sizeClasses[size],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
