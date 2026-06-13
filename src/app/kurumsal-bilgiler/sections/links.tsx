import Link from 'next/link';
import { ScrollReveal } from '@/components/core/ScrollReveal';

/**
 * Kurumsal Bilgiler Links Section
 */
export function Links() {
  return (
    <section className="section-padding bg-[var(--bg-primary)]">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Hikayemiz */}
          <ScrollReveal direction="up" delay={0.1}>
            <div className="bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-2xl p-8 flex flex-col justify-between magnetic-hover shadow-glass h-full">
              <div>
                <span className="font-gothic text-[0.6rem] tracking-[0.2em] uppercase text-[var(--accent-gold)] block mb-3">
                  Kökenlerimiz
                </span>
                <h3 className="font-cinzel text-xl font-bold text-[var(--text-primary)] mb-4">
                  Hikayemiz
                </h3>
                <p className="font-body text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                  Görünmeyeni görünür kılma, hisleri koku molekülleriyle kalıcılaştırma amacıyla başlayan yolculuğumuzun tüm aşamaları.
                </p>
              </div>
              <Link href="/hakkimizda/hikayemiz" className="btn-primary w-full text-center mt-6">
                Hikayemizi Oku
              </Link>
            </div>
          </ScrollReveal>

          {/* Card 2: Felsefemiz */}
          <ScrollReveal direction="up" delay={0.2}>
            <div className="bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-2xl p-8 flex flex-col justify-between magnetic-hover shadow-glass h-full">
              <div>
                <span className="font-gothic text-[0.6rem] tracking-[0.2em] uppercase text-[var(--accent-gold)] block mb-3">
                  İlkelerimiz
                </span>
                <h3 className="font-cinzel text-xl font-bold text-[var(--text-primary)] mb-4">
                  Felsefemiz
                </h3>
                <p className="font-body text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                  Yüksek esans konsantrasyonu politikamız, duyusal derinliğe dayanan Extrait de Parfum standartlarımız ve manifestomuz.
                </p>
              </div>
              <Link href="/hakkimizda/felsefe" className="btn-primary w-full text-center mt-6">
                Felsefemizi İncele
              </Link>
            </div>
          </ScrollReveal>

          {/* Card 3: Duyurular */}
          <ScrollReveal direction="up" delay={0.3}>
            <div className="bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-2xl p-8 flex flex-col justify-between magnetic-hover shadow-glass h-full">
              <div>
                <span className="font-gothic text-[0.6rem] tracking-[0.2em] uppercase text-[var(--accent-gold)] block mb-3">
                  Gelişmeler
                </span>
                <h3 className="font-cinzel text-xl font-bold text-[var(--text-primary)] mb-4">
                  Duyurular
                </h3>
                <p className="font-body text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                  Nos Canda Group bünyesindeki kurumsal faaliyetler, etkinlikler ve en son basın bültenleri.
                </p>
              </div>
              <Link href="/hakkimizda/duyurular" className="btn-primary w-full text-center mt-6">
                Duyuruları Gör
              </Link>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
