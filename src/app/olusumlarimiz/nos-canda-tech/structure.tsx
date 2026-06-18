'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ScrollReveal } from '@/components/core/ScrollReveal';

const ACCENT = '#0EA5E9';
const ACCENT_BG = 'rgba(14, 165, 233, 0.06)';
const ACCENT_BORDER = 'rgba(14, 165, 233, 0.15)';

const SERVICES = [
  {
    name: 'Siber Güvenlik',
    description: 'Penetrasyon testleri, ağ güvenliği denetimleri, SIEM/SOC çözümleri ve uyumluluk danışmanlığıyla dijital varlıklarınızı koruyoruz.',
    href: '/nos-canda-tech/siber-guvenlik',
    accent: '#10B981',
    accentBg: 'rgba(16, 185, 129, 0.06)',
    accentBorder: 'rgba(16, 185, 129, 0.15)',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    name: 'Full-Stack Web',
    description: 'Modern frontend ve güçlü backend teknolojileriyle ölçeklenebilir, performans odaklı web uygulamaları ve kurumsal portallar geliştiriyoruz.',
    href: '/nos-canda-tech/full-stack-web',
    accent: '#6366F1',
    accentBg: 'rgba(99, 102, 241, 0.06)',
    accentBorder: 'rgba(99, 102, 241, 0.15)',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  {
    name: 'Mobil Uygulama',
    description: 'iOS ve Android platformlarında native ve cross-platform mobil uygulamalar geliştiriyoruz. UI/UX tasarımından App Store yayınına kadar uçtan uca çözüm.',
    href: '/nos-canda-tech/mobil-uygulama',
    accent: '#F59E0B',
    accentBg: 'rgba(245, 158, 11, 0.06)',
    accentBorder: 'rgba(245, 158, 11, 0.15)',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
  },
  {
    name: 'Veri Analizi & Bilimi',
    description: 'İş zekâsı, makine öğrenmesi, veri mühendisliği ve gerçek zamanlı dashboard çözümleriyle verilerinizi stratejik kararlara dönüştürüyoruz.',
    href: '/nos-canda-tech/veri-analizi',
    accent: '#8B5CF6',
    accentBg: 'rgba(139, 92, 246, 0.06)',
    accentBorder: 'rgba(139, 92, 246, 0.15)',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    ),
  },
  {
    name: 'Bulut & Altyapı Yönetimi',
    description: 'Uygulama konteynerizasyonu, modern sunucu yönetim panelleri, akıllı trafik yönlendirme, izole sanal ağlar, ortak giriş entegrasyonları ve adanmış sunucu optimizasyonları sunuyoruz.',
    href: '/nos-canda-tech/bulut-ve-altyapi',
    accent: '#0D9488',
    accentBg: 'rgba(13, 148, 136, 0.06)',
    accentBorder: 'rgba(13, 148, 136, 0.15)',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      </svg>
    ),
  },
  {
    name: 'Yapay Zekâ & İş Otomasyonu',
    description: 'Merkezi entegrasyon akışları, özel yapay zekâ asistanları, akıllı döküman ayrıştırma sistemleri ve güvenli sipariş otomasyonları geliştiriyoruz.',
    href: '/nos-canda-tech/yapay-zeka-ve-otomasyon',
    accent: '#DB2777',
    accentBg: 'rgba(219, 39, 119, 0.06)',
    accentBorder: 'rgba(219, 39, 119, 0.15)',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
      </svg>
    ),
  },
];

const STATS = [
  { value: '150+', label: 'Tamamlanan Proje' },
  { value: '99.9%', label: 'Uptime Garantisi' },
  { value: '24/7', label: 'Destek Hizmeti' },
  { value: '40+', label: 'Uzman Mühendis' },
];

const PROCESS_STEPS = [
  {
    id: '01',
    title: 'Keşif ve İhtiyaç Analizi',
    desc: 'İlk adımda işletmenizin mevcut teknik yapısını, hedeflerini ve karşılaştığı operasyonel darboğazları inceliyoruz. Sektörünüze özel gereksinimleri belirleyerek mimari yol haritamızı oluşturuyoruz.',
  },
  {
    id: '02',
    title: 'Mühendislik ve Mimari Tasarım',
    desc: 'Tasarım aşamasında sistemlerin ölçeklenebilirliği, veri güvenliği ve entegrasyon gereksinimleri planlanır. Kullanılacak genel altyapı standartları ve güvenlik katmanları bu aşamada kararlaştırılır.',
  },
  {
    id: '03',
    title: 'Geliştirme ve Test Süreçleri',
    desc: 'Yazılım ekiplerimiz, en yüksek standartlarda temiz kod prensipleriyle geliştirmeyi sürdürür. Her modül; güvenlik, performans ve kararlılık testlerinden geçirilerek doğrulanır.',
  },
  {
    id: '04',
    title: 'Entegrasyon ve Devreye Alma',
    desc: 'Tamamlanan yazılım ve altyapı çözümleri, izole sunucu ortamlarında devreye alınır. Mevcut veri tabanları ve üçüncü parti sistemler ile güvenli entegrasyonlar kurulur.',
  },
  {
    id: '05',
    title: 'Sürekli Destek ve Optimizasyon',
    desc: 'Yayından sonra sistemlerin performansı ve güvenliği 24/7 izlenir. Kullanıcı deneyimi analizleri ve sistem kaynak kullanımı verilerine göre düzenli iyileştirmeler yapılır.',
  },
];

