'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ScrollReveal } from '@/components/core/ScrollReveal';

const INITIAL_FORM = {
  name: '', phone: '', email: '', city: '', district: '', model: 'Monolith Kiosk', note: '',
};

/**
 * Bayilik Başvurusu Form Section
 */
export function FormSection() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setForm(INITIAL_FORM);
  };

  const inputClasses = `w-full px-4 py-3.5 bg-[var(--bg-primary)] border border-[var(--border-strong)] rounded-lg
    font-body text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)]
    focus:border-[var(--accent-gold)] focus:ring-1 focus:ring-[var(--accent-gold)] focus:outline-none
    transition-all duration-300`;

  return (
    <section className="section-padding bg-[var(--bg-primary)] relative overflow-hidden">
      {/* Floating orbs */}
      <div className="floating-orb floating-orb-gold w-[300px] h-[300px] -top-[100px] -right-[100px]" />
      <div className="floating-orb floating-orb-warm w-[250px] h-[250px] -bottom-[100px] -left-[100px]" />
      <div className="max-w-[800px] mx-auto relative z-10">
        <ScrollReveal direction="up" delay={0.1}>
          <div className="surface-elevated rounded-2xl p-8 lg:p-12 shadow-glass border border-[var(--border-subtle)]">
            <h2 className="font-cinzel text-lg font-semibold text-[var(--text-primary)] mb-8">
              Başvuru Formu
            </h2>

            {submitted && (
              <div className="mb-6 px-5 py-4 rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-700">
                <p className="font-body text-sm font-medium">✓ Başvurunuz alındı. Ekibimiz en kısa sürede sizinle iletişime geçecek.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="font-gothic text-[0.65rem] tracking-[0.15em] uppercase text-[var(--text-muted)] block mb-2">Ad Soyad *</label>
                  <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClasses} placeholder="Adınız Soyadınız" />
                </div>
                <div>
                  <label className="font-gothic text-[0.65rem] tracking-[0.15em] uppercase text-[var(--text-muted)] block mb-2">Telefon *</label>
                  <input type="tel" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputClasses} placeholder="+90 (5XX) XXX XX XX" />
                </div>
              </div>
              <div>
                <label className="font-gothic text-[0.65rem] tracking-[0.15em] uppercase text-[var(--text-muted)] block mb-2">E-posta *</label>
                <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClasses} placeholder="email@örnek.com" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="font-gothic text-[0.65rem] tracking-[0.15em] uppercase text-[var(--text-muted)] block mb-2">İl *</label>
                  <input type="text" required value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} className={inputClasses} placeholder="İstanbul" />
                </div>
                <div>
                  <label className="font-gothic text-[0.65rem] tracking-[0.15em] uppercase text-[var(--text-muted)] block mb-2">İlçe *</label>
                  <input type="text" required value={form.district} onChange={(e) => setForm({ ...form, district: e.target.value })} className={inputClasses} placeholder="Kadıköy" />
                </div>
              </div>
              <div>
                <label className="font-gothic text-[0.65rem] tracking-[0.15em] uppercase text-[var(--text-muted)] block mb-2">Model Tercihi</label>
                <select value={form.model} onChange={(e) => setForm({ ...form, model: e.target.value })} className={inputClasses}>
                  <option>Monolith Kiosk</option>
                  <option>Dijital Ortaklık</option>
                  <option>Bölgesel Bayilik</option>
                </select>
              </div>
              <div>
                <label className="font-gothic text-[0.65rem] tracking-[0.15em] uppercase text-[var(--text-muted)] block mb-2">Not</label>
                <textarea rows={3} value={form.note} onChange={(e) => setForm({ ...form, note: e.target.value })} className={`${inputClasses} resize-none`} placeholder="Ek bilgi veya sorularınız..." />
              </div>
              <button type="submit" className="btn-primary w-full">
                Başvuru Gönder
              </button>
            </form>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.2}>
          <div className="mt-8 text-center">
            <p className="font-body text-sm text-[var(--text-muted)] mb-4">
              Bölgenizin müsaitlik durumunu kontrol etmek ister misiniz?
            </p>
            <Link href="/girisimcilik/bolge-kalkani" className="btn-secondary inline-block">
              Bölge Kalkanı Sorgula
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
