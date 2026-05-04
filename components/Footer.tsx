'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden py-16 px-6 md:px-12"
      style={{ background: '#0a0a0c', borderTop: '1px solid rgba(198,167,105,0.15)' }}
    >
      {/* Glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(198,167,105,0.5), transparent)' }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-6 h-6 border border-peak-gold/60 rotate-45 flex items-center justify-center"
                style={{ background: 'rgba(198,167,105,0.08)' }}
              >
                <div className="w-1.5 h-1.5 bg-peak-gold rounded-full" />
              </div>
              <span
                className="font-display text-white text-sm font-bold tracking-[0.2em]"
                style={{ fontFamily: 'Cinzel, serif' }}
              >
                P.E.A.K
              </span>
            </div>
            <p
              className="text-white/30 text-xs leading-relaxed"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Precision Engineered Automotive Kinetics.
              <br />Engineered to the Peak of Perfection.
            </p>
            <div className="flex gap-4 mt-6">
              {['◈', '◎', '◇', '⬡'].map((icon, i) => (
                <button
                  key={i}
                  className="w-9 h-9 rounded-full flex items-center justify-center text-peak-gold/50 hover:text-peak-gold transition-colors duration-300"
                  style={{ background: 'rgba(198,167,105,0.08)', border: '1px solid rgba(198,167,105,0.2)' }}
                >
                  <span className="text-xs">{icon}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Models */}
          <div>
            <h4
              className="text-white/60 text-xs tracking-[0.3em] uppercase mb-5"
              style={{ fontFamily: 'Cinzel, serif' }}
            >
              Models
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Aether EV', href: '/models/aether' },
                { label: 'Stratos Sport', href: '/models/stratos' },
                { label: 'Vertex Hyper', href: '/models/vertex' },
                { label: 'Configurator', href: '/configurator' },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-white/40 text-sm hover:text-peak-gold transition-colors duration-300"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4
              className="text-white/60 text-xs tracking-[0.3em] uppercase mb-5"
              style={{ fontFamily: 'Cinzel, serif' }}
            >
              Company
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Philosophy', href: '/#philosophy' },
                { label: 'Technology', href: '/#technology' },
                { label: 'Careers', href: '#' },
                { label: 'Press', href: '#' },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-white/40 text-sm hover:text-peak-gold transition-colors duration-300"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-white/60 text-xs tracking-[0.3em] uppercase mb-5"
              style={{ fontFamily: 'Cinzel, serif' }}
            >
              Contact
            </h4>
            <address
              className="not-italic space-y-3"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              <p className="text-white/40 text-sm">Geneva, Switzerland</p>
              <p className="text-white/40 text-sm">+41 22 000 0000</p>
              <p className="text-peak-gold/70 text-sm hover:text-peak-gold transition-colors cursor-pointer">hello@peak-auto.com</p>
              <p className="text-white/30 text-xs leading-relaxed">
                Showrooms in Geneva, Dubai,<br />Tokyo & New York
              </p>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderTop: '1px solid rgba(198,167,105,0.1)' }}
        >
          <p
            className="text-white/25 text-xs tracking-widest"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            © 2024 P.E.A.K Automotive SA. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms', 'Cookie Preferences'].map((item) => (
              <button
                key={item}
                className="text-white/25 text-xs hover:text-white/50 transition-colors duration-300"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
