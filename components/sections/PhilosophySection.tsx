'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function PhilosophySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="section-padding bg-peak-bg relative overflow-hidden">
      {/* Background elements */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(198,167,105,1) 0%, transparent 70%)',
        }}
      />
      <div className="absolute top-1/4 left-10 w-px h-48 bg-gradient-to-b from-transparent via-peak-gold/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Left column — large display text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-8">
              <div className="gold-line" />
              <span
                className="text-peak-gold text-xs tracking-[0.4em] uppercase"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Our Philosophy
              </span>
            </div>

            {/* Giant quote */}
            <div className="relative">
              <span
                className="text-9xl md:text-[160px] leading-none font-bold opacity-5 select-none absolute -top-8 -left-4"
                style={{ color: '#c6a769', fontFamily: 'Cinzel, serif' }}
              >
                &ldquo;
              </span>
              <h2
                className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight relative z-10"
                style={{ fontFamily: 'Playfair Display, serif', color: '#111' }}
              >
                Every curve tells a{' '}
                <em className="not-italic text-gold-gradient">story</em> of precision.
              </h2>
            </div>

            <motion.div
              className="mt-10 h-px bg-gradient-to-r from-peak-gold/40 to-transparent"
              initial={{ width: 0 }}
              animate={isInView ? { width: '100%' } : { width: 0 }}
              transition={{ duration: 1.2, delay: 0.4 }}
            />
          </motion.div>

          {/* Right column — text content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <p
              className="text-lg leading-relaxed text-peak-muted"
              style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.25rem', lineHeight: 1.8 }}
            >
              At P.E.A.K, we do not simply build automobiles. We engineer experiences. Each vehicle 
              is a manifestation of our unwavering commitment to perfection — where aerospace-grade 
              engineering meets Italian artistry.
            </p>

            <p
              className="text-base leading-relaxed text-peak-muted/80"
              style={{ fontFamily: 'Poppins, sans-serif', lineHeight: 1.9, fontSize: '0.9rem' }}
            >
              Founded on the principle that performance and luxury are not opposites but 
              complements, every P.E.A.K vehicle undergoes 1,200 hours of development testing 
              before a single chassis is welded. Our obsession with the millimeter — with the 
              gram, the millisecond, the degree — is what separates the exceptional from the merely excellent.
            </p>

            {/* Philosophy pillars */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {[
                { label: 'Precision', icon: '◈', desc: 'Sub-millimeter tolerances' },
                { label: 'Kinetics', icon: '◎', desc: 'Dynamic engineering' },
                { label: 'Mastery', icon: '◇', desc: 'Artisan craftsmanship' },
              ].map((pillar, i) => (
                <motion.div
                  key={pillar.label}
                  className="glass rounded-xl p-4 text-center group hover:border-peak-gold/40 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.15 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="text-peak-gold text-xl mb-2 group-hover:scale-110 transition-transform duration-300">
                    {pillar.icon}
                  </div>
                  <div
                    className="text-xs font-bold tracking-widest uppercase text-peak-text mb-1"
                    style={{ fontFamily: 'Cinzel, serif' }}
                  >
                    {pillar.label}
                  </div>
                  <div
                    className="text-xs text-peak-muted leading-tight"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {pillar.desc}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Signature */}
            <motion.div
              className="flex items-center gap-4 pt-4"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
            >
              <div className="flex-1 h-px bg-peak-border" />
              <div className="text-center">
                <div
                  className="text-peak-gold text-lg italic"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}
                >
                  The P.E.A.K Promise
                </div>
                <div
                  className="text-peak-muted text-xs tracking-widest uppercase"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Est. 2018 · Geneva
                </div>
              </div>
              <div className="flex-1 h-px bg-peak-border" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
