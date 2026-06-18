import type { Metadata } from 'next';
import { Structure } from './structure';

export const metadata: Metadata = {
  title: 'Yapay Zekâ & İş Otomasyonu | Nos Canda Tech',
  description: 'Nos Canda Tech — Akıllı entegrasyon akışları, yapay zekâ entegrasyonları, kurumsal yapay zekâ asistanları ve güvenli sipariş otomasyonlarıyla iş süreçlerinizi hızlandırıyoruz.',
};

/**
 * Yapay Zekâ & İş Otomasyonu Server Page Component
 *
 * Why: SEO optimization with static metadata. Delegates client rendering
 * to the local Structure component.
 */
export default function YapayZekaOtomasyonPage() {
  return <Structure />;
}
