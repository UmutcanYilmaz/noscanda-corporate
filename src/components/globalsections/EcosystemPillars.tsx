'use client';

import Link from 'next/link';
import { GoldCard } from '@/components/core/GoldCard';
import { useGsapScroll } from '@/hooks/useGsapScroll';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const PILLARS = [
  {
    id: 'pillar-concentration',
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" stroke="var(--accent-gold)" strokeWidth="1.5">
        <path d="M18 6h12M20 6v8l-6 10v12a4 4 0 004 4h12a4 4 0 004-4V24l-6-10V6" />
        <circle cx="24" cy="32" r="4" fill="var(--accent-gold)" opacity="0.15" />
      </svg>
    ),
    title: 'Yüksek Konsantrasyon',
    description: 'Tüm ev, araç ve kişisel koku hatlarımızda taviz vermeyen yüksek esans yağı oranı. Sektör standardının çok üzerinde Extrait de Parfum konsantrasyonu.',
    href: '/felsefe',
  },
  {
    id: 'pillar-shield',
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" stroke="var(--accent-gold)" strokeWidth="1.5">
        <path d="M24 4L6 12v12c0 11 8 18 18 22 10-4 18-11 18-22V12L24 4z" />
        <path d="M16 24l4 4 8-8" strokeWidth="2" />
      </svg>
    ),
    title: 'Bölge Kalkanı',
    description: 'Fiziksel yarıçap sınırı ile yerel kendi-kendine rekabeti engelleyen 3-5km korumalı bölge sistemi. Her bayiye özel, garantili satış coğrafyası.',
    href: '/girisimcilik/bolge-kalkani',
  },
  {
    id: 'pillar-akademi',
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" stroke="var(--accent-gold)" strokeWidth="1.5">
        <path d="M24 4L4 16l20 12 20-12L24 4z" />
        <path d="M8 18v14c0 4 7 8 16 8s16-4 16-8V18" />
        <path d="M40 16v16" />
        <circle cx="40" cy="34" r="2" fill="var(--accent-gold)" opacity="0.2" />
      </svg>
    ),
    title: 'Nos Canda Akademi',
    description: 'Staj kapıları açan, eğitim bursları ve gelişim projeleriyle genç yeteneklere destek olan kurumsal sosyal sorumluluk ve gelişim platformu.',
    href: '/akademi',
  },
  {
    id: 'pillar-vakif',
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" stroke="var(--accent-gold)" strokeWidth="1.5">
        <path d="M24 38s-14-8-14-18a8 8 0 0114-5.3A8 8 0 0138 20c0 10-14 18-14 18z" />
        <path d="M24 22v8M20 26h8" strokeWidth="1.5" />
      </svg>
    ),
    title: 'Nos Canda Vakfı',
    description: 'Kadın girişimcilere odaklanan risk sermayesi hızlandırma programları ve sıfır-atık yeşil inisiyatifleriyle topluma katkı sağlayan vakıf.',
    href: '/vakif',
  },
];

/**
 * 4-column ecosystem pillar cards with gold borders and GSAP stagger entrance.
 * Each card links to its respective page.
 */
export function EcosystemPillars() {
  const containerRef = useGsapScroll((container) => {
    const cards = container.querySelectorAll('.pillar-card');
    gsap.fromTo(cards,
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.15,
        scrollTrigger: { trigger: container, start: 'top 75%', toggleActions: 'play none none reverse' },
      }
    );
  });

  return (
    <section
      ref={containerRef}
      id="ecosystem-pillars"
      className="section-padding bg-[var(--bg-primary)]"
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="badge-corporate block mb-4">Ekosistem & Vizyon</span>
          <h2 className="font-cinzel text-section-heading font-semibold text-[var(--text-primary)] mb-4">
            Dört Temel Direk
          </h2>
          <div className="gold-line max-w-[100px] mx-auto" />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map((pillar) => (
            <Link key={pillar.id} href={pillar.href} className="block">
              <GoldCard id={pillar.id} className="pillar-card text-center h-full">
                <div className="flex justify-center mb-6">
                  {pillar.icon}
                </div>
                <h3 className="font-cinzel text-base font-semibold text-[var(--text-primary)] mb-4">
                  {pillar.title}
                </h3>
                <p className="font-body text-sm text-[var(--text-secondary)] leading-relaxed">
                  {pillar.description}
                </p>
              </GoldCard>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
