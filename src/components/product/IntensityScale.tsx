'use client';

import { forwardRef } from 'react';
import type { ProductSlide } from '@/lib/products';

interface Props { slide: ProductSlide; }

/**
 * Animated SVG/CSS chart showing reed count vs scent projection and longevity.
 * Bars animate via CSS transitions. Highlights the recommended baseline zone.
 */
export const IntensityScale = forwardRef<HTMLDivElement, Props>(({ slide }, ref) => {
  const data = slide.intensityData;
  if (!data) return null;

  const maxProjection = Math.max(...data.projectionMeters);
  const maxLongevity = Math.max(...data.longevityWeeks);

  return (
    <div ref={ref} className="w-full min-h-screen md:h-full flex flex-col items-center justify-center px-6 py-20 md:py-0 bg-[var(--bg-primary)]">
      <div className="max-w-2xl mx-auto text-center w-full">
        <span className="badge-corporate block mb-4">Bilimsel Analiz</span>
        <h2 className="font-cinzel text-section-heading font-bold text-[var(--text-primary)] mb-3">{slide.headline}</h2>
        {slide.subtext && <p className="font-body text-sm text-[var(--text-secondary)] mb-12">{slide.subtext}</p>}

        {/* Chart */}
        <div className="space-y-6">
          {data.reedCounts.map((count, i) => {
            const projPct = (data.projectionMeters[i] / maxProjection) * 100;
            const longPct = (data.longevityWeeks[i] / maxLongevity) * 100;
            const isRecommended = count >= data.recommended[0] && count <= data.recommended[1];

            return (
              <div key={count} className={`p-4 rounded-xl border transition-all
                ${isRecommended
                  ? 'border-[var(--accent-gold)] bg-[var(--accent-gold-glow)]'
                  : 'border-[var(--border-subtle)] bg-[var(--bg-elevated)]'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-gothic text-sm font-semibold text-[var(--text-primary)]">
                    {count} Çubuk
                    {isRecommended && (
                      <span className="ml-2 text-[0.6rem] tracking-widest uppercase text-[var(--accent-gold)]">
                        ★ Önerilen
                      </span>
                    )}
                  </span>
                </div>

                {/* Projection bar */}
                <div className="mb-2">
                  <div className="flex items-center justify-between text-[0.65rem] font-gothic text-[var(--text-muted)] mb-1">
                    <span>Projeksiyon</span>
                    <span>{data.projectionMeters[i]}m</span>
                  </div>
                  <div className="h-2 bg-[var(--bg-secondary)] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[var(--accent-gold)] to-[var(--accent-gold-hover)] transition-all duration-1000"
                      style={{ width: `${projPct}%` }}
                    />
                  </div>
                </div>

                {/* Longevity bar */}
                <div>
                  <div className="flex items-center justify-between text-[0.65rem] font-gothic text-[var(--text-muted)] mb-1">
                    <span>Dayanıklılık</span>
                    <span>{data.longevityWeeks[i]} hafta</span>
                  </div>
                  <div className="h-2 bg-[var(--bg-secondary)] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-emerald-500/60 to-emerald-400/80 transition-all duration-1000"
                      style={{ width: `${longPct}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
});

IntensityScale.displayName = 'IntensityScale';
