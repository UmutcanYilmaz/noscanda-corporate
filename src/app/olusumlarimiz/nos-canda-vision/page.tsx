import type { Metadata } from 'next';
import { Structure } from './structure';

export const metadata: Metadata = {
  title: 'Nos Canda Vision | Markalaştırma & Kurumsallaştırma',
  description: 'Nos Canda Vision — Marka kimliği oluşturma, kurumsal tasarım, dijital strateji, UI/UX ve kurumsallaştırma hizmetleriyle işletmenizi geleceğe hazırlıyoruz.',
};

/**
 * NosCandaVisionPage — Server Component
 *
 * Why: Static metadata for SEO, delegates rendering to client Structure component.
 */
export default function NosCandaVisionPage() {
  return <Structure />;
}
