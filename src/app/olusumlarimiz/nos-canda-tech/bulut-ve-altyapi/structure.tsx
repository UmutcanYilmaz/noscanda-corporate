'use client';

import Hero from './sections/hero';
import { Services } from './sections/services';

/**
  * Bulut & Altyapı Yönetimi Detail Page
  *
  * Why: Teal accent (#0D9488) symbolises stability, infrastructure integrity,
  * and high performance. Includes Interactive ROI calculator, roadmap pipelines,
  * and security metrics.
  */
export function Structure() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <Hero />
      <Services />
    </div>
  );
}
