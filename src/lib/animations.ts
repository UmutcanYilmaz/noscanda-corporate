/** GSAP timeline factory helpers — keeps animation logic out of components */

/**
 * Creates a staggered fade-up entrance animation config.
 * Animates only transform properties (y, opacity) to avoid layout reflow.
 */
export function fadeUpStagger(stagger = 0.15, distance = 30) {
  return {
    from: { opacity: 0, y: distance },
    to: { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger },
  };
}

/**
 * Creates a horizontal slide entrance config.
 * Direction: negative = from left, positive = from right.
 */
export function slideIn(direction: 'left' | 'right', distance = 100) {
  const x = direction === 'left' ? -distance : distance;
  return {
    from: { opacity: 0, x },
    to: { opacity: 1, x: 0, duration: 1, ease: 'power3.out' },
  };
}

/**
 * Creates a scale-up reveal config for banner-style elements.
 */
export function scaleReveal(startScale = 0.95) {
  return {
    from: { opacity: 0, scale: startScale },
    to: { opacity: 1, scale: 1, duration: 1, ease: 'power2.out' },
  };
}

/**
 * Standard ScrollTrigger defaults for section entrances.
 * start/end tuned for a natural reveal as user scrolls past 20% of trigger.
 */
export function sectionScrollTrigger(trigger: Element | null) {
  return {
    trigger,
    start: 'top 80%',
    end: 'bottom 20%',
    toggleActions: 'play none none reverse',
  };
}
