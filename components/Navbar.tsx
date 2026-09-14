'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { VideoSaveLogo } from '../src/components/DroplyLogo';
import { PlatformIcon } from '../src/components/PlatformIcon';
import { useTheme } from '../src/hooks/useTheme';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Platforms', path: '/platforms' },
    { label: 'Formats', path: '/formats' },
    { label: 'FAQ', path: '/faq' },
  ];

  const isActive = (path: string) => pathname === path;

  const scrollToDownloader = () => {
    setMobileMenuOpen(false);
    if (pathname !== '/') {
      window.location.href = '/#downloader-hero';
      return;
    }
    const heroEl = document.getElementById('downloader-hero');
    if (heroEl) {
      heroEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/90 dark:bg-[#0D0504]/90 border-b border-slate-200/80 dark:border-[#2A1411]/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" onClick={() => setMobileMenuOpen(false)}>
            <VideoSaveLogo size="md" />
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-6 font-medium text-sm">
            {navItems.map((item) => {
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`transition-colors py-1.5 px-2 rounded-lg font-semibold ${
                    active
                      ? 'text-[#FF4D26] dark:text-[#FF4D26]'
                      : 'text-slate-600 dark:text-zinc-300 hover:text-[#FF4D26] dark:hover:text-[#FF4D26]'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Button & Theme Toggle */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full bg-slate-100 dark:bg-[#1E0C0A] border border-slate-200 dark:border-[#381611] text-slate-700 dark:text-zinc-300 hover:bg-slate-200 dark:hover:bg-[#2A1411] transition-colors cursor-pointer"
              title="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-[#FF4D26]" />}
            </button>

            <button
              onClick={scrollToDownloader}
              className="px-5 py-2.5 rounded-full bg-[#FF4D26] hover:bg-[#E63E15] text-white font-bold text-xs sm:text-sm shadow-md shadow-[#FF4D26]/20 hover:shadow-lg hover:shadow-[#FF4D26]/30 transition-all duration-200 active:scale-95 cursor-pointer"
            >
              Start Downloading
            </button>
          </div>

          {/* Mobile Header Controls */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-slate-100 dark:bg-[#1E0C0A] text-slate-700 dark:text-zinc-300 cursor-pointer"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-[#FF4D26]" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-600 dark:text-zinc-300 hover:bg-slate-100 dark:hover:bg-[#1E0C0A] transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 dark:border-[#2A1411] bg-white dark:bg-[#0D0504] px-4 pt-3 pb-5 space-y-2 animate-fade-in">
          {navItems.map((item) => {
            const active = isActive(item.path);
            return (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                  active
                    ? 'bg-orange-50 dark:bg-[#2A1411] text-[#FF4D26]'
                    : 'text-slate-700 dark:text-zinc-300 hover:bg-slate-100 dark:hover:bg-[#180907]'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <div className="pt-2">
            <button
              onClick={scrollToDownloader}
              className="w-full py-3 rounded-xl bg-[#FF4D26] text-white font-bold text-center text-sm shadow-md"
            >
              Start Downloading
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
