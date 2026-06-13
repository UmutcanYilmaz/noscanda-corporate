import type { Metadata } from 'next';
import { Structure } from './structure';

export const metadata: Metadata = {
  title: 'Finansal Raporlar & Sunumlar | Yatırımcı İlişkileri | Noscanda Group',
  description: 'Nos Canda Group yıllık faaliyet raporları, çeyrek dönem finansal tabloları and yatırımcı sunumları.',
};

export default function FinansalRaporlarPage() {
  return <Structure />;
}
