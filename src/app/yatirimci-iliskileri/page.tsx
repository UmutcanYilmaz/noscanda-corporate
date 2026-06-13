import type { Metadata } from 'next';
import { Structure } from './structure';

export const metadata: Metadata = {
  title: 'Yatırımcı İlişkileri | Noscanda Group',
  description: 'Nos Canda Group kurumsal yönetim ilkeleri, finansal raporlar, yatırımcı takvimi and ortaklık yapısı.',
};

export default function YatirimciIliskileriPage() {
  return <Structure />;
}
