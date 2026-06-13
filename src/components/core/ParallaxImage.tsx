'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ParallaxImageProps {
  src: string;
  alt: string;
  /** CSS classes for the outer container */
  className?: string;
  /** Parallax intensity — how far the image shifts (in pixels) */
  intensity?: number;
  /** Aspect ratio for the container */
  aspectRatio?: string;
  /** Optional overlay gradient */
  overlay?: boolean;
  /** Optional border radius */
  rounded?: string;
}

/**
 * Parallax scrolling image container.
 * The inner image translates vertically based on scroll position using GSAP ScrollTrigger.
 * Only transform properties are animated to ensure 60fps rendering.
 */
export function ParallaxImage({
  src,
  alt,
  className = '',
  intensity = 60,
  aspectRatio = '16/9',
  overlay = false,
  rounded = 'rounded-2xl',
}: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !imageRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(imageRef.current,
        { y: -intensity / 2 },
        {
          y: intensity / 2,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [intensity]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${rounded} ${className}`}
      style={{ aspectRatio }}
    >
      <div ref={imageRef} className="absolute inset-0 scale-[1.2]" style={{ willChange: 'transform' }}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          loading="lazy"
        />
      </div>
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--section-dark-bg)]/40 to-transparent pointer-events-none" />
      )}
    </div>
  );
}
