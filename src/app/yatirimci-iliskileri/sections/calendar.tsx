import { ScrollReveal } from '@/components/core/ScrollReveal';

const CALENDAR_EVENTS = [
  { date: '15 Mart 2026', event: '2025 Yılı Olağan Genel Kurul Toplantısı' },
  { date: '10 Mayıs 2026', event: '2026 Yılı 1. Çeyrek Finansal Sonuç Açıklanması' },
  { date: '15 Ağustos 2026', event: '2026 Yılı 2. Çeyrek Finansal Sonuç Açıklanması' },
  { date: '10 Kasım 2026', event: '2026 Yılı 3. Çeyrek Finansal Sonuç Açıklanması' },
];

/**
 * Yatırımcı İlişkileri Calendar and Governance Section
 */
export function Calendar() {
  return (
    <section className="section-padding bg-[var(--bg-secondary)] border-t border-b border-[var(--border-subtle)]">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Calendar */}
          <ScrollReveal direction="left">
            <div>
              <h2 className="font-cinzel text-xl font-semibold text-[var(--text-primary)] mb-8">
                Yatırımcı Takvimi 2026
              </h2>
              <div className="space-y-4">
                {CALENDAR_EVENTS.map((item, index) => (
                  <div key={index} className="flex gap-4 border-b border-[var(--border-subtle)] pb-4">
                    <span className="font-gothic text-xs font-semibold text-[var(--accent-gold)] whitespace-nowrap w-24">
                      {item.date}
                    </span>
                    <span className="font-body text-sm text-[var(--text-secondary)]">
                      {item.event}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Governance Principles */}
          <ScrollReveal direction="right">
            <div className="bg-[var(--bg-primary)] border border-[var(--border-subtle)] rounded-2xl p-8 h-full">
              <h2 className="font-cinzel text-xl font-semibold text-[var(--text-primary)] mb-6">
                Yönetim İlkelerimiz
              </h2>
              <ul className="space-y-4 font-body text-sm text-[var(--text-secondary)]">
                <li className="flex gap-3">
                  <span className="text-[var(--accent-gold)] font-bold">✓</span>
                  <span><strong>Eşitlik:</strong> Tüm hissedarlarımıza pay sahipliği oranlarına bakılmaksızın adil davranılır.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[var(--accent-gold)] font-bold">✓</span>
                  <span><strong>Şeffaflık:</strong> Kamuyu aydınlatma belgelerimiz and ticari sonuçlarımız zamanında and eksiksiz ilan edilir.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[var(--accent-gold)] font-bold">✓</span>
                  <span><strong>Sorumluluk:</strong> Çevresel, sosyal and yönetişimsel (ESG) risklerimizi denetler and sıfır atık hedefiyle çalışırız.</span>
                </li>
              </ul>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
