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
 * Manifesto section for the homepage.
 * Enriched with parallax imagery, floating orbs, and richer content.
 * Represents the "Kurumsal Bilgiler" (Corporate Info) parent page, detailing
 * the brand story and concentration philosophy.
 */
export function ManifestoSection() {
  const containerRef = useGsapScroll((container) => {
    const header = container.querySelector('.manifesto-header');
    const cols = container.querySelectorAll('.manifesto-col');
    const imageBlock = container.querySelector('.manifesto-image');

    gsap.fromTo(header,
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: container, start: 'top 75%', toggleActions: 'play none none reverse' },
      }
    );

    gsap.fromTo(cols,
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.2,
        scrollTrigger: { trigger: container, start: 'top 70%', toggleActions: 'play none none reverse' },
      }
    );

    if (imageBlock) {
      gsap.fromTo(imageBlock,
        { opacity: 0, scale: 0.95, y: 30 },
        {
          opacity: 1, scale: 1, y: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: imageBlock, start: 'top 85%', toggleActions: 'play none none reverse' },
        }
      );
    }
  });

  return (
    <section
      ref={containerRef}
      id="manifesto-homepage"
      className="section-padding bg-[var(--bg-primary)] border-b border-[var(--border-subtle)] relative overflow-hidden"
    >
      {/* Floating orbs */}
      <div className="floating-orb floating-orb-gold w-[400px] h-[400px] -top-[150px] -left-[100px]" />
      <div className="floating-orb floating-orb-warm w-[300px] h-[300px] bottom-[5%] -right-[100px]" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">

        {/* Section Header */}
        <div className="manifesto-header opacity-0 text-center mb-16">
          <span className="badge-corporate block mb-4">Manifesto & Değerler</span>
          <h2 className="font-cinzel text-section-heading font-semibold text-[var(--text-primary)] mb-4">
            Kurumsal Kimliğimiz
          </h2>
          <div className="gold-line max-w-[100px] mx-auto mb-6" />
          <p className="font-body text-body-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Grasse&apos;ın parfümeri havzasından Türkiye&apos;nin dört bir yanına uzanan yolculuğumuzda, kokuyu bir sanat formu olarak ele alıyoruz.
          </p>
        </div>

        {/* Hero Image */}
        <div className="manifesto-image opacity-0 mb-16 rounded-2xl overflow-hidden relative image-zoom-container">
          <div className="relative w-full aspect-[21/9]">
            <Image
              src="/images/placeholders/manifesto-atelier.png"
              alt="Nos Canda parfümeri atölyesi — esans hazırlama süreci"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1200px"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-transparent to-transparent opacity-60" />
          </div>
          <div className="absolute bottom-6 left-8 right-8">
            <span className="font-gothic text-[0.6rem] tracking-[0.25em] uppercase text-[var(--accent-gold)]">
              Grasse Parfümeri Havzası · Esans Hazırlama
            </span>
          </div>
        </div>

        {/* Story & Philosophy Splits */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">

          {/* Column 1: Hikayemiz */}
          <div className="manifesto-col opacity-0 flex flex-col justify-between p-8 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] magnetic-hover">
            <div>
              <span className="font-gothic text-[0.6rem] tracking-[0.2em] uppercase text-[var(--accent-gold)] block mb-3">
                Geçmişten Geleceğe
              </span>
              <h3 className="font-cinzel text-xl font-bold text-[var(--text-primary)] mb-4">
                Nos Canda Hikayesi
              </h3>
              <p className="font-body text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                Kökleri Fransa&apos;nın Grasse parfümeri havzasına dayanan Nos Canda,
                doğru hammaddeleri, etik tedarik zincirini ve tavizsiz üretimi merkezine alır.
                Türkiye genelinde kurumsal ve bireysel koku kültürünü şekillendirmek amacıyla kurulduk.
              </p>
              <p className="font-body text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                Basit bir koku üreticisi olmanın ötesinde, olfaktif hafızayı şekillendiren
                sanatsal bir yaklaşım benimsiyoruz.
              </p>
              {/* Additional content — key differentiators */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                <div className="p-3 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-subtle)]">
                  <span className="font-cinzel text-lg font-bold text-[var(--accent-gold)]">2019</span>
                  <p className="font-body text-[0.65rem] text-[var(--text-muted)] mt-1">Kuruluş Yılı</p>
                </div>
                <div className="p-3 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-subtle)]">
                  <span className="font-cinzel text-lg font-bold text-[var(--accent-gold)]">Grasse</span>
                  <p className="font-body text-[0.65rem] text-[var(--text-muted)] mt-1">Hammadde Kökeni</p>
                </div>
              </div>
            </div>
            <Link href="/hakkimizda/hikayemiz" className="btn-secondary w-full text-center">
              Hikayemizi Keşfedin
            </Link>
          </div>

          {/* Column 2: Felsefemiz */}
          <div className="manifesto-col opacity-0 flex flex-col justify-between p-8 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] magnetic-hover">
            <div>
              <span className="font-gothic text-[0.6rem] tracking-[0.2em] uppercase text-[var(--accent-gold)] block mb-3">
                Esans Politikamız
              </span>
              <h3 className="font-cinzel text-xl font-bold text-[var(--text-primary)] mb-4">
                Yüksek Konsantrasyon Felsefesi
              </h3>
              <p className="font-body text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                Endüstriyel seyreltmeleri ve ucuz sentetik dolguları tamamen reddediyoruz.
                Tüm ürünlerimizde parfümeri dünyasının en üst kademesi olan %25 esans yağı oranını
                (Extrait de Parfum) standart olarak kabul ediyoruz.
              </p>
              <p className="font-body text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                Bu sayede ilk kullanımdan haftalar sonra bile kokuların tüm alt ve orta notalarının
                derinliğini bozmadan yayılmasını sağlıyoruz.
              </p>
              {/* Concentration comparison visual */}
              <div className="space-y-3 mb-8">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-gothic text-[0.6rem] tracking-wider text-[var(--text-muted)] uppercase">Nos Canda (Extrait)</span>
                    <span className="font-cinzel text-xs font-bold text-[var(--accent-gold)]">25%</span>
                  </div>
                  <div className="progress-line">
                    <div className="progress-line-fill active" style={{ transitionDelay: '0.5s' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-gothic text-[0.6rem] tracking-wider text-[var(--text-muted)] uppercase">Eau de Parfum</span>
                    <span className="font-cinzel text-xs text-[var(--text-muted)]">15%</span>
                  </div>
                  <div className="progress-line">
                    <div className="progress-line-fill active" style={{ width: '60%', transitionDelay: '0.7s' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-gothic text-[0.6rem] tracking-wider text-[var(--text-muted)] uppercase">Eau de Toilette</span>
                    <span className="font-cinzel text-xs text-[var(--text-muted)]">8%</span>
                  </div>
                  <div className="progress-line">
                    <div className="progress-line-fill active" style={{ width: '32%', transitionDelay: '0.9s' }} />
                  </div>
                </div>
              </div>
            </div>
            <Link href="/hakkimizda/felsefe" className="btn-secondary w-full text-center">
              Manifestomuzu İnceleyin
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
