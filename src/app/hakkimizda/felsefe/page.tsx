import type { Metadata } from 'next';
import { Structure } from './structure';

export const metadata: Metadata = {
  title: 'Yüksek Konsantrasyon Felsefesi | Noscanda Group',
  description: 'Nos Canda\'nın taviz vermeyen Extrait de Parfum konsantrasyon politikası. Ticari seyreltmeyi reddeden esans manifestomuz.',
};

export default function FelsefePage() {
  return <Structure />;
}
