import { PageHeader } from '@/components/layout/PageHeader';

/**
 * Girişimcilik Header Section
 */
export function Header() {
  return (
    <PageHeader
      badge="Ortaklık ve Büyüme"
      title={<>Girişimcilik <span className="text-[var(--accent-gold)]">Modellerimiz</span></>}
      description="Sermaye verimliliği yüksek, dijital altyapıyla desteklenen ve bölge korumasıyla güvence altına alınan yeni nesil bayilik ekosistemimizi keşfedin."
      image="/images/placeholders/kiosk-franchise.png"
    />
  );
}
