'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  dark?: boolean;
  gold?: boolean;
  onClick?: () => void;
  delay?: number;
  animate?: boolean;
}

export default function GlassCard({
  children,
  className = '',
  hover = true,
  dark = false,
  gold = false,
  onClick,
  delay = 0,
  animate = false,
}: GlassCardProps) {
  const base = dark ? 'glass-dark' : gold ? 'glass-gold' : 'glass';

  const card = (
    <div
      className={`${base} rounded-2xl ${hover ? 'luxury-card' : ''} ${onClick ? 'cursor-pointer' : ''} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay }}
        className={`${base} rounded-2xl ${hover ? 'luxury-card' : ''} ${onClick ? 'cursor-pointer' : ''} ${className}`}
        onClick={onClick}
        whileHover={hover ? { y: -6 } : {}}
      >
        {children}
      </motion.div>
    );
  }

  return card;
}
