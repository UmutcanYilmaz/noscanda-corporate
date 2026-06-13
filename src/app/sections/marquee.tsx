import { MarqueeStrip } from '@/components/core/MarqueeStrip';

const MARQUEE_ITEMS = [
  'Extrait de Parfum',
  '%25+ Esans Konsantrasyonu',
  'Grasse Doğal Yağlar',
  'IFRA Sertifikalı',
  'Premium Reed Diffusers',
  'Auto Fragrances',
  'Bölge Kalkanı',
  'Monolith Kiosk',
  'Kadın Girişimciliği',
  'Sürdürülebilir Üretim',
];

/**
 * Homepage Marquee Section Wrapper
 */
export function Marquee() {
  return <MarqueeStrip items={MARQUEE_ITEMS} speed={35} className="bg-[var(--bg-primary)]" />;
}
