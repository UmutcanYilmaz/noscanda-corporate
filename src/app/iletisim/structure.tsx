'use client';

import { Header } from './sections/header';
import { ContactCards } from './sections/contact-cards';
import { Departments } from './sections/departments';

/**
 * İletişim Portal Page Structure Component
 */
export function Structure() {
  return (
    <>
      <Header />
      <ContactCards />
      <Departments />
    </>
  );
}
