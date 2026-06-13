'use client';

import { useRef, useEffect, type ReactNode, type ElementType } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  /** Animation direction — which axis the element slides from */
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  /** Delay in seconds before the animation starts */
  delay?: number;
  /** Duration of the reveal animation */
  duration?: number;
  /** Distance in pixels for the slide */
  distance?: number;
  /** Whether to also scale in */
  scale?: boolean;
  /** Start trigger position */
  start?: string;
  /** HTML element to render */
  as?: ElementType;
}

/**
 * Reusable scroll-triggered reveal wrapper.
 * Wraps children in a GSAP-powered fade+slide animation triggered on scroll.
 * Uses gsap.context() for memory-safe cleanup on unmount.
 */
export function ScrollReveal({
  children,
  className = '',
  direction = 'up',
  delay = 0,
  duration = 0.8,
  distance = 40,
  scale = false,
  start = 'top 85%',
  as: Tag = 'div',
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const from: gsap.TweenVars = { opacity: 0 };
    if (direction === 'up') from.y = distance;
    if (direction === 'down') from.y = -distance;
    if (direction === 'left') from.x = distance;
    if (direction === 'right') from.x = -distance;
    if (scale) from.scale = 0.95;

    const to: gsap.TweenVars = {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      duration,
      delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: ref.current,
        start,
        toggleActions: 'play none none reverse',
      },
    };

    const ctx = gsap.context(() => {
      gsap.fromTo(ref.current, from, to);
    }, ref);

    return () => ctx.revert();
  }, [direction, delay, duration, distance, scale, start]);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
