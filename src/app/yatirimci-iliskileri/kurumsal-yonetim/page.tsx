import type { Metadata } from 'next';
import { Structure } from './structure';

export const metadata: Metadata = {
  title: 'Kurumsal Yönetim İlkeleri | Yatırımcı İlişkileri | Noscanda Group',
  description: 'Nos Canda Group kurumsal yönetim derecelendirmesi, etik kuralları, yönetim kurulu yapısı and şeffaflık beyanları.',
};

export default function KurumsalYonetimPage() {
  return <Structure />;
}
