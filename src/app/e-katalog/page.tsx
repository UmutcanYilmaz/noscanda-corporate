import type { Metadata } from 'next';
import { Structure } from './structure';

export const metadata: Metadata = {
  title: 'E-Katalog | Ürün Koleksiyonlarımız | Noscanda Group',
  description: 'Nos Canda premium oda kokuları, lüks araç parfümleri ve niche parfüm serisi lüks ürün kataloğu.',
};

export default function EKatalogPage() {
  return <Structure />;
}
