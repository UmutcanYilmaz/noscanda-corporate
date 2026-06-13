import { ScrollReveal } from '@/components/core/ScrollReveal';

/**
 * Hikayemiz Origin Story Section
 */
export function Origin() {
  return (
    <section className="section-padding bg-[var(--bg-primary)]">
      <div className="max-w-[900px] mx-auto px-6">
        <ScrollReveal direction="up">
          <span className="badge-corporate block mb-4">Başlangıç</span>
          <h2 className="font-cinzel text-3xl font-bold text-[var(--text-primary)] mb-6">
            Tutkudan Markaya
          </h2>
          <div className="space-y-6">
            <p className="font-body text-base text-[var(--text-secondary)] leading-relaxed">
              Nos Canda, koku endüstrisindeki büyük boşluğu fark eden bir kadın girişimcinin 
              vizyonuyla doğdu. Piyasadaki çoğu oda kokusu and araç parfümü, düşük esans 
              konsantrasyonlu, kısa ömürlü and gerçek bir olfaktif deneyim sunmaktan uzaktı.
            </p>
            <p className="font-body text-base text-[var(--text-secondary)] leading-relaxed">
              Bu gerçeklik, Nos Canda&apos;nın temel felsefesini şekillendirdi: yüksek konsantrasyonlu, 
              uzun ömürlü, gerçekten hissedilen kokular üretmek. Ticari seyreltme mantığını 
              reddetmek and müşteriye dürüst bir ürün sunmak.
            </p>
            <p className="font-body text-base text-[var(--text-secondary)] leading-relaxed">
              Bugün Noscanda Group, premium reed diffuser, auto fragrance, kişisel parfüm koleksiyonları 
              and kurumsal koku çözümleri ile Türkiye&apos;nin sayılı Extrait de Parfum konsantrasyonlu 
              kozmetik gruplarından biri olarak büyümeye devam ediyor.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
