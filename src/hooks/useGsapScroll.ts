'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Reusable GSAP ScrollTrigger hook with automatic context cleanup.
 * Wraps timeline creation inside gsap.context() for memory-safe unmounting.
 * 
 * @param animationFactory - Callback that receives the container ref's element
 *   and returns void. Build your timeline/tweens inside this callback.
 * @param deps - Optional dependency array for re-running the animation.
 */
export function useGsapScroll(
  animationFactory: (container: HTMLElement) => void,
  deps: React.DependencyList = []
) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      animationFactory(containerRef.current!);
    }, containerRef);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return containerRef;
}
