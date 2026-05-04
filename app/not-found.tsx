'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function NotFound() {
  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #0a0a0c 0%, #14120e 100%)' }}>
      <Navbar />

      <div className="flex items-center justify-center min-h-screen px-6 text-center">
        <div>
          {/* Background glow */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(198,167,105,0.6) 0%, transparent 70%)' }}
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            {/* 404 number */}
            <div
              className="text-[160px] md:text-[240px] font-bold leading-none opacity-10 select-none"
              style={{ color: '#c6a769', fontFamily: 'Cinzel, serif' }}
            >
              404
            </div>

            {/* P.E.A.K emblem */}
            <div className="flex justify-center mb-8 -mt-20">
              <div
                className="w-16 h-16 border-2 border-peak-gold/40 rotate-45 flex items-center justify-center"
                style={{ background: 'rgba(198,167,105,0.06)' }}
              >
                <div className="w-3 h-3 bg-peak-gold/60 rounded-full" />
              </div>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Cinzel, serif' }}>
              Destination Uncharted
            </h1>
            <p className="text-white/40 text-lg mb-10 max-w-md mx-auto" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Even at P.E.A.K, some roads lead nowhere. The page you seek does not exist.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/" className="btn-primary">
                Return Home
              </Link>
              <Link href="/configurator" className="btn-ghost-white">
                Build Your Car
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
