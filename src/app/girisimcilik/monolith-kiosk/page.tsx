import type { Metadata } from 'next';
import { Structure } from './structure';

export const metadata: Metadata = {
  title: "Monolith Kiosk Konsepti | Noscanda Franchise",
  description: "Nos Canda Monolith Kiosk — Minimal yatırımlı, premium koku kiosk franchise sistemi. AVM, havalimanı and premium lokasyonlar.",
};

export default function MonolithKioskPage() {
  return <Structure />;
}
