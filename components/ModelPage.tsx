'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const CarViewer = dynamic(() => import('@/components/3d/CarViewer'), { ssr: false });

export interface ModelData {
  id: string;
  name: string;
  tagline: string;
  type: string;
  description: string;
  longDescription: string;
  color: string;
  accent: string;
  badge: string;
  priceFrom: string;
  specs: Array<{ label: string; value: string; unit?: string }>;
  features: Array<{ title: string; description: string }>;
  gallery: Array<{ label: string; bg: string }>;
}

export default function ModelPage({ model }: { model: ModelData }) {
  const [activeTab, setActiveTab] = useState<'overview' | 'specs' | 'gallery'>('overview');
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const isContentInView = useInView(contentRef, { once: true });

  return (
    <div className="min-h-screen" style={{ background: '#f2f2f4' }}>
      <Navbar />

      {/* Hero with 3D car */}
      <section
        ref={heroRef}
        className="relative min-h-screen overflow-hidden pt-20"
        style={{ background: `linear-gradient(135deg, #0a0a0c 0%, ${model.accent}15 50%, #0a0a0c 100%)` }}
      >
        {/* Background glow */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{ background: `radial-gradient(ellipse 80% 60% at 50% 60%, ${model.accent}40 0%, transparent 70%)` }}
        />

        <div className="max-w-7xl mx-auto px-6 md:px-12 h-full">
          <div className="grid md:grid-cols-2 items-center min-h-[calc(100vh-5rem)] gap-8">
            {/* Car viewer */}
            <motion.div
              className="h-[60vh] md:h-[80vh] order-2 md:order-1"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <CarViewer color={model.color} minimal />
            </motion.div>

            {/* Model info */}
            <motion.div
              className="order-1 md:order-2 py-16 md:py-0"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              {/* Badge */}
              <div className="mb-6">
                <span
                  className="px-3 py-1 text-xs tracking-widest uppercase rounded-full"
                  style={{
                    fontFamily: 'Cinzel, serif',
                    background: `${model.accent}18`,
                    color: model.accent,
                    border: `1px solid ${model.accent}40`,
                  }}
                >
                  {model.badge} — {model.type}
                </span>
              </div>

              <h1
                className="text-4xl md:text-6xl font-bold text-white mb-2 leading-tight"
                style={{ fontFamily: 'Cinzel, serif', letterSpacing: '0.04em' }}
              >
                {model.name}
              </h1>
              <p
                className="text-white/40 text-xl md:text-2xl italic mb-8"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                {model.tagline}
              </p>

              <div className="h-px mb-8" style={{ background: `linear-gradient(90deg, ${model.accent}60, transparent)` }} />

              <p
                className="text-white/60 leading-relaxed mb-10"
                style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.9rem', lineHeight: 1.9 }}
              >
                {model.description}
              </p>

              {/* Quick specs */}
              <div className="grid grid-cols-3 gap-4 mb-10">
                {model.specs.slice(0, 3).map((spec) => (
                  <div key={spec.label}>
                    <div
                      className="text-2xl font-bold"
                      style={{ color: model.accent, fontFamily: 'Cinzel, serif' }}
                    >
                      {spec.value}
                    </div>
                    <div className="text-white/40 text-xs tracking-widest uppercase" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {spec.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Price */}
              <div className="mb-8">
                <div className="text-white/40 text-xs tracking-widest uppercase" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Starting From
                </div>
                <div
                  className="text-3xl font-bold mt-1"
                  style={{ color: model.accent, fontFamily: 'Cinzel, serif' }}
                >
                  {model.priceFrom}
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <button className="btn-primary">
                  Reserve This Model
                </button>
                <Link href="/configurator" className="btn-ghost-white">
                  Configure Now
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detail content */}
      <div ref={contentRef} className="relative z-10" style={{ background: '#f2f2f4' }}>
        {/* Tabs */}
        <div className="sticky top-[72px] z-30 glass border-b border-peak-border">
          <div className="max-w-7xl mx-auto px-6 md:px-12 flex gap-0">
            {(['overview', 'specs', 'gallery'] as const).map((tab) => (
              <button
                key={tab}
                className={`px-6 py-5 text-xs tracking-[0.2em] uppercase transition-all duration-300 border-b-2 ${
                  activeTab === tab
                    ? 'border-peak-gold text-peak-gold'
                    : 'border-transparent text-peak-muted hover:text-peak-text'
                }`}
                style={{ fontFamily: 'Poppins, sans-serif' }}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Overview */}
        {activeTab === 'overview' && (
          <section className="section-padding">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
              <div className="grid md:grid-cols-2 gap-16 mb-20">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isContentInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8 }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="gold-line" />
                    <span className="text-peak-gold text-xs tracking-[0.4em] uppercase" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      The Story
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif', color: '#111' }}>
                    More Than a Machine
                  </h2>
                  <p className="text-peak-muted leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif', lineHeight: 1.9, fontSize: '0.9rem' }}>
                    {model.longDescription}
                  </p>
                </motion.div>

                <div className="grid grid-cols-2 gap-4">
                  {model.features.map((feature, i) => (
                    <motion.div
                      key={feature.title}
                      className="glass rounded-2xl p-6 luxury-card"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isContentInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: i * 0.1 }}
                      whileHover={{ y: -4 }}
                    >
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-4" style={{ background: `${model.accent}15` }}>
                        <div className="w-2 h-2 rounded-full" style={{ background: model.accent }} />
                      </div>
                      <h4 className="font-bold text-peak-text text-sm mb-2" style={{ fontFamily: 'Cinzel, serif' }}>
                        {feature.title}
                      </h4>
                      <p className="text-peak-muted text-xs leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        {feature.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Specs */}
        {activeTab === 'specs' && (
          <section className="section-padding">
            <div className="max-w-4xl mx-auto px-6 md:px-12">
              <div className="flex items-center gap-3 mb-12">
                <div className="gold-line" />
                <h2 className="text-2xl font-bold text-peak-text" style={{ fontFamily: 'Cinzel, serif' }}>
                  Technical Specifications
                </h2>
              </div>
              <div className="space-y-0 glass rounded-2xl overflow-hidden">
                {model.specs.map((spec, i) => (
                  <motion.div
                    key={spec.label}
                    className="flex justify-between items-center px-8 py-5 border-b border-peak-border last:border-0 hover:bg-peak-gold/5 transition-colors duration-200"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <span className="text-peak-muted text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {spec.label}
                    </span>
                    <span className="font-bold text-peak-text" style={{ fontFamily: 'Cinzel, serif' }}>
                      {spec.value} {spec.unit || ''}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Gallery */}
        {activeTab === 'gallery' && (
          <section className="section-padding">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
              <div className="flex items-center gap-3 mb-12">
                <div className="gold-line" />
                <h2 className="text-2xl font-bold text-peak-text" style={{ fontFamily: 'Cinzel, serif' }}>
                  Gallery
                </h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {model.gallery.map((item, i) => (
                  <motion.div
                    key={item.label}
                    className={`rounded-2xl overflow-hidden cursor-pointer luxury-card ${i === 0 ? 'col-span-2 md:col-span-2' : ''}`}
                    style={{ background: item.bg, minHeight: i === 0 ? 300 : 200 }}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="w-full h-full p-6 flex items-end" style={{ minHeight: 'inherit' }}>
                      <span className="text-white/50 text-xs tracking-widest uppercase" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        {item.label}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>

      {/* Sticky reserve button (mobile) */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:hidden">
        <button className="btn-primary shadow-gold-lg">
          Reserve — {model.priceFrom}
        </button>
      </div>

      <Footer />
    </div>
  );
}
