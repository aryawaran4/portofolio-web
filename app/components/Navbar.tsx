"use client";

import { useState } from 'react';

type NavbarProps = {
  showProfile?: boolean;
};

export default function Navbar({ showProfile = false }: NavbarProps) {
  const links = [
    { href: '#hero', label: 'Home' },
    ...(showProfile ? [{ href: '#profile', label: 'Profile' }] : []),
    { href: '#projects', label: 'Projects' },
    { href: '#about', label: 'About' },
    { href: '#mileage', label: 'Mileage' },
    // { href: '#blog', label: 'Blog' },
    { href: '#contact', label: 'Contact' },
  ];

  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-[min(96%,1200px)]">
      <nav
        aria-label="Primary"
        className="rounded-3xl backdrop-blur-xl bg-white/6 border border-white/10 px-6 py-4 flex items-center justify-between shadow-2xl"
      >
        {/* Logo (left) */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center border border-white/10">
            <span className="text-white font-bold">A</span>
          </div>
        </div>

        {/* Desktop links (right) */}
        <div className="hidden md:flex items-center gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-white/90 hover:text-white font-medium tracking-wider text-sm px-3 py-2 rounded-lg transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <div className="md:hidden">
          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="p-2 rounded-lg bg-white/6 border border-white/10 text-white/90"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile dropdown */}
        {open && (
          <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-3 w-[min(100%,1100px)] rounded-2xl backdrop-blur-xl bg-black/50 border border-white/10 p-4 flex flex-col gap-2 md:hidden">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-white/90 hover:text-white font-medium tracking-wider text-sm px-3 py-2 rounded-lg transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
