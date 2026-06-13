import Link from 'next/link';
import { ScrollReveal } from '@/components/core/ScrollReveal';

/**
 * İletişim Portal Contact Cards Section
 */
export function ContactCards() {
  return (
    <section className="section-padding bg-[var(--bg-primary)]">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Card 1: Genel Merkez */}
          <ScrollReveal direction="left">
            <div className="bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-2xl p-8 flex flex-col justify-between magnetic-hover shadow-glass h-full">
              <div>
                <span className="font-gothic text-[0.6rem] tracking-[0.2em] uppercase text-[var(--accent-gold)] block mb-3">
                  Koordinasyon
                </span>
                <h3 className="font-cinzel text-xl font-bold text-[var(--text-primary)] mb-4">
                  Genel Merkez & Ofis
                </h3>
                <p className="font-body text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                  Adres, telefon, e-posta koordinatları and resmi merkez çalışma saatlerimiz hakkında detaylı bilgi.
                </p>
              </div>
              <Link href="/iletisim/genel-merkez" className="btn-primary w-full text-center mt-6">
                İletişim Bilgilerini Gör
              </Link>
            </div>
          </ScrollReveal>

          {/* Card 2: Bayilik Başvurusu */}
          <ScrollReveal direction="right">
            <div className="bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-2xl p-8 flex flex-col justify-between magnetic-hover shadow-glass h-full">
              <div>
                <span className="font-gothic text-[0.6rem] tracking-[0.2em] uppercase text-[var(--accent-gold)] block mb-3">
                  Büyüme & Ortaklık
                </span>
                <h3 className="font-cinzel text-xl font-bold text-[var(--text-primary)] mb-4">
                  Bayilik Başvurusu
                </h3>
                <p className="font-body text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                  Fiziksel butik kiosk ağımızın bir parçası olmak and bölgenizde premium koku satış hakkı elde etmek için online form.
                </p>
              </div>
              <Link href="/iletisim/bayilik-basvurusu" className="btn-primary w-full text-center mt-6">
                Başvuru Formunu Doldur
              </Link>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
