'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

interface SidebarNavItemProps {
  href: string;
  label: string;
  icon: React.ReactNode;
  activeIcon: React.ReactNode;
}

export function SidebarNavItem({ href, label, icon, activeIcon }: SidebarNavItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        'flex items-center gap-4 px-3 py-2 rounded-md text-sm font-bold transition-colors',
        isActive ? 'text-white' : 'text-[#a7a7a7] hover:text-white',
      )}
    >
      <span className="w-6 h-6 flex-shrink-0">{isActive ? activeIcon : icon}</span>
      {label}
    </Link>
  );
}
