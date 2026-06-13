'use client';

import { Header } from './sections/header';
import { Manifesto } from './sections/manifesto';
import { Comparison } from './sections/comparison';
import { Principles } from './sections/principles';
import { CTA } from './sections/cta';

/**
 * Felsefe Page Structure Component
 */
export function Structure() {
  return (
    <>
      <Header />
      <Manifesto />
      <Comparison />
      <Principles />
      <CTA />
    </>
  );
}
