'use client';

import { useState } from 'react';
import { Avatar } from '@/components/ui/Avatar';

export function UserMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(prev => !prev)}
        className="flex items-center gap-2 bg-black/50 hover:bg-black/70 rounded-full p-1 pr-2 transition-colors cursor-pointer"
      >
        <Avatar alt="User" size={28} />
        <span className="text-sm font-bold text-white">User</span>
        <svg
          className={`w-3 h-3 text-white transition-transform ${open ? 'rotate-180' : ''}`}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-full mt-1 w-48 bg-[#282828] rounded-md shadow-xl z-20 overflow-hidden text-sm">
            {[
              { label: 'Account', href: '#' },
              { label: 'Profile', href: '#' },
              { label: 'Settings', href: '#' },
            ].map(item => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center justify-between px-4 py-3 text-[#ffffffb3] hover:text-white hover:bg-[#3e3e3e] transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="border-t border-[#3e3e3e]" />
            <button className="w-full text-left px-4 py-3 text-[#ffffffb3] hover:text-white hover:bg-[#3e3e3e] transition-colors cursor-pointer">
              Log out
            </button>
          </div>
        </>
      )}
    </div>
  );
}
