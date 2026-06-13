import { ScrollReveal } from '@/components/core/ScrollReveal';
import { ScentDiscovery } from '@/components/core/ScentDiscovery';

/**
 * E-Katalog Page Guide Section
 */
export function Guide() {
  return (
    <section className="section-padding bg-[var(--bg-secondary)] border-t border-[var(--border-subtle)] space-y-20">
      
      {/* Part 1: Scent Families Cards */}
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="text-center mb-12">
          <span className="badge-corporate block mb-4">Rehber</span>
          <h2 className="font-cinzel text-3xl font-bold text-[var(--text-primary)] mb-4">
            Koku Aileleri & Notaları
          </h2>
          <p className="font-body text-sm text-[var(--text-secondary)] max-w-xl mx-auto leading-relaxed">
            Mekanınıza veya teninize en uygun olfaktif imzayı bulabilmeniz için koku ailelerimizin profilleri.
          </p>
          <div className="gold-line max-w-[80px] mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <ScrollReveal direction="up" delay={0.1} className="h-full">
            <div className="bg-[var(--bg-primary)] p-6 rounded-xl border border-[var(--border-subtle)] magnetic-hover text-left h-full flex flex-col justify-between">
              <div>
                <h4 className="font-cinzel text-base font-bold text-[var(--text-primary)] mb-3">Woody & Amber</h4>
                <p className="font-body text-xs text-[var(--text-secondary)] leading-relaxed mb-4">Odunsu ve oryantal karakterli, ortama derinlik ve asalet katan sıcak esintiler.</p>
              </div>
              <div className="text-[0.65rem] font-gothic text-[var(--accent-gold)] tracking-wider uppercase">Floral Amber, Fruity Amber</div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2} className="h-full">
            <div className="bg-[var(--bg-primary)] p-6 rounded-xl border border-[var(--border-subtle)] magnetic-hover text-left h-full flex flex-col justify-between">
              <div>
                <h4 className="font-cinzel text-base font-bold text-[var(--text-primary)] mb-3">Floral & Sweet</h4>
                <p className="font-body text-xs text-[var(--text-secondary)] leading-relaxed mb-4">Taze çiçek özlerinin zarafetini ve pudramsı dokuları yansıtan huzurlu aromalar.</p>
              </div>
              <div className="text-[0.65rem] font-gothic text-[var(--accent-gold)] tracking-wider uppercase">Lavender Jasmine</div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.3} className="h-full">
            <div className="bg-[var(--bg-primary)] p-6 rounded-xl border border-[var(--border-subtle)] magnetic-hover text-left h-full flex flex-col justify-between">
              <div>
                <h4 className="font-cinzel text-base font-bold text-[var(--text-primary)] mb-3">Citrus & Fresh</h4>
                <p className="font-body text-xs text-[var(--text-secondary)] leading-relaxed mb-4">Akdeniz narenciyelerinin ferahlatıcı, enerji veren ve temizlik hissi uyandıran esansları.</p>
              </div>
              <div className="text-[0.65rem] font-gothic text-[var(--accent-gold)] tracking-wider uppercase">Orange Jasmine</div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.4} className="h-full">
            <div className="bg-[var(--bg-primary)] p-6 rounded-xl border border-[var(--border-subtle)] magnetic-hover text-left h-full flex flex-col justify-between">
              <div>
                <h4 className="font-cinzel text-base font-bold text-[var(--text-primary)] mb-3">Niche & Leather</h4>
                <p className="font-body text-xs text-[var(--text-secondary)] leading-relaxed mb-4">Maskülen ve unisex karakterli, tütün, deri ve ağır odunsu notaların asil karışımı.</p>
              </div>
              <div className="text-[0.65rem] font-gothic text-[var(--accent-gold)] tracking-wider uppercase">Liquid Chrome, Royal Orchid</div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Part 2: Interactive Scent Finder Tool */}
      <div className="max-w-[1100px] mx-auto px-6">
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-center mb-10">
            <span className="badge-corporate block mb-4">İnteraktif Keşif</span>
            <h2 className="font-cinzel text-3xl font-bold text-[var(--text-primary)] mb-4">
              Koku Bulucu
            </h2>
            <p className="font-body text-sm text-[var(--text-secondary)] max-w-xl mx-auto leading-relaxed">
              Aradığınız duyguyu, ortamı ve aromatik karakteri seçin; algoritmamız sizin için en doğru Nos Canda imza kokusunu önersin.
            </p>
            <div className="gold-line max-w-[80px] mx-auto mt-6" />
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.2}>
          <ScentDiscovery />
        </ScrollReveal>
      </div>

    </section>
  );
}
