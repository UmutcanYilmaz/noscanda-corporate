import type { Metadata } from 'next';
import { Structure } from './structure';

export const metadata: Metadata = {
  title: 'Girişimcilik ve Bayilik Modelleri | Noscanda Group',
  description: 'Nos Canda Monolith Kiosk, Bölge Kalkanı ve Dijital Ortaklık girişimcilik modelleri. Başvuru ve sistem detayları.',
};

export default function GirisimcilikPortalPage() {
  return <Structure />;
}
