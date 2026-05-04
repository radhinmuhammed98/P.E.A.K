'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

const models = [
  {
    id: 'aether',
    name: 'P.E.A.K Aether',
    tagline: 'Silent Sovereignty',
    type: 'Electric Grand Tourer',
    description: 'Zero emissions, infinite ambition. The Aether redefines what an electric grand tourer can be — with 500 miles of range wrapped in hand-formed aluminium.',
    specs: [
      { label: '0-60', value: '3.2s' },
      { label: 'Range', value: '500mi' },
      { label: 'Power', value: '850hp' },
    ],
    color: '#1a1a2e',
    accent: '#4a9eff',
    badge: 'EV',
    bg: 'linear-gradient(135deg, #0a0f1e 0%, #1a2a4e 100%)',
    priceFrom: '$289,000',
  },
  {
    id: 'stratos',
    name: 'P.E.A.K Stratos',
    tagline: 'Born at the Apex',
    type: 'Sport Coupé',
    description: 'Track-tuned for the road. The Stratos distills decades of motorsport knowledge into a driver\'s instrument that communicates every nuance of the asphalt.',
    specs: [
      { label: '0-60', value: '2.8s' },
      { label: 'Top Speed', value: '210mph' },
      { label: 'Power', value: '980hp' },
    ],
    color: '#1a0a0a',
    accent: '#ff4444',
    badge: 'SPORT',
    bg: 'linear-gradient(135deg, #1a0808 0%, #2a1010 100%)',
    priceFrom: '$349,000',
  },
  {
    id: 'vertex',
    name: 'P.E.A.K Vertex',
    tagline: 'Beyond the Possible',
    type: 'Hypercar',
    description: 'One thousand two hundred and fifty horsepower. The pinnacle of what human engineering can create. The Vertex is not a car — it is a philosophy made metal.',
    specs: [
      { label: '0-60', value: '2.4s' },
      { label: 'Top Speed', value: '240mph' },
      { label: 'Power', value: '1250hp' },
    ],
    color: '#0a0a0a',
    accent: '#c6a769',
    badge: 'HYPER',
    bg: 'linear-gradient(135deg, #0a0a0a 0%, #1a1510 100%)',
    priceFrom: '$1,200,000',
  },
];

