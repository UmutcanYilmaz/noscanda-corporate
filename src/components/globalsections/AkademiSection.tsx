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
 * Akademi section for the homepage.
 * Showcases the Nos Canda Akademi pillar including educational programs, statistics,
 * and academic partnership details.
 */
export function AkademiSection() {
  const containerRef = useGsapScroll((container) => {
    const header = container.querySelector('.akademi-header');
    const cards = container.querySelectorAll('.akademi-card');
    const stats = container.querySelector('.akademi-stats');

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
      id="akademi-homepage"
      className="section-padding bg-[var(--bg-primary)] border-b border-[var(--border-subtle)] relative overflow-hidden"
    >
      {/* Floating orbs */}
      <div className="floating-orb floating-orb-warm w-[350px] h-[350px] -top-[120px] -left-[100px]" />
      <div className="floating-orb floating-orb-gold w-[250px] h-[250px] bottom-[10%] right-[5%]" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="akademi-header opacity-0 text-center mb-16">
          <span className="badge-corporate block mb-4">Eğitim ve Gelişim</span>
          <h2 className="font-cinzel text-section-heading font-semibold text-[var(--text-primary)] mb-4">
            Nos Canda Akademi
          </h2>
          <p className="font-body text-body-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Genç profesyonelleri yetiştiriyor, akademik araştırmaları destekliyor ve 
            sektörün geleceğine nitelikli insan kaynağı kazandırıyoruz.
          </p>
        </div>

        {/* Workshop Image Banner */}
        <div className="mb-16 rounded-2xl overflow-hidden relative image-zoom-container">
          <div className="relative w-full aspect-[21/9]">
            <Image
              src="/images/placeholders/akademi-workshop.png"
              alt="Nos Canda Akademi — eğitim atölyesi"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1200px"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-transparent to-transparent opacity-50" />
          </div>
          <div className="absolute bottom-6 left-8">
            <span className="font-gothic text-[0.6rem] tracking-[0.25em] uppercase text-[var(--accent-gold)]">
              Nos Canda Akademi · Mentorluk Programı
            </span>
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          {/* Card 1 */}
          <div className="akademi-card opacity-0 p-8 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] flex flex-col justify-between magnetic-hover">
            <div>
              <span className="font-gothic text-[0.6rem] tracking-[0.2em] uppercase text-[var(--accent-gold)] block mb-3">
                Program 01
              </span>
              <h3 className="font-cinzel text-lg font-bold text-[var(--text-primary)] mb-3">
                Genç Yetenek Programı
              </h3>
              <p className="font-body text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                Üniversite öğrencilerine mentorluk, uygulamalı iş deneyimi ve doğrudan staj imkanları sunan kapsamlı gelişim programı.
              </p>
            </div>
            <span className="font-gothic text-[0.6rem] tracking-widest text-[var(--text-muted)] uppercase">
              120+ Stajyer Mezun
            </span>
          </div>

          {/* Card 2 */}
          <div className="akademi-card opacity-0 p-8 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] flex flex-col justify-between card-hover">
            <div>
              <span className="font-gothic text-[0.6rem] tracking-[0.2em] uppercase text-[var(--accent-gold)] block mb-3">
                Program 02
              </span>
              <h3 className="font-cinzel text-lg font-bold text-[var(--text-primary)] mb-3">
                Eğitim Bursları
              </h3>
              <p className="font-body text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                Kimya, tasarım ve olfaktif sanatlar bölümlerinde eğitim gören başarılı öğrencilere sağladığımız finansal başarı bursları.
              </p>
            </div>
            <span className="font-gothic text-[0.6rem] tracking-widest text-[var(--text-muted)] uppercase">
              45 Başarı Bursu
            </span>
          </div>

          {/* Card 3 */}
          <div className="akademi-card opacity-0 p-8 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] flex flex-col justify-between card-hover">
            <div>
              <span className="font-gothic text-[0.6rem] tracking-[0.2em] uppercase text-[var(--accent-gold)] block mb-3">
                Program 03
              </span>
              <h3 className="font-cinzel text-lg font-bold text-[var(--text-primary)] mb-3">
                Olfaktif Ar-Ge
              </h3>
              <p className="font-body text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                Koku psikolojisi, yayılım bilimleri ve sürdürülebilir hammaddeler üzerine üniversite iş birlikleri ile yürüttüğümüz akademik projeler.
              </p>
            </div>
            <span className="font-gothic text-[0.6rem] tracking-widest text-[var(--text-muted)] uppercase">
              8 Üniversite İş Birliği
            </span>
          </div>

        </div>

        {/* Stats and CTA Row */}
        <div className="akademi-stats opacity-0 p-8 md:p-10 rounded-2xl bg-white/45 backdrop-blur-xl border border-[var(--border-gold)] flex flex-col md:flex-row items-center justify-between gap-8 shadow-glass">
          <div className="grid grid-cols-3 gap-6 md:gap-12 text-center md:text-left">
            <div>
              <p className="font-cinzel text-2xl md:text-3xl font-bold text-[var(--accent-gold)]">120+</p>
              <p className="font-body text-[0.7rem] uppercase tracking-wider text-[var(--text-secondary)] mt-1">Yetenek Yetiştirildi</p>
            </div>
            <div>
              <p className="font-cinzel text-2xl md:text-3xl font-bold text-[var(--accent-gold)]">45</p>
              <p className="font-body text-[0.7rem] uppercase tracking-wider text-[var(--text-secondary)] mt-1">Eğitim Bursiyeri</p>
            </div>
            <div>
              <p className="font-cinzel text-2xl md:text-3xl font-bold text-[var(--accent-gold)]">8</p>
              <p className="font-body text-[0.7rem] uppercase tracking-wider text-[var(--text-secondary)] mt-1">Akademik Yayın</p>
            </div>
          </div>
          
          <Link href="/nos-canda-one/akademi" className="btn-primary whitespace-nowrap">
            Akademi Portalına Git →
          </Link>
        </div>

      </div>
    </section>
  );
}
