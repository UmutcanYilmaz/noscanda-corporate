import Link from 'next/link';
import Image from 'next/image';
import { ScrollReveal } from '@/components/core/ScrollReveal';

/**
 * E-Katalog Page Categories Section
 */
export function Categories() {
  return (
    <section className="section-padding bg-[var(--bg-primary)]">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Category 1: Reed Diffusers */}
          <ScrollReveal direction="up" delay={0.1}>
            <div className="surface-elevated rounded-2xl border border-[var(--border-subtle)] flex flex-col justify-between magnetic-hover shadow-glass overflow-hidden h-full">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src="/images/placeholders/hero-diffuser.png"
                  alt="Nos Canda Reed Diffuser"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 400px"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </div>
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <span className="font-gothic text-[0.65rem] tracking-[0.2em] uppercase text-[var(--accent-gold)] block mb-3">
                    01 · Mekan Parfümü
                  </span>
                  <h2 className="font-cinzel text-2xl font-bold text-[var(--text-primary)] mb-4">
                    Reed Diffusers
                  </h2>
                  <p className="font-body text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                    Yüksek esans konsantrasyonu (%25 Extrait de Parfum) ve premium rattan çubuklar ile evinizde 8-16 hafta kesintisiz, dengeli koku salınımı.
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-xs font-body text-[var(--text-muted)]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-gold)]" />
                      120 ML İtalyan Cam Şişe
                    </div>
                    <div className="flex items-center gap-2 text-xs font-body text-[var(--text-muted)]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-gold)]" />
                      Premium Siyah Rattan Çubuklar
                    </div>
                    <div className="flex items-center gap-2 text-xs font-body text-[var(--text-muted)]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-gold)]" />
                      Sertifikalı Grasse Esansları
                    </div>
                  </div>
                </div>
                <Link href="/urunlerimiz/reed-diffusers" className="btn-primary w-full text-center">
                  Seriyi Keşfet
                </Link>
              </div>
            </div>
          </ScrollReveal>

          {/* Category 2: Auto Fragrances */}
          <ScrollReveal direction="up" delay={0.2}>
            <div className="surface-elevated rounded-2xl border border-[var(--border-subtle)] flex flex-col justify-between magnetic-hover shadow-glass overflow-hidden h-full">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src="/images/placeholders/auto-fragrance.png"
                  alt="Nos Canda Auto Fragrance"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 400px"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </div>
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <span className="font-gothic text-[0.65rem] tracking-[0.2em] uppercase text-[var(--accent-gold)] block mb-3">
                    02 · Taşıt Parfümü
                  </span>
                  <h2 className="font-cinzel text-2xl font-bold text-[var(--text-primary)] mb-4">
                    Auto Fragrances
                  </h2>
                  <p className="font-body text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                    Zarif cam şişe ve doğal ahşap kapak tasarımıyla lüksü yola taşıyan, manyetik deri ve amber notalı kalıcı oto parfümleri.
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-xs font-body text-[var(--text-muted)]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-gold)]" />
                      8 ML Asılabilir Şişe
                    </div>
                    <div className="flex items-center gap-2 text-xs font-body text-[var(--text-muted)]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-gold)]" />
                      Gözenekli Doğal Ahşap Kapak
                    </div>
                    <div className="flex items-center gap-2 text-xs font-body text-[var(--text-muted)]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-gold)]" />
                      %22 Extrait de Parfum
                    </div>
                  </div>
                </div>
                <Link href="/urunlerimiz/auto-fragrances" className="btn-primary w-full text-center">
                  Seriyi Keşfet
                </Link>
              </div>
            </div>
          </ScrollReveal>

          {/* Category 3: Niche Perfumes */}
          <ScrollReveal direction="up" delay={0.3}>
            <div className="surface-elevated rounded-2xl border border-[var(--border-subtle)] flex flex-col justify-between magnetic-hover shadow-glass overflow-hidden h-full">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src="/images/placeholders/perfume-grid.png"
                  alt="Nos Canda Niche Perfumes"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 400px"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </div>
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <span className="font-gothic text-[0.65rem] tracking-[0.2em] uppercase text-[var(--accent-gold)] block mb-3">
                    03 · Ten Parfümü (Boutique)
                  </span>
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="font-cinzel text-2xl font-bold text-[var(--text-primary)]">
                      Niche Perfume
                    </h2>
                    <span className="text-[0.55rem] tracking-widest uppercase px-2 py-0.5 rounded-full border border-[var(--accent-gold)] text-[var(--accent-gold)] font-gothic">
                      Yakında
                    </span>
                  </div>
                  <p className="font-body text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                    Kişisel kimliğin görünmez imzası olarak tasarlanan, teninizle bütünleşen yüksek konsantrasyonlu niş parfüm serimiz.
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-xs font-body text-[var(--text-muted)]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-gold)]" />
                      Golden Chapter Kadın Serisi
                    </div>
                    <div className="flex items-center gap-2 text-xs font-body text-[var(--text-muted)]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-gold)]" />
                      Unisex Niche Koleksiyonu
                    </div>
                    <div className="flex items-center gap-2 text-xs font-body text-[var(--text-muted)]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-gold)]" />
                      Özel Tasarım Ağır Cam Şişe
                    </div>
                  </div>
                </div>
                <Link href="/urunlerimiz/parfumler" className="btn-secondary w-full text-center">
                  Ön İzleme
                </Link>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
