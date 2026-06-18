import Link from 'next/link';
import { ScrollReveal } from '@/components/core/ScrollReveal';
import { ProductDetail } from '@/lib/products-data';

interface HeaderProps {
  product: ProductDetail;
}

/**
 * Reed Diffusers detail Header Section
 */
export function Header({ product }: HeaderProps) {
  return (
    <section className="pt-32 pb-8 bg-[var(--bg-secondary)] border-b border-[var(--border-subtle)] relative overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-6">
        <ScrollReveal direction="up">
          <Link
            href="/olusumlarimiz/nos-canda-shop/urunlerimiz/reed-diffusers"
            className="inline-flex items-center text-xs tracking-wider uppercase text-[var(--accent-gold)] hover:text-[var(--text-primary)] transition-colors duration-300 mb-6"
          >
            ← Koleksiyona Geri Dön
          </Link>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="badge-corporate block mb-2">{product.categoryLabel}</span>
              <h1 className="font-cinzel text-4xl font-bold text-[var(--text-primary)]">
                {product.name}
              </h1>
            </div>
            <div className="font-cinzel text-xl font-semibold text-[var(--accent-gold)]">
              {product.volume}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
