import { PageHeader } from '@/components/layout/PageHeader';

/**
 * Felsefe Header Section
 */
export function Header() {
  return (
    <PageHeader
      badge="Marka Manifestosu"
      title={<>Yüksek Konsantrasyon <span className="text-[var(--accent-gold)]">Felsefesi</span></>}
      description="Ticari seyreltmeyi reddediyoruz. Her damlada hissedilen, kalıcı and derin bir koku deneyimi sunuyoruz."
      image="/images/placeholders/hero-diffuser.png"
    />
  );
}
