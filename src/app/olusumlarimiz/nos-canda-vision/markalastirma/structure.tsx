'use client';

import Link from 'next/link';
import { ScrollReveal } from '@/components/core/ScrollReveal';

const ACCENT = '#E11D48';
const ACCENT_BG = 'rgba(225, 29, 72, 0.06)';
const ACCENT_BORDER = 'rgba(225, 29, 72, 0.15)';

const SERVICES = [
  {
    title: 'Pazar Segmentasyonu & Analizi',
    description: 'Hedef kitlenizin demografik, psikografik ve davranışsal özelliklerini derinlemesine analiz ediyoruz. Markanızın hangi pazar segmentinde en yüksek kârlılıkla yer alabileceğini bilimsel verilerle belirliyoruz.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.109A11.386 11.386 0 0110.002 21c-2.235 0-4.302-.64-6.046-1.748v-.109c0-2.877 2.332-5.21 5.21-5.21h1.666c.866 0 1.68.207 2.4.577m3.38-5.385a4.125 4.125 0 11-7.533-2.493M3 16.084a11.467 11.467 0 010-8.168m18 8.168a11.467 11.467 0 000-8.168M18.988 9.225A11.91 11.91 0 0012 7.5c-2.683 0-5.19.882-7.217 2.37M15 11.25a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Değer Önerisi (Value Proposition)',
    description: 'Müşterilerinizin neden rakiplerinizi değil de sizi tercih etmesi gerektiğini açıklayan net, vurucu ve kopyalanamaz bir değer önerisi inşa ediyoruz. Markanızın pazar vaadini formüle ediyoruz.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
  },
  {
    title: 'Marka Savaşları Stratejisi',
    description: 'Pazardaki büyük oyuncuların zayıf noktalarını saptayarak "gerilla pazarlama" veya "boşluk doldurma" taktikleriyle niş alanlar oluşturuyoruz. Rakip markaların pazar payını elinden alacak konumlandırma stratejilerini uyguluyoruz.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 9V4.5M9 9H4.5M9 9L3 3m12 6V4.5M15 9h4.5M15 9l6-6M9 15v4.5M9 15H4.5M9 15l-6 6m12-6v4.5M15 15h4.5M15 15l6 6" />
      </svg>
    ),
  },
  {
    title: 'Marka Kişiliği & Arketip Tanımı',
    description: 'Markanızın bir insan olsaydı nasıl davranacağını, konuşacağını ve hangi değerleri temsil edeceğini Jungian arketipleri kullanarak tanımlıyoruz. Müşterilerle duygusal bağ kurabilen tutarlı bir marka karakteri yaratıyoruz.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'İletişim Tonu & Dil Rehberi',
    description: 'Markanın sosyal medyada, reklam kreatiflerinde, müşteri hizmetlerinde ve kurumsal yazışmalarda kullanacağı ses tonunu (samimi, otoriter, entelektüel vb.) ve dil kurallarını belirleyen kapsamlı rehberler hazırlıyoruz.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025 10.338 10.338 0 01-2.16-3.14C2.517 14.824 2.25 13.475 2.25 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
      </svg>
    ),
  },
  {
    title: 'Stratejik Fiyatlandırma Modelleri',
    description: 'Markanızın algılanan değerini korumak ve pazar konumlandırmasını desteklemek için premium, değer odaklı veya rekabetçi fiyatlandırma mimarileri geliştiriyoruz. Fiyat-kalite dengesini kuruyoruz.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.214.116A4.89 4.89 0 0012 16.5c2.292 0 4.14-1.806 4.14-4.036 0-2.23-1.848-4.036-4.14-4.036g-3-2.818l.214.116A4.89 4.89 0 0012 7.5c2.292 0 4.14-1.806 4.14-4.036 0-2.23-1.848-4.036-4.14-4.036" />
      </svg>
    ),
  },
  {
    title: 'Marka Hikâyeciliği (Storytelling)',
    description: 'Markanızın doğuşunu, vizyonunu ve pazar mücadelesini anlatan akılda kalıcı, samimi ve ilham verici kurumsal marka hikâyeleri yazıyoruz. Reklam kampanyalarınızı bu anlatı üzerine kuruyoruz.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    title: 'Marka Farkındalık Kampanyaları',
    description: 'Markanızın lansman veya yeniden konumlandırma (rebranding) dönemlerinde, hedef kitleye en hızlı şekilde ulaşabilmesi için dijital ve fiziksel entegre pazarlama planları hazırlıyoruz.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.006-1.386-.02-2.082-.041a4.808 4.808 0 01-4.02-3.97 48.818 48.818 0 010-5.65 4.808 4.808 0 014.02-3.97c2.185-.065 4.39-.1 6.58-.1 2.19 0 4.396.035 6.581.1a4.808 4.808 0 014.02 3.97m-18.72 2.25h18.72m-9.36-4.5v9m-4.68-4.5h9.36" />
      </svg>
    ),
  },
];



