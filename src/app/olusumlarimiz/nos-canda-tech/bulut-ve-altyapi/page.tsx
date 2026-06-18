import type { Metadata } from 'next';
import { Structure } from './structure';

export const metadata: Metadata = {
  title: 'Bulut & Altyapı Yönetimi | Nos Canda Tech',
  description: 'Nos Canda Tech — Konteynerizasyon, merkezi sunucu kontrol panelleri, adanmış sunucu ortamları, ortak giriş yetkilendirmesi ve izole sanal ağ yapılandırmalarıyla yüksek performanslı altyapı yönetimi.',
};

/**
 * Bulut & Altyapı Yönetimi Server Component
 *
 * Why: SEO optimization with static metadata. Delegates client rendering
 * to the local Structure component.
 */
export default function BulutAltyapiPage() {
  return <Structure />;
}
