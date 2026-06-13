'use client';

import { useGsapScroll } from '@/hooks/useGsapScroll';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const TESTIMONIALS = [
  {
    quote: 'Nos Canda difüzörleri mekanlarımızın ruhunu tamamen değiştirdi. Müşterilerimiz artık girdiğinde sadece görüntüyü değil, havayı soluyorlar.',
    author: 'Zeynep Karaman',
    role: 'Otel Genel Müdürü',
    company: 'La Maison Istanbul',
  },
  {
    quote: 'Bölge Kalkanı sistemi sayesinde bölgemde hiçbir rekabet baskısı hissetmiyorum. Dijital ortaklık payı ise sürpriz gelir kaynağım oldu.',
    author: 'Emre Demir',
    role: 'Bayilik Ortağı',
    company: 'Nos Canda — Bağdat Caddesi',
  },
  {
    quote: 'Extrait de Parfum konsantrasyonunda bu fiyat aralığında başka bir marka bulamadım. Kalıcılık ve projeksiyon açısından piyasadaki en dürüst formül.',
    author: 'Dr. Ayşe Köksal',
    role: 'Kozmetik Kimyager',
    company: 'İstanbul Teknik Üniversitesi',
  },
];

/**
 * Testimonial/social-proof section for the homepage.
 * Webflow-inspired layout with large quote marks, staggered scroll reveals,
 * and premium card design with gold accents.
 */
export function TestimonialsSection() {
  const containerRef = useGsapScroll((container) => {
    const header = container.querySelector('.testimonials-header');
    const cards = container.querySelectorAll('.testimonial-card');

    gsap.fromTo(header,
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: container, start: 'top 75%', toggleActions: 'play none none reverse' },
      }
    );

    gsap.fromTo(cards,
      { opacity: 0, y: 50, rotateX: 5 },
      {
        opacity: 1, y: 0, rotateX: 0, duration: 0.9, ease: 'power3.out', stagger: 0.2,
        scrollTrigger: { trigger: container, start: 'top 70%', toggleActions: 'play none none reverse' },
      }
    );
  });

  return (
    <section
      ref={containerRef}
      id="testimonials-homepage"
      className="section-padding section-dark relative overflow-hidden"
    >
      {/* Floating decorative orbs */}
      <div className="floating-orb floating-orb-gold w-[500px] h-[500px] -top-[200px] -right-[200px]" />
      <div className="floating-orb floating-orb-warm w-[400px] h-[400px] -bottom-[150px] -left-[150px]" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <div className="testimonials-header opacity-0 text-center mb-16">
          <span className="badge-corporate block mb-4">Paydaş Deneyimleri</span>
          <h2 className="font-cinzel text-section-heading font-semibold text-[var(--section-dark-text)] mb-4">
            Ortaklarımızın Sesi
          </h2>
          <div className="gold-line max-w-[100px] mx-auto" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="testimonial-card opacity-0 relative p-8 rounded-2xl bg-white/[0.04] backdrop-blur-sm border border-white/[0.06] flex flex-col justify-between magnetic-hover"
            >
              {/* Quote mark */}
              <div className="quote-mark mb-4">&ldquo;</div>

              {/* Quote text */}
              <p className="font-body text-sm text-[var(--section-dark-muted)] leading-relaxed mb-8 -mt-6">
                {t.quote}
              </p>

              {/* Author info */}
              <div className="border-t border-white/[0.06] pt-5 mt-auto">
                <p className="font-cinzel text-sm font-semibold text-[var(--section-dark-text)]">
                  {t.author}
                </p>
                <p className="font-body text-xs text-[var(--accent-gold)] mt-1">
                  {t.role}
                </p>
                <p className="font-gothic text-[0.6rem] tracking-[0.15em] uppercase text-[var(--section-dark-muted)] mt-1">
                  {t.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