const POSITIONING_GRID = [
  { segment: 'Yüksek Fiyat / Düşük Kalite (Pazar Boşluğu)', desc: 'Tüketicinin aldatıldığı, uzun vadede yok olmaya mahkûm, sadece kısa vadeli manipülatif kâr odaklı pazar alanı.' },
  { segment: 'Düşük Fiyat / Düşük Kalite (Kitle Pazarı Connection)', desc: 'Fiyat hassasiyeti yüksek kitlelere hitap eden, yoğun rekabetin yaşandığı ve kâr marjlarının çok düşük olduğu alan.' },
  { segment: 'Düşük Fiyat / Yüksek Kalite (Yıkıcı Konumlandırma)', desc: 'Pazara hızlı girmek için kullanılan, ancak uzun vadede üretim maliyetleri nedeniyle sürdürülebilirliği zor olan model.' },
  { segment: 'Yüksek Fiyat / Yüksek Kalite (Premium Niş - HEDEFİMİZ)', desc: 'Nos Canda Vision olarak tüm markalarımızı konumlandırdığımız, yüksek sadakat ve yüksek kârlılık sunan lüks segment.' },
];

const FAQS = [
  {
    q: 'Markalaştırma ile sadece Logo tasarımını mı kastediyorsunuz?',
    a: 'Kesinlikle hayır. Logo tasarımı, markalaştırma sürecinin sadece en son aşamasında ortaya çıkan görsel bir çıktıdır. Markalaştırma (branding); pazar araştırmasını, hedef kitle analizini, rakip analizini, değer önerisini, marka kişiliğini, fiyatlandırma stratejisini ve marka hikâyesini içeren bütünsel bir iş stratejisidir. Güçlü bir strateji olmadan tasarlanan logo, içi boş bir çizimden ibarettir.',
  },
  {
    q: 'Marka Savaşları (Brand Wars) ne anlama gelir?',
    a: 'Marka savaşları, doymuş pazarlarda rakiplerin zayıf yönlerini analiz ederek, onların pazar paylarını elinden almak için uygulanan stratejik hamlelerdir. Bu hamleler doğrudan agresif reklamlar yerine, rakibin hitap edemediği alt kitleleri keşfetmek, onların vaat edemediği bir değer önerisini sahiplenmek veya fiyat-kalite dengesinde yeni bir kulvar açarak pazarı domine etmek şeklinde gerçekleşir.',
  },
  {
    q: 'Rebranding (Yeniden Markalaştırma) ne zaman gereklidir?',
    a: 'Şirketiniz eski pazar algısını kaybettiyse, hedef kitlesi yaşlandıysa, yeni ürün gruplarına geçişte mevcut marka ismi/görsel dili yetersiz kalıyorsa veya rakipler karşısında sürekli fiyat kırmak zorunda kalıyorsanız yeniden konumlandırma zamanı gelmiş demektir. Doğru bir rebranding projesi, markaya yeni bir can suyu vererek kârlılığı artırır.',
  },
  {
    q: 'Marka konumlandırmasında arketip analizi neden kullanılır?',
    a: 'İnsanlar mantıklarıyla karar verip, duygularıyla satın alırlar. Jungian arketipleri (Örn: Hükümdar, Kaşif, Yaratıcı, Asi), markanın insan zihninde tanıdık bir karakter figürüyle eşleşmesini sağlar. Örneğin lüks ve prestij vaat eden bir marka "Hükümdar" arketipini kullanırken, macera ve özgürlük vaat eden bir marka "Kaşif" arketipini sahiplenir. Bu tutarlılık, tüketiciyle derin duygusal bağ kurar.',
  },
  {
    q: 'Küçük ve orta ölçekli işletmelerin markalaşmaya bütçe ayırması mantıklı mı?',
    a: 'Küçük işletmeler için markalaşmak aslında bir lüks değil, hayatta kalma mücadelesidir. Büyük bütçeli şirketler dağıtım ağları ve reklam güçleriyle her şekilde satış yapabilir. Ancak KOBİ\'ler eğer markalaşmaz ve rakiplerinden ayrışmazlarsa, pazarda sadece en ucuz fiyatı vererek ayakta kalmaya çalışırlar. Fiyat rekabeti ise eninde sonunda kârsızlığa ve iflasa sürükler. Marka, yüksek marjla satabilmenizin tek güvencesidir.',
  },
];

