import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { Player } from './Player';

interface AppLayoutProps {
  children: React.ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="flex flex-col h-screen bg-black text-white overflow-hidden">
      <Header />
      <div className="flex flex-1 gap-2 px-2 pb-2 min-h-0 overflow-hidden">
        <Sidebar />
        <main className="flex-1 flex flex-col min-w-0 bg-[#121212] rounded-lg overflow-hidden">
          {children}
        </main>
      </div>
      <Player />
    </div>
  );
}
