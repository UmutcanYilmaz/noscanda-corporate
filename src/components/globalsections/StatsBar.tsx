'use client';

import { useGsapScroll } from '@/hooks/useGsapScroll';
import { AnimatedCounter } from '@/components/core/AnimatedCounter';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const STATS = [
  { value: 25, suffix: '%+', label: 'Esans Konsantrasyonu', sublabel: 'Extrait de Parfum Standardı' },
  { value: 8, suffix: '-16 Hafta', label: 'Koku Kalıcılığı', sublabel: 'Reed Diffuser Performansı' },
  { value: 3, suffix: '-5km', label: 'Korumalı Bölge Yarıçapı', sublabel: 'Franchise Güvencesi' },
  { value: 120, suffix: '+', label: 'Stajyer & Burslu', sublabel: 'Nos Canda Akademi Mezunu' },
];

/**
 * Animated statistics bar with scroll-triggered counters and staggered reveals.
 * Enriched with floating orbs and gradient gold text for visual impact.
 */
export function StatsBar() {
  const containerRef = useGsapScroll((container) => {
    const items = container.querySelectorAll('.stat-item');
    gsap.fromTo(items,
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.12,
        scrollTrigger: {
          trigger: container,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  });

  return (
    <section ref={containerRef} id="stats-bar" className="section-padding bg-[var(--bg-primary)] border-b border-[var(--border-subtle)] relative overflow-hidden">
      {/* Decorative orbs */}
      <div className="floating-orb floating-orb-gold w-[300px] h-[300px] -top-[100px] left-[20%]" />
      <div className="floating-orb floating-orb-warm w-[200px] h-[200px] bottom-[10%] right-[15%]" />

      <div className="relative z-10 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
          {STATS.map((stat) => (
            <div key={stat.label} className="stat-item text-center opacity-0 p-6 rounded-2xl bg-[var(--bg-secondary)]/50 backdrop-blur-sm border border-[var(--border-subtle)]">
              <div className="flex items-baseline justify-center gap-0.5 mb-2">
                <AnimatedCounter
                  end={stat.value}
                  suffix={stat.suffix}
                  duration={2.5}
                  className="stat-value"
                />
              </div>
              <p className="font-gothic text-xs tracking-[0.12em] uppercase text-[var(--text-primary)] mb-1">
                {stat.label}
              </p>
              <p className="font-body text-[0.7rem] text-[var(--text-muted)]">
                {stat.sublabel}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
