'use client';

import Hero from './sections/hero';
import { Services } from './sections/services';

/**
 * Yapay Zekâ & İş Otomasyonu Detail Page
 *
 * Why: Pink accent (#DB2777) symbolises intelligence, automation speed,
 * and next-gen technology transformation. Full workflow schemas
 * and JSON configs demonstrate technical precision and production readiness.
 */
export function Structure() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <Hero />
      <Services />
    </div>
  );
}
