import type { Metadata } from 'next';
import { Structure } from './structure';

export const metadata: Metadata = {
  title: 'Nos Canda Tech | Yazılım & Teknoloji Hizmetleri',
  description: 'Nos Canda Tech — Siber güvenlik, full-stack web geliştirme, mobil uygulama ve veri bilimi alanlarında kurumsal düzeyde profesyonel yazılım çözümleri.',
};

/**
 * NosCandaTechPage — Server Component
 *
 * Why: Static metadata for SEO, delegates rendering to client Structure component.
 */
export default function NosCandaTechPage() {
  return <Structure />;
}
