'use client';

import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { label: 'Hakkımızda', href: '#hakkimizda' },
  { label: 'Bir Kutu Sevgi', href: '#bir-kutu-sevgi' },
  { label: 'Temel Destekler', href: '#temel-ihtiyaclar' },
  { label: 'Eğitim', href: '#egitim-destegi' },
  { label: 'Kariyer', href: '#kariyer-destegi' },
  { label: 'Psikolojik', href: '#psikolojik-destek' },
  { label: 'Sürdürülebilirlik', href: '#surdurulebilirlik-destekleri' },
];

/**
 * Local sub-navigation header for Nos Canda One | Vakıf.
 * Integrated directly into the boxed container layout.
 * Displays centered, responsive navigation links with scroll indicators.
 * 
 * Why: Placed inside the boxed container to form a unified editorial visual block.
 * Uses exact leaf SVG graphics and custom alignment to match the branding.
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
    <div className="w-full bg-white select-none border-b border-neutral-100">
      <div className="max-w-[1300px] mx-auto px-4 md:px-8 h-20 flex items-center justify-center font-garet">
        {/* Navigation Links */}
        <nav 
          className="flex items-center gap-6 overflow-x-auto whitespace-nowrap scrollbar-none py-2 px-1 max-w-full justify-start md:justify-center" 
          aria-label="Vakıf Bölüm Navigasyonu"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {NAV_LINKS.map((link) => {
            const isActive = activeAnchor === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`text-[0.85rem] font-semibold tracking-wide transition-all duration-300 relative py-1 cursor-pointer focus-visible:outline-none flex-shrink-0
                  ${isActive ? 'text-[#3241ae]' : 'text-neutral-600 hover:text-[#3241ae]'}`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#3241ae] animate-pulse" />
                )}
              </a>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
