'use client';

interface LibraryHeaderProps {
  onAddPlaylist?: () => void;
}

export function LibraryHeader({ onAddPlaylist }: LibraryHeaderProps) {
  return (
    <div className="flex items-center justify-between px-4 py-2">
      <button className="flex items-center gap-2 text-[#a7a7a7] hover:text-white transition-colors font-bold text-sm cursor-pointer">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 9h2V7H3V5H1v4zm0 6h2v-2H3v-2H1v4zm8-12H9v2h10V3H11zm0 6H9v2h10V9H11zm0 6H9v2h10v-2H11zM5 5H3v2h2V5zm0 4H3v2h2V9zm0 4H3v2h2v-2zm0 4H3v2h2v-2zm8-12H11v2h2V3zm0 6H11v2h2V9zm0 6H11v2h2v-2z" />
        </svg>
        Your Library
      </button>
      <div className="flex items-center gap-1">
        <button
          onClick={onAddPlaylist}
          aria-label="Create playlist or folder"
          className="w-8 h-8 flex items-center justify-center text-[#a7a7a7] hover:text-white transition-colors rounded-full hover:bg-[#282828] cursor-pointer"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
          </svg>
        </button>
        <button
          aria-label="Show more"
          className="w-8 h-8 flex items-center justify-center text-[#a7a7a7] hover:text-white transition-colors rounded-full hover:bg-[#282828] cursor-pointer"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4 18l8.5-6L4 6v12zm9-12v12l8.5-6L13 6z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
