'use client';

import { Header } from './sections/header';
import { Details } from './sections/details';
import { Technology } from './sections/technology';
import { CTA } from './sections/cta';

/**
 * Kurumsal Alan Page Structure Component
 */
export function Structure() {
  return (
    <>
      <Header />
      <Details />
      <Technology />
      <CTA />
    </>
  );
}
