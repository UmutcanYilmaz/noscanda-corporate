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
      className="section-padding section-dark bg-[#12100F] border-b border-white/[0.04] relative overflow-hidden text-white"
    >
      {/* Floating orbs */}
      <div className="floating-orb floating-orb-gold w-[400px] h-[400px] -top-[150px] -left-[100px] opacity-40" />
      <div className="floating-orb floating-orb-warm w-[300px] h-[300px] bottom-[5%] -right-[100px] opacity-30" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">

        {/* Section Header */}
        <div className="manifesto-header opacity-0 text-center mb-16">
          <span className="badge-corporate block mb-4 text-[var(--accent-gold-hover)]">Manifesto & Değerler</span>
          <h2 className="font-cinzel text-section-heading font-semibold text-white mb-4">
            Kurumsal Kimliğimiz
          </h2>
          <div className="gold-line max-w-[100px] mx-auto mb-6" />
          <p className="font-body text-body-lg text-neutral-400 max-w-2xl mx-auto">
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
            <div className="absolute inset-0 bg-gradient-to-t from-[#12100F] via-transparent to-transparent opacity-90" />
          </div>
          <div className="absolute bottom-6 left-8 right-8">
            <span className="font-gothic text-[0.6rem] tracking-[0.25em] uppercase text-[var(--accent-gold-hover)]">
              Grasse Parfümeri Havzası · Esans Hazırlama
            </span>
          </div>
        </div>

        {/* Story & Philosophy Splits */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">

          {/* Column 1: Hikayemiz */}
          <div className="manifesto-col opacity-0 flex flex-col justify-between p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-[var(--accent-gold)]/30 transition-all duration-500 magnetic-hover">
            <div>
              <span className="font-gothic text-[0.6rem] tracking-[0.2em] uppercase text-[var(--accent-gold-hover)] block mb-3">
                Geçmişten Geleceğe
              </span>
              <h3 className="font-cinzel text-xl font-bold text-white mb-4">
                Nos Canda Hikayesi
              </h3>
              <p className="font-body text-sm text-neutral-300 leading-relaxed mb-4">
                Kökleri Fransa&apos;nın Grasse parfümeri havzasına dayanan Nos Canda,
                doğru hammaddeleri, etik tedarik zincirini ve tavizsiz üretimi merkezine alır.
                Türkiye genelinde kurumsal ve bireysel koku kültürünü şekillendirmek amacıyla kurulduk.
              </p>
              <p className="font-body text-sm text-neutral-300 leading-relaxed mb-4">
                Basit bir koku üreticisi olmanın ötesinde, olfaktif hafızayı şekillendiren
                sanatsal bir yaklaşım benimsiyoruz.
              </p>
              {/* Additional content — key differentiators */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                <div className="p-3 rounded-lg bg-white/[0.03] border border-white/5">
                  <span className="font-cinzel text-lg font-bold text-[var(--accent-gold-hover)]">2019</span>
                  <p className="font-body text-[0.65rem] text-neutral-500 mt-1">Kuruluş Yılı</p>
                </div>
                <div className="p-3 rounded-lg bg-white/[0.03] border border-white/5">
                  <span className="font-cinzel text-lg font-bold text-[var(--accent-gold-hover)]">Grasse</span>
                  <p className="font-body text-[0.65rem] text-neutral-500 mt-1">Hammadde Kökeni</p>
                </div>
              </div>
            </div>
            <Link href="/kurumsal-bilgiler/hikayemiz" className="btn-secondary w-full text-center border-white/25 text-white hover:bg-white/10">
              Hikayemizi Keşfedin
            </Link>
          </div>

          {/* Column 2: Felsefemiz */}
          <div className="manifesto-col opacity-0 flex flex-col justify-between p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-[var(--accent-gold)]/30 transition-all duration-500 magnetic-hover">
            <div>
              <span className="font-gothic text-[0.6rem] tracking-[0.2em] uppercase text-[var(--accent-gold-hover)] block mb-3">
                Esans Politikamız
              </span>
              <h3 className="font-cinzel text-xl font-bold text-white mb-4">
                Yüksek Konsantrasyon Felsefesi
              </h3>
              <p className="font-body text-sm text-neutral-300 leading-relaxed mb-4">
                Endüstriyel seyreltmeleri ve ucuz sentetik dolguları tamamen reddediyoruz.
                Tüm ürünlerimizde parfümeri dünyasının en üst kademesi olan %25 esans yağı oranını
                (Extrait de Parfum) standart olarak kabul ediyoruz.
              </p>
              <p className="font-body text-sm text-neutral-300 leading-relaxed mb-4">
                Bu sayede ilk kullanımdan haftalar sonra bile kokuların tüm alt ve orta notalarının
                derinliğini bozmadan yayılmasını sağlıyoruz.
              </p>
              {/* Concentration comparison visual */}
              <div className="space-y-3 mb-8">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-gothic text-[0.6rem] tracking-wider text-neutral-400 uppercase">Nos Canda (Extrait)</span>
                    <span className="font-cinzel text-xs font-bold text-[var(--accent-gold-hover)]">25%</span>
                  </div>
                  <div className="progress-line" style={{ background: 'rgba(255, 255, 255, 0.08)' }}>
                    <div className="progress-line-fill active" style={{ transitionDelay: '0.5s' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-gothic text-[0.6rem] tracking-wider text-neutral-400 uppercase">Eau de Parfum</span>
                    <span className="font-cinzel text-xs text-neutral-400">15%</span>
                  </div>
                  <div className="progress-line" style={{ background: 'rgba(255, 255, 255, 0.08)' }}>
                    <div className="progress-line-fill active" style={{ width: '60%', transitionDelay: '0.7s' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-gothic text-[0.6rem] tracking-wider text-neutral-400 uppercase">Eau de Toilette</span>
                    <span className="font-cinzel text-xs text-neutral-400">8%</span>
                  </div>
                  <div className="progress-line" style={{ background: 'rgba(255, 255, 255, 0.08)' }}>
                    <div className="progress-line-fill active" style={{ width: '32%', transitionDelay: '0.9s' }} />
                  </div>
                </div>
              </div>
            </div>
            <Link href="/kurumsal-bilgiler/felsefe" className="btn-secondary w-full text-center border-white/25 text-white hover:bg-white/10">
              Manifestomuzu İnceleyin
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
