'use client';

import { useState } from 'react';
import { ScrollReveal } from '@/components/core/ScrollReveal';

const INITIAL_FORM = { name: '', email: '', subject: 'Genel Bilgi', message: '' };

const INFO_ITEMS = [
  { label: "Genel Merkez", value: "Yeni Bağlıca Mahallesi, Karatuz Caddesi 77/7 Etimesgut Ankara", icon: "📍" },
  { label: "E-posta", value: "info@noscanda.com", icon: "✉️" },
  { label: "Telefon", value: "0545 301 6605", icon: "📞" },
  { label: "Çalışma Saatleri", value: "Pazartesi - Cuma, 09:00 - 18:00", icon: "🕐" },
];

const DEPARTMENTS = [
  { dept: "Bayilik & Franchise", email: "franchise@noscanda.com" },
  { dept: "B2B & Kurumsal", email: "b2b@noscanda.com" },
  { dept: "DMO & Kamu", email: "dmo@noscanda.com" },
  { dept: "Basın & İletişim", email: "press@noscanda.com" },
];

/**
 * Genel Merkez Contact Form Section
 */
export function ContactForm() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm(INITIAL_FORM);
  };

  const inputClasses = `w-full px-4 py-3.5 bg-[var(--bg-primary)] border border-[var(--border-strong)] rounded-lg
    font-body text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)]
    focus:border-[var(--accent-gold)] focus:ring-1 focus:ring-[var(--accent-gold)] focus:outline-none
    transition-all duration-300`;

  return (
    <section className="section-padding bg-[var(--bg-primary)] relative overflow-hidden">
      {/* Floating orbs */}
      <div className="floating-orb floating-orb-gold w-[350px] h-[350px] -top-[120px] -right-[100px]" />
      <div className="floating-orb floating-orb-warm w-[250px] h-[250px] -bottom-[100px] -left-[100px]" />
      <div className="max-w-[1100px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <ScrollReveal direction="up" delay={0.1}>
            <div>
              <h2 className="font-cinzel text-section-heading font-semibold text-[var(--text-primary)] mb-8">
                İletişim Bilgileri
              </h2>

              <div className="space-y-6">
                {INFO_ITEMS.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <span className="text-xl flex-shrink-0">{item.icon}</span>
                    <div>
                      <p className="font-gothic text-xs tracking-[0.15em] uppercase text-[var(--accent-gold)] mb-1">{item.label}</p>
                      <p className="font-body text-sm text-[var(--text-secondary)]">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <h3 className="font-cinzel text-base font-semibold text-[var(--text-primary)] mb-4">Departmanlar</h3>
                <div className="space-y-3">
                  {DEPARTMENTS.map((d) => (
                    <div key={d.dept} className="flex items-center justify-between py-2.5 border-b border-[var(--border-subtle)]">
                      <span className="font-body text-sm text-[var(--text-primary)]">{d.dept}</span>
                      <span className="font-body text-sm text-[var(--accent-gold)]">{d.email}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal direction="up" delay={0.2}>
            <div className="surface-elevated rounded-2xl p-8 lg:p-10 shadow-glass border border-[var(--border-subtle)]">
              <h2 className="font-cinzel text-lg font-semibold text-[var(--text-primary)] mb-8">
                Mesaj Gönderin
              </h2>

              {submitted && (
                <div className="mb-6 px-5 py-4 rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-700">
                  <p className="font-body text-sm font-medium">✓ Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="font-gothic text-[0.65rem] tracking-[0.15em] uppercase text-[var(--text-muted)] block mb-2">
                    Ad Soyad
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={inputClasses}
                    placeholder="Adınız ve soyadınız"
                  />
                </div>
                <div>
                  <label className="font-gothic text-[0.65rem] tracking-[0.15em] uppercase text-[var(--text-muted)] block mb-2">
                    E-posta
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={inputClasses}
                    placeholder="email@örnek.com"
                  />
                </div>
                <div>
                  <label className="font-gothic text-[0.65rem] tracking-[0.15em] uppercase text-[var(--text-muted)] block mb-2">
                    Konu
                  </label>
                  <select
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className={inputClasses}
                  >
                    <option>Genel Bilgi</option>
                    <option>Bayilik Başvurusu</option>
                    <option>B2B İş Birliği</option>
                    <option>DMO & Kamu Tedariği</option>
                    <option>Basın & Medya</option>
                  </select>
                </div>
                <div>
                  <label className="font-gothic text-[0.65rem] tracking-[0.15em] uppercase text-[var(--text-muted)] block mb-2">
                    Mesajınız
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={`${inputClasses} resize-none`}
                    placeholder="Mesajınızı buraya yazın..."
                  />
                </div>
                <button type="submit" className="btn-primary w-full">
                  Gönder
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