/**
 * Markalaştırma & Konumlandırma Page
 *
 * Why: Rose accent (#E11D48) communicates strategic passion, creative boldness,
 * and high-impact branding narratives. Extensive case studies and positioning grids
 * demonstrate rigorous design strategy and methodology.
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
                Nos Canda Vision • Stratejik Markalaştırma
              </span>
              <h1 className="font-cinzel text-4xl sm:text-5xl lg:text-[58px] font-bold text-[var(--text-primary)] leading-[1.1] tracking-tight mb-8">
                Marka Savaşlarında <span style={{ color: ACCENT }}>Lider</span> Konumlanın
              </h1>
              <div className="h-1 w-16 rounded-full mx-auto mb-8" style={{ background: ACCENT }} />
              <p className="text-body-lg text-[var(--text-secondary)] leading-relaxed font-light max-w-2xl mx-auto">
                Pazar analizleri, derin tüketici araştırmaları, Jungian arketip konumlandırmaları ve
                fark yaratan değer önerileriyle markanızı pazar savaşlarında taklit edilemez, premium
                ve yüksek sadakat oluşturan bir konuma yükseltiyoruz.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Positioning Grid */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-[1100px] mx-auto px-6">
          <ScrollReveal direction="up" distance={30}>
            <div className="text-center mb-14">
              <h2 className="font-cinzel text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-4">
                Pazar Konumlandırma Matrisi
              </h2>
              <p className="font-body text-[var(--text-secondary)] max-w-lg mx-auto">
                Rakiplerin sıkıştığı kitle pazarlarından sıyrılarak, markanızı
                en yüksek kârlılık ve sadakat alanına taşımak için kullandığımız matris.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" distance={40} delay={0.1}>
            <div className="rounded-3xl border border-neutral-200/50 bg-white p-8 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {POSITIONING_GRID.map((item, idx) => (
                  <div key={item.segment} className="flex flex-col p-6 rounded-2xl bg-[var(--bg-secondary)] border border-neutral-200/40">
                    <span className="text-[0.65rem] font-gothic tracking-wider text-neutral-400 mb-2">BÖLGE 0{idx + 1}</span>
                    <h3 className="font-cinzel text-sm font-bold text-[var(--text-primary)] mb-2" style={{ color: idx === 3 ? ACCENT : '[var(--text-primary)]' }}>
                      {item.segment}
                    </h3>
                    <p className="font-body text-xs text-[var(--text-secondary)] leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.map((service, idx) => (
              <ScrollReveal key={service.title} direction="up" distance={40} delay={idx * 0.08}>
                <div className="rounded-2xl bg-white border border-neutral-200/50 shadow-sm hover:shadow-lg transition-all duration-500 p-8 h-full flex flex-col justify-between">
                  <div>
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                      style={{ background: ACCENT_BG, color: ACCENT, border: `1px solid ${ACCENT_BORDER}` }}
                    >
                      {service.icon}
                    </div>
                    <h3 className="font-cinzel text-lg font-bold text-[var(--text-primary)] mb-3">
                      {service.title}
                    </h3>
                    <p className="font-body text-sm text-[var(--text-secondary)] leading-relaxed font-light">
                      {service.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>


      {/* Sıkça Sorulan Sorular */}
      <section className="section-warm py-20 md:py-28">
        <div className="max-w-[900px] mx-auto px-6">
          <ScrollReveal direction="up" distance={30}>
            <div className="text-center mb-14">
              <h2 className="font-cinzel text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-4">
                Sıkça Sorulan Sorular
              </h2>
              <p className="font-body text-[var(--text-secondary)] max-w-lg mx-auto">
                Marka inşası, konumlandırma matrisi ve pazar savaşları teorisi ile ilgili
                en çok aldığımız soruların cevapları.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-6">
            {FAQS.map((faq, idx) => (
              <ScrollReveal key={faq.q} direction="up" distance={20} delay={idx * 0.05}>
                <div className="bg-white rounded-2xl p-6 border border-neutral-200/50 shadow-sm">
                  <h3 className="font-cinzel text-base font-bold text-[var(--text-primary)] mb-3 flex items-start gap-3">
                    <span className="text-red-600">Q.</span>
                    {faq.q}
                  </h3>
                  <div className="font-body text-sm text-[var(--text-secondary)] leading-relaxed font-light pl-6 border-l border-red-500/20">
                    {faq.a}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-dark py-20 md:py-28">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <ScrollReveal direction="up" distance={30}>
            <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-white mb-6">
              Markanızın Kaderini <span style={{ color: ACCENT }}>Yeniden</span> Yazalım
            </h2>
            <p className="font-body text-[var(--section-dark-muted)] leading-relaxed mb-10 max-w-lg mx-auto">
              Fiyat rekabetinden kurtulmak, rakipleriniz arasından sıyrılarak premium pazar
              konumlandırması elde etmek için hemen danışmanlık randevusu alın.
            </p>
            <Link href="/iletisim" className="btn-primary inline-flex" style={{ background: ACCENT, borderColor: ACCENT }}>
              Marka Analizi Başlatın
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
