import Link from 'next/link';
import { ScrollReveal } from '@/components/core/ScrollReveal';

/**
 * Hikayemiz Call to Action Section
 */
export function CTA() {
  return (
    <section className="section-padding bg-[var(--bg-secondary)] text-center relative overflow-hidden border-t border-[var(--border-subtle)]">
      <div className="floating-orb floating-orb-gold w-[300px] h-[300px] -bottom-[150px] -right-[150px]" />
      <div className="relative z-10 max-w-2xl mx-auto px-6">
        <ScrollReveal direction="up">
          <h2 className="font-cinzel text-3xl font-bold text-[var(--text-primary)] mb-4">
            Hikayemizin Parçası Olun
          </h2>
          <p className="font-body text-base text-[var(--text-secondary)] mb-8">
            Bayilik fırsatları, kariyer imkânları veya ortaklık teklifleri için bizimle iletişime geçin.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/iletisim/genel-merkez" className="btn-primary">
              İletişime Geçin
            </Link>
            <Link href="/kurumsal-bilgiler/felsefe" className="btn-secondary">
              Felsefemiz
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
