import { PageHeader } from '@/components/layout/PageHeader';

/**
 * Bayilik Başvurusu Header Section
 */
export function Header() {
  return (
    <PageHeader
      badge="Franchise & Ortaklık"
      title={<>Bayilik <span className="text-[var(--accent-gold)]">Başvurusu</span></>}
      description="Nos Canda franchise ailesine katılın. Korumalı bölge güvencesi and kapsamlı operasyonel destek ile kendi işinizi kurun."
      image="/images/placeholders/kiosk-franchise.png"
    />
  );
}
