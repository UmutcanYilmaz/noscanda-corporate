import type { Metadata } from 'next';
import { Structure } from './structure';

export const metadata: Metadata = {
  title: 'Siber Güvenlik Hizmetleri | Nos Canda Tech',
  description: 'Nos Canda Tech — Penetrasyon testleri, ağ güvenliği denetimleri, SIEM/SOC çözümleri ve uyumluluk danışmanlığıyla dijital varlıklarınızı koruyoruz.',
};

export default function SiberGuvenlikPage() {
  return <Structure />;
}
