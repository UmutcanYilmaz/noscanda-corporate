'use client';

import Link from 'next/link';
import { ScrollReveal } from '@/components/core/ScrollReveal';

const ACCENT = '#E11D48';
const ACCENT_BG = 'rgba(225, 29, 72, 0.06)';
const ACCENT_BORDER = 'rgba(225, 29, 72, 0.15)';

const SERVICES = [
  {
    name: 'Markalaştırma (Branding)',
    description: 'Pazar payı kazanmak, rakipleriniz arasından sıyrılmak ve tüketicilerin zihninde kalıcı bir yer edinmek için stratejik marka konumlandırması yapıyoruz. Marka savaşlarında işletmenizi liderliğe taşıyoruz.',
    href: '/nos-canda-vision/markalastirma',
    accent: '#E11D48',
    accentBg: 'rgba(225, 29, 72, 0.06)',
    accentBorder: 'rgba(225, 29, 72, 0.15)',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    name: 'Kurumsallaştırma (Institutionalization)',
    description: 'Şirketlerin yönetim sistemlerini, HR süreçlerini ve e-ticaret portallarını, Nos Canda Tech yazılım altyapı gücünü arkamıza alarak standardize ediyoruz. Sürdürülebilir büyüme sistemleri kuruyoruz.',
    href: '/nos-canda-vision/kurumsallastirma',
    accent: '#6366F1',
    accentBg: 'rgba(99, 102, 241, 0.06)',
    accentBorder: 'rgba(99, 102, 241, 0.15)',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
      </svg>
    ),
  },
  {
    name: 'Kurumsal Kimlik (Identity)',
    description: 'Logodan kartvizite, antetli kağıttan premium ambalaj tasarımlarına kadar markanızın tüm fiziksel ve dijital temas noktalarını tutarlı ve lüks bir çizgide şekillendiriyoruz.',
    href: '/nos-canda-vision/kurumsal-kimlik',
    accent: '#F59E0B',
    accentBg: 'rgba(245, 158, 11, 0.06)',
    accentBorder: 'rgba(245, 158, 11, 0.15)',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
];

const STATS = [
  { value: '250+', label: 'Marka Lansmanı' },
  { value: '45+', label: 'Tasarım Ödülü' },
  { value: '15 Yıl', label: 'Sektör Tecrübesi' },
  { value: '%100', label: 'Müşteri Memnuniyeti' },
];

/**
 * Nos Canda Vision — Hub Page Structure
 *
 * Why: Redirection hub to the three subpages: Markalaştırma,
 * Kurumsallaştırma, and Kurumsal Kimlik. Rose accent (#E11D48) is preserved
 * for creative visual consistency.
 */
