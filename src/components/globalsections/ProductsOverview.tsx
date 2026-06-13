'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useGsapScroll } from '@/hooks/useGsapScroll';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const PRODUCTS_DATA = {
  diffusers: {
    categoryTitle: 'Premium Reed Diffusers',
    categorySub: 'Evin Görünmez Ruhu · Oda Kokuları',
    description: 'Yüksek esans konsantrasyonu (%25 Extrait de Parfum) ve premium rattan çubuklar ile evinizde 8-16 hafta kesintisiz, dengeli koku salınımı.',
    href: '/urunlerimiz/reed-diffusers',
    image: '/images/placeholders/hero-diffuser.png',
    scents: [
      { name: 'Floral Amber', slug: 'floral-amber', notes: 'Bergamot · Pink Pepper · Jasmine · Amber' },
      { name: 'Fruity Amber', slug: 'fruity-amber', notes: 'Red Fruits · Peach · Orchid · Amber' },
      { name: 'Lavender Jasmine', slug: 'lavender-jasmine', notes: 'French Lavender · Jasmine Absolute · White Musk' },
      { name: 'Orange Jasmine', slug: 'orange-jasmine', notes: 'Orange Blossom · Neroli · Jasmine · Sandalwood' },
    ],
  },
  auto: {
    categoryTitle: 'Premium Auto Fragrances',
    categorySub: 'Sürüş Deneyiminin İmzası · Araç Parfümleri',
    description: 'Zarif cam şişe ve doğal ahşap kapak tasarımıyla lüksü yola taşıyan, manyetik deri ve amber notalı kalıcı oto parfümleri.',
    href: '/urunlerimiz/auto-fragrances',
    image: '/images/placeholders/auto-fragrance.png',
    scents: [
      { name: 'Floral Amber', slug: 'floral-amber', notes: 'Bergamot · Pink Pepper · Leather · Amber' },
      { name: 'Fruity Amber', slug: 'fruity-amber', notes: 'Tropical Fruits · Orchid · Tonka · Amber' },
      { name: 'Lavender Jasmine', slug: 'lavender-jasmine', notes: 'Lavender · Night Jasmine · Cedarwood' },
      { name: 'Orange Jasmine', slug: 'orange-jasmine', notes: 'Bergamot · Orange Blossom · Jasmine · Vanilla' },
    ],
  },
};

/**
 * Corporate product collection section.
 * Enriched with product imagery, image zoom containers, and magnetic hover cards.
 * Includes direct links to individual product pages (which redirect to noscanda.net).
 */
