'use client';

import Link from 'next/link';
import { ScrollReveal } from '@/components/core/ScrollReveal';

const ACCENT = '#6366F1';
const ACCENT_BG = 'rgba(99, 102, 241, 0.06)';
const ACCENT_BORDER = 'rgba(99, 102, 241, 0.15)';

const SERVICES = [
  {
    title: 'Kurumsal Süreç Modelleme',
    description: 'Şirketinizdeki tüm iş süreçlerini (satın alma, üretim, satış, sevkiyat) baştan sona analiz ederek akış şemalarıyla haritalandırıyoruz. Darboğazları tespit edip süreçleri optimize ediyoruz.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94-3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    title: 'HR Yönetim Sistemleri',
    description: 'İşe alım, performans değerlendirme, kariyer yönetimi ve bordrolama süreçlerini dijitalleştiren bütünleşik HR altyapıları tasarlıyoruz. Çalışan memnuniyetini artıracak insan kaynakları anayasasını yazıyoruz.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.109A11.386 11.386 0 0110.002 21c-2.235 0-4.302-.64-6.046-1.748v-.109c0-2.877 2.332-5.21 5.21-5.21h1.666c.866 0 1.68.207 2.4.577m3.38-5.385a4.125 4.125 0 11-7.533-2.493M3 16.084a11.467 11.467 0 010-8.168m18 8.168a11.467 11.467 0 000-8.168M18.988 9.225A11.91 11.91 0 0012 7.5c-2.683 0-5.19.882-7.217 2.37M15 11.25a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Kurumsal Sistem & Veri Entegrasyonu',
    description: 'Şirketinizin veri bütünlüğünü sağlamak için kurumsal yönetim (ERP) ve müşteri ilişkileri (CRM) sistemlerinin seçiminden, bunların yerel veritabanlarına güvenli entegrasyonuna kadar rehberlik ediyoruz.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
  },
  {
    title: 'Tek Merkezli E-Ticaret Sistemleri',
    description: 'Nos Canda Tech\'in yazılım gücünü arkamıza alarak, küresel düzeyde yüksek hacimli e-ticaret portalları kuruyoruz. Gelişmiş veri tabanı optimizasyonları ve sunucu tampon bellek entegrasyonlarıyla yüksek performanslı sipariş akışları sağlıyoruz.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H5.745c-.669 0-1.189-.578-1.12-1.243l1.264-12A1.125 1.125 0 016.983 7.5h10.034a1.125 1.125 0 011.096.993z" />
      </svg>
    ),
  },
  {
    title: 'Tek Şifreli Ortak Giriş Altyapısı (SSO)',
    description: 'Şirketinizdeki tüm iç ve dış web uygulamalarını modern güvenlik standartlarında ortak giriş altyapısına bağlayarak tek merkezden giriş şifre güvenliği ve tek merkezli kimlik doğrulama sağlıyoruz.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
      </svg>
    ),
  },
  {
    title: 'İç İletişim & Güvenli Telsiz Ağı',
    description: 'Veri sızıntılarını önlemek amacıyla tamamen kendi sunucularınızda barındırılan, uçtan uca şifreli iç telsiz mesajlaşma ve sesli/görüntülü konferans ağları kuruyoruz.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025 10.338 10.338 0 01-2.16-3.14C2.517 14.824 2.25 13.475 2.25 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
      </svg>
    ),
  },
  {
    title: 'Bulut Depolama & Evrak Arşivi',
    description: 'Hassas şirket belgelerinin yetkisiz erişime kapatılması için yerel sunucu tabanlı izole ve yüksek hızlı depolama altyapısı kurarak kurumsal PDF ve görsel evrak arşivinizi dijitalleştiriyoruz.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      </svg>
    ),
  },
  {
    title: 'Performans & KPI Dashboardları',
    description: 'Şirketinizin tüm finansal, operasyonel ve satış veri göstergelerini tek ekranda toplayan gerçek zamanlı yönetici takip panelleri tasarlıyoruz.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
      </svg>
    ),
  },
];

