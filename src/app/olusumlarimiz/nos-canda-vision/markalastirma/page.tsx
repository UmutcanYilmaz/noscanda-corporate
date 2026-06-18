import type { Metadata } from 'next';
import { Structure } from './structure';

export const metadata: Metadata = {
  title: 'Markalaştırma & Konumlandırma | Nos Canda Vision',
  description: 'Nos Canda Vision — Pazar konumlandırma, pazar payı kazanımı ve rekabetçi stratejilerle (marka savaşları) işletmenizin marka değerini ve vizyonunu en üst seviyeye taşıyoruz.',
};

/**
 * Markalaştırma Server Page Component
 *
 * Why: SEO optimization with static metadata. Delegates client rendering
 * to the local Structure component.
 */
export default function MarkalastirmaPage() {
  return <Structure />;
}
