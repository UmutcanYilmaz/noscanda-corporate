'use client';

import { Header } from './sections/header';
import { Channels } from './sections/channels';
import { Philosophy } from './sections/philosophy';
import { CTA } from './sections/cta';

/**
 * B2C Page Structure Component
 */
export function Structure() {
  return (
    <>
      <Header />
      <Channels />
      <Philosophy />
      <CTA />
    </>
  );
}
