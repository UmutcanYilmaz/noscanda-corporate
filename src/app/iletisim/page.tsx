import type { Metadata } from 'next';
import { Structure } from './structure';

export const metadata: Metadata = {
  title: 'İletişim Kanalları | Noscanda Group',
  description: 'Nos Canda Group genel merkez irtibat bilgileri, harita konumu and bayilik başvuru formu.',
};

export default function IletisimPage() {
  return <Structure />;
}
