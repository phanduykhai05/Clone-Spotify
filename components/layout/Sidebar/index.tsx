import { SidebarNav } from './SidebarNav';
import { Library } from './Library';

export function Sidebar() {
  return (
    <aside className="w-[280px] min-w-[280px] flex flex-col gap-2 h-full">
      <div className="bg-[#121212] rounded-lg px-3 py-4">
        <SidebarNav />
      </div>
      <Library />
    </aside>
  );
}
