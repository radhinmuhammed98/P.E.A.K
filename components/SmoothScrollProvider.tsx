'use client';

import { useEffect, ReactNode } from 'react';

export default function SmoothScrollProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    let lenis: {
      raf: (time: number) => void;
      destroy: () => void;
    } | null = null;

    const initLenis = async () => {
      try {
        const { default: Lenis } = await import('lenis');
        lenis = new Lenis({
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          touchMultiplier: 2,
          infinite: false,
        });

        const raf = (time: number) => {
          if (lenis) {
            lenis.raf(time);
          }
          rafId = requestAnimationFrame(raf);
        };

        let rafId = requestAnimationFrame(raf);

        return () => {
          cancelAnimationFrame(rafId);
          if (lenis) lenis.destroy();
        };
      } catch (e) {
        // Lenis not available, fallback to native scroll
        return () => {};
      }
    };

    let cleanup: (() => void) | undefined;
    initLenis().then((fn) => { cleanup = fn; });

    return () => {
      if (cleanup) cleanup();
    };
  }, []);

  return <>{children}</>;
}
