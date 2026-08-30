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
    { label: 'YouTube', path: '/youtube', platform: 'youtube' },
    { label: 'Playlist', path: '/youtube-playlist', platform: 'youtube_playlist' },
    { label: 'Instagram', path: '/instagram', platform: 'instagram' },
    { label: 'Facebook', path: '/facebook', platform: 'facebook' },
    { label: 'TikTok', path: '/tiktok', platform: 'tiktok' },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-50/80 dark:bg-[#090A0F]/80 border-b border-slate-200/80 dark:border-[#1E2436]/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" onClick={() => setMobileMenuOpen(false)}>
            <VideoSaveLogo size="md" />
          </Link>


          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-200/50 dark:bg-[#121520]/70 p-1.5 rounded-2xl border border-slate-200/60 dark:border-[#1E2436]">
            <Link
              href="/"
              className={`px-3.5 py-1.5 rounded-xl text-sm font-semibold transition-all ${isActive('/')
                  ? 'bg-white dark:bg-[#1A1E2E] text-[#2563EB] dark:text-[#3B82F6] shadow-sm'
                  : 'text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-100 hover:bg-white/50 dark:hover:bg-zinc-800/50'
                }`}
            >
              Home
            </Link>
            {navItems.map((item) => {
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-sm font-semibold transition-all ${active
                      ? 'bg-white dark:bg-[#1A1E2E] text-[#2563EB] dark:text-[#3B82F6] shadow-sm'
                      : 'text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-100 hover:bg-white/50 dark:hover:bg-zinc-800/50'
                    }`}
                >
                  <PlatformIcon platform={item.platform} className="w-4 h-4" />
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Controls */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-slate-200/60 dark:bg-[#121520] border border-slate-200 dark:border-[#1E2436] text-slate-700 dark:text-zinc-300 hover:bg-slate-300/60 dark:hover:bg-[#1A1E2E] transition-colors cursor-pointer"
              title="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-[#2563EB]" />}
            </button>
          </div>

          {/* Mobile Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-slate-200/60 dark:bg-[#121520] text-slate-700 dark:text-zinc-300 cursor-pointer"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-[#2563EB]" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-600 dark:text-zinc-300 hover:bg-slate-200/60 dark:hover:bg-[#121520] transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 dark:border-[#1E2436] bg-white dark:bg-[#090A0F] px-4 pt-3 pb-5 space-y-2 animate-fade-in">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-semibold transition-colors ${isActive('/')
                ? 'bg-blue-50 dark:bg-blue-500/10 text-[#2563EB] dark:text-[#3B82F6]'
                : 'text-slate-700 dark:text-zinc-300 hover:bg-slate-100 dark:hover:bg-[#121520]'
              }`}
          >
            Home
          </Link>
          {navItems.map((item) => {
            const active = isActive(item.path);
            return (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-semibold transition-colors ${active
                    ? 'bg-blue-50 dark:bg-blue-500/10 text-[#2563EB] dark:text-[#3B82F6]'
                    : 'text-slate-700 dark:text-zinc-300 hover:bg-slate-100 dark:hover:bg-[#121520]'
                  }`}
              >
                <PlatformIcon platform={item.platform} className="w-5 h-5" />
                {item.label}
              </Link>
            );
          })}
        </div>
      )}





    </header>
  );
};
