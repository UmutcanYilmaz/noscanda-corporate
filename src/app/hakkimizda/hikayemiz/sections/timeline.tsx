import { ScrollReveal } from '@/components/core/ScrollReveal';

const MILESTONES = [
  { year: "2023", event: "Nos Canda markası kuruldu. İlk reed diffuser formülasyonları geliştirildi." },
  { year: "2024", event: "Premium Auto Fragrance serisi lansmanı. İlk bayilik anlaşmaları imzalandı." },
  { year: "2025", event: "Nos Canda Akademi and Vakfı kuruldu. DMO İRAY ortaklığı başladı." },
  { year: "2026", event: "Perfume Collection lansmanı. Monolith Kiosk franchise sistemi genişledi." },
];

/**
 * Hikayemiz Timeline Section
 */
export function Timeline() {
  return (
    <section className="section-padding bg-[var(--bg-primary)] border-t border-[var(--border-subtle)]">
      <div className="max-w-[700px] mx-auto px-6">
        <div className="text-center mb-14">
          <span className="badge-corporate block mb-4">Yolculuk</span>
          <h2 className="font-cinzel text-3xl font-bold text-[var(--text-primary)] mb-4">
            Zaman Çizelgesi
          </h2>
        </div>

        <div className="space-y-8">
          {MILESTONES.map((milestone, idx) => (
            <ScrollReveal key={milestone.year} direction="left" delay={0.1 * idx}>
              <div className="flex gap-6 items-start">
                <span className="font-cinzel text-2xl font-bold text-[var(--accent-gold)] flex-shrink-0 w-16">{milestone.year}</span>
                <div className="pt-1 flex-1">
                  <div className="w-2 h-2 rounded-full bg-[var(--accent-gold)] mb-2" />
                  <p className="font-body text-sm text-[var(--text-secondary)] leading-relaxed">{milestone.event}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
