import Link from 'next/link';

interface PlaceholderProps {
  title: string;
  subtitle?: string;
}

/**
 * Reusable "Çok Yakında" placeholder page component.
 * Centered layout with NC watermark aesthetic and back-to-home CTA.
 */
export function PlaceholderPage({ title, subtitle }: PlaceholderProps) {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[var(--bg-primary)] pt-[72px]">
      <div className="text-center space-y-6 px-6">
        <span className="font-gothic text-[0.65rem] tracking-[0.3em] uppercase text-[var(--text-muted)] block">
          Çok Yakında
        </span>
        <h1 className="font-cinzel text-section-heading font-semibold text-[var(--text-primary)]">
          {title}
        </h1>
        {subtitle && (
          <p className="font-body text-sm text-[var(--text-secondary)] max-w-md mx-auto">
            {subtitle}
          </p>
        )}
        <p className="font-body text-sm text-[var(--text-muted)]">
          Bu sayfa yapım aşamasındadır.
        </p>
        <Link
          href="/"
          className="inline-block font-gothic text-[0.8rem] tracking-[0.15em] uppercase
            text-[var(--accent-gold)] border border-[var(--border-gold)] px-8 py-3
            hover:bg-[var(--accent-gold)] hover:text-[var(--bg-primary)] transition-all duration-300"
        >
          Ana Sayfa
        </Link>
      </div>
    </section>
  );
}
