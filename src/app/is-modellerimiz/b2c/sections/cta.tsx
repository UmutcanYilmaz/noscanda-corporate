import Link from 'next/link';
import { ScrollReveal } from '@/components/core/ScrollReveal';

/**
 * B2C Call to Action Section
 */
export function CTA() {
  return (
    <section className="section-padding bg-[var(--bg-secondary)] text-center border-t border-[var(--border-subtle)]">
      <div className="max-w-2xl mx-auto px-6">
        <ScrollReveal direction="up">
          <h2 className="font-cinzel text-section-heading font-semibold text-[var(--text-primary)] mb-4">
            Keşfetmeye Hazır mısınız?
          </h2>
          <p className="font-body text-base text-[var(--text-secondary)] mb-8">
            Ev and araç parfümlerindeki yüksek konsantrasyonlu eşsiz formüllerimizi inceleyin.
          </p>
          <Link href="/urunlerimiz/reed-diffusers" className="btn-primary inline-block">Ürünleri Keşfet</Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
