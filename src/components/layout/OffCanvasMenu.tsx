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
 * Minimalist vector SVG icon renderer.
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
 * Slides in from the right, locks body scroll, features keyboard trapping & screen reader support,
 * and displays dynamic visual previews in an elegant 3:4 portrait layout.
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
          // Shift + Tab (navigating backwards)
          if (document.activeElement === firstEl) {
            lastEl.focus();
            e.preventDefault();
          }
        } else {
          // Tab (navigating forwards)
          if (document.activeElement === lastEl) {
            firstEl.focus();
            e.preventDefault();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    
    // Auto-focus the close button on open
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
      className={`fixed inset-0 z-[60] transition-all duration-500 flex justify-end
        ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      role="dialog"
      aria-modal="true"
      aria-label="Navigasyon Menüsü"
    >
      {/* Dimmed glass background overlay */}
      <div
        className="absolute inset-0 bg-black/45 backdrop-blur-sm transition-opacity duration-500"
        onClick={onClose}
      />

      {/* Main Drawer Panel */}
      <div
        className={`relative z-10 flex flex-col lg:flex-row h-full w-full lg:max-w-[960px] bg-[var(--bg-primary)] border-l border-[var(--border-subtle)] shadow-elevated transition-transform duration-500 ease-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        
        {/* Floating Close Button */}
        <button
          id="close-menu-button"
          onClick={onClose}
          className="absolute top-4 right-4 z-50 w-10 h-10 flex items-center justify-center rounded-full bg-black/40 backdrop-blur-md border border-white/10 hover:border-[var(--accent-gold)] hover:scale-105 transition-all duration-300 cursor-pointer text-white shadow-lg focus-visible:ring-2 focus-visible:ring-[var(--accent-gold)] focus-visible:outline-none"
          aria-label="Menüyü Kapat"
        >
          <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
            <line x1="2" y1="2" x2="14" y2="14" />
            <line x1="14" y1="2" x2="2" y2="14" />
          </svg>
        </button>

        {/* Decorative Watermark Logo */}
        <div className="absolute bottom-10 left-10 pointer-events-none select-none opacity-[0.02] hidden lg:block">
          <Image
            src="/logolar/logolar-1024x1024/nos-canda-logo-bw.png"
            alt=""
            width={350}
            height={350}
            priority
          />
        </div>

        {/* Desktop Left Column: Dynamic Visual 3:4 Portrait Curation Preview */}
        <div className="hidden lg:flex w-[400px] flex-col justify-between p-10 border-r border-[var(--border-subtle)] bg-[var(--bg-secondary)] relative overflow-hidden select-none">
          {/* Luxury background texture overlay */}
          <div className="absolute inset-0 z-0 pointer-events-none opacity-30 mix-blend-multiply">
            <Image
              src="/images/placeholders/hero-background.png"
              alt=""
              fill
              className="object-cover"
              sizes="400px"
            />
          </div>

          <div className="relative z-10 flex flex-col h-full justify-between">
            <div>
              <span className="badge-corporate inline-block mb-3 text-[0.6rem] tracking-[0.2em] font-gothic text-[var(--accent-gold)]">
                Noscanda Keşif
              </span>
              <h4 className="font-cinzel text-lg font-bold text-[var(--text-primary)] mb-2 transition-all duration-300">
                {hoveredPreview.title}
              </h4>
              <p className="font-body text-xs text-[var(--text-secondary)] leading-relaxed mb-6 transition-all duration-300 min-h-[50px]">
                {hoveredPreview.desc}
              </p>
            </div>
            
            {/* Interactive portrait product image frame (3:4 aspect ratio) */}
            <div className="relative aspect-[3/4] w-[260px] mx-auto rounded-2xl overflow-hidden border border-[var(--border-strong)] bg-[var(--bg-primary)] shadow-glass image-zoom-container mb-6">
              <Image
                key={hoveredPreview.image}
                src={hoveredPreview.image}
                alt={hoveredPreview.title}
                fill
                className="object-cover transition-all duration-500 animate-fade-in"
                sizes="300px"
              />
            </div>

            <div className="text-[var(--text-muted)] font-garet text-[0.55rem] tracking-[0.25em] uppercase">
              Olfaktif Sanat Evi
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Header: Premium Dynamic Horizontal Preview Card */}
        <div className="lg:hidden w-full bg-[var(--bg-secondary)] p-4 pr-16 flex gap-4 border-b border-[var(--border-subtle)] relative overflow-hidden flex-shrink-0 select-none">
          {/* Framed portrait 3:4 preview image */}
          <div className="w-[70px] sm:w-[80px] aspect-[3/4] relative rounded-xl overflow-hidden border border-[var(--border-strong)] bg-[var(--bg-primary)] shadow-glass flex-shrink-0">
            <Image
              key={hoveredPreview.image}
              src={hoveredPreview.image}
              alt={hoveredPreview.title}
              fill
              className="object-cover transition-all duration-500 animate-fade-in"
              sizes="120px"
            />
          </div>

          {/* Text Overlay Details */}
          <div className="flex-1 flex flex-col justify-center">
            <span className="font-gothic text-[0.52rem] tracking-[0.18em] text-[var(--accent-gold)] uppercase block mb-0.5">
              Noscanda Keşif
            </span>
            <h4 className="font-cinzel text-xs sm:text-sm font-bold text-[var(--text-primary)] mb-0.5 leading-snug line-clamp-1">
              {hoveredPreview.title}
            </h4>
            <p className="font-body text-[0.68rem] text-[var(--text-secondary)] leading-relaxed line-clamp-2">
              {hoveredPreview.desc}
            </p>
          </div>
        </div>

        {/* Right Column: Menu Navigation Links & Socials */}
        <div className="flex-1 flex flex-col h-[calc(100%-110px)] lg:h-full justify-between overflow-y-auto bg-[var(--bg-primary)]">
          
          <div className="p-6 sm:p-10 flex flex-col justify-between min-h-full">
            {/* Header branding logo */}
            <div className="pb-6 border-b border-[var(--border-subtle)] flex items-center">
              <Image
                src="/logolar/logolar-781x125/nos-canda-logo-bw.png"
                alt="Logo"
                width={120}
                height={20}
                className="h-[16px] w-auto object-contain"
              />
            </div>

            {/* Navigation Items (Accordion & Links) */}
            <nav className="my-8 space-y-1" aria-label="Ana Menü">
              {NAV_ITEMS.map((item, idx) => {
                const hasChildren = !!item.children;
                const isExpanded = expandedIdx === idx;
                
                return (
                  <div key={item.label} className="border-b border-[var(--border-subtle)] last:border-0">
                    {hasChildren ? (
                      <>
                        <button
                          onClick={() => {
                            setExpandedIdx(isExpanded ? null : idx);
                            handleHoverItem(item);
                          }}
                          onMouseEnter={() => handleHoverItem(item)}
                          onFocus={() => handleHoverItem(item)}
                          className="w-full flex items-center justify-between py-4 font-cinzel text-base sm:text-lg text-[var(--text-primary)] hover:text-[var(--accent-gold)] focus-visible:text-[var(--accent-gold)] focus-visible:outline-none transition-colors duration-300 cursor-pointer group"
                          aria-expanded={isExpanded}
                          aria-controls={`menu-sub-${idx}`}
                        >
                          <div className="flex items-center gap-3">
                            {renderIcon(item.icon)}
                            <span className="tracking-wide group-hover:translate-x-1 group-focus-visible:translate-x-1 transition-transform duration-300">{item.label}</span>
                          </div>
                          <svg
                            className={`w-3.5 h-3.5 transition-transform duration-300 ${isExpanded ? 'rotate-180 text-[var(--accent-gold)]' : ''}`}
                            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                          >
                            <path d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        <div
                          id={`menu-sub-${idx}`}
                          className={`overflow-hidden transition-all duration-500 ease-in-out
                            ${isExpanded ? 'max-h-[380px] opacity-100 py-2' : 'max-h-0 opacity-0'}`}
                          role="region"
                          aria-label={`${item.label} Alt Menüsü`}
                        >
                          <div className="pl-6 space-y-1">
                            {item.children!.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                onClick={onClose}
                                onMouseEnter={() => handleHoverItem(child)}
                                onFocus={() => handleHoverItem(child)}
                                className="flex items-center gap-3 py-2.5 font-body text-sm text-[var(--text-secondary)] hover:text-[var(--accent-gold)] focus-visible:text-[var(--accent-gold)] focus-visible:outline-none transition-colors duration-200 group/child"
                              >
                                {/* Animated Curation Line */}
                                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-gold)] opacity-40 group-hover/child:scale-125 group-focus-visible/child:scale-125 transition-transform" />
                                <span className="group-hover/child:translate-x-1 group-focus-visible/child:translate-x-1 transition-transform duration-200">{child.label}</span>
                                {child.badge && (
                                  <span className="text-[0.55rem] tracking-widest uppercase px-2 py-0.5 rounded-full border border-[var(--accent-gold)] text-[var(--accent-gold)] font-gothic ml-auto">
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
                        className="w-full flex items-center py-4 font-cinzel text-base sm:text-lg text-[var(--text-primary)] hover:text-[var(--accent-gold)] focus-visible:text-[var(--accent-gold)] focus-visible:outline-none transition-colors duration-300 group"
                      >
                        <div className="flex items-center gap-3">
                          {renderIcon(item.icon)}
                          <span className="tracking-wide group-hover:translate-x-1 group-focus-visible:translate-x-1 transition-transform duration-300">{item.label}</span>
                        </div>
                      </Link>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Footer Coordinates & Socials */}
            <div className="pt-6 border-t border-[var(--border-subtle)] space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="font-gothic text-[0.6rem] tracking-[0.2em] uppercase text-[var(--text-muted)] block mb-1">
                    E-Posta
                  </span>
                  <a 
                    href="mailto:info@noscanda.net" 
                    className="font-body text-xs text-[var(--text-secondary)] hover:text-[var(--accent-gold)] focus-visible:text-[var(--accent-gold)] focus-visible:outline-none transition-colors"
                  >
                    info@noscanda.net
                  </a>
                </div>
                <div>
                  <span className="font-gothic text-[0.6rem] tracking-[0.2em] uppercase text-[var(--text-muted)] block mb-1">
                    Telefon
                  </span>
                  <a 
                    href="tel:+902120000000" 
                    className="font-body text-xs text-[var(--text-secondary)] hover:text-[var(--accent-gold)] focus-visible:text-[var(--accent-gold)] focus-visible:outline-none transition-colors"
                  >
                    +90 212 000 0000
                  </a>
                </div>
              </div>

              <div>
                <span className="font-gothic text-[0.6rem] tracking-[0.2em] uppercase text-[var(--text-muted)] block mb-1">
                  Genel Merkez
                </span>
                <p className="font-body text-[0.7rem] text-[var(--text-secondary)] leading-relaxed">
                  Noscanda Tower, Maslak, İstanbul, Türkiye
                </p>
              </div>

              {/* Social Icons Row */}
              <div className="flex items-center gap-4">
                <a 
                  href="#" 
                  className="w-8 h-8 rounded-full border border-[var(--border-subtle)] hover:border-[var(--accent-gold)] focus-visible:border-[var(--accent-gold)] focus-visible:text-[var(--accent-gold)] focus-visible:outline-none flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent-gold)] transition-colors duration-300"
                  aria-label="Instagram sayfamız"
                >
                  <span className="font-gothic text-[0.6rem]">IG</span>
                </a>
                <a 
                  href="#" 
                  className="w-8 h-8 rounded-full border border-[var(--border-subtle)] hover:border-[var(--accent-gold)] focus-visible:border-[var(--accent-gold)] focus-visible:text-[var(--accent-gold)] focus-visible:outline-none flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent-gold)] transition-colors duration-300"
                  aria-label="LinkedIn sayfamız"
                >
                  <span className="font-gothic text-[0.6rem]">LN</span>
                </a>
                <a 
                  href="#" 
                  className="w-8 h-8 rounded-full border border-[var(--border-subtle)] hover:border-[var(--accent-gold)] focus-visible:border-[var(--accent-gold)] focus-visible:text-[var(--accent-gold)] focus-visible:outline-none flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent-gold)] transition-colors duration-300"
                  aria-label="YouTube kanalımız"
                >
                  <span className="font-gothic text-[0.6rem]">YT</span>
                </a>
              </div>

              <p className="font-body text-[0.65rem] text-[var(--text-muted)]">
                © {new Date().getFullYear()} Noscanda Group. Tüm Hakları Saklıdır.
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
