'use client';

import { Header } from './sections/header';
import { ModelsList } from './sections/models-list';
import { Standards } from './sections/standards';

/**
 * İş Modellerimiz Page Structure Component
 */
export function Structure() {
  return (
    <>
      <Header />
      <ModelsList />
      <Standards />
    </>
  );
}
