'use client';

import { useState, useCallback } from 'react';
import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const CarViewer = dynamic(() => import('@/components/3d/CarViewer'), { ssr: false });

// ─── Config options ────────────────────────────────────────────────────────────

const COLORS = [
  { id: 'obsidian', label: 'Obsidian Black', hex: '#0a0a0c', display: '#1a1a1e' },
  { id: 'arctic', label: 'Arctic Platinum', hex: '#e8e8e8', display: '#d8d8dc' },
  { id: 'midnight', label: 'Midnight Blue', hex: '#1a1a2e', display: '#2a2a4e' },
  { id: 'titanium', label: 'Titanium Grey', hex: '#4a4a52', display: '#5a5a62' },
  { id: 'crimson', label: 'Crimson Fury', hex: '#2a0808', display: '#4a1010' },
  { id: 'forest', label: 'Forest Emerald', hex: '#0a1a0e', display: '#1a3a1e' },
  { id: 'gold', label: 'Champagne Gold', hex: '#3a2a10', display: '#5a4018' },
  { id: 'deep', label: 'Deep Violet', hex: '#1a0a2e', display: '#2e1050' },
];

const WHEELS = [
  {
    id: 'orbital',
    label: 'Orbital',
    size: '21"',
    desc: 'Lightweight 10-spoke forged aluminium',
    accent: '#c6a769',
  },
  {
    id: 'vector',
    label: 'Vector',
    size: '22"',
    desc: 'Aerodynamic flush-face turbine design',
    accent: '#888',
  },
  {
    id: 'apex',
    label: 'Apex',
    size: '21"',
    desc: '5-spoke motorsport split-spoke forged',
    accent: '#c6a769',
  },
  {
    id: 'circuit',
    label: 'Circuit',
    size: '20"',
    desc: 'Lightweight centre-lock magnesium race wheel',
    accent: '#ddd',
  },
];

const INTERIORS = [
  {
    id: 'obsidian',
    label: 'Obsidian Suite',
    desc: 'Black Nappa leather with carbon fibre trim',
    primary: '#0d0d0d',
    accent: '#c6a769',
    bg: 'linear-gradient(135deg, #0d0d0d 0%, #1a1508 100%)',
  },
  {
    id: 'ivory',
    label: 'Ivory Atelier',
    desc: 'Cream quilted leather with blonde wood veneer',
    primary: '#f0ead8',
    accent: '#8a7040',
    bg: 'linear-gradient(135deg, #2a2010 0%, #f0ead820 100%)',
  },
  {
    id: 'sport',
    label: 'Sport Carbon',
    desc: 'Alcantara racing seats with raw carbon surfaces',
    primary: '#1a0a0a',
    accent: '#ff4444',
    bg: 'linear-gradient(135deg, #1a0808 0%, #2a1010 100%)',
  },
  {
    id: 'jade',
    label: 'Jade Garden',
    desc: 'Deep green leather with bamboo inlays',
    primary: '#0a1a0e',
    accent: '#4a9a5a',
    bg: 'linear-gradient(135deg, #0a1a0e 0%, #1a3a20 100%)',
  },
];

const PERFORMANCE = [
  {
    id: 'grand',
    label: 'Grand Touring',
    desc: 'Comfort-biased mapping for transcontinental journeys. 80% power, adaptive dampers soft.',
    icon: '◇',
    color: '#4a9eff',
  },
  {
    id: 'sport',
    label: 'Sport',
    desc: 'Balanced performance and refinement. 95% power, dampers firm, exhaust active.',
    icon: '◈',
    color: '#c6a769',
  },
  {
    id: 'track',
    label: 'Track',
    desc: 'Full 1,250 hp. Traction control minimal. Aero maximum. Not for public roads.',
    icon: '◎',
    color: '#ff4444',
  },
];

const MODELS_LIST = [
  { id: 'aether', label: 'Aether EV', price: 289000 },
  { id: 'stratos', label: 'Stratos Sport', price: 349000 },
  { id: 'vertex', label: 'Vertex Hyper', price: 1200000 },
];

