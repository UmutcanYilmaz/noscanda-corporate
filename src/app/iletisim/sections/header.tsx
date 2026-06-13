import { PageHeader } from '@/components/layout/PageHeader';

/**
 * İletişim Header Section
 */
export function Header() {
  return (
    <PageHeader
      badge="Bizimle İletişime Geçin"
      title={<>İletişim <span className="text-[var(--accent-gold)]">Kanalları</span></>}
      description="Genel merkezimizle irtibata geçebilir veya bayilik ağımıza katılmak için başvurunuzu doğrudan iletebilirsiniz."
      image="/images/placeholders/corporate-hq.png"
    />
  );
}
