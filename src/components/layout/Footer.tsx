'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FOOTER_COLUMNS } from '@/lib/constants';

/** SVG social icons — proper vector icons instead of text initials */
const SOCIALS = [
  {
    name: 'Instagram',
    href: '#',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: '#',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    name: 'X',
    href: '#',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

const CERTIFICATIONS = [
  'IFRA Sertifikalı',
  'ISO 9001',
  'Grasse Yağlar',
  'DMO Tescilli',
];

/**
 * Multi-column corporate mega-footer with newsletter signup, certifications,
 * and premium design elements.
 * Client Component — requires event handler for newsletter form.
 */
export function Footer() {
  return (
    <footer id="site-footer" className="relative bg-[var(--section-dark-bg)] text-[var(--section-dark-text)]">
      {/* NC Monogram Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none select-none">
        <Image
          src="/logolar/logolar-1024x1024/nos-canda-logo-bw.png"
          alt=""
          width={400}
          height={400}
          className="w-[300px] h-auto invert"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-10">

        {/* Newsletter Section */}
        <div className="py-16 border-b border-white/[0.06]">
          <div className="max-w-2xl mx-auto text-center">
            <span className="font-gothic text-[0.6rem] tracking-[0.3em] uppercase text-[var(--accent-gold-hover)] block mb-4">
              Bülten
            </span>
            <h3 className="font-cinzel text-2xl font-semibold text-[var(--section-dark-text)] mb-3">
              Koku Dünyasından Haberdar Olun
            </h3>
            <p className="font-body text-sm text-[var(--section-dark-muted)] mb-8">
              Yeni koleksiyonlar, bayilik fırsatları ve Vakıf etkinliklerinden ilk siz haberdar olun.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="E-posta adresiniz"
                className="flex-1 px-4 py-3 bg-white/[0.05] border border-white/[0.08] rounded-lg font-body text-sm text-white placeholder:text-white/30 focus:border-[var(--accent-gold)] focus:outline-none transition-colors duration-300 min-h-[44px]"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Abone Ol
              </button>
            </form>
          </div>
        </div>

        {/* Brand Statement */}
        <div className="py-12 text-center">
          <Image
            src="/logolar/logolar-781x125/nos-canda-logo-bw.png"
            alt="Nos Canda Group"
            width={140}
            height={22}
            className="h-[18px] w-auto mx-auto mb-4 opacity-40 invert"
          />
          <p className="font-faraz text-sm italic text-[var(--section-dark-muted)] max-w-md mx-auto">
            &ldquo;İnsanlar kelimeleri unutur, yüzleri unutur ama kokuyu asla unutmaz.&rdquo;
          </p>
        </div>

        {/* Gold Shimmer Line */}
        <div className="gold-line mb-12 max-w-xs mx-auto" />

        {/* Footer Columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mb-16">
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title}>
              <h3 className="font-gothic text-xs tracking-[0.2em] uppercase text-[var(--accent-gold-hover)] mb-5">
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      href={link.href}
                      className="font-body text-sm text-[var(--section-dark-muted)]
                        hover:text-[var(--accent-gold-hover)] transition-colors duration-300 underline-draw"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Certifications strip */}
        <div className="py-6 border-t border-white/[0.06] mb-8">
          <div className="flex flex-wrap justify-center gap-6">
            {CERTIFICATIONS.map((cert) => (
              <span key={cert} className="font-gothic text-[0.6rem] tracking-[0.2em] uppercase text-white/20">
                {cert}
              </span>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/[0.06] mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8">
          {/* Brand + Copyright */}
          <div className="flex items-center gap-4">
            <Image
              src="/logolar/logolar-512x512/nos-canda-group-logo.png"
              alt="Noscanda Group"
              width={32}
              height={32}
              className="w-8 h-8 opacity-30 invert"
            />
            <span className="font-gothic text-xs tracking-[0.1em] text-white/30">
              © {new Date().getFullYear()} Noscanda Group. Tüm hakları saklıdır.
            </span>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {SOCIALS.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="w-9 h-9 flex items-center justify-center rounded-full
                  border border-white/[0.08]
                  text-white/40 hover:text-[var(--accent-gold-hover)]
                  hover:border-[var(--accent-gold-hover)] transition-all duration-300"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
