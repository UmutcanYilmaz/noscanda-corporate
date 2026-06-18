'use client';

import { Hero } from './sections/hero';
import { Catalog } from './sections/catalog';
import { About } from './sections/about';

/**
 * Nos Canda Shop Structure Component
 *
 * Why: Orchestrates the main sections (Hero, Catalog, About) of the Nos Canda Shop page.
 * Keeps structural layouts clean and modular.
 */
export function Structure() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <Hero />
      <Catalog />
      <About />
    </div>
  );
}
