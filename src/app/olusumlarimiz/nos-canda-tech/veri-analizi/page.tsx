import type { Metadata } from 'next';
import { Structure } from './structure';

export const metadata: Metadata = {
  title: 'Veri Analizi & Bilimi | Nos Canda Tech',
  description: 'Nos Canda Tech — İş zekâsı, makine öğrenmesi, veri mühendisliği ve gerçek zamanlı dashboard çözümleriyle verilerinizi stratejik kararlara dönüştürüyoruz.',
};

export default function VeriAnaliziPage() {
  return <Structure />;
}
