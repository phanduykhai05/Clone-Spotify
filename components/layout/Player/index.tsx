'use client';

import { NowPlaying } from './NowPlaying';
import { Controls } from './Controls';
import { Volume } from './Volume';

export function Player() {
  return (
    <footer className="h-[72px] bg-[#181818] border-t border-[#282828] flex items-center px-4 gap-4 flex-shrink-0">
      <NowPlaying />
      <div className="flex-1 flex justify-center min-w-0">
        <Controls />
      </div>
      <Volume />
    </footer>
  );
}
