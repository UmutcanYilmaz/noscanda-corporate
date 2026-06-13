import Link from 'next/link';
import { ScrollReveal } from '@/components/core/ScrollReveal';

/**
 * İş Modellerimiz Models List Section
 */
export function ModelsList() {
  return (
    <section className="section-padding bg-[var(--bg-primary)]">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* B2C */}
          <ScrollReveal direction="up" delay={0.1}>
            <div className="bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-2xl p-8 flex flex-col justify-between magnetic-hover shadow-glass h-full">
              <div>
                <span className="font-gothic text-[0.6rem] tracking-[0.2em] uppercase text-[var(--accent-gold)] block mb-2">
                  Modül 01
                </span>
                <h3 className="font-cinzel text-xl font-bold text-[var(--text-primary)] mb-3">
                  B2C Retail
                </h3>
                <p className="font-body text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                  Online e-ticaret altyapımız, flagship butiklerimiz ve premium kiosklarımızla doğrudan bireysel tüketicilere sunduğumuz koku ürünleri ve doğrudan satış kanalları.
                </p>
              </div>
              <Link href="/is-modellerimiz/b2c" className="btn-primary w-full text-center mt-4">
                Detayları İncele →
              </Link>
            </div>
          </ScrollReveal>

          {/* B2B */}
          <ScrollReveal direction="up" delay={0.2}>
            <div className="bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-2xl p-8 flex flex-col justify-between magnetic-hover shadow-glass h-full">
              <div>
                <span className="font-gothic text-[0.6rem] tracking-[0.2em] uppercase text-[var(--accent-gold)] block mb-2">
                  Modül 02
                </span>
                <h3 className="font-cinzel text-xl font-bold text-[var(--text-primary)] mb-3">
                  B2B Wholesale
                </h3>
                <p className="font-body text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                  Otel, restoran, spa, rezidans ve zincir mağazalar için özel toptan koku ikmali, kurumsal hediye çözümleri ve hacimli ürün tedarik anlaşmaları.
                </p>
              </div>
              <Link href="/is-modellerimiz/b2b" className="btn-primary w-full text-center mt-4">
                Detayları İncele →
              </Link>
            </div>
          </ScrollReveal>

          {/* Kurumsal Alan */}
          <ScrollReveal direction="up" delay={0.3}>
            <div className="bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-2xl p-8 flex flex-col justify-between magnetic-hover shadow-glass h-full">
              <div>
                <span className="font-gothic text-[0.6rem] tracking-[0.2em] uppercase text-[var(--accent-gold)] block mb-2">
                  Modül 03
                </span>
                <h3 className="font-cinzel text-xl font-bold text-[var(--text-primary)] mb-3">
                  Kurumsal İmza (Olfaktif Markalama)
                </h3>
                <p className="font-body text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                  Marka kimliğinizi kokuya dönüştüren profesyonel kurumsal imza kokuları, geniş alan koku difüzörleri ve mimari proje entegrasyonu.
                </p>
              </div>
              <Link href="/is-modellerimiz/kurumsal-alan" className="btn-primary w-full text-center mt-4">
                Detayları İncele →
              </Link>
            </div>
          </ScrollReveal>

          {/* B2G */}
          <ScrollReveal direction="up" delay={0.4}>
            <div className="bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-2xl p-8 flex flex-col justify-between magnetic-hover shadow-glass h-full">
              <div>
                <span className="font-gothic text-[0.6rem] tracking-[0.2em] uppercase text-[var(--accent-gold)] block mb-2">
                  Modül 04
                </span>
                <h3 className="font-cinzel text-xl font-bold text-[var(--text-primary)] mb-3">
                  B2G Kamu Tedariği (DMO & İRAY)
                </h3>
                <p className="font-body text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                  Devlet Malzeme Ofisi (DMO) katalog tescili ve kamu ihaleleri kapsamında yürüttüğümüz, İRAY markası yetkili satıcılığı kapsamındaki kurumsal hijyen ve kağıt ürünleri tedariği.
                </p>
              </div>
              <Link href="/is-modellerimiz/b2g" className="btn-primary w-full text-center mt-4">
                Detayları İncele →
              </Link>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
