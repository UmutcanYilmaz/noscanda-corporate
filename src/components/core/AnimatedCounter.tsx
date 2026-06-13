'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface AnimatedCounterProps {
  /** Target numeric value to count up to */
  end: number;
  /** Optional prefix (e.g. "₺") */
  prefix?: string;
  /** Optional suffix (e.g. "+", "M", "%") */
  suffix?: string;
  /** Duration of the count-up animation in seconds */
  duration?: number;
  /** Decimal places to display */
  decimals?: number;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Animated number counter that triggers on scroll into view.
 * Counts from 0 to the target value using GSAP with memory-safe cleanup.
 */
export function AnimatedCounter({
  end,
  prefix = '',
  suffix = '',
  duration = 2,
  decimals = 0,
  className = '',
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    if (!ref.current || animatedRef.current) return;

    const el = ref.current;
    const ctx = gsap.context(() => {
      const counter = { value: 0 };

      ScrollTrigger.create({
        trigger: el,
        start: 'top 90%',
        once: true,
        onEnter: () => {
          animatedRef.current = true;
          gsap.to(counter, {
            value: end,
            duration,
            ease: 'power2.out',
            onUpdate: () => {
              if (el) {
                const rounded = decimals > 0 ? counter.value.toFixed(decimals) : Math.round(counter.value).toString();
                el.textContent = `${prefix}${rounded}${suffix}`;
              }
            },
          });
        },
      });
    }, el);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <span ref={ref} className={className}>
      {prefix}0{suffix}
    </span>
  );
}
