'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar } from 'lucide-react';

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show button after scrolling down a bit (e.g. past the hero)
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-8 right-8 z-40 hidden md:block"
        >
          <Link
            href="/#contact"
            className="group relative flex items-center gap-3 px-5 py-3 bg-brand-blue/90 backdrop-blur-md border border-white/20 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.3)] hover:shadow-[0_0_30px_rgba(59,91,255,0.6)] hover:bg-brand-blue transition-all duration-300"
          >
            {/* Pulsing Dot */}
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-cyan"></span>
            </span>

            <span className="font-semibold text-white tracking-wide pr-1">
              Book Demo
            </span>

            <div className="w-px h-4 bg-white/20" />

            <Calendar size={18} className="text-white group-hover:scale-110 transition-transform duration-200" />
            
            {/* Shimmer Effect */}
            <div className="absolute inset-0 -z-10 rounded-full overflow-hidden">
                <div className="absolute top-0 left-[-100%] h-full w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:animate-shimmer" />
            </div>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
