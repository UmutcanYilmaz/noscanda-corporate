'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { OffCanvasMenu } from './OffCanvasMenu';

/**
 * Premium minimalist visual navigation bar.
 * Contains only the brand logo and the Off-Canvas Menu trigger button.
 * Adapts dynamically to light and dark backgrounds depending on page path and scroll position.
 */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isHomepage = pathname === '/';
  const useDarkStyles = isHomepage && !scrolled;

  return (
    <>
      <nav
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
          ${scrolled
            ? 'bg-[var(--nav-bg)] backdrop-blur-xl border-b border-[var(--nav-border)] shadow-[var(--shadow-ambient)]'
            : 'bg-transparent border-b border-transparent'
          }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link href="/" className="relative flex-shrink-0" id="nav-logo">
            <Image
              src="/logolar/logolar-781x125/nos-canda-logo-bw.png"
              alt="Nos Canda Group Logo"
              width={160}
              height={26}
              className={`h-[22px] w-auto object-contain transition-all duration-500
                ${useDarkStyles ? 'invert brightness-200' : ''}`}
              priority
            />
          </Link>

          {/* Menu Trigger (Hamburger) */}
          <button
            onClick={() => setMenuOpen(true)}
            className={`flex items-center gap-2.5 px-4 py-2 border rounded-full transition-all duration-500 cursor-pointer shadow-glass group backdrop-blur-md
              ${useDarkStyles
                ? 'border-white/20 hover:border-[var(--accent-gold)] bg-white/10'
                : 'border-[var(--border-subtle)] hover:border-[var(--accent-gold)] bg-white/30'
              }`}
            aria-label="Menüyü Aç"
          >
            <span className={`font-gothic text-[0.62rem] tracking-[0.25em] uppercase pl-1 transition-colors duration-300
              ${useDarkStyles
                ? 'text-white/80 group-hover:text-[var(--accent-gold)]'
                : 'text-[var(--text-secondary)] group-hover:text-[var(--accent-gold)]'
              }`}
            >
              Menü
            </span>
            <svg
              width="14"
              height="10"
              viewBox="0 0 18 14"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              className={`transition-colors duration-300
                ${useDarkStyles
                  ? 'text-white group-hover:text-[var(--accent-gold)]'
                  : 'text-[var(--text-primary)] group-hover:text-[var(--accent-gold)]'
                }`}
            >
              <line x1="0" y1="1" x2="18" y2="1" />
              <line x1="4" y1="7" x2="18" y2="7" />
              <line x1="0" y1="13" x2="18" y2="13" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Off-Canvas Navigation Drawer */}
      <OffCanvasMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
