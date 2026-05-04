'use client';

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

export default function InteriorSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.08, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section
      id="interior"
      ref={ref}
      className="relative overflow-hidden"
      style={{ minHeight: '90vh' }}
    >
      {/* Background with gradient simulating luxury interior */}
      <motion.div
        className="absolute inset-0"
        style={{ scale }}
      >
        {/* Luxury interior gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(135deg, 
                #1a0f08 0%, 
                #2d1a0a 20%, 
                #1a1008 40%, 
                #3d2510 60%, 
                #1a0f08 80%, 
                #0d0806 100%
              )
            `,
          }}
        />

        {/* Leather texture simulation */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                45deg,
                transparent,
                transparent 2px,
                rgba(198,167,105,0.05) 2px,
                rgba(198,167,105,0.05) 4px
              )
            `,
          }}
        />

        {/* Dashboard glow */}
        <div
          className="absolute bottom-0 left-0 right-0 h-1/3"
          style={{
            background: 'radial-gradient(ellipse 80% 100% at 50% 100%, rgba(198,167,105,0.15) 0%, transparent 70%)',
          }}
        />

        {/* SVG Interior Illustration */}
        <svg
          className="absolute inset-0 w-full h-full opacity-60"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Steering wheel */}
          <circle cx="520" cy="680" r="100" fill="none" stroke="rgba(198,167,105,0.3)" strokeWidth="3" />
          <circle cx="520" cy="680" r="80" fill="none" stroke="rgba(198,167,105,0.15)" strokeWidth="1" />
          <circle cx="520" cy="680" r="20" fill="rgba(198,167,105,0.1)" stroke="rgba(198,167,105,0.4)" strokeWidth="2" />
          <line x1="520" y1="580" x2="520" y2="660" stroke="rgba(198,167,105,0.3)" strokeWidth="2" />
          <line x1="420" y1="680" x2="500" y2="680" stroke="rgba(198,167,105,0.3)" strokeWidth="2" />
          <line x1="540" y1="680" x2="620" y2="680" stroke="rgba(198,167,105,0.3)" strokeWidth="2" />
          <line x1="520" y1="700" x2="520" y2="780" stroke="rgba(198,167,105,0.3)" strokeWidth="2" />
          
          {/* Dashboard */}
          <rect x="0" y="500" width="1440" height="400" rx="0" fill="rgba(30,18,8,0.8)" />
          
          {/* Center console */}
          <rect x="580" y="500" width="280" height="400" rx="0" fill="rgba(40,24,10,0.9)" />
          
          {/* Display screen */}
          <rect x="640" y="520" width="160" height="280" rx="12" fill="rgba(10,15,25,0.8)" stroke="rgba(198,167,105,0.2)" strokeWidth="1" />
          
          {/* Screen content */}
          <circle cx="720" cy="620" r="60" fill="none" stroke="rgba(198,167,105,0.2)" strokeWidth="1" />
          <circle cx="720" cy="620" r="45" fill="none" stroke="rgba(198,167,105,0.15)" strokeWidth="1" />
          <text x="720" y="615" textAnchor="middle" fill="rgba(198,167,105,0.6)" fontSize="14" fontFamily="Cinzel">P.E.A.K</text>
          <text x="720" y="635" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="9" fontFamily="Poppins">DRIVE MODE</text>
          
          {/* Speed lines */}
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => {
            const rad = (angle - 90) * (Math.PI / 180);
            const x1 = 720 + 55 * Math.cos(rad);
            const y1 = 620 + 55 * Math.sin(rad);
            const x2 = 720 + 62 * Math.cos(rad);
            const y2 = 620 + 62 * Math.sin(rad);
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(198,167,105,0.4)" strokeWidth="1.5" />;
          })}

          {/* Needle */}
          <line x1="720" y1="620" x2="762" y2="600" stroke="#c6a769" strokeWidth="1.5" strokeLinecap="round" />
          
          {/* Seat outline - left */}
          <path d="M80 600 Q80 500 160 500 L280 500 Q340 500 340 600 L340 900 L80 900 Z" fill="rgba(50,28,10,0.6)" stroke="rgba(198,167,105,0.1)" strokeWidth="1" />
          <path d="M120 520 Q120 490 180 490 L240 490 Q290 490 290 520 L290 580 L120 580 Z" fill="rgba(60,35,12,0.7)" stroke="rgba(198,167,105,0.1)" strokeWidth="1" />
          
          {/* Headrest */}
          <rect x="140" y="430" width="120" height="70" rx="20" fill="rgba(55,32,11,0.8)" stroke="rgba(198,167,105,0.15)" strokeWidth="1" />
          
          {/* Seat lines (quilted leather) */}
          {[540, 560, 580].map((y, i) => (
            <line key={i} x1="125" y1={y} x2="285" y2={y} stroke="rgba(198,167,105,0.1)" strokeWidth="0.5" />
          ))}
          {[160, 200, 240, 280].map((x, i) => (
            <line key={i} x1={x} y1="520" x2={x} y2="580" stroke="rgba(198,167,105,0.1)" strokeWidth="0.5" />
          ))}
          
          {/* AC vents */}
          {[200, 250, 300, 350].map((x, i) => (
            <rect key={i} x={x} y="490" width="30" height="6" rx="3" fill="rgba(198,167,105,0.15)" />
          ))}
          
          {/* Ambient lighting line */}
          <path
            d="M0 498 Q360 470 720 485 Q1080 500 1440 475"
            fill="none"
            stroke="rgba(198,167,105,0.4)"
            strokeWidth="2"
          />
          <path
            d="M0 498 Q360 470 720 485 Q1080 500 1440 475"
            fill="none"
            stroke="rgba(198,167,105,0.15)"
            strokeWidth="8"
          />
        </svg>

        {/* Vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 100% 100% at 50% 50%, transparent 40%, rgba(10,8,6,0.8) 100%)',
          }}
        />
      </motion.div>

      {/* Content overlay */}
      <motion.div
        className="relative z-10 flex items-center justify-center min-h-screen px-6 md:px-12"
        style={{ opacity }}
      >
        <div className="text-center max-w-3xl">
          <motion.div
            className="flex items-center justify-center gap-3 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-peak-gold" />
            <span
              className="text-peak-gold text-xs tracking-[0.5em] uppercase"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              The Sanctuary Within
            </span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-peak-gold" />
          </motion.div>

          <motion.h2
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: 'Cinzel, serif', letterSpacing: '0.03em' }}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Where Craft Meets
            <br />
            <span className="text-gold-gradient">Comfort</span>
          </motion.h2>

          <motion.p
            className="text-white/50 text-lg md:text-xl leading-relaxed mb-12 max-w-xl mx-auto"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Each interior is hand-finished by master craftspeople in our atelier in Turin. 
            Eighteen individual leathers. Seven species of sustainably-sourced wood veneer. 
            A thousand hours of careful attention to every detail.
          </motion.p>

          {/* Glass feature cards */}
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            {[
              { icon: '◈', label: 'Hand-Stitched Leather' },
              { icon: '◎', label: '1000W Sonance Audio' },
              { icon: '◇', label: 'Ambient 64-Zone Light' },
            ].map((feature) => (
              <div
                key={feature.label}
                className="flex items-center gap-2 px-5 py-3 rounded-full"
                style={{
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(198,167,105,0.25)',
                  backdropFilter: 'blur(12px)',
                }}
              >
                <span className="text-peak-gold text-sm">{feature.icon}</span>
                <span className="text-white/70 text-xs tracking-widest uppercase" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {feature.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
