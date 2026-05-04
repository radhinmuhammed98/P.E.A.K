'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      ref={ref}
      className="section-padding relative overflow-hidden"
      style={{ background: '#f2f2f4' }}
    >
      {/* Background ornament */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 40px,
            rgba(198,167,105,0.5) 40px,
            rgba(198,167,105,0.5) 41px
          )`,
        }}
      />

      <div
        className="absolute top-0 left-0 right-0 h-1 opacity-60"
        style={{ background: 'linear-gradient(90deg, transparent, #c6a769, transparent)' }}
      />

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 text-center">
        {/* Logo emblem */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div
            className="w-20 h-20 border-2 border-peak-gold/40 rotate-45 flex items-center justify-center"
            style={{ background: 'rgba(198,167,105,0.06)' }}
          >
            <div
              className="w-8 h-8 border border-peak-gold/60 rotate-0 flex items-center justify-center"
              style={{ background: 'rgba(198,167,105,0.1)' }}
            >
              <div className="w-2 h-2 bg-peak-gold rounded-full animate-pulse" />
            </div>
          </div>
        </motion.div>

        <motion.div
          className="flex items-center justify-center gap-4 mb-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-peak-gold/40" />
          <span
            className="text-peak-gold text-xs tracking-[0.5em] uppercase"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Reserve Yours Today
          </span>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-peak-gold/40" />
        </motion.div>

        <motion.h2
          className="text-5xl md:text-7xl font-bold text-peak-text mb-4 leading-tight"
          style={{ fontFamily: 'Cinzel, serif', letterSpacing: '0.04em' }}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Reserve Your
        </motion.h2>
        <motion.h2
          className="text-5xl md:text-7xl font-bold text-gold-gradient mb-8 leading-tight"
          style={{ fontFamily: 'Cinzel, serif', letterSpacing: '0.04em' }}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
        >
          P.E.A.K
        </motion.h2>

        <motion.p
          className="text-peak-muted text-lg md:text-xl leading-relaxed mb-12 max-w-2xl mx-auto"
          style={{ fontFamily: 'Cormorant Garamond, serif' }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Join the select few who will experience the pinnacle of automotive achievement. 
          A fully refundable reservation secures your allocation with a deposit of $10,000. 
          Deliveries commence Q1 2026.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-5 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <button className="btn-primary text-sm">
            <span>Reserve Now — $10,000</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <Link href="/configurator" className="btn-ghost">
            <span>Configure Your Build</span>
          </Link>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          className="flex flex-wrap justify-center gap-8 md:gap-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          {[
            { icon: '◈', label: 'Fully Refundable' },
            { icon: '◎', label: '24-Month Delivery' },
            { icon: '◇', label: 'Bespoke Configuration' },
            { icon: '⬡', label: 'Lifetime Service' },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2 text-peak-muted">
              <span className="text-peak-gold text-sm">{item.icon}</span>
              <span className="text-xs tracking-widest uppercase" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {item.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
