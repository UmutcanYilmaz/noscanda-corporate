import type { Metadata } from 'next';
import { Structure } from './structure';

export const metadata: Metadata = {
  title: "Nos Canda One | Akademi",
  description: "Nos Canda One | Akademi — Genç yeteneklere staj, eğitim bursları ve profesyonel gelişim fırsatları sunan kurumsal sosyal sorumluluk platformu.",
};

export default function AkademiPage() {
  return <Structure />;
}
