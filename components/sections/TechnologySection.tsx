'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const technologies = [
  {
    id: '01',
    title: 'Neural Drive Architecture',
    description: 'Our proprietary AI-driven torque vectoring system processes 500,000 data points per second, adjusting power delivery to each wheel in real-time for unparalleled control.',
    detail: '500,000 calculations/sec',
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none">
        <circle cx="20" cy="20" r="3" stroke="#c6a769" strokeWidth="1.5" />
        <circle cx="8" cy="10" r="2" stroke="#c6a769" strokeWidth="1" />
        <circle cx="32" cy="10" r="2" stroke="#c6a769" strokeWidth="1" />
        <circle cx="8" cy="30" r="2" stroke="#c6a769" strokeWidth="1" />
        <circle cx="32" cy="30" r="2" stroke="#c6a769" strokeWidth="1" />
        <line x1="10" y1="11" x2="17" y2="18" stroke="#c6a769" strokeWidth="0.8" opacity="0.5" />
        <line x1="30" y1="11" x2="23" y2="18" stroke="#c6a769" strokeWidth="0.8" opacity="0.5" />
        <line x1="10" y1="29" x2="17" y2="22" stroke="#c6a769" strokeWidth="0.8" opacity="0.5" />
        <line x1="30" y1="29" x2="23" y2="22" stroke="#c6a769" strokeWidth="0.8" opacity="0.5" />
      </svg>
    ),
  },
  {
    id: '02',
    title: 'CarbonWeave Chassis',
    description: 'A monocoque structure of military-grade carbon fibre — lighter than aluminium, stronger than steel, and engineered to pass every extreme safety regulation worldwide.',
    detail: '68% lighter than steel',
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none">
        <rect x="5" y="5" width="14" height="14" stroke="#c6a769" strokeWidth="1.2" />
        <rect x="21" y="5" width="14" height="14" stroke="#c6a769" strokeWidth="1.2" />
        <rect x="5" y="21" width="14" height="14" stroke="#c6a769" strokeWidth="1.2" />
        <rect x="21" y="21" width="14" height="14" stroke="#c6a769" strokeWidth="1.2" />
        <line x1="12" y1="5" x2="12" y2="35" stroke="#c6a769" strokeWidth="0.5" opacity="0.3" />
        <line x1="5" y1="12" x2="35" y2="12" stroke="#c6a769" strokeWidth="0.5" opacity="0.3" />
      </svg>
    ),
  },
  {
    id: '03',
    title: 'ActiveAir Aerodynamics',
    description: 'Sixteen independently-controlled aero surfaces adapt to driving conditions in milliseconds. From zero drag to full downforce — the car shapes itself to the moment.',
    detail: '1,200 kg downforce',
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none">
        <path d="M5 20 Q20 8 35 20" stroke="#c6a769" strokeWidth="1.5" fill="none" />
        <path d="M5 25 Q20 13 35 25" stroke="#c6a769" strokeWidth="1" fill="none" opacity="0.5" />
        <path d="M5 30 Q20 18 35 30" stroke="#c6a769" strokeWidth="0.7" fill="none" opacity="0.3" />
        <path d="M28 12 L35 20 L28 28" stroke="#c6a769" strokeWidth="1.5" fill="none" />
      </svg>
    ),
  },
  {
    id: '04',
    title: 'ThermalSync Battery',
    description: 'Our proprietary liquid-cooled battery matrix maintains optimal temperature across all 7,200 cells, enabling sustained peak performance regardless of ambient conditions.',
    detail: '± 0.5°C tolerance',
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none">
        <rect x="12" y="4" width="16" height="28" rx="2" stroke="#c6a769" strokeWidth="1.5" />
        <rect x="16" y="2" width="8" height="4" rx="1" stroke="#c6a769" strokeWidth="1" />
        <rect x="14" y="20" width="12" height="8" rx="1" fill="#c6a769" opacity="0.3" />
        <line x1="17" y1="14" x2="17" y2="18" stroke="#c6a769" strokeWidth="1" />
        <line x1="20" y1="12" x2="20" y2="18" stroke="#c6a769" strokeWidth="1" />
        <line x1="23" y1="14" x2="23" y2="18" stroke="#c6a769" strokeWidth="1" />
      </svg>
    ),
  },
];

