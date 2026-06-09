import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

const variantClasses = {
  primary: 'bg-white text-black font-bold hover:scale-105 hover:bg-[#f0f0f0]',
  secondary: 'bg-[#1db954] text-black font-bold hover:scale-105 hover:bg-[#1ed760]',
  ghost: 'text-[#a7a7a7] hover:text-white',
  outline: 'border border-[#727272] text-white hover:border-white',
};

const sizeClasses = {
  sm: 'h-8 px-4 text-xs rounded-full',
  md: 'h-10 px-6 text-sm rounded-full',
  lg: 'h-12 px-8 text-base rounded-full',
};

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center gap-2 transition-all duration-150 cursor-pointer select-none disabled:opacity-40 disabled:pointer-events-none',
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
