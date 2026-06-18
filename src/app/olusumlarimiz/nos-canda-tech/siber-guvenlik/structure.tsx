'use client';

import Hero from './sections/hero';
import { Services } from './sections/services';

/**
 * Siber Güvenlik — Detail Page
 *
 * Why: Emerald accent (#10B981) evokes trust and protection,
 * aligning with the security-focused service identity.
 */
export function Structure() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <Hero />
      <Services />
    </div>
  );
}
