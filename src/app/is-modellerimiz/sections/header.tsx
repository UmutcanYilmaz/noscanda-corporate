import { PageHeader } from '@/components/layout/PageHeader';

/**
 * İş Modellerimiz Header Section
 */
export function Header() {
  return (
    <PageHeader
      badge="Ticari Faaliyetler"
      title={<>İş <span className="text-[var(--accent-gold)]">Modellerimiz</span></>}
      description="Farklı pazar ihtiyaçlarına cevap veren esnek ve ölçeklenebilir ticari operasyon modellerimiz."
      image="/kokular/setler/odakokususet/revizeolacak/set-gorseller/dortlu/A_luxurious,_high-end_202604270606.jpeg"
    />
  );
}
