'use client';

import { Header } from './sections/header';
import { ModelsGrid } from './sections/models-grid';
import { Process } from './sections/process';
import { FAQ } from './sections/faq';
import { CTA } from './sections/cta';

/**
 * Girişimcilik Portal Page Structure Component
 */
export function Structure() {
  return (
    <>
      <Header />
      <ModelsGrid />
      <Process />
      <FAQ />
      <CTA />
    </>
  );
}
