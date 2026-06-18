'use client';

import Link from 'next/link';
import { ScrollReveal } from '@/components/core/ScrollReveal';

const PLATFORMS = [
  {
    tag: 'Sosyal Sorumluluk & Eğitim',
    name: 'Nos Canda One',
    description:
      'Toplumsal kalkınma, kadın girişimci destekleri, yeşil inisiyatifler, eğitim bursları ve staj fırsatlarıyla geleceğe yatırım yapan sosyal sorumluluk platformumuz.',
    href: '/olusumlarimiz/nos-canda-one',
    accent: '#3241ae',
    accentBg: 'rgba(50, 65, 174, 0.06)',
    accentBorder: 'rgba(50, 65, 174, 0.15)',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    features: ['Vakıf Projeleri', 'Akademi Programları', 'Yeşil İnisiyatifler'],
  },
  {
    tag: 'Yazılım & Teknoloji Hizmetleri',
    name: 'Nos Canda Tech',
    description:
      'Siber güvenlik, full-stack web geliştirme, mobil uygulama ve veri bilimi alanlarında kurumsal düzeyde profesyonel yazılım çözümleri sunan teknoloji platformumuz.',
    href: '/olusumlarimiz/nos-canda-tech',
    accent: '#0EA5E9',
    accentBg: 'rgba(14, 165, 233, 0.06)',
    accentBorder: 'rgba(14, 165, 233, 0.15)',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    features: ['Siber Güvenlik', 'Full-Stack Web', 'Mobil Uygulama', 'Veri Bilimi'],
  },
  {
    tag: 'Markalaştırma & Kurumsallaştırma',
    name: 'Nos Canda Vision',
    description:
      'Marka kimliği oluşturma, kurumsal tasarım, dijital strateji ve kurumsallaştırma hizmetleriyle işletmeleri geleceğe hazırlayan markalaştırma platformumuz.',
    href: '/olusumlarimiz/nos-canda-vision',
    accent: '#E11D48',
    accentBg: 'rgba(225, 29, 72, 0.06)',
    accentBorder: 'rgba(225, 29, 72, 0.15)',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    features: ['Marka Kimliği', 'Kurumsal Tasarım', 'Dijital Strateji', 'UI/UX'],
  },
  {
    tag: 'E-Ticaret & Kozmetik',
    name: 'Nos Canda Shop',
    description:
      'Extrait de Parfum kalitesinde lüks oda parfümleri, araç kokuları ve yakında ten kokularıyla e-ticarette premium koku deneyimi sunan kozmetik oluşumumuz.',
    href: '/olusumlarimiz/nos-canda-shop',
    accent: '#B8860B',
    accentBg: 'rgba(184, 134, 11, 0.06)',
    accentBorder: 'rgba(184, 134, 11, 0.15)',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
    ),
    features: ['Oda Parfümleri', 'Araç Kokuları', 'Koku Simülatörü', 'E-Ticaret Gateway'],
  },
];

/**
 * Oluşumlarımız — Gateway Landing Page Structure
 *
 * Why: Acts as the central hub connecting all three Nos Canda sub-brand platforms.
 * Uses a premium card grid layout with distinct accent colors per platform,
 * matching the visual language of the Nos Canda One gateway page.
 */
export function Structure() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-[calc(72px+4rem)] pb-16 md:pb-24">
        {/* Ambient Background Glows */}
        <div
          className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full opacity-[0.04] blur-[140px] pointer-events-none"
          style={{ background: 'radial-gradient(circle, #B8860B 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full opacity-[0.03] blur-[120px] pointer-events-none"
          style={{ background: 'radial-gradient(circle, #0EA5E9 0%, transparent 70%)' }}
        />

        <div className="relative z-10 max-w-[1280px] mx-auto px-6">
          <ScrollReveal direction="up" distance={40}>
            <div className="text-center max-w-3xl mx-auto">
              <span className="badge-corporate inline-block mb-5">
                Nos Canda Group Oluşumları
              </span>
              <h1 className="font-cinzel text-4xl sm:text-5xl lg:text-[64px] font-bold text-[var(--text-primary)] leading-[1.1] tracking-tight mb-8">
                Oluşumlarımız
              </h1>
              <div className="gold-line w-20 mx-auto mb-8" />
              <p className="text-body-lg text-[var(--text-secondary)] leading-relaxed font-light max-w-2xl mx-auto">
                Nos Canda Group olarak, sosyal sorumluluktan ileri teknoloji hizmetlerine,
                kurumsallaştırmadan marka inşasına kadar geniş bir yelpazede değer üretiyoruz.
                Her bir oluşumumuz, farklı bir alanda iz bırakma misyonuyla yola çıkmıştır.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Platform Cards */}
      <section className="pb-20 md:pb-32">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {PLATFORMS.map((platform, idx) => (
              <ScrollReveal key={platform.name} direction="up" distance={50} delay={idx * 0.15}>
                <Link
                  href={platform.href}
                  className="group relative flex flex-col justify-between rounded-3xl overflow-hidden bg-white border border-neutral-200/50 shadow-md hover:shadow-2xl transition-all duration-500 p-8 lg:p-10 min-h-[520px]"
                >
                  {/* Top Accent Line */}
                  <div
                    className="absolute top-0 left-0 right-0 h-1 transition-all duration-500 group-hover:h-1.5"
                    style={{ background: platform.accent }}
                  />

                  <div className="space-y-6">
                    {/* Icon */}
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110"
                      style={{
                        background: platform.accentBg,
                        color: platform.accent,
                        border: `1px solid ${platform.accentBorder}`,
                      }}
                    >
                      {platform.icon}
                    </div>

                    {/* Tag */}
                    <span
                      className="inline-block font-gothic text-[0.65rem] tracking-[0.25em] uppercase px-4 py-1.5 rounded-full font-semibold"
                      style={{
                        background: platform.accentBg,
                        color: platform.accent,
                        border: `1px solid ${platform.accentBorder}`,
                      }}
                    >
                      {platform.tag}
                    </span>

                    {/* Name */}
                    <h2 className="font-cinzel text-2xl lg:text-3xl font-bold text-[var(--text-primary)] group-hover:translate-x-1 transition-transform duration-300">
                      {platform.name}
                    </h2>

                    {/* Description */}
                    <p className="font-body text-sm lg:text-base text-[var(--text-secondary)] leading-relaxed font-light">
                      {platform.description}
                    </p>

                    {/* Feature Pills */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {platform.features.map((feature) => (
                        <span
                          key={feature}
                          className="text-[0.65rem] font-gothic tracking-wider uppercase px-3 py-1 rounded-full border bg-[var(--bg-secondary)]"
                          style={{ borderColor: platform.accentBorder, color: platform.accent }}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom CTA */}
                  <div className="pt-8 border-t border-neutral-100 flex justify-between items-center mt-auto">
                    <span className="text-[0.6rem] font-gothic uppercase tracking-[0.2em] text-neutral-400">
                      Keşfet
                    </span>
                    <span
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-[0.65rem] font-semibold uppercase tracking-wider shadow-md group-hover:shadow-lg transition-all duration-300"
                      style={{ background: platform.accent }}
                    >
                      Platforma Git
                      <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
