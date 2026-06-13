import type { Metadata } from 'next';
import { Structure } from './structure';

export const metadata: Metadata = {
  title: 'İş Modellerimiz | Noscanda Group',
  description: 'Nos Canda Group toptan, perakende, mimari koku tasarımları ve kamu tedariği iş modellerimiz.',
};

export default function IsModellerimizPage() {
  return <Structure />;
}