const FAQS = [
  {
    q: 'Yazılım projelerinizin güvenliğini nasıl sağlıyorsunuz?',
    a: 'Projelerimizde güvenlik, geliştirme sürecinin ilk gününden itibaren başlar. Tüm iç ve dış veri alışverişlerini izole sanal ağlar üzerinden yönlendiriyor, kullanıcı girişlerini tek şifreli kimlik doğrulama sistemleri (SSO) ile koruyoruz. Ayrıca kod tabanımızı düzenli olarak güvenlik açıklarına karşı tarıyor, harici penetrasyon testleriyle sistemi siber tehditlere karşı sürekli zırhlıyoruz.',
  },
  {
    q: 'Mevcut ERP ve CRM sistemlerimizi yeni yazılımlara entegre edebilir miyiz?',
    a: 'Evet. Geliştirdiğimiz tüm kurumsal portallar ve e-ticaret sistemleri, işletmenizin halihazırda kullandığı ERP (Kurumsal Kaynak Planlama) ve CRM (Müşteri İlişkileri Yönetimi) yazılımlarıyla güvenli entegrasyon kuracak şekilde tasarlanır. Çift yönlü veri akışları sayesinde finans, stok, satış ve müşteri verileriniz tek merkezden senkronize edilir.',
  },
  {
    q: 'E-ticaret çözümleriniz yüksek trafik dalgalanmalarına karşı dayanıklı mı?',
    a: 'Kesinlikle. E-ticaret altyapılarımızda kullandığımız modern, bağımsız kodlanan mimariler (headless) sayesinde ön yüz ve arka yüz sistemlerini birbirinden ayırıyoruz. Bu yapı, veri tabanı sorgu optimizasyonları ve sunucu ön bellek mekanizmalarıyla birleştiğinde, indirim günleri veya yoğun kampanya dönemlerinde dahi sistemin yavaşlamadan, yüksek performansla çalışmasını garanti eder.',
  },
  {
    q: 'Mobil uygulamaları native mi yoksa cross-platform mu geliştiriyorsunuz?',
    a: 'Projenin ihtiyaçlarına göre her iki yaklaşımı da uyguluyoruz. Yüksek performans, donanıma doğrudan erişim ve özel grafik gereksinimleri olan projelerde tamamen platforma özel (native) dillerle geliştirme yapıyoruz. Hızlı prototipleme ve tek kod tabanıyla hem iOS hem Android cihazlara ulaşmak isteyen müşterilerimiz için ise modern çapraz platform (cross-platform) çerçevelerini tercih ediyoruz.',
  },
  {
    q: 'Otomasyon çözümleriniz iş süreçlerimizde ne kadar verimlilik sağlar?',
    a: 'Otomasyon projelerimiz, çalışanlarınızın manuel olarak yaptığı tekrarlayan veri girişleri, e-posta gönderimleri, fatura eşleştirmeleri ve rapor hazırlama gibi süreçleri dijital iş akışlarına devreder. Bu sayede operasyonel hata payı sıfıra yaklaşırken, iş süreçlerinin tamamlanma süreleri %80 oranında kısalır. Ekibiniz ise katma değeri yüksek stratejik görevlere odaklanabilir.',
  },
  {
    q: 'Projelerin barındırma (hosting) altyapısını nerede tutuyorsunuz?',
    a: 'Veri egemenliği ve güvenlik standartları gereği, projelerinizi tamamen sizin adınıza kiralanan veya kendi bünyenizde bulunan adanmış sunucu (dedicated server) altyapılarında barındırıyoruz. Sunucularımızı dış dünyaya kapalı izole sanal ağ köprüleriyle koruyor, sadece güvenli ağ geçitleri üzerinden kontrollü erişim sağlıyoruz.',
  },
  {
    q: 'Bulut altyapılarında veri kaybını önlemek için ne gibi önlemler alıyorsunuz?',
    a: 'Sistemlerimizde çok katmanlı ve otomatik yedeklilik senaryoları uyguluyoruz. Veri tabanları ve kritik dosya arşivleri, günlük ve haftalık olarak şifrelenmiş harici depolama birimlerine otomatik yedeklenir. Herhangi bir fiziksel sunucu arızası durumunda, altyapımızın dakikalar içinde farklı bir sunucu üzerinde sıfırdan ayağa kalkmasını sağlayan otomatik kurtarma mekanizmaları devrededir.',
  },
  {
    q: 'Siber güvenlik denetimleriniz ve penetrasyon testleriniz neleri kapsıyor?',
    a: 'Siber güvenlik hizmetlerimiz kapsamında; dış ağ sızma testleri, iç ağ analizleri, web ve mobil uygulama güvenlik denetimleri, çalışanlara yönelik oltalama simülasyonları ve kurumsal güvenlik politikalarının analizi yer alır. Denetim sonunda, tespit edilen risklerin iş etki derecelerini ve çözüm önerilerini içeren detaylı bir yönetici raporu sunuyoruz.',
  },
  {
    q: 'Veri analizi ve iş zekası dashboardları hangi veri kaynaklarını birleştirebilir?',
    a: 'Finansal tablolarınız, satış veritabanlarınız, reklam panelleriniz, depo stok verileriniz ve müşteri ilişkileri yazılımlarınız dahil olmak üzere, işletmenizin veri ürettiği tüm dijital kaynakları tek bir veri gölünde birleştirebiliyoruz. Bu kaynaklardan beslenen gerçek zamanlı paneller, şirketinizin anlık durumunu tek ekrandan izlemenizi sağlar.',
  },
  {
    q: 'Özel yapay zekâ asistanları şirket içinde nasıl kullanılabiliyor?',
    a: 'Şirket içi bilgi bankalarınızı, geçmiş yazışmalarınızı ve döküman arşivlerinizi güvenli bir şekilde analiz eden özel yapay zekâ modelleri tasarlıyoruz. Bu asistanlar, müşteri temsilcilerinizin sorularını saniyeler içinde şirket prosedürlerine uygun olarak yanıtlayabilir, yeni işe başlayan çalışanların oryantasyon süreçlerini hızlandırabilir veya karmaşık dökümanları özetleyebilir.',
  },
  {
    q: 'Geliştirilen yazılımların fikri mülkiyet hakları kime ait oluyor?',
    a: 'Sözleşmemiz kapsamında, işletmeniz için özel olarak yazılan tüm kaynak kodların, veritabanı tasarımlarının ve fikri mülkiyet haklarının tamamı teslimat sonrasında doğrudan sizin şirketinize devredilir. Herhangi bir lisans bağımlılığı veya kapalı kutu yazılım kısıtlaması olmadan, sistemlerin tam sahibi olursunuz.',
  },
  {
    q: 'Proje teslimi sonrasında ne kadarlık bir süre boyunca destek sağlıyorsunuz?',
    a: 'Teslimat sonrasında, sistemin kararlı çalışmasını garanti altına almak adına sözleşme kapsamında belirlenen garanti ve bakım süresi boyunca ücretsiz teknik destek veriyoruz. Sonrasında ise işletmenizin büyüme hızına ve değişen ihtiyaçlarına göre aylık bakım, sürüm güncelleme ve sistem izleme anlaşmalarıyla desteğimizi kesintisiz sürdürüyoruz.',
  },
];

