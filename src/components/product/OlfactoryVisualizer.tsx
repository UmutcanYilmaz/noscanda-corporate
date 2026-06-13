'use client';

import { forwardRef } from 'react';
import type { ProductSlide } from '@/lib/products';

interface Props { slide: ProductSlide; }

/**
 * 3-tier olfactory pyramid visualizer for scent note breakdown.
 * Top → Heart → Base notes with inverted triangle aesthetic and gold accents.
 */
export const OlfactoryVisualizer = forwardRef<HTMLDivElement, Props>(({ slide }, ref) => {
  const notes = slide.olfactoryNotes;
  if (!notes) return null;

  const tiers = [
    { label: 'Top Notes', sublabel: 'İlk İzlenim', items: notes.top, width: 'w-[55%]', color: 'from-amber-300/20 to-transparent' },
    { label: 'Heart Notes', sublabel: 'Karakter', items: notes.heart, width: 'w-[75%]', color: 'from-amber-500/20 to-transparent' },
    { label: 'Base Notes', sublabel: 'Kalıcılık', items: notes.base, width: 'w-[95%]', color: 'from-amber-700/20 to-transparent' },
  ];

  return (
    <div ref={ref} className="w-full min-h-screen md:h-full flex flex-col items-center justify-center px-6 py-20 md:py-0 bg-[var(--bg-primary)]">
      <div className="max-w-2xl mx-auto text-center">
        <span className="badge-corporate block mb-4">Koku Mimarisi</span>
        <h2 className="font-cinzel text-section-heading font-bold text-[var(--text-primary)] mb-3">{slide.headline}</h2>
        {slide.subtext && <p className="font-body text-sm text-[var(--text-secondary)] mb-12">{slide.subtext}</p>}

        {/* Pyramid */}
        <div className="flex flex-col items-center gap-4">
          {tiers.map((tier) => (
            <div key={tier.label} className={`${tier.width} transition-all duration-500`}>
              <div className={`bg-gradient-to-b ${tier.color} border border-[var(--border-gold)] rounded-xl px-6 py-5`}>
                <div className="flex items-center justify-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-[var(--accent-gold)]" />
                  <span className="font-gothic text-[0.65rem] tracking-[0.2em] uppercase text-[var(--accent-gold)]">
                    {tier.label}
                  </span>
                  <span className="font-body text-[0.6rem] text-[var(--text-muted)] italic">
                    {tier.sublabel}
                  </span>
                </div>
                <div className="flex flex-wrap justify-center gap-2">
                  {tier.items.map((item) => (
                    <span key={item} className="font-body text-sm text-[var(--text-primary)] px-3 py-1
                      rounded-full border border-[var(--border-subtle)] bg-[var(--bg-elevated)]">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

OlfactoryVisualizer.displayName = 'OlfactoryVisualizer';
