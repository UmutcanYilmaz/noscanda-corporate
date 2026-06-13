'use client';

import { forwardRef } from 'react';
import type { ProductSlide } from '@/lib/products';

interface Props { slide: ProductSlide; }

/**
 * Side-by-side concentration comparison matrix.
 * Gold gradient bars for Nos Canda vs grey bars for competitors.
 */
export const ConcentrationMatrix = forwardRef<HTMLDivElement, Props>(({ slide }, ref) => {
  const data = slide.comparisonData;
  if (!data) return null;

  const maxConcentration = Math.max(...data.map((d) => d.concentration));

  return (
    <div ref={ref} className="w-full min-h-screen md:h-full flex flex-col items-center justify-center px-6 py-20 md:py-0 bg-[var(--bg-primary)]">
      <div className="max-w-2xl mx-auto text-center w-full">
        <span className="badge-corporate block mb-4">Rekabet Analizi</span>
        <h2 className="font-cinzel text-section-heading font-bold text-[var(--text-primary)] mb-3">{slide.headline}</h2>
        {slide.subtext && <p className="font-body text-sm text-[var(--text-secondary)] mb-12">{slide.subtext}</p>}

        <div className="space-y-5">
          {data.map((entry) => {
            const pct = (entry.concentration / maxConcentration) * 100;
            return (
              <div key={entry.brand} className="text-left">
                <div className="flex items-center justify-between mb-2">
                  <span className={`font-gothic text-sm font-semibold
                    ${entry.isNoscanda ? 'text-[var(--accent-gold)]' : 'text-[var(--text-secondary)]'}`}>
                    {entry.brand}
                  </span>
                  <span className="font-gothic text-xs text-[var(--text-muted)]">
                    {entry.type}
                  </span>
                </div>

                <div className="relative h-8 bg-[var(--bg-secondary)] rounded-lg overflow-hidden">
                  <div
                    className={`absolute inset-y-0 left-0 rounded-lg flex items-center justify-end pr-3 transition-all duration-1000
                      ${entry.isNoscanda
                        ? 'bg-gradient-to-r from-[var(--accent-gold)] to-[var(--accent-gold-hover)]'
                        : 'bg-gradient-to-r from-zinc-500/40 to-zinc-400/50'
                      }`}
                    style={{ width: `${Math.max(pct, 8)}%` }}
                  >
                    <span className={`font-gothic text-xs font-bold
                      ${entry.isNoscanda ? 'text-[var(--bg-primary)]' : 'text-[var(--text-primary)]'}`}>
                      %{entry.concentration}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className="font-body text-xs text-[var(--text-muted)] mt-8 italic">
          * Konsantrasyon oranları sektör ortalamaları ve ürün etiket bilgilerine dayanmaktadır.
        </p>
      </div>
    </div>
  );
});

ConcentrationMatrix.displayName = 'ConcentrationMatrix';