export function Structure() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  
  // Interactive Project Planner States
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState('');
  const [businessScale, setBusinessScale] = useState('');
  const [primaryGoal, setPrimaryGoal] = useState('');

  const calculateEstimate = () => {
    let duration = '4 - 8 Hafta';
    let teamSize = '3 - 5 Uzman Mühendis';
    let recommendations = [];

    if (selectedService === 'Full-Stack Web' || selectedService === 'Yapay Zekâ & İş Otomasyonu') {
      duration = businessScale === 'Enterprise' ? '12 - 20 Hafta' : '6 - 10 Hafta';
      teamSize = businessScale === 'Enterprise' ? '6 - 8 Yazılım Geliştirici' : '3 - 4 Geliştirici';
      recommendations.push('Yüksek performanslı e-ticaret motoru entegrasyonu');
      recommendations.push('Ortak giriş yetkilendirme altyapısı (SSO) yapılandırması');
      recommendations.push('Bulut sunucu yük dengeleyici mimarisi');
    } else if (selectedService === 'Bulut & Altyapı Yönetimi' || selectedService === 'Siber Güvenlik') {
      duration = businessScale === 'Enterprise' ? '8 - 14 Hafta' : '4 - 6 Hafta';
      teamSize = businessScale === 'Enterprise' ? '4 - 5 Altyapı & Güvenlik Uzmanı' : '2 - 3 Sistem Mühendisi';
      recommendations.push('İzole sanal ağ köprüleri ve güvenlik duvarı optimizasyonu');
      recommendations.push('Günlük otomatik şifreli yedekleme sistemi');
      recommendations.push('Ağ sızma testleri ve SIEM olay izleme entegrasyonu');
    } else {
      duration = businessScale === 'Enterprise' ? '10 - 16 Hafta' : '5 - 8 Hafta';
      teamSize = businessScale === 'Enterprise' ? '4 - 6 Veri Mühendisi ve Mobil Yazılımcı' : '2 - 3 Mühendis';
      recommendations.push('Çapraz platform mobil uygulama geliştirme');
      recommendations.push('Merkezi veri gölü ve gerçek zamanlı yönetici dashboardları');
    }

    if (primaryGoal === 'Güvenlik') {
      recommendations.push('Zero-Trust mimarisiyle sıkılaştırılmış veritabanı erişimi');
    } else if (primaryGoal === 'Hız') {
      recommendations.push('Ön bellek katmanları ve statik içerik dağıtım optimizasyonu');
    } else if (primaryGoal === 'Otomasyon') {
      recommendations.push('Müşteri yönetimi (CRM) ve stok sistemleri arası otonom akışlar');
    }

    return { duration, teamSize, recommendations };
  };

  const handleNext = () => {
    if (step < 4) setStep(prev => prev + 1);
  };

  const handleReset = () => {
    setStep(1);
    setSelectedService('');
    setBusinessScale('');
    setPrimaryGoal('');
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] font-body">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-[calc(72px+5rem)] pb-20 md:pb-28 border-b border-neutral-200/40">
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full opacity-[0.06] blur-[150px] pointer-events-none"
          style={{ background: `radial-gradient(circle, ${ACCENT} 0%, transparent 70%)` }}
        />
        <div className="relative z-10 max-w-[1280px] mx-auto px-6">
          <ScrollReveal direction="up" distance={40}>
            <div className="text-center max-w-4xl mx-auto">
              <span
                className="inline-block font-gothic text-[0.65rem] tracking-[0.3em] uppercase px-6 py-2.5 rounded-full mb-6 font-semibold"
                style={{ background: ACCENT_BG, color: ACCENT, border: `1px solid ${ACCENT_BORDER}` }}
              >
                Yazılım, Güvenlik & Sistem Tasarımı
              </span>
              <h1 className="font-cinzel text-4xl sm:text-5xl lg:text-[68px] font-bold leading-[1.08] tracking-tight mb-8">
                Geleceğin Teknolojisini <br />
                <span style={{ color: ACCENT }}>Güvenle</span> İnşa Ediyoruz
              </h1>
              <div className="h-1.5 w-24 rounded-full mx-auto mb-10" style={{ background: ACCENT }} />
              <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed font-light max-w-3xl mx-auto">
                Nos Canda Tech, işletmenizin ihtiyaç duyduğu kritik dijital çözümleri üreten mühendislik üssüdür. 
                Siber güvenlikten otonom iş akışlarına, performans odaklı web portallarından veri bilimi projelerine 
                kadar geniş bir yelpazede yüksek standartlı, adanmış ve izole sistemler geliştiriyoruz.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-white border-b border-neutral-100">
        <div className="max-w-[1100px] mx-auto px-6">
          <ScrollReveal direction="up" distance={30}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="text-center py-6 px-4 rounded-2xl bg-neutral-50/50 border border-neutral-200/30 shadow-sm"
                >
                  <div className="font-cinzel text-3xl md:text-4xl font-bold mb-2" style={{ color: ACCENT }}>
                    {stat.value}
                  </div>
                  <div className="font-gothic text-[0.7rem] tracking-[0.18em] uppercase text-[var(--text-secondary)] font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Service Cards Overview */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6">
          <ScrollReveal direction="up" distance={30}>
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <h2 className="font-cinzel text-3xl md:text-4xl font-bold mb-4">
                Hizmet Alanlarımız
              </h2>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                Her biri kendi alanında uzmanlaşmış mühendislik kadromuzla, kurumunuzun dijital 
                altyapısını geleceğe taşıyacak 6 ana disiplinde çözümler sunuyoruz.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, idx) => (
              <ScrollReveal key={service.name} direction="up" distance={40} delay={idx * 0.08}>
                <Link
                  href={service.href}
                  className="group relative flex flex-col justify-between rounded-3xl overflow-hidden bg-white border border-neutral-200/50 shadow-md hover:shadow-2xl transition-all duration-500 p-8 min-h-[340px]"
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-1 group-hover:h-1.5 transition-all duration-500"
                    style={{ background: service.accent }}
                  />

                  <div className="space-y-6">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110"
                      style={{
                        background: service.accentBg,
                        color: service.accent,
                        border: `1px solid ${service.accentBorder}`,
                      }}
                    >
                      {service.icon}
                    </div>
                    <h3 className="font-cinzel text-xl font-bold group-hover:translate-x-1 transition-transform duration-300">
                      {service.name}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-light">
                      {service.description}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-neutral-100 flex justify-between items-center mt-auto">
                    <span className="text-[0.65rem] font-gothic uppercase tracking-[0.2em] text-neutral-400">
                      Hizmeti İncele
                    </span>
                    <span
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-white text-[0.65rem] font-semibold uppercase tracking-wider shadow-sm group-hover:shadow-md transition-all duration-300"
                      style={{ background: service.accent }}
                    >
                      Detaylar
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

      {/* Interactive Project Planner Section */}
      <section className="py-20 md:py-28 bg-neutral-50 border-y border-neutral-200/50 relative">
        <div className="max-w-[900px] mx-auto px-6">
          <ScrollReveal direction="up" distance={30}>
            <div className="text-center mb-12">
              <span className="font-gothic text-[0.65rem] tracking-[0.3em] uppercase text-sky-600 bg-sky-50 px-4 py-1.5 rounded-full border border-sky-100 font-semibold">
                Dijital Asistan
              </span>
              <h2 className="font-cinzel text-3xl md:text-4xl font-bold mt-4 mb-3">
                Akıllı Proje Planlayıcı
              </h2>
              <p className="text-sm text-[var(--text-secondary)] max-w-lg mx-auto">
                Proje hedeflerinizi belirleyin, ekibimiz tarafından tasarlanacak mimari yapıyı 
                ve tahmini geliştirme sürelerini anında görün.
              </p>
            </div>
          </ScrollReveal>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-neutral-200/60 relative overflow-hidden">
            {/* Step Indicators */}
            <div className="flex items-center justify-between mb-10 max-w-md mx-auto">
              {[1, 2, 3, 4].map((s) => (
                <div key={s} className="flex items-center flex-1 last:flex-none">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 border ${
                      step >= s
                        ? 'bg-sky-500 border-sky-500 text-white shadow-md shadow-sky-500/20'
                        : 'bg-white border-neutral-300 text-neutral-400'
                    }`}
                  >
                    {s}
                  </div>
                  {s < 4 && (
                    <div
                      className={`h-0.5 flex-1 mx-2 transition-all duration-500 ${
                        step > s ? 'bg-sky-500' : 'bg-neutral-200'
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Step Content */}
            <div className="min-h-[260px] flex flex-col justify-between">
              {step === 1 && (
                <div>
                  <h3 className="text-lg font-bold mb-6 text-center">Hangi alanda teknolojik bir çözüme ihtiyacınız var?</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {SERVICES.map((serv) => (
                      <button
                        key={serv.name}
                        onClick={() => setSelectedService(serv.name)}
                        className={`p-4 rounded-xl border text-left transition-all duration-300 flex items-center gap-4 ${
                          selectedService === serv.name
                            ? 'border-sky-500 bg-sky-50/40 text-sky-900 shadow-sm'
                            : 'border-neutral-200 hover:border-neutral-300 bg-white'
                        }`}
                      >
                        <div
                          className="w-10 h-10 rounded-lg flex items-center justify-center"
                          style={{
                            background: selectedService === serv.name ? 'rgba(14, 165, 233, 0.1)' : serv.accentBg,
                            color: selectedService === serv.name ? '#0EA5E9' : serv.accent,
                          }}
                        >
                          {serv.icon}
                        </div>
                        <span className="font-semibold text-sm">{serv.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 2 && (
                <div>
                  <h3 className="text-lg font-bold mb-6 text-center">İşletmenizin veya projenizin ölçeği nedir?</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {[
                      { id: 'Startup', title: 'Girişim / KOBİ', desc: 'Hızlı prototipleme ve esnek genişleme ihtiyaçları.' },
                      { id: 'MidMarket', title: 'Orta Ölçek', desc: 'Mevcut sistemlerle entegrasyon ve veri konsolidasyonu.' },
                      { id: 'Enterprise', title: 'Global / Kurumsal', desc: 'Çok katmanlı güvenlik, yüksek yük toleransı ve yedeklilik.' },
                    ].map((scale) => (
                      <button
                        key={scale.id}
                        onClick={() => setBusinessScale(scale.id)}
                        className={`p-6 rounded-xl border text-left transition-all duration-300 flex flex-col justify-between h-36 ${
                          businessScale === scale.id
                            ? 'border-sky-500 bg-sky-50/40 text-sky-900'
                            : 'border-neutral-200 hover:border-neutral-300 bg-white'
                        }`}
                      >
                        <span className="font-bold text-sm">{scale.title}</span>
                        <span className="text-xs text-neutral-500 leading-relaxed mt-2">{scale.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 3 && (
                <div>
                  <h3 className="text-lg font-bold mb-6 text-center">Bu proje için birincil önceliğiniz nedir?</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                    {[
                      { id: 'Hız', title: 'Hız & Performans', desc: 'Düşük gecikme süresi ve hızlı yüklenme.' },
                      { id: 'Güvenlik', title: 'Maksimum Güvenlik', desc: 'Sıkı veri yalıtımı ve yetkilendirme.' },
                      { id: 'Otomasyon', title: 'Operasyonel Otomasyon', desc: 'Manuel süreçlerin otonomlaştırılması.' },
                      { id: 'Maliyet', title: 'Maliyet & Verimlilik', desc: 'Sunucu optimizasyonu ve kaynak tasarrufu.' },
                    ].map((goal) => (
                      <button
                        key={goal.id}
                        onClick={() => setPrimaryGoal(goal.id)}
                        className={`p-5 rounded-xl border text-left transition-all duration-300 flex flex-col justify-between h-36 ${
                          primaryGoal === goal.id
                            ? 'border-sky-500 bg-sky-50/40 text-sky-900'
                            : 'border-neutral-200 hover:border-neutral-300 bg-white'
                        }`}
                      >
                        <span className="font-bold text-sm">{goal.title}</span>
                        <span className="text-xs text-neutral-500 leading-relaxed mt-2">{goal.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-200/60">
                  <h3 className="text-base font-cinzel font-bold mb-4 text-sky-950 flex items-center gap-2">
                    <svg className="w-5 h-5 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Sistem Tasarım Değerlendirmesi
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <span className="text-xs text-neutral-500 uppercase tracking-wider block mb-1">Tahmini Proje Süresi</span>
                      <span className="text-lg font-bold text-neutral-800">{calculateEstimate().duration}</span>
                    </div>
                    <div>
                      <span className="text-xs text-neutral-500 uppercase tracking-wider block mb-1">Önerilen Ekip Yapısı</span>
                      <span className="text-lg font-bold text-neutral-800">{calculateEstimate().teamSize}</span>
                    </div>
                  </div>

                  <div>
                    <span className="text-xs text-neutral-500 uppercase tracking-wider block mb-2">Altyapı Önerilerimiz</span>
                    <ul className="space-y-2">
                      {calculateEstimate().recommendations.map((rec, index) => (
                        <li key={index} className="text-xs text-neutral-700 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-1.5 flex-shrink-0" />
                          {rec}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Navigation Controls */}
              <div className="flex justify-between items-center mt-10 pt-6 border-t border-neutral-100">
                {step > 1 ? (
                  <button
                    onClick={() => setStep(prev => prev - 1)}
                    className="px-5 py-2 text-xs font-semibold text-neutral-600 hover:text-neutral-900 border border-neutral-200 rounded-lg hover:bg-neutral-50"
                  >
                    Geri
                  </button>
                ) : (
                  <div />
                )}

                {step < 4 ? (
                  <button
                    onClick={handleNext}
                    disabled={
                      (step === 1 && !selectedService) ||
                      (step === 2 && !businessScale) ||
                      (step === 3 && !primaryGoal)
                    }
                    className={`px-6 py-2.5 rounded-lg text-xs font-semibold text-white shadow-sm transition-all duration-300 ${
                      ((step === 1 && selectedService) ||
                        (step === 2 && businessScale) ||
                        (step === 3 && primaryGoal))
                        ? 'bg-sky-500 hover:bg-sky-600 shadow-sky-500/10'
                        : 'bg-neutral-300 cursor-not-allowed'
                    }`}
                  >
                    Devam Et
                  </button>
                ) : (
                  <div className="flex gap-4">
                    <button
                      onClick={handleReset}
                      className="px-5 py-2 text-xs font-semibold text-neutral-600 hover:text-neutral-900 border border-neutral-200 rounded-lg hover:bg-neutral-50"
                    >
                      Yeniden Başlat
                    </button>
                    <Link
                      href="/iletisim"
                      className="px-6 py-2.5 rounded-lg text-xs font-semibold text-white bg-sky-500 hover:bg-sky-600 shadow-sm shadow-sky-500/10 transition-all duration-300"
                    >
                      Tasarım Talebi Gönder
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details Deep-Dive Section */}
      <section className="py-20 md:py-28 relative">
        <div className="max-w-[1200px] mx-auto px-6 space-y-32">
          <ScrollReveal direction="up" distance={30}>
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <span className="font-gothic text-[0.65rem] tracking-[0.3em] uppercase text-sky-600 bg-sky-50 px-4 py-1.5 rounded-full border border-sky-100 font-semibold">
                Derinlemesine İnceleme
              </span>
              <h2 className="font-cinzel text-3xl md:text-4xl font-bold mt-4 mb-4">
                Yazılım ve Altyapı Çözümlerimiz
              </h2>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                İşletmenizin her aşamasında yüksek performans, sıfır veri kaybı ve en üst düzey 
                siber güvenlik standartlarını nasıl uyguladığımızı görün.
              </p>
            </div>
          </ScrollReveal>

          {/* Service 1: Siber Güvenlik */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-block font-gothic text-[0.65rem] tracking-[0.2em] uppercase text-emerald-600 bg-emerald-50 px-4 py-1.5 rounded-full border border-emerald-100 font-semibold">
                Zırhlı Güvenlik Katmanı
              </span>
              <h3 className="font-cinzel text-2xl md:text-3xl font-bold text-neutral-900">
                Siber Güvenlik & Risk Yönetimi
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-light">
                Kurumsal verilerinizin ve dijital varlıklarınızın korunması, sadece bir önlem değil; iş sürekliliğinizin temel garantisidir. Biz, sistemlerinizi dış dünyaya kapalı izole mimariler altında inşa ederek saldırı yüzeyini minimuma indiriyoruz.
              </p>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-light">
                Sızma testleri ve ağ denetimleriyle sistemlerinizdeki potansiyel açıkları önceden tespit ediyor, olay günlüklerini merkezi olarak analiz ederek anomalileri anında tespit eden izleme sistemleri yapılandırıyoruz.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {[
                  { t: 'Güvenlik Sızma Testleri', d: 'Saldırgan gözüyle açıkları bulma' },
                  { t: 'Merkezi Olay İzleme', d: 'Anlık tehdit ve anomali tespiti' },
                  { t: 'Veri Yalıtımı & Şifreleme', d: 'Tüm veri trafiğinde tam koruma' },
                  { t: 'Güvenlik Sertifikasyonu', d: 'Kurumsal standartlarla tam uyum' }
                ].map((item, i) => (
                  <div key={i} className="p-4 rounded-xl bg-white border border-neutral-200/50">
                    <span className="block text-xs font-bold text-neutral-800 mb-1">{item.t}</span>
                    <span className="block text-[0.7rem] text-neutral-500 leading-snug">{item.d}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-6 bg-emerald-50/20 p-8 rounded-3xl border border-emerald-100/50 flex flex-col justify-between h-[420px]">
              <div>
                <span className="text-[0.65rem] font-gothic uppercase tracking-[0.25em] text-emerald-600 block mb-2">Yönetici Özeti</span>
                <h4 className="font-cinzel text-lg font-bold text-neutral-900 mb-4">Siber Güvenlik Etkisi</h4>
                <p className="text-xs text-neutral-600 leading-relaxed font-light">
                  İşletmenizdeki tüm dijital operasyonları siber saldırılara, veri sızıntılarına ve yetkisiz erişim teşebbüslerine karşı tamamen koruma altına alıyoruz. Bu sistemler, veri kaybı veya hizmet kesintisi riskinizi sıfıra indirerek kurumsal itibarınızı ve cironuzu korur.
                </p>
              </div>
              <div className="pt-6 border-t border-emerald-200/30 flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-800">Uyumlu Standartlar</span>
                <span className="text-[0.65rem] font-semibold text-emerald-600 bg-emerald-100/40 px-3 py-1 rounded-full">Zero-Trust & ISO 27001</span>
              </div>
            </div>
          </div>

          {/* Service 2: Full-Stack Web */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 order-last lg:order-first bg-indigo-50/20 p-8 rounded-3xl border border-indigo-100/50 flex flex-col justify-between h-[420px]">
              <div>
                <span className="text-[0.65rem] font-gothic uppercase tracking-[0.25em] text-indigo-600 block mb-2">Ticari Getiri</span>
                <h4 className="font-cinzel text-lg font-bold text-neutral-900 mb-4">E-Ticaret ve Hızın Etkisi</h4>
                <p className="text-xs text-neutral-600 leading-relaxed font-light">
                  Hazır platformların sınırlarına takılmadan, işletmenizin tam kontrolünde olan yüksek hızlı satış mimarileri geliştiriyoruz. Ziyaretçilerinizin anında yüklenen sayfalarda sorunsuz sipariş vermesini sağlıyor, sipariş işlem kapasitenizi artırarak doğrudan satış dönüşümlerinizi yukarı çekiyoruz.
                </p>
              </div>
              <div className="pt-6 border-t border-indigo-200/30 flex items-center justify-between">
                <span className="text-xs font-bold text-indigo-800">Dönüşüm Artışı</span>
                <span className="text-[0.65rem] font-semibold text-indigo-600 bg-indigo-100/40 px-3 py-1 rounded-full">%40 Daha Hızlı Yüklenme</span>
              </div>
            </div>
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-block font-gothic text-[0.65rem] tracking-[0.2em] uppercase text-indigo-600 bg-indigo-50 px-4 py-1.5 rounded-full border border-indigo-100 font-semibold">
                Ölçeklenebilir Web Sistemleri
              </span>
              <h3 className="font-cinzel text-2xl md:text-3xl font-bold text-neutral-900">
                Full-Stack Web & E-Ticaret Portalları
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-light">
                Tek merkezden yönetilen, performans ve hız odaklı kurumsal web çözümleri geliştiriyoruz. Arama motoru dostu, hızlı ve modern arayüzleri, arka tarafta veri bütünlüğünü sağlayan güçlü mimarilerle birleştiriyoruz.
              </p>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-light">
                Müşterilerinizin tarayıcılarında kesintisiz bir deneyim sunarken, arka planda tüm sipariş, stok ve fatura süreçlerinin ERP sistemlerinizle milisaniyeler içinde entegre olmasını sağlıyoruz.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {[
                  { t: 'Performanslı Ön Yüz', d: 'Anında yüklenen, pürüzsüz arayüzler' },
                  { t: 'ERP & Stok Senkronizasyonu', d: 'Stok ve fiyatların anlık güncellenmesi' },
                  { t: 'Güvenli API Ağ Geçidi', d: 'Tüm veri trafiğinde sızdırmazlık' },
                  { t: 'Sıfır Komisyon Mimarisi', d: 'Kendi sunucunuzda bağımsız yönetim' }
                ].map((item, i) => (
                  <div key={i} className="p-4 rounded-xl bg-white border border-neutral-200/50">
                    <span className="block text-xs font-bold text-neutral-800 mb-1">{item.t}</span>
                    <span className="block text-[0.7rem] text-neutral-500 leading-snug">{item.d}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Service 3: Mobil Uygulama */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-block font-gothic text-[0.65rem] tracking-[0.2em] uppercase text-amber-600 bg-amber-50 px-4 py-1.5 rounded-full border border-amber-100 font-semibold">
                Cihaz Bağımsız Deneyim
              </span>
              <h3 className="font-cinzel text-2xl md:text-3xl font-bold text-neutral-900">
                Mobil Uygulama Çözümleri
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-light">
                Müşterilerinizin veya saha ekiplerinizin cebindeki en güçlü araç, onlara özel geliştirdiğimiz mobil uygulamalardır. Hem iOS hem de Android işletim sistemlerinde sorunsuz çalışan, yüksek hızda grafik işleme ve düşük pil tüketimi odaklı uygulamalar kodluyoruz.
              </p>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-light">
                Uygulama içi satın alma, anlık bildirim yönetimi, biyometrik giriş sistemleri ve saha operasyonları için konum servisleri gibi tüm gelişmiş yetenekleri projenize dahil ediyoruz.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {[
                  { t: 'Biyometrik Güvenlik', d: 'Parmak izi ve yüz tanıma entegrasyonu' },
                  { t: 'Akıllı Bildirim Motoru', d: 'Doğru zamanda kişiselleştirilmiş bildirimler' },
                  { t: 'MMKV Yerel Depolama', d: 'İnternet kesildiğinde bile tam erişim' },
                  { t: 'Uygulama Mağazası Yayını', d: 'App Store ve Google Play onay süreçleri' }
                ].map((item, i) => (
                  <div key={i} className="p-4 rounded-xl bg-white border border-neutral-200/50">
                    <span className="block text-xs font-bold text-neutral-800 mb-1">{item.t}</span>
                    <span className="block text-[0.7rem] text-neutral-500 leading-snug">{item.d}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-6 bg-amber-50/20 p-8 rounded-3xl border border-amber-100/50 flex flex-col justify-between h-[420px]">
              <div>
                <span className="text-[0.65rem] font-gothic uppercase tracking-[0.25em] text-amber-600 block mb-2">Müşteri Sadakati</span>
                <h4 className="font-cinzel text-lg font-bold text-neutral-900 mb-4">Mobil Erişim Kanalları</h4>
                <p className="text-xs text-neutral-600 leading-relaxed font-light">
                  Müşterilerinizle doğrudan ve engelsiz bir iletişim kanalı kurmanızı sağlıyoruz. Mobil uygulamalar sayesinde anlık kampanya bildirimleriyle geri dönüş oranlarınızı artırıyor, müşterilerinize her zaman, her yerde tek tıkla sipariş verme özgürlüğü sunuyoruz.
                </p>
              </div>
              <div className="pt-6 border-t border-amber-200/30 flex items-center justify-between">
                <span className="text-xs font-bold text-amber-800">Kullanıcı Sadakati</span>
                <span className="text-[0.65rem] font-semibold text-amber-600 bg-amber-100/40 px-3 py-1 rounded-full">Yüksek Geri Dönüş Oranları</span>
              </div>
            </div>
          </div>

          {/* Service 4: Veri Analizi */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 order-last lg:order-first bg-purple-50/20 p-8 rounded-3xl border border-purple-100/50 flex flex-col justify-between h-[420px]">
              <div>
                <span className="text-[0.65rem] font-gothic uppercase tracking-[0.25em] text-purple-600 block mb-2">Veri Odaklı Yönetim</span>
                <h4 className="font-cinzel text-lg font-bold text-neutral-900 mb-4">Karar Destek Sistemleri</h4>
                <p className="text-xs text-neutral-600 leading-relaxed font-light">
                  Şirketinizin veri dağınıklığını ortadan kaldırarak finansal ve operasyonel performansı net bir şekilde görebilmenizi sağlıyoruz. Gerçek zamanlı paneller sayesinde hatalı yatırım kararlarını engelliyor, darboğazları anında görerek hızlı müdahale şansı elde ediyorsunuz.
                </p>
              </div>
              <div className="pt-6 border-t border-purple-200/30 flex items-center justify-between">
                <span className="text-xs font-bold text-purple-800">Verimlilik Artışı</span>
                <span className="text-[0.65rem] font-semibold text-purple-600 bg-purple-100/40 px-3 py-1 rounded-full">Anlık Durum Analizi</span>
              </div>
            </div>
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-block font-gothic text-[0.65rem] tracking-[0.2em] uppercase text-purple-600 bg-purple-50 px-4 py-1.5 rounded-full border border-purple-100 font-semibold">
                Geleceği Öngören Analitik
              </span>
              <h3 className="font-cinzel text-2xl md:text-3xl font-bold text-neutral-900">
                Veri Analizi & İş Zekası (BI)
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-light">
                İşletmenizin ürettiği devasa miktardaki ham veriyi, en kritik yönetim kararlarınızda kullanabileceğiniz stratejik göstergeler haline getiriyoruz. Satış, finans, stok ve lojistik verilerini tek merkezde konsolide ediyoruz.
              </p>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-light">
                Geliştirdiğimiz makine öğrenmesi modelleri sayesinde talep tahmini yapıyor, stok ihtiyaçlarınızı önceden belirleyerek tedarik maliyetlerinizi optimize ediyoruz.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {[
                  { t: 'Yönetici Takip Panelleri', d: 'Tüm departmanlar tek ekranda' },
                  { t: 'Öngörülü Talep Tahmini', d: 'Stok maliyetlerini en aza indirme' },
                  { t: 'Merkezi Veri Deposu', d: 'Güvenli, temizlenmiş kurumsal veri gölü' },
                  { t: 'Otomatik Raporlama Akışları', d: 'Haftalık ve aylık raporların otomatik üretimi' }
                ].map((item, i) => (
                  <div key={i} className="p-4 rounded-xl bg-white border border-neutral-200/50">
                    <span className="block text-xs font-bold text-neutral-800 mb-1">{item.t}</span>
                    <span className="block text-[0.7rem] text-neutral-500 leading-snug">{item.d}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Service 5: Bulut ve Altyapı */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-block font-gothic text-[0.65rem] tracking-[0.2em] uppercase text-teal-600 bg-teal-50 px-4 py-1.5 rounded-full border border-teal-100 font-semibold">
                Sürekli Çalışan Altyapı
              </span>
              <h3 className="font-cinzel text-2xl md:text-3xl font-bold text-neutral-900">
                Bulut & Altyapı Yönetimi
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-light">
                Yazılımlarınızın ne kadar iyi kodlandığından bağımsız olarak, üzerinde çalıştıkları altyapı güvenli ve kararlı değilse işiniz her an durma noktasına gelebilir. Biz, kurumsal sistemlerinizi adanmış ve izole sunucu mimarilerinde barındırıyoruz.
              </p>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-light">
                Tüm servislerinizi uygulama konteynerizasyonu ile birbirinden bağımsız çalıştırıyor, ağ seviyesinde izole sanal ağlar kurarak bir serviste yaşanabilecek sorunun tüm altyapıya yayılmasını engelliyoruz.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {[
                  { t: 'Uygulama Konteynerleri', d: 'Birbirini etkilemeyen bağımsız servisler' },
                  { t: 'Otomatik Sunucu Yönetimi', d: 'Hızlı müdahale ve kontrol paneli' },
                  { t: 'İzole Sanal Ağlar', d: 'Güvenli iç iletişim köprüleri' },
                  { t: 'Yedeklilik ve Felaket Senaryosu', d: '15 dakikada farklı sunucuda ayağa kalkma' }
                ].map((item, i) => (
                  <div key={i} className="p-4 rounded-xl bg-white border border-neutral-200/50">
                    <span className="block text-xs font-bold text-neutral-800 mb-1">{item.t}</span>
                    <span className="block text-[0.7rem] text-neutral-500 leading-snug">{item.d}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-6 bg-teal-50/20 p-8 rounded-3xl border border-teal-100/50 flex flex-col justify-between h-[420px]">
              <div>
                <span className="text-[0.65rem] font-gothic uppercase tracking-[0.25em] text-teal-600 block mb-2">İş Sürekliliği</span>
                <h4 className="font-cinzel text-lg font-bold text-neutral-900 mb-4">Sistem Kararlılığı</h4>
                <p className="text-xs text-neutral-600 leading-relaxed font-light">
                  Sistem kesintilerinden kaynaklanan prestij ve ciro kayıplarını tarihe gömüyoruz. Otomatik yedekleme, yük dengeleme ve felaket kurtarma senaryolarıyla sistemlerinizin 99.9% uptime (çalışma süresi) ile kesintisiz ayakta kalmasını sağlıyoruz.
                </p>
              </div>
              <div className="pt-6 border-t border-teal-200/30 flex items-center justify-between">
                <span className="text-xs font-bold text-teal-800">Çalışma Süresi</span>
                <span className="text-[0.65rem] font-semibold text-teal-600 bg-teal-100/40 px-3 py-1 rounded-full">99.9% Uptime Garantisi</span>
              </div>
            </div>
          </div>

          {/* Service 6: Yapay Zekâ ve Otomasyon */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 order-last lg:order-first bg-pink-50/20 p-8 rounded-3xl border border-pink-100/50 flex flex-col justify-between h-[420px]">
              <div>
                <span className="text-[0.65rem] font-gothic uppercase tracking-[0.25em] text-pink-600 block mb-2">Operasyonel Çeviklik</span>
                <h4 className="font-cinzel text-lg font-bold text-neutral-900 mb-4">İşgücü Optimizasyonu</h4>
                <p className="text-xs text-neutral-600 leading-relaxed font-light">
                  Tekrarlayan işleri yapay zekâ asistanlarına ve otomatik akışlara devrederek çalışanlarınızın verimliliğini katlıyoruz. Sipariş takibi, müşteri bilgilendirme ve veri giriş süreçlerindeki insan hatalarını tamamen ortadan kaldırarak hızı en üst seviyeye çıkarıyoruz.
                </p>
              </div>
              <div className="pt-6 border-t border-pink-200/30 flex items-center justify-between">
                <span className="text-xs font-bold text-pink-800">Otomasyon Etkisi</span>
                <span className="text-[0.65rem] font-semibold text-pink-600 bg-pink-100/40 px-3 py-1 rounded-full">%80 Zaman Tasarrufu</span>
              </div>
            </div>
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-block font-gothic text-[0.65rem] tracking-[0.2em] uppercase text-pink-600 bg-pink-50 px-4 py-1.5 rounded-full border border-pink-100 font-semibold">
                Otonom İş Akışları
              </span>
              <h3 className="font-cinzel text-2xl md:text-3xl font-bold text-neutral-900">
                Yapay Zekâ & İş Otomasyonu
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-light">
                Şirketinizin departmanları arasındaki tüm manuel veri aktarımlarını ve tekrarlayan süreçleri akıllı iş akışı otomasyonlarına devrediyoruz. Farklı uygulamaları birbiriyle konuşabilen akıllı düğümlere dönüştürüyoruz.
              </p>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-light">
                Güvenli yapay zekâ asistanları kurgulayarak şirket içi veri tabanlarınızdan veya döküman arşivinizden anlık doğru bilgiye ulaşılmasını sağlıyor, müşteri ilişkilerini ve iç süreçleri otonomlaştırıyoruz.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {[
                  { t: 'Merkezi Entegrasyon Akışları', d: 'Farklı araçların otonom haberleşmesi' },
                  { t: 'RAG Yapay Zekâ Modelleri', d: 'Şirket verilerinden beslenen asistanlar' },
                  { t: 'Akıllı Döküman Okuma', d: 'Fatura, fiş ve evrakların otomatik analizi' },
                  { t: 'Güvenli Bildirim Entegrasyonu', d: 'Sistem alarmları ve olay özetleri' }
                ].map((item, i) => (
                  <div key={i} className="p-4 rounded-xl bg-white border border-neutral-200/50">
                    <span className="block text-xs font-bold text-neutral-800 mb-1">{item.t}</span>
                    <span className="block text-[0.7rem] text-neutral-500 leading-snug">{item.d}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Manifesto Section */}
      <section className="py-20 md:py-28 bg-white border-t border-neutral-100">
        <div className="max-w-[1000px] mx-auto px-6">
          <ScrollReveal direction="up" distance={30}>
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <span className="font-gothic text-[0.65rem] tracking-[0.3em] uppercase text-sky-600 bg-sky-50 px-4 py-1.5 rounded-full border border-sky-100 font-semibold">
                Mühendislik Anayasası
              </span>
              <h2 className="font-cinzel text-3xl md:text-4xl font-bold mt-4 mb-4">
                Uptime ve Kalite Standartlarımız
              </h2>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-light">
                Nos Canda Tech bünyesinde üretilen her bir satır kod, kurumsal olgunluk ve kararlılık 
                kriterlerimize uygun olarak geliştirilir. Geliştirme süreçlerimizde uyguladığımız 
                kesin ilkeler şunlardır:
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                t: 'Zero-Trust Güvenlik Standardı',
                d: 'Tüm uygulamalarımızı güvenlik ihlali olabileceği varsayımıyla tasarlıyoruz. Ağ geçitleri, kimlik doğrulamalar ve veritabanı erişimleri her adımda doğrulanır. Hiçbir servis bir diğerine sorgusuz güvenemez.'
              },
              {
                t: 'Yüksek Performans ve Düşük Gecikme',
                d: 'Kod seviyesindeki optimizasyonlar, gelişmiş bellek yönetimi ve sunucu önbellek katmanlarıyla kullanıcıların sayfalar arasında en ufak bir gecikme yaşamadan, saniyeler içinde işlem yapabilmesini hedefliyoruz.'
              },
              {
                t: 'İzole ve Modüler Sunucu Mimarisi',
                d: 'Tek bir büyük sistem yerine, birbiriyle izole sanal ağlar üzerinden konuşan mikro servisler kuruyoruz. Böylece bir servisteki aşırı yüklenme veya arıza, sistemin diğer kısımlarına zarar veremez.'
              },
              {
                t: 'Otomatik Kurtarma & Failover',
                d: 'Uptime oranlarımızı korumak için sunucularımızın sağlık durumunu saniyelik izliyoruz. Bir sorun anında, trafik otomatik olarak yedek sunucuya yönlendirilir ve kullanıcı kesintiyi hissetmez.'
              },
              {
                t: 'Sıfır Lisans Bağımlılığı',
                d: 'Açık kaynak dünyasının en güvenilir ve performanslı çekirdek teknolojilerini tercih ederek, işletmenizi yıllık lisans ücretlerine veya tekil şirketlerin kapalı kutu kurallarına mahkum etmiyoruz.'
              },
              {
                t: 'Gelişmiş Veri Egemenliği',
                d: 'Verilerinizin nerede barındırılacağı, kimlerin erişebileceği tamamen sizin kontrolünüzdedir. Bulut veya şirket içi sunucu ortamlarında tam veri yalıtımı sağlayarak regülasyonlara uyumu kolaylaştırıyoruz.'
              }
            ].map((item, idx) => (
              <ScrollReveal key={idx} direction="up" distance={30} delay={idx * 0.05}>
                <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200/40">
                  <h4 className="text-base font-cinzel font-bold text-neutral-900 mb-2">{item.t}</h4>
                  <p className="text-xs text-neutral-600 leading-relaxed font-light">{item.d}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline Section */}
      <section className="py-20 md:py-28 bg-neutral-50 border-y border-neutral-200/50">
        <div className="max-w-[800px] mx-auto px-6">
          <ScrollReveal direction="up" distance={30}>
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <span className="font-gothic text-[0.65rem] tracking-[0.3em] uppercase text-sky-600 bg-sky-50 px-4 py-1.5 rounded-full border border-sky-100 font-semibold">
                Nasıl Çalışıyoruz?
              </span>
              <h2 className="font-cinzel text-3xl md:text-4xl font-bold mt-4 mb-4">
                Proje Geliştirme Sürecimiz
              </h2>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-light">
                Teknolojik dönüşümünüzü sürprizlerden uzak, şeffaf ve planlı bir 
                metodolojiyle yönetiyoruz.
              </p>
            </div>
          </ScrollReveal>

          <div className="relative border-l border-sky-200 ml-4 md:ml-6 space-y-12">
            {PROCESS_STEPS.map((step, idx) => (
              <ScrollReveal key={step.id} direction="left" distance={30} delay={idx * 0.1}>
                <div className="relative pl-8 md:pl-12">
                  <div
                    className="absolute -left-5 top-0 w-10 h-10 rounded-full flex items-center justify-center font-cinzel text-xs font-bold text-white shadow-md shadow-sky-500/10 border-4 border-neutral-50"
                    style={{ background: ACCENT }}
                  >
                    {step.id}
                  </div>
                  <div>
                    <h3 className="font-cinzel text-lg font-bold text-neutral-900 mb-2">{step.title}</h3>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-light">{step.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Expanded Sıkça Sorulan Sorular Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[900px] mx-auto px-6">
          <ScrollReveal direction="up" distance={30}>
            <div className="text-center mb-16">
              <span className="font-gothic text-[0.65rem] tracking-[0.3em] uppercase text-sky-600 bg-sky-50 px-4 py-1.5 rounded-full border border-sky-100 font-semibold">
                Sorular & Cevaplar
              </span>
              <h2 className="font-cinzel text-3xl md:text-4xl font-bold mt-4 mb-4">
                Sıkça Sorulan Sorular
              </h2>
              <p className="text-sm text-[var(--text-secondary)] max-w-lg mx-auto">
                Yazılım geliştirme süreçleri, güvenlik önlemleri, altyapı yönetimi ve 
                iş modellerimiz hakkında detaylı bilgiler.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <ScrollReveal key={index} direction="up" distance={20} delay={index * 0.05}>
                <div className="border border-neutral-200/60 rounded-2xl overflow-hidden bg-white shadow-sm transition-all duration-300">
                  <button
                    onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                    className="w-full text-left p-6 flex justify-between items-center gap-4 bg-white hover:bg-neutral-50/50 transition-colors"
                  >
                    <span className="font-cinzel text-sm md:text-base font-bold text-neutral-900 flex items-start gap-3">
                      <span className="text-sky-500 font-medium">Q.</span>
                      {faq.q}
                    </span>
                    <span className="flex-shrink-0 text-sky-500 transition-transform duration-300">
                      {activeFaq === index ? (
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                        </svg>
                      )}
                    </span>
                  </button>

                  <div
                    className={`transition-all duration-300 ease-in-out ${
                      activeFaq === index ? 'max-h-[500px] opacity-100 border-t border-neutral-100' : 'max-h-0 opacity-0'
                    } overflow-hidden`}
                  >
                    <div className="p-6 text-xs md:text-sm text-[var(--text-secondary)] leading-relaxed font-light bg-neutral-50/40 border-l-2 border-sky-500 pl-6">
                      {faq.a}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-dark py-20 md:py-28">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <ScrollReveal direction="up" distance={30}>
            <span
              className="inline-block font-gothic text-[0.65rem] tracking-[0.3em] uppercase px-5 py-2.5 rounded-full mb-6 font-semibold"
              style={{ background: 'rgba(14, 165, 233, 0.1)', color: ACCENT, border: `1px solid rgba(14, 165, 233, 0.2)` }}
            >
              Projenizi Hayata Geçirelim
            </span>
            <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-white mb-6">
              Dijital Dönüşüm Yolculuğunuza <span style={{ color: ACCENT }}>Birlikte</span> Başlayalım
            </h2>
            <p className="font-body text-[var(--section-dark-muted)] leading-relaxed mb-10 max-w-lg mx-auto">
              Projenizin kapsamını, teknolojik ihtiyaçlarınızı ve hedeflerinizi konuşmak için 
              bizimle iletişime geçin. İlk görüşme ücretsizdir.
            </p>
            <Link
              href="/iletisim"
              className="btn-primary inline-flex"
              style={{ background: ACCENT, borderColor: ACCENT }}
            >
              İletişime Geçin
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
