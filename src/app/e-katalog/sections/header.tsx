import { PageHeader } from '@/components/layout/PageHeader';

/**
 * E-Katalog Header Section
 */
export function Header() {
  return (
    <PageHeader
      badge="Elektronik Ürün Kataloğu"
      title={<>E-Katalog <span className="text-[var(--accent-gold)]">Keşfi</span></>}
      description="Grasse'ın asil esans yağlarını, yüksek konsantrasyon felsefesiyle bir araya getiren fiziksel koku koleksiyonlarımızın güncel e-kataloğu. Eviniz ve aracınız için tasarlanmış özel olfaktif imzalar."
      image="/images/placeholders/hero-diffuser.png"
    />
  );
}
