import type { Metadata } from 'next';
import { Structure } from './structure';

export const metadata: Metadata = {
  title: 'Kurumsal Kimlik & Görsel Tasarım | Nos Canda Vision',
  description: 'Nos Canda Vision — Logolar, kartvizitler (business card), antetli kağıtlar, kurumsal zarf ve ambalaj tasarımları ile markanızın görsel kimlik anayasasını oluşturuyoruz.',
};

/**
 * Kurumsal Kimlik Server Page Component
 *
 * Why: SEO optimization with static metadata. Delegates client rendering
 * to the local Structure component.
 */
export default function KurumsalKimlikPage() {
  return <Structure />;
}
