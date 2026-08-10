'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { NAV_ITEMS, NavItem, NavChild } from '@/lib/constants';

interface OffCanvasMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Minimalist vector SVG icon renderer for nav headers.
 */
function renderIcon(iconName?: string) {
  if (!iconName) return null;
  switch (iconName) {
    case 'building':
      return (
        <svg className="w-4 h-4 text-[var(--accent-gold)] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.203 0-4.361.222-6.5.656V21" />
        </svg>
      );
    case 'rocket':
      return (
        <svg className="w-4 h-4 text-[var(--accent-gold)] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.63 8.41a14.98 14.98 0 00-6.16 12.12 14.98 14.98 0 0012.12-6.16z" />
        </svg>
      );
    case 'briefcase':
      return (
        <svg className="w-4 h-4 text-[var(--accent-gold)] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 .621-.504 1.125-1.125 1.125H4.875A1.125 1.125 0 013.75 18.4V14.15m16.5 0c0-1.22-.821-2.278-2.002-2.51l-3.32-.65a12.062 12.062 0 00-5.856 0l-3.32.65a2.473 2.473 0 00-2.002 2.51" />
        </svg>
      );
    case 'book-open':
      return (
        <svg className="w-4 h-4 text-[var(--accent-gold)] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292" />
        </svg>
      );
    case 'heart':
      return (
        <svg className="w-4 h-4 text-[var(--accent-gold)] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
      );
    case 'academic-cap':
      return (
        <svg className="w-4 h-4 text-[var(--accent-gold)] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41" />
        </svg>
      );
    case 'chart-bar':
      return (
        <svg className="w-4 h-4 text-[var(--accent-gold)] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v5.625G7.5 19.371 6.375 19.875h-2.25A1.125 1.125 0 013 18.75v-5.625z" />
        </svg>
      );
    case 'envelope':
      return (
        <svg className="w-4 h-4 text-[var(--accent-gold)] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916" />
        </svg>
      );
    default:
      return null;
  }
}

const DEFAULT_PREVIEW = {
  image: '/images/placeholders/hero-background.png',
  title: 'Noscanda Group',
  desc: 'Extrait de Parfum konsantrasyonlu lüks koku deneyimi. Eviniz ve aracınız için prestijli olfaktif imzalar.'
};

/**
 * Super modern, high-end Off-Canvas Menu for both mobile and desktop.
 * Re-designed to be ultra-premium, featuring full-screen glassmorphic layouts,
 * frameless floating illustrations for the curated preview column, and highly responsive interactions.
 */
