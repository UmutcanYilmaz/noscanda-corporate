import Image from 'next/image';
import { ScrollReveal } from '@/components/core/ScrollReveal';
import { ProductDetail } from '@/lib/products-data';

interface DetailsProps {
  product: ProductDetail;
}

/**
 * Auto Fragrances detail Details Section
 */
export function Details({ product }: DetailsProps) {
  return (
    <section className="section-padding bg-[var(--bg-primary)]">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Product image container - left 5 cols */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <ScrollReveal direction="left">
              <div className="relative aspect-square rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] overflow-hidden flex items-center justify-center p-8 group shadow-glass magnetic-hover">
                <Image
                  src={product.image}
                  alt={`${product.name} Bottle`}
                  width={400}
                  height={400}
                  className="object-contain max-h-[85%] w-auto transition-transform duration-700 group-hover:scale-105"
                  priority
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Product details info - right 7 cols */}
          <div className="lg:col-span-7 space-y-10">
            {/* Product description */}
            <ScrollReveal direction="right">
              <div>
                <h2 className="font-cinzel text-lg font-semibold text-[var(--text-primary)] mb-4 border-b border-[var(--border-subtle)] pb-2">
                  Koku Karakteri
                </h2>
                <p className="font-body text-body-lg text-[var(--text-secondary)] leading-relaxed">
                  {product.description}
                </p>
              </div>
            </ScrollReveal>

            {/* Buy Now Call-to-action */}
            <ScrollReveal direction="right" delay={0.1}>
              <div className="p-6 rounded-xl bg-[var(--bg-secondary)] border border-[var(--accent-gold-soft)] shadow-md magnetic-hover">
                <p className="font-body text-xs text-[var(--text-muted)] mb-4">
                  Bu ürünün perakende siparişi, stok takibi and kargo işlemleri resmi tüketici mağazamız üzerinden yürütülmektedir.
                </p>
                <a
                  href={product.buyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-center block"
                >
                  noscanda.net üzerinden satın al
                </a>
              </div>
            </ScrollReveal>

            {/* Olfactory Pyramid grid */}
            <ScrollReveal direction="right" delay={0.15}>
              <div>
                <h2 className="font-cinzel text-lg font-semibold text-[var(--text-primary)] mb-6 border-b border-[var(--border-subtle)] pb-2">
                  Koku Piramidi (Olfactory Notes)
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Top Notes */}
                  <div className="p-5 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-subtle)] magnetic-hover">
                    <span className="font-gothic text-[0.65rem] tracking-[0.2em] uppercase text-[var(--accent-gold)] block mb-3">
                      Üst Nota (Top)
                    </span>
                    <ul className="space-y-1">
                      {product.notes.top.map((note) => (
                        <li key={note} className="font-body text-sm text-[var(--text-primary)]">
                          • {note}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Heart Notes */}
                  <div className="p-5 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-subtle)] magnetic-hover">
                    <span className="font-gothic text-[0.65rem] tracking-[0.2em] uppercase text-[var(--accent-gold)] block mb-3">
                      Orta Nota (Heart)
                    </span>
                    <ul className="space-y-1">
                      {product.notes.heart.map((note) => (
                        <li key={note} className="font-body text-sm text-[var(--text-primary)]">
                          • {note}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Base Notes */}
                  <div className="p-5 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-subtle)] magnetic-hover">
                    <span className="font-gothic text-[0.65rem] tracking-[0.2em] uppercase text-[var(--accent-gold)] block mb-3">
                      Alt Nota (Base)
                    </span>
                    <ul className="space-y-1">
                      {product.notes.base.map((note) => (
                        <li key={note} className="font-body text-sm text-[var(--text-primary)]">
                          • {note}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Technical Specifications */}
            <ScrollReveal direction="right" delay={0.2}>
              <div>
                <h2 className="font-cinzel text-lg font-semibold text-[var(--text-primary)] mb-4 border-b border-[var(--border-subtle)] pb-2">
                  Teknik Özellikler
                </h2>
                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                  <div>
                    <span className="font-body text-xs text-[var(--text-muted)] block">Esans Konsantrasyonu</span>
                    <span className="font-cinzel text-sm font-semibold text-[var(--text-primary)]">
                      {product.specs.concentration}
                    </span>
                  </div>
                  <div>
                    <span className="font-body text-xs text-[var(--text-muted)] block">Koku Kalıcılık Süresi</span>
                    <span className="font-cinzel text-sm font-semibold text-[var(--text-primary)]">
                      {product.specs.longevity}
                    </span>
                  </div>
                  {product.specs.projection && (
                    <div>
                      <span className="font-body text-xs text-[var(--text-muted)] block">Yayılım / Etki Alanı</span>
                      <span className="font-cinzel text-sm font-semibold text-[var(--text-primary)]">
                        {product.specs.projection}
                      </span>
                    </div>
                  )}
                  <div>
                    <span className="font-body text-xs text-[var(--text-muted)] block">Esans Menşei</span>
                    <span className="font-cinzel text-sm font-semibold text-[var(--text-primary)]">
                      {product.specs.origin}
                    </span>
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
