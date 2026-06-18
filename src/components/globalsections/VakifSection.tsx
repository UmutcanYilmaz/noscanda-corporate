'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useGsapScroll } from '@/hooks/useGsapScroll';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Vakıf (Foundation) section for the homepage.
 * Showcases the Nos Canda Vakfı social responsibilities, female entrepreneur
 * grants, and zero-waste green projects.
 */
export function VakifSection() {
  const containerRef = useGsapScroll((container) => {
    const header = container.querySelector('.vakif-header');
    const cards = container.querySelectorAll('.vakif-card');
    const stats = container.querySelector('.vakif-stats');

    gsap.fromTo(header,
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: container, start: 'top 75%', toggleActions: 'play none none reverse' },
      }
    );

    gsap.fromTo(cards,
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.15,
        scrollTrigger: { trigger: container, start: 'top 70%', toggleActions: 'play none none reverse' },
      }
    );

    gsap.fromTo(stats,
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1, scale: 1, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: stats, start: 'top 85%', toggleActions: 'play none none reverse' },
      }
    );
  });

  return (
    <section
      ref={containerRef}
      id="vakif-homepage"
      className="section-padding bg-[var(--bg-secondary)] border-b border-[var(--border-subtle)] relative overflow-hidden"
    >
      {/* Floating orbs */}
      <div className="floating-orb floating-orb-gold w-[400px] h-[400px] -top-[150px] right-[10%]" />
      <div className="floating-orb floating-orb-warm w-[300px] h-[300px] bottom-[5%] -left-[100px]" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="vakif-header opacity-0 text-center mb-16">
          <span className="badge-corporate block mb-4">Toplumsal Değer</span>
          <h2 className="font-cinzel text-section-heading font-semibold text-[var(--text-primary)] mb-4">
            Nos Canda One
          </h2>
          <p className="font-body text-body-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Kadın girişimcileri finansal ve operasyonel olarak güçlendiriyor, 
            sürdürülebilir yeşil inisiyatiflerle geleceği koruma altına alıyoruz.
          </p>
        </div>

        {/* Community Image Banner */}
        <div className="mb-16 rounded-2xl overflow-hidden relative image-zoom-container">
          <div className="relative w-full aspect-[21/9]">
            <Image
              src="/images/placeholders/vakif-community.png"
              alt="Nos Canda One — Topluluk çalışması"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1200px"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-secondary)] via-transparent to-transparent opacity-50" />
          </div>
          <div className="absolute bottom-6 left-8">
            <span className="font-gothic text-[0.6rem] tracking-[0.25em] uppercase text-[var(--accent-gold)]">
              Kadın Girişimci Hızlandırma Programı
            </span>
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          {/* Card 1 */}
          <div className="vakif-card opacity-0 p-8 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] flex flex-col justify-between magnetic-hover">
            <div>
              <span className="font-gothic text-[0.6rem] tracking-[0.2em] uppercase text-[var(--accent-gold)] block mb-3">
                İnisiyatif 01
              </span>
              <h3 className="font-cinzel text-lg font-bold text-[var(--text-primary)] mb-3">
                Kadın Girişimci Hibeleri
              </h3>
              <p className="font-body text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                Kendi üretim atölyesini kurmak veya işini büyütmek isteyen kadın zanaatkarlara sağladığımız faizsiz sermaye ve hızlandırma destekleri.
              </p>
            </div>
            <span className="font-gothic text-[0.6rem] tracking-widest text-[var(--text-muted)] uppercase">
              35+ Girişimci Kadın
            </span>
          </div>

          {/* Card 2 */}
          <div className="vakif-card opacity-0 p-8 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] flex flex-col justify-between card-hover">
            <div>
              <span className="font-gothic text-[0.6rem] tracking-[0.2em] uppercase text-[var(--accent-gold)] block mb-3">
                İnisiyatif 02
              </span>
              <h3 className="font-cinzel text-lg font-bold text-[var(--text-primary)] mb-3">
                Yeşil Manifestomuz
              </h3>
              <p className="font-body text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                Karbon-nötr sevkiyat programlarımız, yeniden doldurulabilir cam şişe inovasyonlarımız ve plastik kullanımını sıfırlayan paketleme çözümlerimiz.
              </p>
            </div>
            <span className="font-gothic text-[0.6rem] tracking-widest text-[var(--text-muted)] uppercase">
              %100 Karbon Nötr
            </span>
          </div>

          {/* Card 3 */}
          <div className="vakif-card opacity-0 p-8 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] flex flex-col justify-between card-hover">
            <div>
              <span className="font-gothic text-[0.6rem] tracking-[0.2em] uppercase text-[var(--accent-gold)] block mb-3">
                İnisiyatif 03
              </span>
              <h3 className="font-cinzel text-lg font-bold text-[var(--text-primary)] mb-3">
                Telsiz Acil Yardım
              </h3>
              <p className="font-body text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                Afet durumlarında kesintisiz iletişim kanalları kurmak amacıyla gönüllü ekiplerimizle yönettiğimiz Telsiz acil durum iletişim altyapısı.
              </p>
            </div>
            <span className="font-gothic text-[0.6rem] tracking-widest text-[var(--text-muted)] uppercase">
              7/24 Kesintisiz İletişim
            </span>
          </div>

        </div>

        {/* Stats and CTA Row */}
        <div className="vakif-stats opacity-0 p-8 md:p-10 rounded-2xl bg-white/45 backdrop-blur-xl border border-[var(--border-gold)] flex flex-col md:flex-row items-center justify-between gap-8 shadow-glass">
          <div className="grid grid-cols-3 gap-6 md:gap-12 text-center md:text-left">
            <div>
              <p className="font-cinzel text-2xl md:text-3xl font-bold text-[var(--accent-gold)]">35+</p>
              <p className="font-body text-[0.7rem] uppercase tracking-wider text-[var(--text-secondary)] mt-1">İşletmeye Hibe</p>
            </div>
            <div>
              <p className="font-cinzel text-2xl md:text-3xl font-bold text-[var(--accent-gold)]">₺2.5M</p>
              <p className="font-body text-[0.7rem] uppercase tracking-wider text-[var(--text-secondary)] mt-1">Toplam Destek</p>
            </div>
            <div>
              <p className="font-cinzel text-2xl md:text-3xl font-bold text-[var(--accent-gold)]">%100</p>
              <p className="font-body text-[0.7rem] uppercase tracking-wider text-[var(--text-secondary)] mt-1">Geri Dönüştürülebilir</p>
            </div>
          </div>
          
          <Link href="/olusumlarimiz/nos-canda-one/vakif" className="btn-primary whitespace-nowrap">
            Nos Canda One →
          </Link>
        </div>

      </div>
    </section>
  );
}
