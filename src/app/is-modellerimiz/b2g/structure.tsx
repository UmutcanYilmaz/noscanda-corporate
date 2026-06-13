'use client';

import { Header } from './sections/header';
import { Details } from './sections/details';
import { Products } from './sections/products';
import { Workflow } from './sections/workflow';
import { CTA } from './sections/cta';

/**
 * B2G Page Structure Component
 */
export function Structure() {
  return (
    <>
      <Header />
      <Details />
      <Products />
      <Workflow />
      <CTA />
    </>
  );
}