export function ProductsOverview() {
  const containerRef = useGsapScroll((container) => {
    const header = container.querySelector('.products-header');
    const columns = container.querySelectorAll('.product-column');
    
    if (header) {
      gsap.fromTo(header,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: container, start: 'top 80%', toggleActions: 'play none none reverse' },
        }
      );
    }

    gsap.fromTo(columns,
      { opacity: 0, y: 50 },
      {
        opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', stagger: 0.25,
        scrollTrigger: {
          trigger: container,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  });

  return (
    <section
      ref={containerRef}
      id="products-overview"
      className="section-padding bg-[var(--bg-primary)] border-b border-[var(--border-subtle)] relative overflow-hidden"
    >
      {/* Floating orbs */}
      <div className="floating-orb floating-orb-warm w-[350px] h-[350px] top-[10%] -right-[120px]" />
      <div className="floating-orb floating-orb-gold w-[250px] h-[250px] bottom-[15%] -left-[80px]" />

      <div className="relative z-10 max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="products-header opacity-0 text-center mb-16">
          <span className="badge-corporate block mb-4">Koleksiyonlar</span>
          <h2 className="font-cinzel text-section-heading font-semibold text-[var(--text-primary)] mb-4">
            Koku Çözümlerimiz
          </h2>
          <div className="gold-line max-w-[100px] mx-auto mb-6" />
          <p className="font-body text-body-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Grasse doğal esansları ile formüle edilen, %25 Extrait de Parfum konsantrasyonunda premium koku ailemiz.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Reed Diffusers Column */}
          <div className="product-column opacity-0 flex flex-col justify-between rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] overflow-hidden magnetic-hover">
            {/* Product Image */}
            <div className="image-zoom-container relative aspect-[16/10]">
              <Image
                src={PRODUCTS_DATA.diffusers.image}
                alt="Nos Canda Premium Reed Diffuser koleksiyonu"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 600px"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-secondary)] via-transparent to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="inline-block px-3 py-1.5 bg-white/80 backdrop-blur-sm rounded-full font-gothic text-[0.6rem] tracking-[0.2em] uppercase text-[var(--accent-gold)]">
                  Bestseller
                </span>
              </div>
            </div>

            <div className="p-8">
              <span className="font-gothic text-[0.65rem] tracking-[0.25em] uppercase text-[var(--accent-gold)] block mb-3">
                {PRODUCTS_DATA.diffusers.categoryTitle}
              </span>
              <h3 className="font-cinzel text-xl font-medium text-[var(--text-primary)] mb-4">
                {PRODUCTS_DATA.diffusers.categorySub}
              </h3>
              <p className="font-body text-sm text-[var(--text-secondary)] leading-relaxed mb-8">
                {PRODUCTS_DATA.diffusers.description}
              </p>

              {/* Scents list */}
              <div className="space-y-3 mb-8">
                <span className="font-gothic text-[0.6rem] tracking-[0.2em] uppercase text-[var(--text-muted)] block border-b border-[var(--border-subtle)] pb-2">
                  Koleksiyon Kokuları
                </span>
                {PRODUCTS_DATA.diffusers.scents.map((scent) => (
                  <Link
                    key={scent.slug}
                    href={`/urunlerimiz/reed-diffusers/${scent.slug}`}
                    className="group block p-4 rounded-lg bg-[var(--bg-primary)] border border-transparent hover:border-[var(--accent-gold)] transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-cinzel text-sm font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent-gold)] transition-colors duration-300">
                        {scent.name}
                      </span>
                      <span className="font-body text-xs text-[var(--accent-gold)] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                        Mağazaya Git →
                      </span>
                    </div>
                    <span className="font-body text-xs text-[var(--text-muted)]">
                      {scent.notes}
                    </span>
                  </Link>
                ))}
              </div>

              <Link href={PRODUCTS_DATA.diffusers.href} className="btn-secondary w-full text-center">
                Seriyi Detaylı İncele
              </Link>
            </div>
          </div>

          {/* Auto Fragrances Column */}
          <div className="product-column opacity-0 flex flex-col justify-between rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] overflow-hidden magnetic-hover">
            {/* Product Image */}
            <div className="image-zoom-container relative aspect-[16/10]">
              <Image
                src={PRODUCTS_DATA.auto.image}
                alt="Nos Canda Premium Auto Fragrance koleksiyonu"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 600px"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-secondary)] via-transparent to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="inline-block px-3 py-1.5 bg-white/80 backdrop-blur-sm rounded-full font-gothic text-[0.6rem] tracking-[0.2em] uppercase text-[var(--accent-gold)]">
                  Yeni Koleksiyon
                </span>
              </div>
            </div>

            <div className="p-8">
              <span className="font-gothic text-[0.65rem] tracking-[0.25em] uppercase text-[var(--accent-gold)] block mb-3">
                {PRODUCTS_DATA.auto.categoryTitle}
              </span>
              <h3 className="font-cinzel text-xl font-medium text-[var(--text-primary)] mb-4">
                {PRODUCTS_DATA.auto.categorySub}
              </h3>
              <p className="font-body text-sm text-[var(--text-secondary)] leading-relaxed mb-8">
                {PRODUCTS_DATA.auto.description}
              </p>

              {/* Scents list */}
              <div className="space-y-3 mb-8">
                <span className="font-gothic text-[0.6rem] tracking-[0.2em] uppercase text-[var(--text-muted)] block border-b border-[var(--border-subtle)] pb-2">
                  Koleksiyon Kokuları
                </span>
                {PRODUCTS_DATA.auto.scents.map((scent) => (
                  <Link
                    key={scent.slug}
                    href={`/urunlerimiz/auto-fragrances/${scent.slug}`}
                    className="group block p-4 rounded-lg bg-[var(--bg-primary)] border border-transparent hover:border-[var(--accent-gold)] transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-cinzel text-sm font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent-gold)] transition-colors duration-300">
                        {scent.name}
                      </span>
                      <span className="font-body text-xs text-[var(--accent-gold)] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                        Mağazaya Git →
                      </span>
                    </div>
                    <span className="font-body text-xs text-[var(--text-muted)]">
                      {scent.notes}
                    </span>
                  </Link>
                ))}
              </div>

              <Link href={PRODUCTS_DATA.auto.href} className="btn-secondary w-full text-center">
                Seriyi Detaylı İncele
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
