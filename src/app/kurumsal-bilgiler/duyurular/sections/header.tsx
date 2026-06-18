import { PageHeader } from '@/components/layout/PageHeader';

/**
 * Duyurular Header Section
 */
export function Header() {
  return (
    <PageHeader
      badge="Basın & Duyurular"
      title="Duyurular"
      description="Noscanda Group'un en güncel haberleri, ürün lansmanları and kurumsal duyuruları."
      image="/images/placeholders/manifesto-atelier.png"
    />
  );
}