const SYSTEM_ARCHITECTURE = [
  { step: '01', title: 'Operasyonel Standartlar (Vision)', desc: 'Kurumsal süreçlerinizi belgelerle, şemalarla ve anayasa kurallarıyla tanımlıyoruz.' },
  { step: '02', title: 'Yazılım Entegrasyonu (Tech)', desc: 'Modern web portalları, hızlı e-ticaret motorları ve izole veritabanları kuruyoruz.' },
  { step: '03', title: 'Güvenlik Sıkılaştırma', desc: 'Ortak Giriş ve Yetkilendirme (SSO) ve telsiz şifreli iç iletişim hatlarıyla şirket verilerini siber tehditlere karşı izole ediyoruz.' },
  { step: '04', title: 'KPI & İzleme', desc: 'Tüm süreçlerin performansını gerçek zamanlı dashboardlar üzerinden takip edilebilir kılıyoruz.' },
];

const FAQS = [
  {
    q: 'Kurumsallaşmak şirketimizi hantallaştırır mı?',
    a: 'Hayır, hantal kurumsallaşma geleneksel bürokratik yöntemlerle olur. Bizim uyguladığımız modern kurumsallaşma yaklaşımı, süreçlerinizi otomatik iş otomasyonu akışları ve hızlı e-ticaret motorlarıyla birleştirdiği için aksine karar alma ve iş yapma süreçlerinizi çok daha çevik ve hızlı hale getirir.',
  },
  {
    q: 'Kurumsallaşma sürecinde Nos Canda Tech ile nasıl bir işbirliği yapılıyor?',
    a: 'Nos Canda Vision olarak biz iş modellerinizi, organizasyonel yapınızı ve kurumsal anayasanızı tasarlıyoruz. Bu süreçlerin teknolojik ayağını (Modern web portalları, adanmış ve izole sunucu altyapıları, tek şifreli kimlik doğrulama entegrasyonları, güvenli veritabanları) ise kardeş platformumuz Nos Canda Tech uçtan uca kodlayarak hayata geçiriyor. Böylece tek elden bütünleşik çözüm almış oluyorsunuz.',
  },
  {
    q: 'Tek Şifreli Giriş (SSO) kurumsal verimliliği nasıl etkiler?',
    a: 'Şirket içindeki her çalışan günde ortalama 6-8 farklı araca (proje yönetim aracı, müşteri ilişkileri sistemi, e-posta, depo sistemi, HR paneli) giriş yapar. Ayrı ayrı şifreler kullanmak hem vakit kaybına hem de siber güvenlik açıklarına yol açar. SSO sayesinde tek bir güçlü şifre ve 2FA doğrulaması ile tüm araçlara anında, tek tıkla güvenli erişim sağlanır. Çalışan işten ayrıldığında ise tüm yetkileri tek merkezden kapatılır.',
  },
  {
    q: 'JavaScript tabanlı e-ticaret motoru neden en iyi seçenektir?',
    a: 'Kapalı kaynaklı hazır platformlar kurumsal özelleştirmelere (ERP entegrasyonu, özel depo otomasyonu, esnek üyelik modelleri) izin vermez veya yüksek komisyonlar alır. Eski e-ticaret sistemleri ise yüksek trafik altında yavaşlar ve çöker. JavaScript tabanlı e-ticaret motoru; tamamen kodla yönetilen, ultra performanslı ve açık kaynaklı bir e-ticaret çerçevesidir. Kendi adanmış sunucumuzda barındırıp veritabanını optimize ederek milyonlarca siparişi sıfır komisyonla yönetmemizi sağlar.',
  },
  {
    q: 'Kurumsal dönüşüm ne kadar sürer?',
    a: 'Şirketinizin büyüklüğüne ve süreçlerin karmaşıklığına bağlı olarak 3 ila 9 ay arasında sürer. Dönüşümün ilk 1 ayında durum tespiti yapar ve öncelikli darboğazları gideririz. Ardından aşamalı olarak teknolojik entegrasyonları tamamlar ve çalışan eğitimleriyle sistemi devreye alırız.',
  },
];

