import React, { useEffect, useRef, useState } from 'react';

export type ImageAnimationType =
  | 'slide-up'
  | 'slide-left'
  | 'slide-right'
  | 'zoom-reveal'
  | 'fade-reveal';

export interface AnimatedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  animation?: ImageAnimationType;
  floating?: boolean;
  hoverZoom?: boolean;
  parallax?: boolean;
  parallaxSpeed?: number; // e.g. 0.08 for subtle, 0.15 for stronger
  threshold?: number;
  delay?: number; // ms
  containerClassName?: string;
}

export const AnimatedImage: React.FC<AnimatedImageProps> = ({
  animation = 'slide-up',
  floating = false,
  hoverZoom = true,
  parallax = false,
  parallaxSpeed = 0.08,
  threshold = 0.12,
  delay = 0,
  className = '',
  containerClassName = '',
  src,
  alt = '',
  loading = 'lazy',
  ...rest
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [parallaxOffset, setParallaxOffset] = useState(0);

  // 1. Intersection Observer for Scroll Reveal
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Check if IntersectionObserver is available
    if (typeof IntersectionObserver === 'undefined') {
      setIsRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (delay > 0) {
              setTimeout(() => setIsRevealed(true), delay);
            } else {
              setIsRevealed(true);
            }
            observer.unobserve(el);
          }
        });
      },
      {
        threshold,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [threshold, delay]);

  // 2. Parallax Motion Effect on Scroll
  useEffect(() => {
    if (!parallax) return;

    // Check prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const el = containerRef.current;
          if (el) {
            const rect = el.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Only calculate if visible or nearby
            if (rect.top < windowHeight && rect.bottom > 0) {
              const elementCenter = rect.top + rect.height / 2;
              const viewportCenter = windowHeight / 2;
              const distance = elementCenter - viewportCenter;

              // Smooth, subtle shift
              const offset = Math.round(-distance * parallaxSpeed);
              setParallaxOffset(offset);
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [parallax, parallaxSpeed]);

  const animationClass = `anim-${animation}`;

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden relative ${containerClassName}`}
    >
      <div
        className={`w-full h-full ${
          parallax ? 'parallax-layer' : ''
        } ${floating ? 'img-floating' : ''}`}
        style={
          parallax
            ? {
                transform: `translate3d(0, ${parallaxOffset}px, 0)`,
              }
            : undefined
        }
      >
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          loading={loading}
          className={`w-full h-full object-cover img-reveal-init ${animationClass} ${
            isRevealed ? 'is-revealed' : ''
          } ${hoverZoom ? 'img-hover-zoom' : ''} ${className}`}
          {...rest}
        />
      </div>
    </div>
  );
};
