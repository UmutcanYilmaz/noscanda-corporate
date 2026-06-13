'use client';

import { forwardRef } from 'react';
import Image from 'next/image';
import type { ProductSlide } from '@/lib/products';

interface Props {
  slide: ProductSlide;
}

/**
 * Full-viewport slide wrapper for hero, environment, packshot, and education slide types.
 * Renders product image + headline/subtext. Education type renders step indicators.
 */
export const ImmersiveSlide = forwardRef<HTMLDivElement, Props>(({ slide }, ref) => {
  return (
    <div
      ref={ref}
      className="w-full min-h-screen md:h-full flex flex-col items-center justify-center
        px-6 py-20 md:py-0 bg-[var(--bg-primary)]"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Badge */}
        <span className="badge-corporate block mb-6">
          {slide.type === 'hero' && 'Nos Canda'}
          {slide.type === 'environment' && 'Lifestyle'}
          {slide.type === 'packshot' && 'Koleksiyon'}
          {slide.type === 'education' && 'Kullanım Rehberi'}
        </span>

        {/* Product Image */}
        {slide.image && (
          <div className="relative w-[200px] h-[300px] md:w-[240px] md:h-[360px] mx-auto mb-8">
            <Image
              src={slide.image}
              alt={slide.headline}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 200px, 240px"
              priority={slide.type === 'hero'}
            />
          </div>
        )}

        {/* Headline */}
        <h2 className="font-cinzel text-section-heading font-bold text-[var(--text-primary)] mb-3">
          {slide.headline}
        </h2>

        {/* Subtext */}
        {slide.subtext && (
          <p className="font-body text-body-lg text-[var(--text-secondary)] max-w-xl mx-auto mb-8">
            {slide.subtext}
          </p>
        )}

        {/* Education Steps */}
        {slide.type === 'education' && slide.educationSteps && (
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-8 max-w-4xl mx-auto">
            {slide.educationSteps.map((step) => (
              <div key={step.step} className="text-center p-4 rounded-xl border border-[var(--border-subtle)]">
                <div className="w-8 h-8 rounded-full bg-[var(--accent-gold)] text-[var(--bg-primary)]
                  flex items-center justify-center font-gothic text-sm font-bold mx-auto mb-3">
                  {step.step}
                </div>
                <h4 className="font-gothic text-xs tracking-wider uppercase text-[var(--accent-gold)] mb-2">
                  {step.title}
                </h4>
                <p className="font-body text-xs text-[var(--text-secondary)] leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
});

ImmersiveSlide.displayName = 'ImmersiveSlide';
