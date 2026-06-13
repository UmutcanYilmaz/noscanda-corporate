import type { Metadata } from 'next';
import { Structure } from './structure';

export const metadata: Metadata = {
  title: "B2B İş Modeli | Noscanda Group",
  description: "Nos Canda B2B — Otel, restoran, SPA and kurumsal alan kokulandırma çözümleri.",
};

export default function B2BPage() {
  return <Structure />;
}
