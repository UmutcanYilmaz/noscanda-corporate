import { ScrollReveal } from '@/components/core/ScrollReveal';

const FINANCIAL_REPORTS = [
  { year: '2026', quarter: 'Q1', title: '2026 Birinci Çeyrek Finansal Raporu', size: '2.4 MB' },
  { year: '2025', quarter: 'Q4', title: '2025 Yıllık Faaliyet Raporu', size: '4.8 MB' },
  { year: '2025', quarter: 'Q3', title: '2025 Üçüncü Çeyrek Finansal Raporu', size: '2.1 MB' },
  { year: '2025', quarter: 'Q2', title: '2025 İkinci Çeyrek Finansal Raporu', size: '1.9 MB' },
];

/**
 * Yatırımcı İlişkileri Reports Section
 */
export function Reports() {
  return (
    <section className="section-padding bg-[var(--bg-primary)]">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="text-center mb-14">
          <span className="badge-corporate block mb-4">Finansal Raporlama</span>
          <h2 className="font-cinzel text-3xl font-bold text-[var(--text-primary)] mb-4">
            Raporlar ve Sunumlar
          </h2>
          <div className="gold-line max-w-[80px] mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {FINANCIAL_REPORTS.map((report, idx) => (
            <ScrollReveal key={idx} direction="up" delay={0.05 * idx}>
              <div className="bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-xl p-6 flex justify-between items-center magnetic-hover shadow-glass">
                <div>
                  <span className="font-gothic text-[0.6rem] tracking-wider text-[var(--accent-gold)] uppercase block mb-1">
                    {report.year} · {report.quarter}
                  </span>
                  <h3 className="font-cinzel text-sm font-semibold text-[var(--text-primary)]">
                    {report.title}
                  </h3>
                </div>
                <button className="flex items-center gap-2 font-gothic text-[0.65rem] tracking-wider text-[var(--accent-gold)] uppercase border border-[var(--border-gold)] px-4 py-2 rounded hover:bg-[var(--accent-gold-soft)] transition-colors duration-300">
                  <span>İndir</span>
                  <span className="text-[var(--text-muted)]">({report.size})</span>
                </button>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
