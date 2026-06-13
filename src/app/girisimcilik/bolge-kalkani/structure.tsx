'use client';

import { Header } from './sections/header';
import { Details } from './sections/details';
import { CTA } from './sections/cta';

/**
 * Bölge Kalkanı Page Structure Component
 */
export function Structure() {
  return (
    <>
      <Header />
      <Details />
      <CTA />
    </>
  );
}
