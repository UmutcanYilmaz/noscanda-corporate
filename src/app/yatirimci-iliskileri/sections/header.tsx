import { PageHeader } from '@/components/layout/PageHeader';

/**
 * Yatırımcı İlişkileri Header Section
 */
export function Header() {
  return (
    <PageHeader
      badge="Şeffaflık & Büyüme"
      title={<>Yatırımcı <span className="text-[var(--accent-gold)]">İlişkileri</span></>}
      description="Kurumsal yönetim ilkelerimiz doğrultusunda şeffaf, hesap verebilir ve sürdürülebilir büyüme odaklı finansal iletişim politikamızı paylaşıyoruz."
      image="/images/placeholders/corporate-hq.png"
    />
  );
}