// ─── Component ─────────────────────────────────────────────────────────────────

export default function ConfiguratorPage() {
  const [selectedModel, setSelectedModel] = useState(MODELS_LIST[0]);
  const [selectedColor, setSelectedColor] = useState(COLORS[0]);
  const [selectedWheel, setSelectedWheel] = useState(WHEELS[0]);
  const [selectedInterior, setSelectedInterior] = useState(INTERIORS[0]);
  const [selectedPerf, setSelectedPerf] = useState(PERFORMANCE[0]);
  const [activeSection, setActiveSection] = useState<'model' | 'color' | 'wheels' | 'interior' | 'performance'>('color');
  const [saved, setSaved] = useState(false);

  const totalPrice = selectedModel.price
    + (selectedWheel.id === 'circuit' ? 12000 : selectedWheel.id === 'apex' ? 8000 : selectedWheel.id === 'vector' ? 6000 : 0)
    + (selectedInterior.id === 'ivory' ? 15000 : selectedInterior.id === 'sport' ? 18000 : selectedInterior.id === 'jade' ? 20000 : 0)
    + (selectedPerf.id === 'track' ? 25000 : selectedPerf.id === 'sport' ? 10000 : 0);

  const handleSave = useCallback(() => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }, []);

  const formatPrice = (n: number) =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);

  const sections = [
    { id: 'model', label: 'Model' },
    { id: 'color', label: 'Exterior' },
    { id: 'wheels', label: 'Wheels' },
    { id: 'interior', label: 'Interior' },
    { id: 'performance', label: 'Performance' },
  ] as const;

  return (
    <div className="min-h-screen" style={{ background: '#f2f2f4' }}>
      <Navbar />

      {/* Page header */}
      <div
        className="pt-28 pb-10 px-6 md:px-12 text-center relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0a0a0c 0%, #14120e 100%)' }}
      >
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 80% at 50% 100%, rgba(198,167,105,0.4) 0%, transparent 70%)' }}
        />
        <div className="relative z-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-peak-gold" />
            <span className="text-peak-gold text-xs tracking-[0.5em] uppercase" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Studio
            </span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-peak-gold" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-3" style={{ fontFamily: 'Cinzel, serif', letterSpacing: '0.05em' }}>
            Build Your P.E.A.K
          </h1>
          <p className="text-white/40 text-sm tracking-widest" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Configure every detail to your exact specification
          </p>
        </div>
      </div>

      {/* Main configurator layout */}
      <div className="flex flex-col lg:flex-row min-h-[80vh]">

        {/* ── LEFT: Control Panel ── */}
        <aside className="w-full lg:w-[420px] xl:w-[460px] flex-none glass border-r border-peak-border flex flex-col" style={{ background: 'rgba(255,255,255,0.6)' }}>

          {/* Section tabs */}
          <div className="flex overflow-x-auto border-b border-peak-border" style={{ scrollbarWidth: 'none' }}>
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveSection(s.id)}
                className={`flex-none px-5 py-4 text-xs tracking-[0.2em] uppercase whitespace-nowrap border-b-2 transition-all duration-300 ${
                  activeSection === s.id
                    ? 'border-peak-gold text-peak-gold'
                    : 'border-transparent text-peak-muted hover:text-peak-text'
                }`}
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {s.label}
              </button>
            ))}
          </div>

          {/* Section content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            <AnimatePresence mode="wait">

              {/* MODEL SELECTION */}
              {activeSection === 'model' && (
                <motion.div key="model" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
                  <h3 className="text-sm font-bold text-peak-text mb-4 tracking-widest uppercase" style={{ fontFamily: 'Cinzel, serif' }}>Select Model</h3>
                  <div className="space-y-3">
                    {MODELS_LIST.map((m) => (
                      <button
                        key={m.id}
                        onClick={() => setSelectedModel(m)}
                        className={`w-full text-left p-5 rounded-xl border transition-all duration-300 ${
                          selectedModel.id === m.id
                            ? 'border-peak-gold bg-peak-gold/8 shadow-gold'
                            : 'border-peak-border bg-white/40 hover:border-peak-gold/40'
                        }`}
                      >
                        <div className="flex justify-between items-center">
                          <div>
                            <div className="font-bold text-peak-text text-sm" style={{ fontFamily: 'Cinzel, serif' }}>{m.label}</div>
                            <div className="text-peak-muted text-xs mt-0.5" style={{ fontFamily: 'Poppins, sans-serif' }}>
                              {m.id === 'aether' ? 'Electric Grand Tourer' : m.id === 'stratos' ? 'Sport Coupé' : 'Hypercar'}
                            </div>
                          </div>
                          <div>
                            <div className="text-peak-gold font-bold text-sm" style={{ fontFamily: 'Cinzel, serif' }}>
                              {formatPrice(m.price)}
                            </div>
                            {selectedModel.id === m.id && (
                              <div className="w-2 h-2 rounded-full bg-peak-gold ml-auto mt-1" />
                            )}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* EXTERIOR COLOR */}
              {activeSection === 'color' && (
                <motion.div key="color" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
                  <h3 className="text-sm font-bold text-peak-text mb-1 tracking-widest uppercase" style={{ fontFamily: 'Cinzel, serif' }}>Exterior Colour</h3>
                  <p className="text-peak-muted text-xs mb-5" style={{ fontFamily: 'Poppins, sans-serif' }}>Selected: <span className="text-peak-gold">{selectedColor.label}</span></p>
                  <div className="grid grid-cols-4 gap-3 mb-6">
                    {COLORS.map((c) => (
                      <button
                        key={c.id}
                        onClick={() => setSelectedColor(c)}
                        className="flex flex-col items-center gap-2 group"
                        title={c.label}
                      >
                        <div
                          className={`w-12 h-12 rounded-full border-2 transition-all duration-300 ${
                            selectedColor.id === c.id ? 'border-peak-gold scale-110 shadow-gold' : 'border-transparent group-hover:border-peak-gold/40'
                          }`}
                          style={{ background: c.display }}
                        >
                          {selectedColor.id === c.id && (
                            <div className="w-full h-full rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 rounded-full bg-white/60" />
                            </div>
                          )}
                        </div>
                        <span className="text-peak-muted text-[9px] text-center leading-tight group-hover:text-peak-text transition-colors" style={{ fontFamily: 'Poppins, sans-serif' }}>
                          {c.label.split(' ')[0]}
                        </span>
                      </button>
                    ))}
                  </div>

                  {/* Selected colour detail card */}
                  <div
                    className="rounded-xl p-5 border border-peak-gold/20"
                    style={{ background: `${selectedColor.display}18` }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full border border-peak-gold/30" style={{ background: selectedColor.display }} />
                      <div>
                        <div className="font-bold text-peak-text text-sm" style={{ fontFamily: 'Cinzel, serif' }}>{selectedColor.label}</div>
                        <div className="text-peak-muted text-xs" style={{ fontFamily: 'Poppins, sans-serif' }}>Premium Solid — Included</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* WHEELS */}
              {activeSection === 'wheels' && (
                <motion.div key="wheels" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
                  <h3 className="text-sm font-bold text-peak-text mb-4 tracking-widest uppercase" style={{ fontFamily: 'Cinzel, serif' }}>Wheel Style</h3>
                  <div className="space-y-3">
                    {WHEELS.map((w) => {
                      const extra = w.id === 'circuit' ? 12000 : w.id === 'apex' ? 8000 : w.id === 'vector' ? 6000 : 0;
                      return (
                        <button
                          key={w.id}
                          onClick={() => setSelectedWheel(w)}
                          className={`w-full text-left p-5 rounded-xl border transition-all duration-300 group ${
                            selectedWheel.id === w.id
                              ? 'border-peak-gold bg-peak-gold/8 shadow-gold'
                              : 'border-peak-border bg-white/40 hover:border-peak-gold/40'
                          }`}
                        >
                          <div className="flex items-start justify-between gap-3">
                            {/* Wheel SVG preview */}
                            <div className="w-14 h-14 flex-none rounded-full flex items-center justify-center" style={{ background: 'rgba(198,167,105,0.06)', border: '1px solid rgba(198,167,105,0.15)' }}>
                              <svg viewBox="0 0 50 50" className="w-10 h-10">
                                <circle cx="25" cy="25" r="22" fill="none" stroke={w.accent} strokeWidth="2" opacity="0.6" />
                                <circle cx="25" cy="25" r="14" fill="none" stroke={w.accent} strokeWidth="1" opacity="0.4" />
                                <circle cx="25" cy="25" r="5" fill={w.accent} opacity="0.7" />
                                {w.id === 'orbital' && [0, 36, 72, 108, 144, 180, 216, 252, 288, 324].map((deg, i) => {
                                  const r = deg * Math.PI / 180;
                                  return <line key={i} x1={25 + 6 * Math.cos(r)} y1={25 + 6 * Math.sin(r)} x2={25 + 20 * Math.cos(r)} y2={25 + 20 * Math.sin(r)} stroke={w.accent} strokeWidth="1.5" opacity="0.7" />;
                                })}
                                {w.id === 'vector' && [0, 60, 120, 180, 240, 300].map((deg, i) => {
                                  const r = deg * Math.PI / 180;
                                  return <polygon key={i} points={`${25 + 6 * Math.cos(r)},${25 + 6 * Math.sin(r)} ${25 + 20 * Math.cos(r - 0.2)},${25 + 20 * Math.sin(r - 0.2)} ${25 + 20 * Math.cos(r + 0.2)},${25 + 20 * Math.sin(r + 0.2)}`} fill={w.accent} opacity="0.5" />;
                                })}
                                {w.id === 'apex' && [0, 72, 144, 216, 288].map((deg, i) => {
                                  const r = deg * Math.PI / 180;
                                  return <line key={i} x1={25 + 5 * Math.cos(r)} y1={25 + 5 * Math.sin(r)} x2={25 + 21 * Math.cos(r)} y2={25 + 21 * Math.sin(r)} stroke={w.accent} strokeWidth="2.5" opacity="0.7" strokeLinecap="round" />;
                                })}
                                {w.id === 'circuit' && (
                                  <>
                                    <circle cx="25" cy="25" r="21" fill={w.accent} opacity="0.08" />
                                    <circle cx="25" cy="25" r="16" fill="none" stroke={w.accent} strokeWidth="3" opacity="0.4" />
                                  </>
                                )}
                              </svg>
                            </div>
                            <div className="flex-1">
                              <div className="flex justify-between">
                                <span className="font-bold text-peak-text text-sm" style={{ fontFamily: 'Cinzel, serif' }}>{w.label}</span>
                                <span className="text-xs text-peak-muted" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                  {extra > 0 ? `+${formatPrice(extra)}` : 'Included'}
                                </span>
                              </div>
                              <div className="text-peak-gold/70 text-xs mt-0.5" style={{ fontFamily: 'Poppins, sans-serif' }}>{w.size}</div>
                              <div className="text-peak-muted text-xs mt-1" style={{ fontFamily: 'Poppins, sans-serif' }}>{w.desc}</div>
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {/* INTERIOR */}
              {activeSection === 'interior' && (
                <motion.div key="interior" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
                  <h3 className="text-sm font-bold text-peak-text mb-4 tracking-widest uppercase" style={{ fontFamily: 'Cinzel, serif' }}>Interior Theme</h3>
                  <div className="space-y-3">
                    {INTERIORS.map((intr) => {
                      const extra = intr.id === 'ivory' ? 15000 : intr.id === 'sport' ? 18000 : intr.id === 'jade' ? 20000 : 0;
                      return (
                        <button
                          key={intr.id}
                          onClick={() => setSelectedInterior(intr)}
                          className={`w-full text-left p-5 rounded-xl border transition-all duration-300 overflow-hidden relative ${
                            selectedInterior.id === intr.id
                              ? 'border-peak-gold shadow-gold'
                              : 'border-peak-border hover:border-peak-gold/40'
                          }`}
                        >
                          {/* Gradient background */}
                          <div className="absolute inset-0 opacity-40" style={{ background: intr.bg }} />
                          <div className="relative z-10 flex justify-between items-start">
                            <div>
                              <div className="font-bold text-peak-text text-sm" style={{ fontFamily: 'Cinzel, serif' }}>{intr.label}</div>
                              <div className="text-peak-muted text-xs mt-1" style={{ fontFamily: 'Poppins, sans-serif' }}>{intr.desc}</div>
                            </div>
                            <div className="text-right">
                              <div className="text-xs text-peak-muted" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                {extra > 0 ? `+${formatPrice(extra)}` : 'Base'}
                              </div>
                              <div className="flex justify-end mt-2 gap-1">
                                <div className="w-4 h-4 rounded-full border border-white/30" style={{ background: intr.primary }} />
                                <div className="w-4 h-4 rounded-full border border-white/30" style={{ background: intr.accent }} />
                              </div>
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {/* PERFORMANCE */}
              {activeSection === 'performance' && (
                <motion.div key="performance" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
                  <h3 className="text-sm font-bold text-peak-text mb-4 tracking-widest uppercase" style={{ fontFamily: 'Cinzel, serif' }}>Performance Mode</h3>
                  <div className="space-y-3">
                    {PERFORMANCE.map((p) => {
                      const extra = p.id === 'track' ? 25000 : p.id === 'sport' ? 10000 : 0;
                      return (
                        <button
                          key={p.id}
                          onClick={() => setSelectedPerf(p)}
                          className={`w-full text-left p-5 rounded-xl border transition-all duration-300 ${
                            selectedPerf.id === p.id
                              ? 'border-peak-gold bg-peak-gold/8 shadow-gold'
                              : 'border-peak-border bg-white/40 hover:border-peak-gold/40'
                          }`}
                        >
                          <div className="flex items-start gap-4">
                            <div
                              className="w-10 h-10 flex-none rounded-lg flex items-center justify-center text-lg"
                              style={{ background: `${p.color}15`, color: p.color, border: `1px solid ${p.color}30` }}
                            >
                              {p.icon}
                            </div>
                            <div className="flex-1">
                              <div className="flex justify-between">
                                <span className="font-bold text-peak-text text-sm" style={{ fontFamily: 'Cinzel, serif' }}>{p.label}</span>
                                <span className="text-xs text-peak-muted" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                  {extra > 0 ? `+${formatPrice(extra)}` : 'Included'}
                                </span>
                              </div>
                              <p className="text-peak-muted text-xs mt-1 leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>{p.desc}</p>
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}

            </AnimatePresence>
          </div>

          {/* Price summary + CTA */}
          <div className="border-t border-peak-border p-6" style={{ background: 'rgba(255,255,255,0.8)' }}>
            {/* Config summary */}
            <div className="space-y-1 mb-5">
              {[
                { label: selectedModel.label, value: formatPrice(selectedModel.price) },
                { label: `${selectedColor.label} Paint`, value: 'Included' },
                { label: `${selectedWheel.label} Wheels`, value: selectedWheel.id === 'circuit' ? '+$12,000' : selectedWheel.id === 'apex' ? '+$8,000' : selectedWheel.id === 'vector' ? '+$6,000' : 'Included' },
                { label: `${selectedInterior.label}`, value: selectedInterior.id === 'ivory' ? '+$15,000' : selectedInterior.id === 'sport' ? '+$18,000' : selectedInterior.id === 'jade' ? '+$20,000' : 'Included' },
                { label: `${selectedPerf.label} Mode`, value: selectedPerf.id === 'track' ? '+$25,000' : selectedPerf.id === 'sport' ? '+$10,000' : 'Included' },
              ].map((row) => (
                <div key={row.label} className="flex justify-between text-xs" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  <span className="text-peak-muted">{row.label}</span>
                  <span className={row.value.startsWith('+') ? 'text-peak-gold' : 'text-peak-muted'}>{row.value}</span>
                </div>
              ))}
            </div>

            <div className="h-px bg-peak-border mb-4" />

            {/* Total */}
            <div className="flex justify-between items-baseline mb-5">
              <span className="text-peak-text text-sm font-bold" style={{ fontFamily: 'Cinzel, serif' }}>Total Configuration</span>
              <span className="text-2xl font-bold text-gold-gradient" style={{ fontFamily: 'Cinzel, serif' }}>
                {formatPrice(totalPrice)}
              </span>
            </div>

            {/* Buttons */}
            <div className="space-y-3">
              <button
                onClick={handleSave}
                className={`w-full py-3 rounded-lg text-xs tracking-widest uppercase font-medium transition-all duration-300 ${
                  saved
                    ? 'bg-green-500/20 text-green-600 border border-green-500/40'
                    : 'btn-primary w-full justify-center'
                }`}
                style={{ fontFamily: 'Cinzel, serif' }}
              >
                {saved ? '✓ Configuration Saved' : 'Save Configuration'}
              </button>
              <button
                className="w-full btn-ghost py-3 text-xs justify-center"
                style={{ fontFamily: 'Cinzel, serif' }}
              >
                Reserve This Build — $10,000
              </button>
            </div>

            <p className="text-peak-muted/60 text-[10px] text-center mt-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Reservation is fully refundable. Price excludes taxes and delivery.
            </p>
          </div>
        </aside>

        {/* ── RIGHT: 3D Viewer ── */}
        <div className="flex-1 relative flex flex-col" style={{ background: 'linear-gradient(135deg, #0d0c0a 0%, #12100c 100%)', minHeight: '60vh' }}>
          {/* Background glow based on color */}
          <div
            className="absolute inset-0 opacity-20 pointer-events-none transition-all duration-700"
            style={{ background: `radial-gradient(ellipse 60% 60% at 50% 60%, ${selectedColor.display}60 0%, transparent 70%)` }}
          />

          {/* Grid floor */}
          <div
            className="absolute bottom-0 left-0 right-0 h-1/3 opacity-10 pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(rgba(198,167,105,0.5) 1px, transparent 1px),
                linear-gradient(90deg, rgba(198,167,105,0.5) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
              maskImage: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
            }}
          />

          {/* 3D Canvas */}
          <div className="flex-1 relative z-10">
            <CarViewer key={selectedColor.id} color={selectedColor.hex} />
          </div>

          {/* Configuration overlay info */}
          <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-3 z-20 pointer-events-none">
            {[
              { label: 'Colour', value: selectedColor.label },
              { label: 'Wheels', value: `${selectedWheel.label} ${selectedWheel.size}` },
              { label: 'Interior', value: selectedInterior.label },
              { label: 'Mode', value: selectedPerf.label },
            ].map((badge) => (
              <div
                key={badge.label}
                className="px-4 py-2 rounded-full"
                style={{
                  background: 'rgba(10,10,12,0.7)',
                  border: '1px solid rgba(198,167,105,0.2)',
                  backdropFilter: 'blur(12px)',
                }}
              >
                <span className="text-white/40 text-[9px] uppercase tracking-widest mr-1" style={{ fontFamily: 'Poppins, sans-serif' }}>{badge.label}:</span>
                <span className="text-peak-gold text-[9px] uppercase tracking-widest font-medium" style={{ fontFamily: 'Poppins, sans-serif' }}>{badge.value}</span>
              </div>
            ))}
          </div>

          {/* Top model label */}
          <div className="absolute top-6 right-6 text-right z-20 pointer-events-none">
            <div className="text-white/30 text-xs tracking-widest uppercase" style={{ fontFamily: 'Poppins, sans-serif' }}>Configuring</div>
            <div className="text-white/70 text-lg font-bold" style={{ fontFamily: 'Cinzel, serif' }}>{selectedModel.label}</div>
          </div>

          {/* Interior colour swatch preview */}
          <div className="absolute top-6 left-6 z-20 pointer-events-none">
            <div
              className="w-12 h-12 rounded-full border-2 border-peak-gold/30 shadow-gold"
              style={{ background: selectedInterior.bg }}
              title={selectedInterior.label}
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
