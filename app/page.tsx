'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import Preloader from '@/components/Preloader';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PhilosophySection from '@/components/sections/PhilosophySection';
import PerformanceStats from '@/components/sections/PerformanceStats';
import ModelsSection from '@/components/sections/ModelsSection';
import TechnologySection from '@/components/sections/TechnologySection';
import InteriorSection from '@/components/sections/InteriorSection';
import CTASection from '@/components/sections/CTASection';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = dynamic(() => import('@/components/Hero'), { ssr: false });

export default function HomePage() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <Preloader onComplete={() => setLoaded(true)} />

      <AnimatePresence>
        {loaded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <Navbar />
            <main>
              <Hero />
              <PhilosophySection />
              <PerformanceStats />
              <ModelsSection />
              <TechnologySection />
              <InteriorSection />
              <CTASection />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
