import type { Metadata } from 'next';
import { Structure } from './structure';

export const metadata: Metadata = {
  title: 'Hikayemiz | Noscanda Group',
  description: 'Nos Canda Group\'un kuruluş hikayesi, değerleri and vizyonu. Kadın girişimciliği, Extrait de Parfum felsefesi and affordable luxury konsepti.',
};

export default function HikayemizPage() {
  return <Structure />;
}
