'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<'loading' | 'reveal' | 'done'>('loading');

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setPhase('reveal'), 50);
          setTimeout(() => {
            setPhase('done');
            onComplete();
          }, 800); // Give enough time for the slide out animation
          return 100;
        }
        // Rapid artificial progress
        const increment = Math.random() * 15 + 10;
        return Math.min(prev + increment, 100);
      });
    }, 40);

    return () => clearInterval(interval);
  }, [onComplete]);

  const letters = ['P', '.', 'E', '.', 'A', '.', 'K'];

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden"
          style={{ background: '#0a0a0c' }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Background grain */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
              backgroundSize: '200px 200px',
            }}
          />

          {/* Radial glow */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              background: 'radial-gradient(ellipse 600px 400px at 50% 50%, rgba(198,167,105,0.4) 0%, transparent 70%)',
            }}
          />

          {/* Center content */}
          <div className="relative z-10 flex flex-col items-center gap-10">
            {/* Logo letters */}
            <motion.div 
              className="flex items-center"
              animate={phase === 'reveal' ? { x: 500, opacity: 0 } : { x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            >
              {letters.map((letter, i) => (
                <motion.span
                  key={i}
                  className={`font-display text-6xl md:text-8xl font-bold tracking-[0.1em] ${
                    letter === '.' ? 'text-peak-gold mx-1' : 'text-white'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: i * 0.05,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  style={{ fontFamily: 'Cinzel, serif' }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.div>

            {/* Tagline */}
            <motion.div
              animate={{ opacity: phase === 'reveal' ? 0 : 1 }}
              transition={{ duration: 0.4 }}
            >
              <motion.p
                className="text-white/50 tracking-[0.4em] text-xs uppercase text-center"
                style={{ fontFamily: 'Poppins, sans-serif' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                Calibrating Precision...
              </motion.p>
            </motion.div>

            {/* Progress bar */}
            <motion.div
              className="w-64 md:w-80"
              initial={{ opacity: 0 }}
              animate={{ opacity: phase === 'reveal' ? 0 : 1 }}
              transition={{ delay: 0.5, duration: phase === 'reveal' ? 0.4 : 0 }}
            >
              <div className="relative h-px bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="absolute inset-y-0 left-0 rounded-full"
                  style={{
                    width: `${progress}%`,
                    background: 'linear-gradient(90deg, #a8893d, #c6a769, #d4b97a)',
                    boxShadow: '0 0 12px rgba(198,167,105,0.8)',
                  }}
                  transition={{ duration: 0.1 }}
                />
              </div>

              <div className="flex justify-between mt-3">
                <span className="text-white/30 text-xs tracking-widest" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  LOADING
                </span>
                <span
                  className="text-xs tracking-widest"
                  style={{ color: '#c6a769', fontFamily: 'Poppins, sans-serif' }}
                >
                  {Math.floor(progress)}%
                </span>
              </div>
            </motion.div>

            {/* Animated rings */}
            <motion.div 
              className="absolute -inset-96 pointer-events-none"
              animate={phase === 'reveal' ? { x: -500, opacity: 0, rotate: -90 } : { x: 0, opacity: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            >
              {[1, 2, 3].map((ring) => (
                <motion.div
                  key={ring}
                  className="absolute inset-0 rounded-full border border-peak-gold/10"
                  style={{ margin: `${ring * 80}px` }}
                  animate={{ rotate: ring % 2 === 0 ? 360 : -360 }}
                  transition={{ duration: 20 + ring * 5, repeat: Infinity, ease: 'linear' }}
                />
              ))}
            </motion.div>
          </div>

          {/* Bottom text */}
          <motion.div
            className="absolute bottom-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: phase === 'reveal' ? 0 : 1 }}
            transition={{ delay: phase === 'reveal' ? 0 : 1, duration: 0.4 }}
          >
            <p
              className="text-white/25 text-xs tracking-[0.5em] uppercase"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Precision Engineered Automotive Kinetics
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
