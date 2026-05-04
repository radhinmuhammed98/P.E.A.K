'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { label: 'Models', href: '/#models' },
  { label: 'Technology', href: '/#technology' },
  { label: 'Interior', href: '/#interior' },
  { label: 'Configurator', href: '/configurator' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomepage = pathname === '/';

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div
          className={`transition-all duration-500 ${
            scrolled
              ? 'glass border-b border-peak-gold/20 py-4'
              : 'bg-transparent py-6'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div
                  className="w-8 h-8 border border-peak-gold/60 rotate-45 flex items-center justify-center transition-all duration-500 group-hover:border-peak-gold group-hover:rotate-[405deg]"
                  style={{ background: 'rgba(198,167,105,0.08)' }}
                >
                  <div className="w-2 h-2 bg-peak-gold rounded-full" />
                </div>
              </div>
              <span
                className={`font-display text-lg font-bold tracking-[0.2em] transition-colors duration-300 ${
                  scrolled || !isHomepage ? 'text-peak-text' : 'text-white'
                }`}
                style={{ fontFamily: 'Cinzel, serif' }}
              >
                P.E.A.K
              </span>
            </Link>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-xs tracking-[0.2em] uppercase font-medium transition-colors duration-300 relative group ${
                    scrolled || !isHomepage
                      ? 'text-peak-text/70 hover:text-peak-gold'
                      : 'text-white/70 hover:text-white'
                  }`}
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-peak-gold transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-4">
              <Link href="/configurator" className="btn-primary text-sm py-2.5 px-6">
                Build Your Car
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 flex flex-col gap-1.5"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="block h-px w-6 bg-current origin-center"
                  style={{ color: scrolled || !isHomepage ? 'var(--text)' : 'white' }}
                  animate={{
                    rotate: menuOpen && i === 0 ? 45 : menuOpen && i === 2 ? -45 : 0,
                    y: menuOpen && i === 0 ? 6 : menuOpen && i === 2 ? -6 : 0,
                    opacity: menuOpen && i === 1 ? 0 : 1,
                    width: menuOpen && i === 1 ? 0 : 24,
                  }}
                  transition={{ duration: 0.3 }}
                />
              ))}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 glass flex flex-col items-center justify-center gap-8"
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(20px)' }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  href={link.href}
                  className="font-display text-3xl text-peak-text tracking-widest hover:text-peak-gold transition-colors"
                  style={{ fontFamily: 'Cinzel, serif' }}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Link
                href="/configurator"
                className="btn-primary mt-4"
                onClick={() => setMenuOpen(false)}
              >
                Build Your Car
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
