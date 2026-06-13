import type { Metadata } from 'next';
import { Structure } from './structure';

export const metadata: Metadata = {
  title: 'Kamu Tedariği (B2G) | Noscanda Group',
  description: 'Noscanda Group B2G Kamu Tedariği ortaklığı. DMO kataloğu, resmi kamu ihaleleri, hijyen and endüstriyel kağıt çözümleri.',
};

export default function B2GPage() {
  return <Structure />;
}
