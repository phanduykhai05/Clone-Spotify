import { NavButtons } from './NavButtons';
import { UserMenu } from './UserMenu';

interface TopBarProps {
  transparent?: boolean;
  children?: React.ReactNode;
}

export function TopBar({ transparent = false, children }: TopBarProps) {
  return (
    <header
      className={`sticky top-0 z-10 flex items-center justify-between px-6 py-3 h-14 ${
        transparent ? 'bg-transparent' : 'bg-[#121212]'
      }`}
    >
      <div className="flex items-center gap-4">
        <NavButtons />
        {children}
      </div>
      <div className="flex items-center gap-2">
        <UserMenu />
      </div>
    </header>
  );
}
