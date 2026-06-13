import { ScrollReveal } from '@/components/core/ScrollReveal';

/**
 * Yatırımcı İlişkileri Shareholder Structure Section
 */
export function StructureShare() {
  return (
    <section className="section-padding bg-[var(--bg-primary)] border-b border-[var(--border-subtle)]">
      <div className="max-w-[720px] mx-auto px-6">
        <div className="text-center mb-10">
          <span className="badge-corporate block mb-4">Ortaklık</span>
          <h2 className="font-cinzel text-2xl font-semibold text-[var(--text-primary)] mb-4">
            Hissedarlık Yapısı
          </h2>
          <div className="gold-line max-w-[80px] mx-auto" />
        </div>

        <ScrollReveal direction="up">
          <div className="overflow-hidden rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)] shadow-glass">
            <table className="w-full text-left border-collapse font-body text-xs md:text-sm">
              <thead>
                <tr className="bg-[var(--bg-secondary)] border-b border-[var(--border-subtle)] text-[var(--text-primary)] font-cinzel text-[0.7rem] uppercase tracking-wider">
                  <th className="p-4">Hissedar Adı / Unvanı</th>
                  <th className="p-4 text-center">Pay Oranı (%)</th>
                  <th className="p-4 text-right">Sermaye Tutarı (TL)</th>
                </tr>
              </thead>
              <tbody className="text-[var(--text-secondary)]">
                <tr className="border-b border-[var(--border-subtle)] text-left">
                  <td className="p-4 font-semibold text-[var(--text-primary)]">Girişimci Kurucu (Kadın Girişimci)</td>
                  <td className="p-4 text-center">55.00%</td>
                  <td className="p-4 text-right">₺27,500,000</td>
                </tr>
                <tr className="border-b border-[var(--border-subtle)] text-left">
                  <td className="p-4">Noscanda Group Holding A.Ş.</td>
                  <td className="p-4 text-center">30.00%</td>
                  <td className="p-4 text-right">₺15,000,000</td>
                </tr>
                <tr className="border-b border-[var(--border-subtle)] text-left">
                  <td className="p-4">Stratejik Bireysel Yatırımcılar</td>
                  <td className="p-4 text-center">10.00%</td>
                  <td className="p-4 text-right">₺5,000,000</td>
                </tr>
                <tr className="text-left">
                  <td className="p-4">Halka Açık / Diğer</td>
                  <td className="p-4 text-center">5.00%</td>
                  <td className="p-4 text-right">₺2,500,000</td>
                </tr>
                <tr className="bg-[var(--bg-secondary)] border-t border-[var(--border-strong)] font-semibold text-[var(--text-primary)] text-left">
                  <td className="p-4">Toplam</td>
                  <td className="p-4 text-center">100.00%</td>
                  <td className="p-4 text-right">₺50,000,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
