'use client';

import { Header } from './sections/header';
import { Categories } from './sections/categories';
import { Guide } from './sections/guide';

/**
 * E-Katalog Page Structure Component
 */
export function Structure() {
  return (
    <>
      <Header />
      <Categories />
      <Guide />
    </>
  );
}
