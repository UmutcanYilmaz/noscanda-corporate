'use client';

import { Header } from './sections/header';
import { ContactForm } from './sections/contact-form';
import { QuickLinks } from './sections/quick-links';

/**
 * Genel Merkez Page Structure Component
 */
export function Structure() {
  return (
    <>
      <Header />
      <ContactForm />
      <QuickLinks />
    </>
  );
}
