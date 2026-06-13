import Link from 'next/link';
import { ScrollReveal } from '@/components/core/ScrollReveal';

/**
 * Yatırımcı İlişkileri Quick Navigation Section
 */
export function QuickNav() {
  return (
    <section className="py-10 bg-[var(--bg-secondary)] border-b border-[var(--border-subtle)]">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ScrollReveal direction="left" className="h-full">
            <Link
              href="/yatirimci-iliskileri/finansal-raporlar"
              className="bg-[var(--bg-primary)] border border-[var(--border-subtle)] hover:border-[var(--border-gold)] rounded-2xl p-6 magnetic-hover shadow-glass flex items-center justify-between h-full"
            >
              <div className="space-y-1">
                <span className="font-gothic text-[0.65rem] tracking-wider text-[var(--accent-gold)] uppercase block">
                  Finansal Bilgiler
                </span>
                <h3 className="font-cinzel text-base font-bold text-[var(--text-primary)]">
                  Finansal Raporlar & Sunumlar
                </h3>
                <p className="font-body text-xs text-[var(--text-secondary)]">
                  Faaliyet raporları, bağımsız denetim raporları and yatırımcı sunumları.
                </p>
              </div>
              <span className="text-[var(--accent-gold)] font-bold text-lg">→</span>
            </Link>
          </ScrollReveal>

          <ScrollReveal direction="right" className="h-full">
            <Link
              href="/yatirimci-iliskileri/kurumsal-yonetim"
              className="bg-[var(--bg-primary)] border border-[var(--border-subtle)] hover:border-[var(--border-gold)] rounded-2xl p-6 magnetic-hover shadow-glass flex items-center justify-between h-full"
            >
              <div className="space-y-1">
                <span className="font-gothic text-[0.65rem] tracking-wider text-[var(--accent-gold)] uppercase block">
                  Yönetişim & Uyum
                </span>
                <h3 className="font-cinzel text-base font-bold text-[var(--text-primary)]">
                  Kurumsal Yönetim İlkeleri
                </h3>
                <p className="font-body text-xs text-[var(--text-secondary)]">
                  Yönetim kurulu yapısı, komiteler, etik kurallar and şeffaflık beyanları.
                </p>
              </div>
              <span className="text-[var(--accent-gold)] font-bold text-lg">→</span>
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
