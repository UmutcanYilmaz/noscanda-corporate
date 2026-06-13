import { ScrollReveal } from '@/components/core/ScrollReveal';

const ANNOUNCEMENTS = [
  { date: "2026", title: "Perfume Collection Lansmanı", desc: "Nos Canda'nın kişisel parfüm koleksiyonu resmi olarak tanıtıldı. Golden Chapter and Niche serileri ile sektöre giriş." },
  { date: "2025", title: "Nos Canda Vakfı Kuruldu", desc: "Kadın girişimcilere yönelik hızlandırma programları and yeşil üretim inisiyatifleri ile vakıf çalışmaları başladı." },
  { date: "2025", title: "İRAY DMO Ortaklığı", desc: "İRAY markasının resmi yetkili satıcısı olarak DMO kamu tedariği faaliyetleri başlatıldı." },
  { date: "2024", title: "Auto Fragrance Serisi", desc: "Premium araç parfümleri serisi pazara sunuldu. 4 farklı koku varyantı ile lansmanı gerçekleştirildi." },
  { date: "2024", title: "İlk Franchise Anlaşması", desc: "Monolith Kiosk konseptinin ilk franchise anlaşması İstanbul'da imzalandı." },
];

/**
 * Duyurular List Section
 */
export function List() {
  return (
    <section className="section-padding bg-[var(--bg-primary)]">
      <div className="max-w-[900px] mx-auto px-6">
        <div className="space-y-6">
          {ANNOUNCEMENTS.map((item, idx) => (
            <ScrollReveal key={idx} direction="up" delay={0.05 * idx}>
              <div className="surface-elevated rounded-xl p-6 magnetic-hover flex gap-6 items-start">
                <span className="font-cinzel text-lg font-bold text-[var(--accent-gold)] flex-shrink-0 w-14">{item.date}</span>
                <div>
                  <h3 className="font-cinzel text-base font-semibold text-[var(--text-primary)] mb-2">{item.title}</h3>
                  <p className="font-body text-sm text-[var(--text-secondary)] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
