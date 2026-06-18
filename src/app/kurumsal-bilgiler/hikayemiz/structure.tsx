'use client';

import { Header } from './sections/header';
import { Origin } from './sections/origin';
import { Values } from './sections/values';
import { Timeline } from './sections/timeline';
import { CTA } from './sections/cta';

/**
 * Hikayemiz Page Structure Component
 */
export function Structure() {
  return (
    <>
      <Header />
      <Origin />
      <Values />
      <Timeline />
      <CTA />
    </>
  );
}
