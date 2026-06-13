'use client';

interface MarqueeStripProps {
  /** Array of text items to scroll across */
  items: string[];
  /** Speed — lower = faster. Defines animation duration in seconds */
  speed?: number;
  /** Optional separator between items */
  separator?: string;
  /** Direction of scroll */
  direction?: 'left' | 'right';
  /** Additional CSS classes for the container */
  className?: string;
}

/**
 * Infinite horizontal scrolling marquee strip — Webflow-style.
 * Uses pure CSS keyframes for GPU-accelerated, jank-free performance.
 * No layout-thrashing properties are animated (transform only).
 */
export function MarqueeStrip({
  items,
  speed = 30,
  separator = '·',
  direction = 'left',
  className = '',
}: MarqueeStripProps) {
  const content = items.map((item, i) => (
    <span key={i} className="flex items-center gap-8 shrink-0">
      <span className="font-cinzel text-sm md:text-base tracking-[0.15em] uppercase whitespace-nowrap">
        {item}
      </span>
      <span className="text-[var(--accent-gold)] opacity-40 text-lg">{separator}</span>
    </span>
  ));

  return (
    <div
      className={`overflow-hidden py-5 border-y border-[var(--border-subtle)] ${className}`}
      aria-hidden="true"
    >
      <div
        className="flex gap-8 w-max"
        style={{
          animation: `marquee-${direction} ${speed}s linear infinite`,
        }}
      >
        {/* Duplicate content for seamless loop */}
        {content}
        {content}
        {content}
      </div>
    </div>
  );
}
