import Link from 'next/link';
import { ScrollReveal } from '@/components/core/ScrollReveal';

/**
 * Kurumsal Yönetim Content Section
 */
export function Content() {
  return (
    <section className="section-padding bg-[var(--bg-primary)]">
      <div className="max-w-[900px] mx-auto px-6 space-y-12">
        
        {/* Section 1: Yönetim Kurulu Yapısı */}
        <ScrollReveal direction="up">
          <div className="space-y-4">
            <h2 className="font-cinzel text-xl font-semibold text-[var(--text-primary)]">
              1. Yönetim Kurulu Yapısı and Komiteler
            </h2>
            <div className="gold-line max-w-[60px]" />
            <p className="font-body text-sm text-[var(--text-secondary)] leading-relaxed">
              Yönetim Kurulumuz, hissedarlarımızın haklarını korumak and şirket değerini sürdürülebilir kılmak amacıyla stratejik kararlar alır. Yönetim kurulumuzda bağımsız üyeler yer almaktadır and denetim, kurumsal yönetim and risk yönetimi komiteleri düzenli olarak toplanır.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              <div className="p-5 bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-lg magnetic-hover shadow-glass">
                <h4 className="font-cinzel text-sm font-semibold mb-2 text-[var(--accent-gold)]">Denetimden Sorumlu Komite</h4>
                <p className="font-body text-xs text-[var(--text-secondary)] leading-relaxed">
                  Finansal raporlama süreçlerini, iç denetim sistemini and bağımsız denetim süreçlerini denetler.
                </p>
              </div>
              <div className="p-5 bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-lg magnetic-hover shadow-glass">
                <h4 className="font-cinzel text-sm font-semibold mb-2 text-[var(--accent-gold)]">Kurumsal Yönetim Komitesi</h4>
                <p className="font-body text-xs text-[var(--text-secondary)] leading-relaxed">
                  Uluslararası SPK kurumsal yönetim derecelendirme uyum kriterlerini and atama politikalarını izler.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Section 2: Pay Sahipleri Hakları */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="space-y-4">
            <h2 className="font-cinzel text-xl font-semibold text-[var(--text-primary)]">
              2. Pay Sahipleri and Bilgilendirme Politikası
            </h2>
            <div className="gold-line max-w-[60px]" />
            <p className="font-body text-sm text-[var(--text-secondary)] leading-relaxed">
              Tüm pay sahiplerimiz, eşit bilgi alma and inceleme hakkına sahiptir. Nos Canda, kamuyu aydınlatma and şeffaflık ilkeleri doğrultusunda, ticari sır niteliğinde olmayan her türlü finansal gelişmeyi eş zamanlı and doğru olarak yatırımcılarına duyurmaktadır.
            </p>
          </div>
        </ScrollReveal>

        {/* Section 3: İş Etiği Kuralları */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="space-y-4">
            <h2 className="font-cinzel text-xl font-semibold text-[var(--text-primary)]">
              3. İş Etiği and Uyum Kodu
            </h2>
            <div className="gold-line max-w-[60px]" />
            <p className="font-body text-sm text-[var(--text-secondary)] leading-relaxed">
              İş etiği kurallarımız, tüm çalışanlarımızın and iş ortaklarımızın uyması zorunlu standartları tanımlar. Yolsuzlukla mücadele, çevre koruma yükümlülükleri, iş sağlığı güvenliği and adil rekabet koşulları bu kodun temel yapı taşlarını oluşturur.
            </p>
          </div>
        </ScrollReveal>

        {/* Return Links */}
        <div className="mt-16 pt-8 border-t border-[var(--border-subtle)] text-center">
          <Link
            href="/yatirimci-iliskileri"
            className="font-gothic text-xs tracking-widest text-[var(--text-secondary)] hover:text-[var(--accent-gold)] transition-colors inline-block"
          >
            ← Yatırımcı İlişkileri Ana Sayfasına Dön
          </Link>
        </div>

      </div>
    </section>
  );
}
