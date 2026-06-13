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
  return <MarqueeStrip items={MARQUEE_ITEMS} speed={35} className="bg-[#12100F] text-white/90 border-y-0 py-4 shadow-[inset_0_4px_10px_rgba(0,0,0,0.6)]" />;
}
