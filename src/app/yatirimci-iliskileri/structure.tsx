'use client';

import { Header } from './sections/header';
import { QuickNav } from './sections/quick-nav';
import { Reports } from './sections/reports';
import { Calendar } from './sections/calendar';
import { StructureShare } from './sections/structure-share';
import { Contact } from './sections/contact';

/**
 * Yatırımcı İlişkileri Page Structure Component
 */
export function Structure() {
  return (
    <>
      <Header />
      <QuickNav />
      <Reports />
      <Calendar />
      <StructureShare />
      <Contact />
    </>
  );
}