export function Structure() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      {/* Hero */}
      <section className="relative overflow-hidden pt-[calc(72px+4rem)] pb-16 md:pb-20">
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-[0.05] blur-[140px] pointer-events-none"
          style={{ background: `radial-gradient(circle, ${ACCENT} 0%, transparent 70%)` }}
        />

        <div className="relative z-10 max-w-[1280px] mx-auto px-6">
          <ScrollReveal direction="up" distance={40}>
            <div className="text-center max-w-3xl mx-auto">
              <span
                className="inline-block font-gothic text-[0.65rem] tracking-[0.3em] uppercase px-5 py-2 rounded-full mb-5 font-semibold"
                style={{ background: ACCENT_BG, color: ACCENT, border: `1px solid ${ACCENT_BORDER}` }}
              >
                Marka & Yönetim Stratejileri
              </span>
              <h1 className="font-cinzel text-4xl sm:text-5xl lg:text-[64px] font-bold text-[var(--text-primary)] leading-[1.1] tracking-tight mb-8">
                Nos Canda <span style={{ color: ACCENT }}>Vision</span>
              </h1>
              <div className="h-1 w-16 rounded-full mx-auto mb-8" style={{ background: ACCENT }} />
              <p className="text-body-lg text-[var(--text-secondary)] leading-relaxed font-light max-w-2xl mx-auto">
                Fikirleri markalara, markaları kurumsal sistemlere dönüştürüyoruz.
                Pazar konumlandırmasından kurumsal iş sistemlerinin inşasına, görsel
                kimlik tasarımından premium ambalajlamaya kadar işletmenizin vizyonunu şekillendiriyoruz.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="pb-16 md:pb-20">
        <div className="max-w-[1100px] mx-auto px-6">
          <ScrollReveal direction="up" distance={30}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="text-center py-6 px-4 rounded-2xl bg-white border border-neutral-200/50 shadow-sm"
                >
                  <div className="font-cinzel text-3xl md:text-4xl font-bold mb-2" style={{ color: ACCENT }}>
                    {stat.value}
                  </div>
                  <div className="font-gothic text-[0.65rem] tracking-[0.15em] uppercase text-[var(--text-secondary)]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Service Cards */}
      <section className="pb-20 md:pb-32">
        <div className="max-w-[1280px] mx-auto px-6">
          <ScrollReveal direction="up" distance={30}>
            <div className="text-center mb-14">
              <h2 className="font-cinzel text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-4">
                Hizmet Alanlarımız
              </h2>
              <p className="font-body text-[var(--text-secondary)] max-w-lg mx-auto">
                Markanızın kurumsallaşma ve kimlik kazanma adımlarını
                üç temel uzmanlık alanında yönetiyoruz.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map((service, idx) => (
              <ScrollReveal key={service.name} direction="up" distance={40} delay={idx * 0.1}>
                <Link
                  href={service.href}
                  className="group relative flex flex-col justify-between rounded-3xl overflow-hidden bg-white border border-neutral-200/50 shadow-md hover:shadow-2xl transition-all duration-500 p-8 min-h-[350px]"
                >
                  {/* Accent top line */}
                  <div
                    className="absolute top-0 left-0 right-0 h-1 group-hover:h-1.5 transition-all duration-500"
                    style={{ background: service.accent }}
                  />

                  <div className="space-y-5">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110"
                      style={{
                        background: service.accentBg,
                        color: service.accent,
                        border: `1px solid ${service.accentBorder}`,
                      }}
                    >
                      {service.icon}
                    </div>
                    <h3 className="font-cinzel text-lg font-bold text-[var(--text-primary)] group-hover:translate-x-1 transition-transform duration-300">
                      {service.name}
                    </h3>
                    <p className="font-body text-xs text-[var(--text-secondary)] leading-relaxed font-light">
                      {service.description}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-neutral-100 flex justify-between items-center mt-auto">
                    <span className="text-[0.6rem] font-gothic uppercase tracking-[0.2em] text-neutral-400">
                      Detaylı Bilgi
                    </span>
                    <span
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-white text-[0.6rem] font-semibold uppercase tracking-wider shadow-sm group-hover:shadow-md transition-all duration-300"
                      style={{ background: service.accent }}
                    >
                      İncele
                      <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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

      {/* CTA */}
      <section className="section-dark py-20 md:py-28">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <ScrollReveal direction="up" distance={30}>
            <span
              className="inline-block font-gothic text-[0.65rem] tracking-[0.3em] uppercase px-5 py-2 rounded-full mb-6 font-semibold"
              style={{ background: 'rgba(225, 29, 72, 0.1)', color: ACCENT, border: `1px solid rgba(225, 29, 72, 0.2)` }}
            >
              Vizyonunuzu Hayata Geçirelim
            </span>
            <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-white mb-6">
              Markanızın Potansiyelini <span style={{ color: ACCENT }}>Dünya Standartlarına</span> Taşıyalım
            </h2>
            <p className="font-body text-[var(--section-dark-muted)] leading-relaxed mb-10 max-w-lg mx-auto">
              Konumlandırma, sistem altyapısı ve görsel tasarım süreçlerinizi bir araya getiren
              bütünleşik danışmanlık hizmetlerimiz için randevu oluşturun.
            </p>
            <Link
              href="/iletisim"
              className="btn-primary inline-flex"
              style={{ background: ACCENT, borderColor: ACCENT }}
            >
              Bizimle Çalışın
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