/**
 * Kurumsallaştırma & İş Sistemleri Page
 *
 * Why: Indigo accent (#6366F1) represents system trust, data integration,
 * and corporate stability. Comprehensive schematics connect organizational theory (Vision)
 * with robust technical execution (Tech).
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
                Nos Canda Vision • Kurumsallaştırma
              </span>
              <h1 className="font-cinzel text-4xl sm:text-5xl lg:text-[58px] font-bold text-[var(--text-primary)] leading-[1.1] tracking-tight mb-8">
                Şirketinizi <span style={{ color: ACCENT }}>Sistemlerle</span> Büyütün
              </h1>
              <div className="h-1 w-16 rounded-full mx-auto mb-8" style={{ background: ACCENT }} />
              <p className="text-body-lg text-[var(--text-secondary)] leading-relaxed font-light max-w-2xl mx-auto">
                Kişilere bağımlı olmayan, otonom çalışan kurumsal sistemler inşa ediyoruz.
                Organizasyon şemalarından HR sistemlerine, modern web portallarından tek merkezli e-ticaret
                entegrasyonlarına kadar işletmenizi teknolojik altyapıyla geleceğe hazırlıyoruz.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Integrated Systems Schematic */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-[1100px] mx-auto px-6">
          <ScrollReveal direction="up" distance={30}>
            <div className="text-center mb-14">
              <h2 className="font-cinzel text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-4">
                Bütünleşik Yönetim ve Altyapı Mimarisi
              </h2>
              <p className="font-body text-[var(--text-secondary)] max-w-lg mx-auto">
                Organizasyonel standartlar (Vision) ile güçlü yazılımların (Tech) bir araya gelerek
                oluşturduğu kusursuz kurumsal ekosistem.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-8 max-w-[800px] mx-auto">
            {SYSTEM_ARCHITECTURE.map((item, idx) => (
              <ScrollReveal key={item.step} direction="left" distance={30} delay={idx * 0.1}>
                <div className="flex items-start gap-6 bg-white p-6 rounded-2xl border border-neutral-200/50 shadow-sm">
                  <div className="step-number flex-shrink-0" style={{ borderColor: ACCENT, color: ACCENT }}>
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-cinzel text-base font-bold text-[var(--text-primary)] mb-1">{item.title}</h3>
                    <p className="font-body text-xs text-[var(--text-secondary)] leading-relaxed font-light">{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
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
                Kurumsallaştırma süreçleri, e-ticaret altyapıları, ortak giriş sistemleri ve
                yönetim yapıları hakkında merak edilenler.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-6">
            {FAQS.map((faq, idx) => (
              <ScrollReveal key={faq.q} direction="up" distance={20} delay={idx * 0.05}>
                <div className="bg-white rounded-2xl p-6 border border-neutral-200/50 shadow-sm">
                  <h3 className="font-cinzel text-base font-bold text-[var(--text-primary)] mb-3 flex items-start gap-3">
                    <span className="text-indigo-600">Q.</span>
                    {faq.q}
                  </h3>
                  <div className="font-body text-sm text-[var(--text-secondary)] leading-relaxed font-light pl-6 border-l border-indigo-500/20">
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
              Şirketinizi <span style={{ color: ACCENT }}>Geleceğe</span> Hazırlayalım
            </h2>
            <p className="font-body text-[var(--section-dark-muted)] leading-relaxed mb-10 max-w-lg mx-auto">
              Süreçlerinizi standardize etmek, kurumsal yazılımları entegre etmek ve kişilere
              bağımlı olmaktan kurtulmak için hemen kurumsal analiz talebinde bulunun.
            </p>
            <Link href="/iletisim" className="btn-primary inline-flex" style={{ background: ACCENT, borderColor: ACCENT }}>
              Kurumsal Analiz İste
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
