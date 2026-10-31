import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BUSINESS_DATA } from '../../data/business';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      onComplete();
      setIsFinished(true);
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsFinished(true);
            onComplete();
          }, 350);
          return 100;
        }
        // Organic accelerated progression
        const increment = prev < 50 ? 8 : prev < 85 ? 12 : 15;
        return Math.min(100, prev + increment);
      });
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-brand-dark text-white px-6 select-none"
        >
          {/* Architectural Framing Motif */}
          <div className="relative w-full max-w-md flex flex-col items-center">
            {/* Geometric architectural drafting lines with Logo */}
            <div className="w-20 h-20 sm:w-24 sm:h-24 mb-8 relative flex items-center justify-center">
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 90 }}
                transition={{ duration: 1.2, ease: 'easeInOut' }}
                className="absolute inset-0 border border-brand-champagne/40"
              />
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center"
              >
                <img
                  src="/logo.png"
                  alt="Veer Furniture Mall Logo"
                  className="w-full h-full object-contain filter drop-shadow-[0_2px_12px_rgba(200,162,106,0.4)]"
                />
              </motion.div>
            </div>

            {/* Brand Wordmark & Location */}
            <motion.div
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <span className="text-[10px] sm:text-xs uppercase tracking-ultra text-brand-champagne font-medium block mb-2">
                Architectural Furniture Atelier
              </span>
              <h1 className="font-display text-2xl sm:text-3xl tracking-widest uppercase font-semibold text-white">
                {BUSINESS_DATA.name}
              </h1>
              <p className="text-zinc-400 text-xs tracking-widest uppercase mt-2">
                {BUSINESS_DATA.branch} · {BUSINESS_DATA.coordinates.formatted}
              </p>
            </motion.div>

            {/* Refined Progress Bar */}
            <div className="w-48 sm:w-64 h-[2px] bg-white/10 mt-10 relative overflow-hidden">
              <motion.div
                className="absolute top-0 bottom-0 left-0 bg-brand-champagne"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'linear' }}
              />
            </div>

            <span className="text-[10px] tracking-widest text-zinc-500 font-mono mt-3">
              ENTERING ATELIER {progress}%
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

