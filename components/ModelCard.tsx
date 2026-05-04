'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface ModelCardProps {
  id: string;
  name: string;
  tagline: string;
  type: string;
  badge: string;
  specs: Array<{ label: string; value: string }>;
  color: string;
  accent: string;
  priceFrom: string;
  bg: string;
  delay?: number;
}

export default function ModelCard({
  id, name, tagline, type, badge, specs, color, accent, priceFrom, bg, delay = 0,
}: ModelCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay }}
    >
      <Link href={`/models/${id}`} className="block group">
        <div
          className="relative rounded-3xl overflow-hidden luxury-card"
          style={{ background: bg, minHeight: 480 }}
        >
          {/* Badge */}
          <div className="absolute top-6 left-6 z-20">
            <span
              className="px-3 py-1 text-xs tracking-widest uppercase rounded-full"
              style={{
                fontFamily: 'Cinzel, serif',
                background: `${accent}18`,
                color: accent,
                border: `1px solid ${accent}50`,
              }}
            >
              {badge}
            </span>
          </div>

          {/* Price */}
          <div className="absolute top-6 right-6 z-20 text-right">
            <div className="text-white/30 text-xs" style={{ fontFamily: 'Poppins, sans-serif' }}>from</div>
            <div className="text-white/70 text-sm font-medium" style={{ fontFamily: 'Cinzel, serif' }}>{priceFrom}</div>
          </div>

          {/* Car silhouette */}
          <div className="h-52 flex items-center justify-center relative overflow-hidden">
            <motion.div
              className="absolute inset-0"
              style={{ background: `radial-gradient(ellipse 60% 40% at 50% 50%, ${accent}20 0%, transparent 70%)` }}
              animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <svg viewBox="0 0 400 160" className="w-full h-full px-8 opacity-80 relative z-10">
              <rect x="40" y="70" width="320" height="45" rx="4" fill={color} />
              <rect x="110" y="35" width="175" height="42" rx="8" fill={color} />
              <polygon points="285,70 360,70 360,90 285,77" fill={color} opacity="0.8" />
              <polygon points="115,70 40,70 40,90 115,77" fill={color} opacity="0.8" />
              <polygon points="285,70 265,35 240,35 230,70" fill={accent} opacity="0.3" />
              <polygon points="115,70 135,35 160,35 170,70" fill={accent} opacity="0.3" />
              <rect x="175" y="40" width="60" height="27" rx="2" fill={accent} opacity="0.2" />
              <rect x="348" y="76" width="18" height="8" rx="2" fill={accent} opacity="0.8" />
              <rect x="34" y="76" width="18" height="8" rx="2" fill="#ff2200" opacity="0.6" />
              <circle cx="105" cy="115" r="20" fill="#111" />
              <circle cx="105" cy="115" r="12" fill={accent} opacity="0.6" />
              <circle cx="105" cy="115" r="5" fill="#111" />
              <circle cx="295" cy="115" r="20" fill="#111" />
              <circle cx="295" cy="115" r="12" fill={accent} opacity="0.6" />
              <circle cx="295" cy="115" r="5" fill="#111" />
              <ellipse cx="200" cy="135" rx="160" ry="8" fill="black" opacity="0.3" />
            </svg>
          </div>

          {/* Content */}
          <div className="p-8 relative z-10">
            <div className="text-xs tracking-widest uppercase mb-2" style={{ color: accent, fontFamily: 'Poppins, sans-serif', opacity: 0.7 }}>{type}</div>
            <h3 className="text-2xl font-bold text-white mb-1" style={{ fontFamily: 'Cinzel, serif', letterSpacing: '0.04em' }}>{name}</h3>
            <p className="text-white/40 italic mb-4 text-lg" style={{ fontFamily: 'Cormorant Garamond, serif' }}>{tagline}</p>

            <div className="flex gap-6 mb-6">
              {specs.map((s) => (
                <div key={s.label}>
                  <div className="text-lg font-bold" style={{ color: accent, fontFamily: 'Cinzel, serif' }}>{s.value}</div>
                  <div className="text-white/40 text-xs tracking-widest uppercase" style={{ fontFamily: 'Poppins, sans-serif' }}>{s.label}</div>
                </div>
              ))}
            </div>

            <div
              className="flex items-center gap-2 font-medium group-hover:gap-4 transition-all duration-300"
              style={{ color: accent, fontFamily: 'Cinzel, serif', fontSize: '0.75rem', letterSpacing: '0.1em' }}
            >
              <span>Explore Model</span>
              <span>→</span>
            </div>
          </div>

          {/* Hover border */}
          <div
            className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{ border: `1px solid ${accent}40`, boxShadow: `inset 0 0 60px ${accent}08` }}
          />
        </div>
      </Link>
    </motion.div>
  );
}
