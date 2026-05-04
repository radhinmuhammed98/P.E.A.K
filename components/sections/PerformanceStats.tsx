'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

function AnimatedCounter({ target, suffix = '', duration = 2000 }: {
  target: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const start = performance.now();
    const animate = (timestamp: number) => {
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
      else setCount(target);
    };
    requestAnimationFrame(animate);
  }, [isInView, target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const stats = [
  {
    value: 2.4,
    suffix: 's',
    label: '0-60 mph',
    description: 'Instantaneous torque delivery from dual e-motors',
    icon: '⚡',
  },
  {
    value: 240,
    suffix: 'mph',
    label: 'Top Speed',
    description: 'Aerodynamically governed peak performance',
    icon: '◈',
  },
  {
    value: 1250,
    suffix: 'hp',
    label: 'Peak Power',
    description: 'Combined tri-motor output at peak load',
    icon: '◎',
  },
  {
    value: 500,
    suffix: 'mi',
    label: 'Range',
    description: 'Real-world EPA-estimated range per charge',
    icon: '◇',
  },
  {
    value: 3,
    suffix: ' min',
    label: 'Fast Charge',
    description: '80% capacity via 350kW ultra-rapid charging',
    icon: '⬡',
  },
  {
    value: 9,
    suffix: 'G',
    label: 'Download Force',
    description: 'Active aero generating max downforce at speed',
    icon: '△',
  },
];

export default function PerformanceStats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      className="section-padding relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0a0a0c 0%, #14120e 50%, #0c0a08 100%)' }}
    >
      {/* Gold radial glow */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(198,167,105,0.5) 0%, transparent 70%)',
        }}
      />

      {/* Grid lines */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(198,167,105,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(198,167,105,0.3) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      <div ref={ref} className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
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
              Performance Metrics
            </span>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-peak-gold" />
          </div>
          <h2
            className="text-4xl md:text-6xl font-bold text-white"
            style={{ fontFamily: 'Cinzel, serif', letterSpacing: '0.05em' }}
          >
            Numbers That Define
          </h2>
          <h2
            className="text-4xl md:text-6xl font-bold text-gold-gradient mt-1"
            style={{ fontFamily: 'Cinzel, serif', letterSpacing: '0.05em' }}
          >
            Excellence
          </h2>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="stat-card glass-dark rounded-2xl p-6 md:p-8 group hover:border-peak-gold/30 transition-all duration-500 luxury-card"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
            >
              {/* Icon */}
              <div
                className="text-peak-gold text-2xl mb-4 opacity-60 group-hover:opacity-100 transition-opacity duration-300"
              >
                {stat.icon}
              </div>

              {/* Value */}
              <div
                className="text-4xl md:text-5xl font-bold mb-1"
                style={{
                  fontFamily: 'Cinzel, serif',
                  background: 'linear-gradient(135deg, #a8893d, #c6a769, #d4b97a)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {isInView ? (
                  stat.value % 1 !== 0 ? (
                    <span>{stat.value.toFixed(1)}{stat.suffix}</span>
                  ) : (
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  )
                ) : (
                  <span>0{stat.suffix}</span>
                )}
              </div>

              {/* Label */}
              <div
                className="text-white/60 text-xs tracking-[0.3em] uppercase font-medium mb-3"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {stat.label}
              </div>

              {/* Description */}
              <p
                className="text-white/35 text-xs leading-relaxed"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {stat.description}
              </p>

              {/* Hover glow line */}
              <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-peak-gold/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Bottom disclaimer */}
        <motion.p
          className="text-center text-white/25 text-xs mt-12 tracking-widest"
          style={{ fontFamily: 'Poppins, sans-serif' }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          *Performance figures represent P.E.A.K Vertex Hyper in maximum performance mode. Conditions may vary.
        </motion.p>
      </div>
    </section>
  );
}
