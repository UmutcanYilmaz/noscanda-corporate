'use client';

import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { label: 'Hakkımızda', href: '#hakkimizda' },
  { label: 'Neden Biz?', href: '#neden-biz' },
  { label: 'İmkanlar', href: '#imkanlar' },
  { label: 'Hedef Kitle', href: '#hedef-kitle' },
  { label: 'Destek Programı', href: '#destek-programi' },
  { label: 'Kazançlar', href: '#kazanclar' },
  { label: 'Gelişim Yolculuğu', href: '#gelisim-yolculugu' },
  { label: 'Kariyer Etkisi', href: '#kariyerinize-etkisi' },
  { label: 'S.S.S', href: '#sss' },
];

/**
 * Local sub-navigation header for Nos Canda One | Akademi.
 * Integrated directly into the boxed container layout.
 * Displays centered, responsive navigation links with scroll indicators.
 */
export function Header() {
  const [activeAnchor, setActiveAnchor] = useState('#hakkimizda');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 220;

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
    <div className="w-full bg-white select-none border-b border-neutral-100 font-garet">
      <div className="max-w-[1300px] mx-auto px-4 md:px-8 h-20 flex items-center justify-center">
        {/* Navigation Links */}
        <nav 
          className="flex items-center gap-6 md:gap-8 overflow-x-auto whitespace-nowrap scrollbar-none py-2 px-1 max-w-full justify-start md:justify-center" 
          aria-label="Akademi Bölüm Navigasyonu"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {NAV_LINKS.map((link) => {
            const isActive = activeAnchor === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`text-[0.85rem] font-semibold tracking-wide transition-all duration-300 relative py-1 cursor-pointer focus-visible:outline-none flex-shrink-0
                  ${isActive ? 'text-[#BA5225]' : 'text-neutral-600 hover:text-[#BA5225]'}`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#BA5225] animate-pulse" />
                )}
              </a>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
