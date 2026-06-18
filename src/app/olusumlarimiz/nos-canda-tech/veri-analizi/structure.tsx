'use client';

import Hero from './sections/hero';
import { Services } from './sections/services';

/**
 * Veri Analizi & Bilimi — Detail Page
 *
 * Why: Violet accent (#8B5CF6) conveys analytical intelligence and data science depth.
 */
export function Structure() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <Hero />
      <Services />
    </div>
  );
}
