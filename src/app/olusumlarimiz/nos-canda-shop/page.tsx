import type { Metadata } from 'next';
import { Structure } from './structure';

export const metadata: Metadata = {
  title: 'Nos Canda Shop | Premium Kokular & E-Katalog | Noscanda Group',
  description: 'Extrait de Parfum kalitesinde premium oda parfümleri ve lüks araç kokuları. En sevilen koku ailelerimiz: Floral Amber, Fruity Amber, Lavender Jasmine ve Orange Jasmine.',
};

/**
 * Nos Canda Shop Page
 *
 * Why: Keeps metadata generation static for SEO while delegating
 * interactive client components (Hero, Catalog, About) to the Structure component.
 */
export default function NosCandaShopPage() {
  return <Structure />;
}
