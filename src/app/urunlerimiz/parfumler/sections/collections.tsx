import { ScrollReveal } from '@/components/core/ScrollReveal';

/**
 * Parfumler Collections Section
 */
export function Collections() {
  return (
    <section className="section-padding bg-[var(--bg-primary)]">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <ScrollReveal direction="left">
            <div className="surface-elevated rounded-xl p-8 text-center magnetic-hover shadow-glass h-full">
              <span className="font-gothic text-xs tracking-[0.2em] uppercase text-[var(--accent-gold)] block mb-4">Kadın Serisi</span>
              <h2 className="font-cinzel text-section-heading font-semibold text-[var(--text-primary)] mb-4">
                Golden Chapter
              </h2>
              <p className="font-body text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                Velvet Rose, Mystic Vanilla, Cashmere Rum ve Royal Orchid — dört eşsiz kadın parfümü. 
                Her biri kadınlığın farklı bir yüzünü yansıtan, yüksek konsantrasyonlu Extrait de Parfum formülleri.
              </p>
              <span className="font-gothic text-xs tracking-[0.15em] uppercase text-[var(--text-muted)]">Çok yakında</span>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="surface-elevated rounded-xl p-8 text-center magnetic-hover shadow-glass h-full">
              <span className="font-gothic text-xs tracking-[0.2em] uppercase text-[var(--accent-gold)] block mb-4">Erkek Serisi</span>
              <h2 className="font-cinzel text-section-heading font-semibold text-[var(--text-primary)] mb-4">
                Niche Collection
              </h2>
              <p className="font-body text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                Dark Oath, Ghost Town, Outland ve Liquid Chrome — cesur, karanlık ve karizmatik. 
                Maskülen enerjinin olfaktif yorumu. Niche parfümeri sanatının Nos Canda vizyonu.
              </p>
              <span className="font-gothic text-xs tracking-[0.15em] uppercase text-[var(--text-muted)]">Çok yakında</span>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
