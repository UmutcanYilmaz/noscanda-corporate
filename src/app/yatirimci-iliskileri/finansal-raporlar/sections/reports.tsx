import Link from 'next/link';
import { ScrollReveal } from '@/components/core/ScrollReveal';

const DETAILED_REPORTS = [
  {
    title: '2025 Yıllık Faaliyet Raporu',
    category: 'Faaliyet Raporları',
    date: '10 Mart 2026',
    format: 'PDF',
    size: '4.8 MB',
    desc: '2025 yılı finansal tabloları, bağımsız denetim raporu and operasyonel gelişmelerin özeti.',
  },
  {
    title: '2025 Q3 Finansal Rapor ve Sunum',
    category: 'Çeyrek Raporları',
    date: '15 Kasım 2025',
    format: 'ZIP / PDF',
    size: '3.2 MB',
    desc: '2025 yılı üçüncü çeyreğine dair bilanço, gelir tablosu and yatırımcı sunum dosyası.',
  },
  {
    title: '2025 Q2 Finansal Rapor ve Sunum',
    category: 'Çeyrek Raporları',
    date: '15 Ağustos 2025',
    format: 'ZIP / PDF',
    size: '2.9 MB',
    desc: '2025 yılı ikinci çeyreği ara dönem faaliyet raporu and finansal dipnotlar.',
  },
  {
    title: '2025 Q1 Finansal Rapor ve Sunum',
    category: 'Çeyrek Raporları',
    date: '15 Mayıs 2025',
    format: 'PDF',
    size: '2.4 MB',
    desc: '2025 yılı birinci çeyreği ara dönem finansal sonuçları.',
  },
  {
    title: '2024 Yıllık Faaliyet Raporu',
    category: 'Faaliyet Raporları',
    date: '12 Mart 2025',
    format: 'PDF',
    size: '5.1 MB',
    desc: '2024 yılı tam bağımsız denetimden geçmiş mali tablolar and yönetim beyanları.',
  },
];

/**
 * Finansal Raporlar Reports List Section
 */
export function Reports() {
  return (
    <section className="section-padding bg-[var(--bg-primary)]">
      <div className="max-w-[1000px] mx-auto px-6">
        <div className="space-y-6">
          {DETAILED_REPORTS.map((rep, idx) => (
            <ScrollReveal key={idx} direction="up" delay={0.05 * idx}>
              <div
                className="bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-xl p-8 magnetic-hover shadow-glass flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="font-gothic text-[0.6rem] tracking-wider text-[var(--accent-gold)] uppercase bg-[var(--bg-primary)] px-2.5 py-1 rounded border border-[var(--border-subtle)]">
                      {rep.category}
                    </span>
                    <span className="font-body text-xs text-[var(--text-muted)]">{rep.date}</span>
                  </div>
                  <h3 className="font-cinzel text-base font-semibold text-[var(--text-primary)]">
                    {rep.title}
                  </h3>
                  <p className="font-body text-xs text-[var(--text-secondary)] max-w-xl">
                    {rep.desc}
                  </p>
                </div>

                <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end border-t md:border-t-0 border-[var(--border-subtle)] pt-4 md:pt-0">
                  <span className="font-body text-xs text-[var(--text-secondary)]">
                    Format: <strong>{rep.format}</strong>
                  </span>
                  <button className="flex items-center gap-2 font-gothic text-[0.65rem] tracking-wider text-[var(--accent-gold)] uppercase border border-[var(--border-gold)] px-5 py-2.5 rounded hover:bg-[var(--accent-gold-soft)] transition-colors duration-300">
                    <span>Dosyayı İndir</span>
                    <span className="text-[var(--text-muted)]">({rep.size})</span>
                  </button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/yatirimci-iliskileri"
            className="font-gothic text-xs tracking-widest text-[var(--text-secondary)] hover:text-[var(--accent-gold)] transition-colors inline-block"
          >
            ← Yatırımcı İlişkileri Ana Sayfasına Dön
          </Link>
        </div>
      </div>
    </section>
  );
}
