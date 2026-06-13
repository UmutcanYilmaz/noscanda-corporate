'use client';

import { Header } from './sections/header';
import { Details } from './sections/details';
import { Process } from './sections/process';
import { CTA } from './sections/cta';

/**
 * B2B Page Structure Component
 */
export function Structure() {
  return (
    <>
      <Header />
      <Details />
      <Process />
      <CTA />
    </>
  );
}
