import type { Metadata } from 'next';
import { Structure } from './structure';

export const metadata: Metadata = {
  title: 'Oluşumlarımız | Noscanda Group',
  description: 'Nos Canda Group bünyesindeki oluşumlar — Nos Canda One sosyal sorumluluk, Nos Canda Tech yazılım hizmetleri ve Nos Canda Vision kurumsallaştırma & markalaştırma platformları.',
};

/**
 * OlusumlarimizPage — Server Component
 *
 * Why: Keeps metadata generation static for SEO while delegating
 * client-side interactivity to the Structure child component.
 */
export default function OlusumlarimizPage() {
  return <Structure />;
}