export default function TechnologySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="technology" ref={ref} className="section-padding bg-peak-bg relative overflow-hidden">
      {/* Large background text */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] select-none pointer-events-none whitespace-nowrap"
        style={{ fontFamily: 'Cinzel, serif', fontSize: '12vw', fontWeight: 900, color: '#111', letterSpacing: '0.2em' }}
      >
        TECHNOLOGY
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-peak-gold" />
            <span
              className="text-peak-gold text-xs tracking-[0.5em] uppercase"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Engineering Mastery
            </span>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-peak-gold" />
          </div>
          <h2
            className="font-serif text-4xl md:text-6xl"
            style={{ fontFamily: 'Playfair Display, serif', color: '#111' }}
          >
            Technology at the
            <em className="not-italic text-gold-gradient"> Edge</em>
          </h2>
        </motion.div>

        {/* Technology panels */}
        <div className="grid md:grid-cols-2 gap-6">
          {technologies.map((tech, i) => (
            <motion.div
              key={tech.id}
              className="glass rounded-2xl p-8 group hover:border-peak-gold/40 transition-all duration-500 relative overflow-hidden luxury-card"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              whileHover={{ y: -6 }}
            >
              {/* Background shimmer */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(135deg, rgba(198,167,105,0.03) 0%, transparent 60%)',
                  }}
                />
              </div>

              {/* Number + icon row */}
              <div className="flex items-start justify-between mb-6">
                <span
                  className="text-6xl font-bold opacity-10 select-none"
                  style={{ fontFamily: 'Cinzel, serif', color: '#c6a769', lineHeight: 1 }}
                >
                  {tech.id}
                </span>
                <div className="p-3 rounded-xl" style={{ background: 'rgba(198,167,105,0.1)' }}>
                  {tech.icon}
                </div>
              </div>

              {/* Title */}
              <h3
                className="text-xl md:text-2xl font-bold mb-3"
                style={{ fontFamily: 'Cinzel, serif', color: '#111', letterSpacing: '0.03em' }}
              >
                {tech.title}
              </h3>

              {/* Divider */}
              <div
                className="h-px mb-4 transition-all duration-500"
                style={{
                  background: 'linear-gradient(90deg, rgba(198,167,105,0.4), transparent)',
                  width: '40%',
                }}
              />

              {/* Description */}
              <p
                className="text-peak-muted text-sm leading-relaxed mb-6"
                style={{ fontFamily: 'Poppins, sans-serif', lineHeight: 1.8 }}
              >
                {tech.description}
              </p>

              {/* Metric pill */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full" style={{ background: 'rgba(198,167,105,0.1)', border: '1px solid rgba(198,167,105,0.25)' }}>
                <div className="w-1.5 h-1.5 rounded-full bg-peak-gold animate-pulse" />
                <span
                  className="text-peak-gold text-xs tracking-widest uppercase font-medium"
                  style={{ fontFamily: 'Cinzel, serif' }}
                >
                  {tech.detail}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom feature bar */}
        <motion.div
          className="mt-16 glass rounded-2xl p-8 flex flex-wrap justify-around gap-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {[
            { label: 'Patents Held', value: '247' },
            { label: 'Engineers', value: '1,400+' },
            { label: 'R&D Invested', value: '$2.4B' },
            { label: 'Years of Innovation', value: '12' },
          ].map((item) => (
            <div key={item.label}>
              <div
                className="text-3xl font-bold text-gold-gradient"
                style={{ fontFamily: 'Cinzel, serif' }}
              >
                {item.value}
              </div>
              <div
                className="text-peak-muted text-xs tracking-widest uppercase mt-1"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {item.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
