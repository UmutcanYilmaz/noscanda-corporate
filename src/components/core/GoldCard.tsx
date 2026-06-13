import type { ReactNode } from 'react';

interface GoldCardProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

/**
 * Glassmorphic card with gold border accent and ambient shadow.
 * Uses warm ivory design tokens for a premium light-mode aesthetic.
 */
export function GoldCard({ children, className = '', id }: GoldCardProps) {
  return (
    <div
      id={id}
      className={`glass-gold rounded-2xl p-8 card-hover ${className}`}
    >
      {children}
    </div>
  );
}
