import Link from 'next/link';
import { ScrollReveal } from '@/components/core/ScrollReveal';

/**
 * Parfumler Call to Action Section
 */
export function CTA() {
  return (
    <section className="section-padding bg-[var(--bg-secondary)] text-center border-t border-[var(--border-subtle)]">
      <div className="max-w-2xl mx-auto px-6">
        <ScrollReveal direction="up">
          <p className="font-body text-body-lg text-[var(--text-secondary)] mb-6">
            Lansmanı kaçırmamak için bizi takip edin.
          </p>
          <Link href="/iletisim/genel-merkez" className="btn-primary inline-block">Bilgi Almak İstiyorum</Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
