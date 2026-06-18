import type { Metadata } from 'next';
import { Structure } from './structure';

export const metadata: Metadata = {
  title: 'Duyurular | Noscanda Group',
  description: 'Noscanda Group basın bültenleri, yeni ürün lansmanları and kurumsal duyurular.',
};

export default function DuyurularPage() {
  return <Structure />;
}