export function OffCanvasMenu({ isOpen, onClose }: OffCanvasMenuProps) {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);
  const [hoveredPreview, setHoveredPreview] = useState(DEFAULT_PREVIEW);

  /* Lock body scroll when open */
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setHoveredPreview(DEFAULT_PREVIEW);
    } else {
      document.body.style.overflow = '';
      setExpandedIdx(null);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  /* Keyboard focus trap & Escape key handler (Accessibility) */
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }

      if (e.key === 'Tab') {
        const focusableElements = document.querySelectorAll<HTMLElement>(
          '#off-canvas-menu-overlay a, #off-canvas-menu-overlay button'
        );
        if (focusableElements.length === 0) return;

        const firstEl = focusableElements[0];
        const lastEl = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstEl) {
            lastEl.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastEl) {
            firstEl.focus();
            e.preventDefault();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    
    const closeBtn = document.getElementById('close-menu-button');
    if (closeBtn) closeBtn.focus();

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleHoverItem = (item: NavItem | NavChild) => {
    setHoveredPreview({
      image: item.image || '/images/placeholders/hero-background.png',
      title: item.teaserTitle || item.label,
      desc: item.teaserDesc || ''
    });
  };

  return (
    <div
      id="off-canvas-menu-overlay"
      className={`fixed inset-0 z-[60] transition-all duration-700 flex justify-end
        ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      role="dialog"
      aria-modal="true"
      aria-label="Navigasyon Menüsü"
    >
      {/* Cinematic blurred overlay */}
      <div
        className="absolute inset-0 bg-neutral-950/90 backdrop-blur-3xl transition-opacity duration-700"
        onClick={onClose}
      />

      {/* Main Full-Screen Panel */}
      <div
        className={`relative z-10 flex flex-col lg:flex-row h-full w-full bg-neutral-950/70 backdrop-blur-3xl border-l border-white/5 shadow-2xl transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] text-white overflow-hidden
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        
        {/* Radial ambient glow behind panel content */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-[0.04] blur-[140px] pointer-events-none z-0"
          style={{
            background: 'radial-gradient(circle, #BA5225 0%, #B8860B 50%, transparent 70%)'
          }}
        />

        {/* Floating Close Button */}
        <button
          id="close-menu-button"
          onClick={onClose}
          className="absolute top-8 right-8 z-50 flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 hover:border-[var(--accent-gold)] hover:bg-white/10 hover:scale-105 transition-all duration-300 cursor-pointer text-white shadow-xl focus-visible:ring-2 focus-visible:ring-[var(--accent-gold)] focus-visible:outline-none"
          aria-label="Menüyü Kapat"
        >
          <span className="font-gothic text-[0.65rem] tracking-[0.25em] uppercase text-white/80">Kapat</span>
          <svg width="10" height="10" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-2.5 h-2.5">
            <line x1="2" y1="2" x2="14" y2="14" />
            <line x1="14" y1="2" x2="2" y2="14" />
          </svg>
        </button>

        {/* Decorative Watermark Logo */}
        <div className="absolute bottom-20 left-20 pointer-events-none select-none opacity-[0.015] hidden lg:block z-0">
          <Image
            src="/logolar/logolar-1024x1024/nos-canda-logo-bw.png"
            alt=""
            width={550}
            height={550}
            priority
          />
        </div>

        {/* Desktop Left Column: Curated Visual Preview (Curator Column) */}
        <div className="hidden lg:flex lg:w-[42%] flex-col justify-between p-20 border-r border-white/5 bg-neutral-950/45 relative overflow-hidden select-none z-10">
          <div className="relative z-10 flex flex-col h-full justify-between">
            <div className="space-y-5">
              <span className="badge-corporate inline-block text-[0.65rem] tracking-[0.25em] font-gothic text-[var(--accent-gold)] px-4 py-1.5 rounded-full border border-[var(--accent-gold)]/20 bg-[var(--accent-gold)]/5">
                Noscanda Keşif
              </span>
              <h4 className="font-cinzel text-3xl font-semibold text-white tracking-wide transition-all duration-500">
                {hoveredPreview.title}
              </h4>
              <p className="font-body text-sm text-neutral-400 leading-relaxed max-w-sm transition-all duration-500 min-h-[60px] font-light">
                {hoveredPreview.desc}
              </p>
            </div>
            
            {/* Curated Preview Container: Transparent, cardless, frameless image floating independently */}
            <div className="relative aspect-[3/4] w-[320px] mx-auto select-none overflow-hidden transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.03]">
              <Image
                key={hoveredPreview.image}
                src={hoveredPreview.image}
                alt={hoveredPreview.title}
                fill
                className="object-contain transition-all duration-700 animate-fade-in"
                sizes="350px"
              />
            </div>

            <div className="text-neutral-600 font-gothic text-[0.6rem] tracking-[0.3em] uppercase">
              Olfaktif Sanat Evi
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Header Preview Card */}
        <div className="lg:hidden w-full bg-neutral-950/60 p-6 pr-24 flex gap-5 border-b border-white/5 relative overflow-hidden flex-shrink-0 select-none z-10">
          <div className="w-[65px] aspect-[3/4] relative overflow-hidden flex-shrink-0">
            <Image
              key={hoveredPreview.image}
              src={hoveredPreview.image}
              alt={hoveredPreview.title}
              fill
              className="object-contain transition-all duration-500 animate-fade-in"
              sizes="120px"
            />
          </div>

          <div className="flex-1 flex flex-col justify-center space-y-1">
            <span className="font-gothic text-[0.55rem] tracking-[0.2em] text-[var(--accent-gold)] uppercase block">
              Noscanda Keşif
            </span>
            <h4 className="font-cinzel text-sm font-semibold text-white leading-snug line-clamp-1">
              {hoveredPreview.title}
            </h4>
            <p className="font-body text-[0.7rem] text-neutral-400 leading-relaxed line-clamp-2 font-light">
              {hoveredPreview.desc}
            </p>
          </div>
        </div>

        {/* Right Column: Full-Screen Navigation Links & Coordinates */}
        <div className="flex-1 flex flex-col h-[calc(100%-120px)] lg:h-full justify-between overflow-y-auto bg-neutral-950/40 z-10">
          
          <div className="p-8 sm:p-20 flex flex-col justify-between min-h-full">
            
            {/* Header branding logo */}
            <div className="pb-10 border-b border-white/5 flex items-center">
              <Image
                src="/logolar/logolar-781x125/nos-canda-logo-bw.png"
                alt="Logo"
                width={170}
                height={28}
                className="h-[22px] w-auto object-contain brightness-200"
              />
            </div>

            {/* Navigation Items (Accordion & Links) */}
            <nav className="my-12 space-y-4" aria-label="Ana Menü">
              {NAV_ITEMS.map((item, idx) => {
                const hasChildren = !!item.children;
                const isExpanded = expandedIdx === idx;
                const paddedIndex = String(idx + 1).padStart(2, '0');
                
                return (
                  <div key={item.label} className="border-b border-white/5 last:border-0 pb-3">
                    {hasChildren ? (
                      <>
                        <button
                          onClick={() => {
                            setExpandedIdx(isExpanded ? null : idx);
                            handleHoverItem(item);
                          }}
                          onMouseEnter={() => handleHoverItem(item)}
                          onFocus={() => handleHoverItem(item)}
                          className="w-full flex items-center justify-between py-4 font-cinzel text-xl sm:text-2xl lg:text-3xl text-neutral-300 hover:text-white focus-visible:text-white focus-visible:outline-none transition-colors duration-300 cursor-pointer group"
                          aria-expanded={isExpanded}
                          aria-controls={`menu-sub-${idx}`}
                        >
                          <div className="flex items-center gap-5">
                            <span className="font-cinzel text-xs text-[var(--accent-gold)] tracking-widest font-light select-none">
                              {paddedIndex}
                            </span>
                            <span className="tracking-wide group-hover:translate-x-2 group-focus-visible:translate-x-2 transition-transform duration-300 relative py-1">
                              {item.label}
                            </span>
                          </div>
                          <svg
                            className={`w-4 h-4 text-neutral-500 transition-transform duration-300 ${isExpanded ? 'rotate-180 text-[var(--accent-gold)]' : ''}`}
                            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}
                          >
                            <path d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        <div
                          id={`menu-sub-${idx}`}
                          className={`overflow-hidden transition-all duration-500 ease-in-out
                            ${isExpanded ? 'max-h-[380px] opacity-100 py-4' : 'max-h-0 opacity-0'}`}
                          role="region"
                          aria-label={`${item.label} Alt Menüsü`}
                        >
                          <div className="pl-10 space-y-3 border-l border-white/10 ml-[26px]">
                            {item.children!.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                onClick={onClose}
                                onMouseEnter={() => handleHoverItem(child)}
                                onFocus={() => handleHoverItem(child)}
                                className="flex items-center gap-3 py-2.5 font-body text-sm lg:text-base text-neutral-400 hover:text-[var(--accent-gold)] focus-visible:text-[var(--accent-gold)] focus-visible:outline-none transition-colors duration-250 group/child"
                              >
                                <span className="group-hover/child:translate-x-1 group-focus-visible/child:translate-x-1 transition-transform duration-250">{child.label}</span>
                                {child.badge && (
                                  <span className="text-[0.55rem] tracking-widest uppercase px-2 py-0.5 rounded-full border border-[var(--accent-gold)]/30 bg-[var(--accent-gold)]/5 text-[var(--accent-gold)] font-gothic ml-auto scale-90">
                                    {child.badge}
                                  </span>
                                )}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </>
                    ) : (
                      <Link
                        href={item.href || '#'}
                        onClick={onClose}
                        onMouseEnter={() => handleHoverItem(item)}
                        onFocus={() => handleHoverItem(item)}
                        className="w-full flex items-center py-4 font-cinzel text-xl sm:text-2xl lg:text-3xl text-neutral-300 hover:text-white focus-visible:text-white focus-visible:outline-none transition-colors duration-300 group"
                      >
                        <div className="flex items-center gap-5">
                          <span className="font-cinzel text-xs text-[var(--accent-gold)] tracking-widest font-light select-none">
                            {paddedIndex}
                          </span>
                          <span className="tracking-wide group-hover:translate-x-2 group-focus-visible:translate-x-2 transition-transform duration-300 relative py-1">
                            {item.label}
                          </span>
                        </div>
                      </Link>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Footer Coordinates & Socials */}
            <div className="pt-10 border-t border-white/5 space-y-8">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <span className="font-gothic text-[0.6rem] tracking-[0.25em] uppercase text-neutral-500 block mb-1.5">
                    E-Posta
                  </span>
                  <a 
                    href="mailto:info@noscanda.group" 
                    className="font-body text-xs sm:text-sm text-neutral-300 hover:text-[var(--accent-gold)] focus-visible:text-[var(--accent-gold)] focus-visible:outline-none transition-colors"
                  >
                    info@noscanda.group
                  </a>
                </div>
                <div>
                  <span className="font-gothic text-[0.6rem] tracking-[0.25em] uppercase text-neutral-500 block mb-1.5">
                    Telefon
                  </span>
                  <a 
                    href="tel:+905453016605" 
                    className="font-body text-xs sm:text-sm text-neutral-300 hover:text-[var(--accent-gold)] focus-visible:text-[var(--accent-gold)] focus-visible:outline-none transition-colors"
                  >
                    0545 301 6605
                  </a>
                </div>
              </div>

              <div>
                <span className="font-gothic text-[0.6rem] tracking-[0.25em] uppercase text-neutral-500 block mb-1.5">
                  Genel Merkez
                </span>
                <p className="font-body text-xs text-neutral-300 leading-relaxed">
                  Yeni Bağlıca Mahallesi, Karatuz Caddesi 77/7 Etimesgut Ankara
                </p>
              </div>

              {/* Social Icons Row with real SVG vector symbols */}
              <div className="flex items-center gap-4">
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full border border-white/5 hover:border-[var(--accent-gold)] bg-white/5 hover:bg-white/10 focus-visible:border-[var(--accent-gold)] focus-visible:text-[var(--accent-gold)] focus-visible:outline-none flex items-center justify-center text-neutral-400 hover:text-[var(--accent-gold)] transition-all duration-300"
                  aria-label="Instagram sayfamız"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="5" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full border border-white/5 hover:border-[var(--accent-gold)] bg-white/5 hover:bg-white/10 focus-visible:border-[var(--accent-gold)] focus-visible:text-[var(--accent-gold)] focus-visible:outline-none flex items-center justify-center text-neutral-400 hover:text-[var(--accent-gold)] transition-all duration-300"
                  aria-label="LinkedIn sayfamız"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full border border-white/5 hover:border-[var(--accent-gold)] bg-white/5 hover:bg-white/10 focus-visible:border-[var(--accent-gold)] focus-visible:text-[var(--accent-gold)] focus-visible:outline-none flex items-center justify-center text-neutral-400 hover:text-[var(--accent-gold)] transition-all duration-300"
                  aria-label="X sayfamız"
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>

              <p className="font-body text-[0.65rem] text-neutral-500">
                © {new Date().getFullYear()} Noscanda Group. Tüm Hakları Saklıdır.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
