import Link from 'next/link';

function InstallIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M12 3a9 9 0 1 0 0 18A9 9 0 0 0 12 3zM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12z" />
      <path d="M12 6a1 1 0 0 1 1 1v6.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L11 13.586V7a1 1 0 0 1 1-1z" />
    </svg>
  );
}

export function HeaderNav() {
  return (
    <nav className="flex items-center gap-6 flex-shrink-0">
      {/* Text links */}
      <Link href="/premium" className="text-sm font-bold text-white hover:text-[#1db954] transition-colors whitespace-nowrap">
        Premium
      </Link>
      <Link href="/support" className="text-sm font-bold text-white hover:text-[#1db954] transition-colors">
        Support
      </Link>
      <Link href="/download" className="text-sm font-bold text-white hover:text-[#1db954] transition-colors">
        Download
      </Link>

      {/* Vertical divider */}
      <div className="w-px h-5 bg-[#3a3a3a]" />

      {/* Install App */}
      <Link
        href="/download"
        className="flex items-center gap-2 text-sm font-bold text-white hover:text-[#1db954] transition-colors whitespace-nowrap"
      >
        <InstallIcon />
        Install App
      </Link>

      {/* Sign up */}
      <Link
        href="/signup"
        className="text-sm font-bold text-[#a7a7a7] hover:text-white transition-colors whitespace-nowrap"
      >
        Sign up
      </Link>

      {/* Log in */}
      <Link
        href="/login"
        className="h-12 px-8 rounded-full bg-white text-black text-sm font-bold hover:scale-105 hover:bg-[#f0f0f0] transition-all whitespace-nowrap flex items-center"
      >
        Log in
      </Link>
    </nav>
  );
}
