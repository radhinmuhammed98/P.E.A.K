'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useScroll, useTransform } from 'framer-motion';
import dynamic from 'next/dynamic';
import Link from 'next/link';

const CarViewer = dynamic(() => import('./3d/CarViewer'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="text-white/30 text-sm tracking-widest animate-pulse" style={{ fontFamily: 'Poppins, sans-serif' }}>
        Loading...
      </div>
    </div>
  ),
});

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  const [isMobile, setIsMobile] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Storytelling Opacity & Transforms
  const opacity1 = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.25], [0, -50]);

  const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.45, 0.55], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.3, 0.45, 0.55], [50, 0, 0, -50]);

  const opacity3 = useTransform(scrollYProgress, [0.45, 0.55, 0.7, 0.8], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.45, 0.55, 0.7, 0.8], [50, 0, 0, -50]);

  const opacity4 = useTransform(scrollYProgress, [0.7, 0.8, 1], [0, 1, 1]);
  const y4 = useTransform(scrollYProgress, [0.7, 0.8], [50, 0]);

  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0.9, 1], [1, 0]);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // We attach the mouse move to the window when in the hero section to keep the parallax working
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      // Only apply parallax if the top of the container is within view bounds roughly
      if (rect.top > window.innerHeight || rect.bottom < 0) return;
      
      const x = (e.clientX - window.innerWidth / 2) / window.innerWidth;
      const y = (e.clientY - window.innerHeight / 2) / window.innerHeight;
      mouseX.set(x * 20);
      mouseY.set(y * 10);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section
      id="hero-section"
      ref={containerRef}
      className="relative w-full h-[400vh]"
      style={{ background: 'linear-gradient(135deg, #0a0a0c 0%, #14120e 50%, #0a0a0c 100%)' }}
    >
      <div className="sticky top-0 w-full h-screen overflow-hidden">
        {/* Background gradient orbs */}
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(198,167,105,0.2) 0%, transparent 60%)',
          }}
        />
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 60% 40% at 30% 40%, rgba(100,120,200,0.15) 0%, transparent 60%)',
          }}
        />

        {/* Grain texture */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px',
          }}
        />

        {/* 3D Car canvas with parallax */}
        <motion.div
          className="absolute inset-0"
          style={
            !isMobile
              ? {
                  x: springX,
                  y: springY,
                }
              : {}
          }
        >
          <CarViewer color="#1a1a2e" interactive scrollTriggerSelector="#hero-section" />
        </motion.div>

        {/* Overlay gradient for readability */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to right, rgba(10,10,12,0.8) 0%, rgba(10,10,12,0.3) 50%, transparent 100%)',
          }}
        />

        {/* --- Story Section 1: Introduction --- */}
        <motion.div style={{ opacity: opacity1, y: y1 }} className="absolute inset-0 flex items-center pointer-events-none">
          <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
            <div className="max-w-xl pointer-events-auto">
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-6">
                <div className="gold-line" />
                <span
                  className="text-peak-gold text-xs tracking-[0.4em] uppercase"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Luxury • Performance • Innovation
                </span>
              </div>

              {/* Main brand name */}
              <h1
                className="font-display text-7xl md:text-9xl font-bold text-white leading-none mb-3"
                style={{ fontFamily: 'Cinzel, serif', letterSpacing: '0.05em' }}
              >
                P.E.A.K
              </h1>

              {/* Tagline */}
              <p
                className="font-elegant text-xl md:text-2xl text-white/60 mb-2 italic"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                Engineered to the Peak of Perfection.
              </p>

              {/* Sub tagline */}
              <p
                className="text-white/40 text-sm tracking-widest uppercase mb-10"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Precision Engineered Automotive Kinetics
              </p>

              {/* Glass divider */}
              <div className="w-full h-px bg-gradient-to-r from-peak-gold/60 via-peak-gold/20 to-transparent mb-10" />

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="#models"
                  className="btn-primary"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('models')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <span>Explore Models</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <Link href="/configurator" className="btn-ghost-white">
                  <span>Build Your Car</span>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* --- Story Section 2: Rotation Focus --- */}
        <motion.div style={{ opacity: opacity2, y: y2 }} className="absolute inset-0 flex items-center pointer-events-none">
          <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
            <div className="max-w-xl pointer-events-auto">
              <h2 className="font-display text-5xl md:text-7xl font-bold text-white mb-4" style={{ fontFamily: 'Cinzel, serif' }}>Sculpted Aerodynamics</h2>
              <div className="w-12 h-1 bg-peak-gold mb-6" />
              <p className="text-white/60 text-lg leading-relaxed font-elegant" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Every curve and line meticulously crafted to slice through the air. Experience a drag coefficient that defies logic and elevates performance to unparalleled heights.
              </p>
            </div>
          </div>
        </motion.div>

        {/* --- Story Section 3: Zoom into details --- */}
        <motion.div style={{ opacity: opacity3, y: y3 }} className="absolute inset-0 flex items-center pointer-events-none">
          <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex justify-end">
            <div className="max-w-xl text-right pointer-events-auto">
              <h2 className="font-display text-5xl md:text-7xl font-bold text-white mb-4" style={{ fontFamily: 'Cinzel, serif' }}>Unrivaled Detail</h2>
              <div className="w-12 h-1 bg-peak-gold mb-6 ml-auto" />
              <p className="text-white/60 text-lg leading-relaxed font-elegant" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Carbon fiber accents, precision machined alloys, and an attention to detail that borders on absolute obsession. We left nothing to chance.
              </p>
            </div>
          </div>
        </motion.div>

        {/* --- Story Section 4: Full reveal --- */}
        <motion.div style={{ opacity: opacity4, y: y4 }} className="absolute inset-0 flex items-center justify-center text-center pointer-events-none">
          <div className="max-w-3xl pointer-events-auto bg-black/40 backdrop-blur-md p-10 rounded-2xl border border-white/10">
            <h2 className="font-display text-5xl md:text-7xl font-bold text-gold-gradient mb-4" style={{ fontFamily: 'Cinzel, serif' }}>The Pinnacle</h2>
            <p className="text-white/80 text-xl leading-relaxed font-elegant mb-8" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Are you ready to redefine your expectations?
            </p>
            <Link href="/configurator" className="btn-primary mx-auto">
              <span>Reserve Your P.E.A.K</span>
            </Link>
          </div>
        </motion.div>

        {/* Scroll indicator always visible until end */}
        <motion.div
          style={{ opacity: scrollIndicatorOpacity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 pointer-events-none"
        >
          <span className="text-xs tracking-[0.3em] uppercase" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Scroll
          </span>
          <motion.div
            className="w-px h-12 bg-gradient-to-b from-peak-gold/60 to-transparent"
            animate={{ scaleY: [1, 0.3, 1], opacity: [0.8, 0.2, 0.8] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>

        {/* Side stats (Visible in phase 1 & 4) */}
        <motion.div
          style={{ opacity: useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [1, 0, 0, 1]) }}
          className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-6 pointer-events-none"
        >
          {[
            { label: '0-60', value: '2.4s' },
            { label: 'Top Speed', value: '240mph' },
            { label: 'Range', value: '500mi' },
          ].map((stat) => (
            <div key={stat.label} className="text-right">
              <div className="text-peak-gold text-xl font-bold" style={{ fontFamily: 'Cinzel, serif' }}>
                {stat.value}
              </div>
              <div className="text-white/40 text-xs tracking-widest uppercase" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
