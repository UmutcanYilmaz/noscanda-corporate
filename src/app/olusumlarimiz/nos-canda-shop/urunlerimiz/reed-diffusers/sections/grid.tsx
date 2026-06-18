import Image from 'next/image';
import Link from 'next/link';
import { ScrollReveal } from '@/components/core/ScrollReveal';
import { PRODUCTS_DETAILS } from '@/lib/products-data';

/**
 * Reed Diffusers Grid Section
 */
export function Grid() {
  const products = Object.values(PRODUCTS_DETAILS).filter(
    (p) => p.category === 'reed-diffuser'
  );

  return (
    <section className="section-padding bg-[var(--bg-primary)]">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {products.map((product, idx) => (
            <ScrollReveal key={product.slug} direction="up" delay={0.05 * idx}>
              <div 
                className="surface-elevated rounded-2xl border border-[var(--border-subtle)] p-6 md:p-8 flex flex-col justify-between magnetic-hover shadow-glass h-full"
              >
                <div>
                  {/* Image container */}
                  <div className="relative aspect-square rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] overflow-hidden flex items-center justify-center p-6 mb-6">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="object-contain max-h-[85%] w-auto transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  {/* Scent Title & Volume */}
                  <div className="flex items-center justify-between mb-3">
                    <h2 className="font-cinzel text-xl font-bold text-[var(--text-primary)]">
                      {product.name}
                    </h2>
                    <span className="font-cinzel text-xs tracking-wider text-[var(--accent-gold)] font-semibold">
                      {product.volume}
                    </span>
                  </div>

                  {/* Short spec badge */}
                  <div className="flex gap-2 mb-4">
                    <span className="px-2 py-0.5 text-[0.65rem] font-semibold tracking-wider uppercase rounded bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-[var(--accent-gold)]">
                      {product.specs.concentration}
                    </span>
                    <span className="px-2 py-0.5 text-[0.65rem] font-semibold tracking-wider uppercase rounded bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-[var(--text-secondary)]">
                      {product.specs.longevity}
                    </span>
                  </div>

                  {/* Scent Description */}
                  <p className="font-body text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                    {product.description}
                  </p>

                  {/* Notes summary */}
                  <div className="mb-8">
                    <span className="font-gothic text-[0.6rem] tracking-[0.15em] uppercase text-[var(--text-muted)] block mb-1">
                      Öne Çıkan Notalar
                    </span>
                    <span className="font-body text-xs text-[var(--text-primary)] font-medium">
                      {product.notes.top[0]}, {product.notes.heart[0]} ve {product.notes.base[0]}
                    </span>
                  </div>
                </div>

                {/* Call-to-action buttons */}
                <div className="grid grid-cols-2 gap-3 mt-auto pt-4 border-t border-[var(--border-subtle)]">
                  <Link
                    href={`/olusumlarimiz/nos-canda-shop/urunlerimiz/reed-diffusers/${product.slug}`}
                    className="btn-secondary text-center text-xs py-2.5 px-4 font-semibold rounded-lg border border-[var(--border-subtle)] hover:bg-[var(--bg-secondary)] transition-all duration-300"
                  >
                    Detayları İncele
                  </Link>
                  <a
                    href={product.buyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-center text-xs py-2.5 px-4 font-semibold rounded-lg bg-[var(--accent-gold)] hover:bg-[var(--accent-gold-hover)] text-white transition-all duration-300"
                  >
                    Satın Al
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
