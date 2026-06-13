import Link from 'next/link';
import { ScrollReveal } from '@/components/core/ScrollReveal';

/**
 * Girişimcilik Models Grid Section
 */
export function ModelsGrid() {
  return (
    <section className="section-padding bg-[var(--bg-primary)]">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Model 1: Monolith Kiosk */}
          <ScrollReveal direction="up" delay={0.1}>
            <div className="surface-elevated rounded-2xl border border-[var(--border-subtle)] p-8 flex flex-col justify-between magnetic-hover shadow-glass h-full">
              <div>
                <span className="font-gothic text-[0.65rem] tracking-[0.2em] uppercase text-[var(--accent-gold)] block mb-3">
                  Model 01 · Fiziksel Perakende
                </span>
                <h2 className="font-cinzel text-2xl font-bold text-[var(--text-primary)] mb-4">
                  Monolith Kiosk
                </h2>
                <p className="font-body text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                  AVM ve prestijli caddeler için tasarlanmış, minimum metrekarede maksimum karlılık sunan premium monolith kiosk konsepti.
                </p>
                <ul className="space-y-2 mb-8 font-body text-xs text-[var(--text-muted)]">
                  <li>• Düşük başlangıç ve işletme maliyeti</li>
                  <li>• Modüler, şık ve lüks tasarım dili</li>
                  <li>• Kolay kurulum ve yüksek stok verimliliği</li>
                </ul>
              </div>
              <Link href="/girisimcilik/monolith-kiosk" className="btn-primary w-full text-center mt-6">
                Detayları İncele
              </Link>
            </div>
          </ScrollReveal>

          {/* Model 2: Bölge Kalkanı */}
          <ScrollReveal direction="up" delay={0.2}>
            <div className="surface-elevated rounded-2xl border border-[var(--border-subtle)] p-8 flex flex-col justify-between magnetic-hover shadow-glass h-full">
              <div>
                <span className="font-gothic text-[0.65rem] tracking-[0.2em] uppercase text-[var(--accent-gold)] block mb-3">
                  Model 02 · Coğrafi Haklar
                </span>
                <h2 className="font-cinzel text-2xl font-bold text-[var(--text-primary)] mb-4">
                  Bölge Kalkanı
                </h2>
                <p className="font-body text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                  Seçtiğiniz posta koduna ait tüm fiziksel satış ve dijital sevk haklarını tek bir ortağa rezerve eden özel koruma sistemi.
                </p>
                <ul className="space-y-2 mb-8 font-body text-xs text-[var(--text-muted)]">
                  <li>• Aynı bölgede rakipsiz, tekil franchise</li>
                  <li>• Online satışlarda bölge komisyon payı</li>
                  <li>• Coğrafi sınırları güvence altına alma</li>
                </ul>
              </div>
              <Link href="/girisimcilik/bolge-kalkani" className="btn-primary w-full text-center mt-6">
                Detayları İncele
              </Link>
            </div>
          </ScrollReveal>

          {/* Model 3: Dijital Ortaklık */}
          <ScrollReveal direction="up" delay={0.3}>
            <div className="surface-elevated rounded-2xl border border-[var(--border-subtle)] p-8 flex flex-col justify-between magnetic-hover shadow-glass h-full">
              <div>
                <span className="font-gothic text-[0.65rem] tracking-[0.2em] uppercase text-[var(--accent-gold)] block mb-3">
                  Model 03 · Bulut Altyapısı
                </span>
                <h2 className="font-cinzel text-2xl font-bold text-[var(--text-primary)] mb-4">
                  Dijital Ortaklık
                </h2>
                <p className="font-body text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                  Online sipariş havuzunu, siparişe en yakın konumdaki fiziksel bayinin envanterine ve cirosuna aktaran yeni nesil entegrasyon.
                </p>
                <ul className="space-y-2 mb-8 font-body text-xs text-[var(--text-muted)]">
                  <li>• Fiziksel ve online mağaza sinerjisi</li>
                  <li>• Düşük lojistik / hızlı teslimat</li>
                  <li>• Bayiye ekstra dijital kazanç kanalı</li>
                </ul>
              </div>
              <Link href="/girisimcilik/dijital-ortaklik" className="btn-primary w-full text-center mt-6">
                Detayları İncele
              </Link>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
