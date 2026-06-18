import type { Metadata } from 'next';
import { Structure } from './structure';

export const metadata: Metadata = {
  title: "Nos Canda One | Vakıf",
  description: "Nos Canda One — Toplumun her kesimine dokunan, kalıcı değişimlere öncülük eden projelerimizle geleceğe umut taşıyoruz. Sağlık, eğitim, barınma ve topluluk geliştirme alanlarında birleşiyoruz.",
};

/**
 * VakifPage Component
 * 
 * Why: Renders the entry point for the `/vakif` route as a Server Component.
 * Keeping this wrapper as a Server Component ensures Next.js metadata is generated statically
 * for optimal SEO crawling, while delegates client-side animation logic to the child Structure component.
 */
export default function VakifPage() {
  return <Structure />;
}
