import type { Metadata } from 'next';
import { Structure } from './structure';

export const metadata: Metadata = {
  title: 'Kurumsal Bilgiler | Noscanda Group',
  description: 'Nos Canda Group kurumsal hikayesi, marka felsefesi and güncel grup duyuruları.',
};

export default function KurumsalBilgilerPage() {
  return <Structure />;
}
