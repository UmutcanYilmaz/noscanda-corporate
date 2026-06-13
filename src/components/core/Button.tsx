import Link from 'next/link';
import type { ReactNode } from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  href?: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  id?: string;
}

/**
 * Reusable button component with primary (gold fill), secondary (gold border),
 * and ghost (underline link) variants. Renders as <Link> when href is provided.
 */
export function Button({ variant = 'primary', href, children, className = '', onClick, id }: ButtonProps) {
  const base = variant === 'ghost'
    ? `inline-flex items-center gap-2 font-gothic text-[0.8125rem] tracking-[0.15em] uppercase
       text-[var(--accent-gold)] hover:text-[var(--accent-gold-hover)] transition-colors duration-300
       border-b border-[var(--border-gold)] hover:border-[var(--accent-gold)] pb-1 min-h-[44px]`
    : variant === 'primary'
      ? 'btn-primary'
      : 'btn-secondary';

  const classes = `${base} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} id={id}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} onClick={onClick} id={id}>
      {children}
    </button>
  );
}
