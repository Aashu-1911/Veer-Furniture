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
    // Respect user prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      onComplete();
      setIsFinished(true);
      return;
    }

    const startTime = performance.now();
    const targetDuration = 2000; // 2.0 seconds total polished loading experience

    const timer = setInterval(() => {
      const elapsed = performance.now() - startTime;
      const rawProgress = Math.min(1, elapsed / targetDuration);
      
      // Easing curve (ease-out cubic) for a natural, luxurious progression
      const easedProgress = Math.round((1 - Math.pow(1 - rawProgress, 3)) * 100);

      setProgress(easedProgress);

      if (rawProgress >= 1) {
        clearInterval(timer);
        setTimeout(() => {
          setIsFinished(true);
          onComplete();
        }, 180);
      }
    }, 24);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-brand-dark text-white px-6 select-none"
        >
          <div className="relative w-full max-w-sm flex flex-col items-center text-center">
            
            {/* Smooth Logo Reveal Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mb-6 relative flex items-center justify-center"
            >
              <img
                src="/logo.png"
                alt="Veer Furniture Mall Logo"
                className="h-20 w-20 sm:h-24 sm:w-24 object-contain filter drop-shadow-[0_2px_18px_rgba(200,162,106,0.35)]"
              />
            </motion.div>

            {/* Brand Identification */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-1.5"
            >
              <span className="text-[10px] uppercase tracking-ultra text-brand-champagne font-medium block">
                Furniture Mall · Lohgaon, Pune
              </span>
              <h2 className="font-display text-xl sm:text-2xl tracking-widest uppercase font-semibold text-white">
                {BUSINESS_DATA.name}
              </h2>
            </motion.div>

            {/* Refined Gold Progress Indicator */}
            <div className="w-48 sm:w-56 h-[2px] bg-white/10 rounded-full mt-8 relative overflow-hidden">
              <motion.div
                className="absolute top-0 bottom-0 left-0 bg-gradient-to-r from-brand-champagne/80 via-brand-champagne to-brand-champagneLight rounded-full"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'linear' }}
              />
            </div>

            <div className="mt-3 text-[10px] tracking-widest text-zinc-400 font-mono">
              LOADING SHOWROOM {progress}%
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
