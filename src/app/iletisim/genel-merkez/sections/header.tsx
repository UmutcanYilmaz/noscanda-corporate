import { PageHeader } from '@/components/layout/PageHeader';

/**
 * Genel Merkez Header Section
 */
export function Header() {
  return (
    <PageHeader
      badge="İletişim"
      title={<>Genel <span className="text-[var(--accent-gold)]">Merkez</span></>}
      description="Her türlü soru, öneri and iş birliği talepleriniz için bizimle iletişime geçin."
      image="/images/placeholders/manifesto-atelier.png"
    />
  );
}
