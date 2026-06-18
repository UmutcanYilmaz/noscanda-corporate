import type { Metadata } from 'next';
import { Structure } from './structure';

export const metadata: Metadata = {
  title: 'Kurumsallaştırma & İş Sistemleri | Nos Canda Vision',
  description: 'Nos Canda Vision — Kurumsal yönetim şemaları, HR yönetim sistemleri, e-ticaret ve müşteri yönetim sistemleri entegrasyonu ile şirketinizin operasyonel altyapısını modernize ediyoruz.',
};

/**
 * Kurumsallaştırma Server Page Component
 *
 * Why: SEO optimization with static metadata. Delegates client rendering
 * to the local Structure component.
 */
export default function KurumsallastirmaPage() {
  return <Structure />;
}