export default function ModelsSection() {
  const ref = useRef(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeModel, setActiveModel] = useState(0);

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === 'right' ? 400 : -400, behavior: 'smooth' });
  };

  return (
    <section id="models" ref={ref} className="section-padding bg-peak-bg relative overflow-hidden">
      {/* Subtle background */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 50% 50% at 80% 50%, rgba(198,167,105,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="gold-line" />
              <span
                className="text-peak-gold text-xs tracking-[0.4em] uppercase"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                The Collection
              </span>
            </div>
            <h2
              className="font-serif text-4xl md:text-6xl"
              style={{ fontFamily: 'Playfair Display, serif', color: '#111' }}
            >
              Three Expressions of
            </h2>
            <h2
              className="font-serif text-4xl md:text-6xl text-gold-gradient italic"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Perfection
            </h2>
          </div>

          {/* Scroll controls */}
          <div className="flex gap-3 self-end">
            <button
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full glass border border-peak-gold/30 flex items-center justify-center text-peak-gold hover:bg-peak-gold hover:text-white transition-all duration-300"
              aria-label="Scroll left"
            >
              ←
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full glass border border-peak-gold/30 flex items-center justify-center text-peak-gold hover:bg-peak-gold hover:text-white transition-all duration-300"
              aria-label="Scroll right"
            >
              →
            </button>
          </div>
        </motion.div>
      </div>

      {/* Horizontal scroll cards */}
      <div
        ref={scrollRef}
        className="horizontal-scroll flex gap-6 px-6 md:px-12 pb-8"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {models.map((model, i) => (
          <motion.div
            key={model.id}
            className="flex-none w-[85vw] md:w-[520px] scroll-snap-align-start"
            style={{ scrollSnapAlign: 'start' }}
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: i * 0.2 }}
          >
            <Link href={`/models/${model.id}`} className="block group">
              <div
                className="relative rounded-3xl overflow-hidden luxury-card cursor-pointer"
                style={{ background: model.bg, minHeight: 480 }}
              >
                {/* Badge */}
                <div className="absolute top-6 left-6 z-20">
                  <span
                    className="px-3 py-1 text-xs tracking-widest uppercase rounded-full"
                    style={{
                      fontFamily: 'Cinzel, serif',
                      background: `rgba(${model.accent === '#c6a769' ? '198,167,105' : model.accent === '#ff4444' ? '255,68,68' : '74,158,255'},0.15)`,
                      color: model.accent,
                      border: `1px solid ${model.accent}50`,
                    }}
                  >
                    {model.badge}
                  </span>
                </div>

                {/* Price from */}
                <div className="absolute top-6 right-6 z-20 text-right">
                  <div className="text-white/30 text-xs" style={{ fontFamily: 'Poppins, sans-serif' }}>from</div>
                  <div className="text-white/70 text-sm font-medium" style={{ fontFamily: 'Cinzel, serif' }}>
                    {model.priceFrom}
                  </div>
                </div>

                {/* Car visual placeholder with gradient */}
                <div className="relative h-52 flex items-center justify-center overflow-hidden">
                  {/* Animated glow */}
                  <motion.div
                    className="absolute inset-0"
                    style={{
                      background: `radial-gradient(ellipse 60% 40% at 50% 50%, ${model.accent}20 0%, transparent 70%)`,
                    }}
                    animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />

                  {/* Car silhouette SVG */}
                  <svg viewBox="0 0 400 160" className="w-full h-full px-8 opacity-80 relative z-10">
                    {/* Body */}
                    <rect x="40" y="70" width="320" height="45" rx="4" fill={model.color === '#1a1a2e' ? '#2a3a5e' : model.color === '#1a0a0a' ? '#2a1515' : '#1e1e1e'} />
                    {/* Roof */}
                    <rect x="110" y="35" width="175" height="42" rx="8" fill={model.color === '#1a1a2e' ? '#2a3a5e' : model.color === '#1a0a0a' ? '#2a1515' : '#1e1e1e'} />
                    {/* Hood slope */}
                    <polygon points="285,70 360,70 360,90 285,77" fill={model.color === '#1a1a2e' ? '#243558' : model.color === '#1a0a0a' ? '#251212' : '#191919'} />
                    {/* Trunk slope */}
                    <polygon points="115,70 40,70 40,90 115,77" fill={model.color === '#1a1a2e' ? '#243558' : model.color === '#1a0a0a' ? '#251212' : '#191919'} />
                    {/* Windshield */}
                    <polygon points="285,70 265,35 240,35 230,70" fill={model.accent} opacity="0.3" />
                    {/* Rear window */}
                    <polygon points="115,70 135,35 160,35 170,70" fill={model.accent} opacity="0.3" />
                    {/* Windows */}
                    <rect x="175" y="40" width="60" height="27" rx="2" fill={model.accent} opacity="0.2" />
                    {/* Headlight */}
                    <rect x="348" y="76" width="18" height="8" rx="2" fill={model.accent} opacity="0.8" />
                    {/* Taillight */}
                    <rect x="34" y="76" width="18" height="8" rx="2" fill="#ff2200" opacity="0.6" />
                    {/* Wheels */}
                    <circle cx="105" cy="115" r="20" fill="#111" />
                    <circle cx="105" cy="115" r="12" fill={model.accent} opacity="0.6" />
                    <circle cx="105" cy="115" r="5" fill="#111" />
                    <circle cx="295" cy="115" r="20" fill="#111" />
                    <circle cx="295" cy="115" r="12" fill={model.accent} opacity="0.6" />
                    <circle cx="295" cy="115" r="5" fill="#111" />
                    {/* Ground shadow */}
                    <ellipse cx="200" cy="135" rx="160" ry="8" fill="black" opacity="0.3" />
                  </svg>
                </div>

                {/* Content */}
                <div className="p-8 relative z-10">
                  <div
                    className="text-xs tracking-widest uppercase mb-2"
                    style={{ color: model.accent, fontFamily: 'Poppins, sans-serif', opacity: 0.7 }}
                  >
                    {model.type}
                  </div>
                  <h3
                    className="text-2xl md:text-3xl font-bold text-white mb-1"
                    style={{ fontFamily: 'Cinzel, serif', letterSpacing: '0.04em' }}
                  >
                    {model.name}
                  </h3>
                  <p
                    className="text-white/40 italic mb-4 text-lg"
                    style={{ fontFamily: 'Cormorant Garamond, serif' }}
                  >
                    {model.tagline}
                  </p>
                  <p
                    className="text-white/50 text-sm leading-relaxed mb-6 line-clamp-2"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {model.description}
                  </p>

                  {/* Specs */}
                  <div className="flex gap-6 mb-6">
                    {model.specs.map((spec) => (
                      <div key={spec.label}>
                        <div
                          className="text-lg font-bold"
                          style={{ color: model.accent, fontFamily: 'Cinzel, serif' }}
                        >
                          {spec.value}
                        </div>
                        <div
                          className="text-white/40 text-xs tracking-widest uppercase"
                          style={{ fontFamily: 'Poppins, sans-serif' }}
                        >
                          {spec.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div
                    className="flex items-center gap-2 font-medium group-hover:gap-4 transition-all duration-300"
                    style={{ color: model.accent, fontFamily: 'Cinzel, serif', fontSize: '0.75rem', letterSpacing: '0.1em' }}
                  >
                    <span>Explore Model</span>
                    <span>→</span>
                  </div>
                </div>

                {/* Hover border glow */}
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ border: `1px solid ${model.accent}40`, boxShadow: `inset 0 0 60px ${model.accent}08` }}
                />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
