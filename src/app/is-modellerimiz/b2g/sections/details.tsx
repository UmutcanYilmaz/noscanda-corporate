import { ScrollReveal } from '@/components/core/ScrollReveal';

/**
 * B2G Details Section
 */
export function Details() {
  return (
    <section className="section-padding bg-[var(--bg-primary)] border-b border-[var(--border-subtle)]">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal direction="left">
              <div>
                <span className="font-gothic text-[0.65rem] tracking-[0.25em] uppercase text-[var(--accent-gold)] block mb-2">
                  DMO Sistem Entegrasyonu
                </span>
                <h2 className="font-cinzel text-2xl font-semibold text-[var(--text-primary)] leading-tight mb-4">
                  Devlet Malzeme Ofisi Güvencesiyle Tedarik
                </h2>
                <p className="font-body text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                  Noscanda Group, hijyen and endüstriyel kağıt sektörünün öncü markası <strong>İRAY</strong>&apos;ın 
                  Türkiye genelinde resmi yetkili satıcısıdır. Kamu kurum ve kuruluşları, üniversiteler, askeri tesisler 
                  ve bakanlıklar, İRAY markalı tuvalet kağıdı, kağıt havlu and endüstriyel hijyen ürünlerimizi doğrudan 
                  <strong> Devlet Malzeme Ofisi (DMO) e-satış portalı</strong> üzerinden kolayca temin edebilirler.
                </p>
                <p className="font-body text-sm text-[var(--text-secondary)] leading-relaxed">
                  DMO katalog satış süreçlerinin tüm yasal and operasyonel gereksinimlerine tam uyum sağlayan lojistik 
                  altyapımız ile siparişlerin sevkiyatını en kısa sürede kurumlara ulaştırıyoruz.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-5">
            <ScrollReveal direction="right">
              <div className="bg-[var(--bg-secondary)] border border-[var(--border-gold)] rounded-2xl p-8 shadow-glass magnetic-hover">
                <h3 className="font-cinzel text-base font-semibold text-[var(--text-primary)] mb-6 text-center">
                  İRAY Marka Değerleri
                </h3>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <span className="text-[var(--accent-gold)] font-bold">✓</span>
                    <div className="font-body text-xs text-[var(--text-secondary)]">
                      <strong>%100 Saf Selüloz:</strong> Atık kağıt veya kimyasal dolgu içermeyen saf ham selüloz lifleri.
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-[var(--accent-gold)] font-bold">✓</span>
                    <div className="font-body text-xs text-[var(--text-secondary)]">
                      <strong>Klor İçermeyen Beyazlatma:</strong> Çevre dostu TCF (Totally Chlorine Free) teknolojisiyle üretim.
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-[var(--accent-gold)] font-bold">✓</span>
                    <div className="font-body text-xs text-[var(--text-secondary)]">
                      <strong>Yüksek Emicilik & Mukavemet:</strong> Islakken dağılmayan mukavemet and yüksek hacimli su emme.
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
