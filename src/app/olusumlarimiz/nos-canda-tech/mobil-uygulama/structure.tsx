'use client';

import Hero from './sections/hero';
import { Services } from './sections/services';

/**
 * Mobil Uygulama — Detail Page
 *
 * Why: Amber accent (#F59E0B) conveys energy, speed and mobile accessibility.
 */
export function Structure() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <Hero />
      <Services />
    </div>
  );
}
