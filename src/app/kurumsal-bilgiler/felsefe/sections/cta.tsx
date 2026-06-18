import Link from 'next/link';
import { ScrollReveal } from '@/components/core/ScrollReveal';

/**
 * Felsefe Call to Action Section
 */
export function CTA() {
  return (
    <section className="section-padding bg-[var(--bg-secondary)] text-center relative overflow-hidden border-t border-[var(--border-subtle)]">
      <div className="floating-orb floating-orb-warm w-[300px] h-[300px] -bottom-[150px] -left-[150px]" />
      <div className="relative z-10 max-w-2xl mx-auto px-6">
        <ScrollReveal direction="up">
          <h2 className="font-cinzel text-3xl font-bold text-[var(--text-primary)] mb-4">
            Farkı Hissedin
          </h2>
          <p className="font-body text-base text-[var(--text-secondary)] mb-8">
            Yüksek konsantrasyon felsefemizi deneyimlemek için ürün koleksiyonumuzu keşfedin.
          </p>
          <Link href="/olusumlarimiz/nos-canda-shop/urunlerimiz/reed-diffusers" className="btn-primary inline-block">
            Ürünleri Keşfet
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
