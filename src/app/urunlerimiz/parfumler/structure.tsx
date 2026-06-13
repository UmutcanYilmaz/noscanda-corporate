'use client';

import { Header } from './sections/header';
import { Collections } from './sections/collections';
import { CTA } from './sections/cta';

/**
 * Parfumler Page Structure Component
 */
export function Structure() {
  return (
    <>
      <Header />
      <Collections />
      <CTA />
    </>
  );
}
