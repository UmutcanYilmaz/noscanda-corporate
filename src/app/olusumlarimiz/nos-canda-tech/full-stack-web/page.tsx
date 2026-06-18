import type { Metadata } from 'next';
import { Structure } from './structure';

export const metadata: Metadata = {
  title: 'Full-Stack Web Geliştirme | Nos Canda Tech',
  description: 'Nos Canda Tech — Modern frontend ve güçlü backend teknolojileriyle ölçeklenebilir, performans odaklı web uygulamaları ve kurumsal portallar geliştiriyoruz.',
};

export default function FullStackWebPage() {
  return <Structure />;
}
