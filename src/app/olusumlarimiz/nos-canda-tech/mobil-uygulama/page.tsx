import type { Metadata } from 'next';
import { Structure } from './structure';

export const metadata: Metadata = {
  title: 'Mobil Uygulama Geliştirme | Nos Canda Tech',
  description: 'Nos Canda Tech — iOS ve Android platformlarında native ve cross-platform mobil uygulamalar. UI/UX tasarımından App Store yayınına kadar uçtan uca çözüm.',
};

export default function MobilUygulamaPage() {
  return <Structure />;
}
