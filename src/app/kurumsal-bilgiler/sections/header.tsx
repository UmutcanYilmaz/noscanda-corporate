import { PageHeader } from '@/components/layout/PageHeader';

/**
 * Kurumsal Bilgiler Header Section
 */
export function Header() {
  return (
    <PageHeader
      badge="Noscanda Group"
      title={<>Kurumsal <span className="text-[var(--accent-gold)]">Bilgiler</span></>}
      description="Grubumuzun değerlerini, geleceğe yön veren felsefesini ve gelişim öyküsünü içeren kurumsal portalımıza hoş geldiniz."
      image="/images/placeholders/corporate-hq.png"
    />
  );
}
