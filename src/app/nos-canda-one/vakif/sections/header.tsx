'use client';

import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { label: 'Hakkımızda', href: '#hakkimizda' },
  { label: 'Bir Kutu Sevgi', href: '#bir-kutu-sevgi' },
  { label: 'Temel İhtiyaçlar', href: '#temel-ihtiyaclar' },
  { label: 'Gelişim Destekleri', href: '#gelisim-destekleri' },
  { label: 'Sürdürülebilirlik', href: '#surdurulebilirlik-destekleri' },
  { label: 'Toplumsal Birlik', href: '#toplumsal-birlik' },
];

/**
 * Centered sticky local sub-navigation header for Nos Canda One | Vakıf.
 * Tracks scroll positions to highlight active anchor targets with gold theme styling.
 */
export function Header() {
  const [activeAnchor, setActiveAnchor] = useState('#hakkimizda');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;

      for (const link of NAV_LINKS) {
        const el = document.querySelector(link.href);
        if (el) {
          const top = (el as HTMLElement).offsetTop;
          const height = (el as HTMLElement).offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveAnchor(link.href);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial run

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-[72px] z-40 bg-white/95 backdrop-blur-md border-b border-neutral-100 font-garet w-full select-none">
      <div className="max-w-[1280px] mx-auto px-6 h-14 flex items-center justify-center overflow-x-auto scrollbar-none">
        {/* Anchor Navigation links */}
        <nav className="flex items-center gap-6 md:gap-8 flex-nowrap" aria-label="Vakıf Bölüm Navigasyonu">
          {NAV_LINKS.map((link) => {
            const isActive = activeAnchor === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`text-[0.72rem] md:text-xs font-semibold tracking-wider whitespace-nowrap transition-all duration-300 relative py-1 cursor-pointer focus-visible:outline-none focus-visible:text-[#B8860B]
                  ${isActive ? 'text-[#B8860B]' : 'text-neutral-600 hover:text-[#B8860B]'}`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#B8860B]" />
                )}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
