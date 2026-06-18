'use client';

import Hero from './sections/hero';
import { Services } from './sections/services';

/**
 * Full-Stack Web — Detail Page
 *
 * Why: Indigo accent (#6366F1) conveys innovation and engineering depth,
 * differentiating this from the broader Tech hub palette.
 */
export function Structure() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <Hero />
      <Services />
    </div>
  );
}
