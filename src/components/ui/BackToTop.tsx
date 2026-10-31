import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 350) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top of page"
      className="fixed bottom-5 left-5 z-40 w-11 h-11 rounded-full bg-brand-charcoal text-brand-champagne border border-brand-champagne/40 shadow-elevated flex items-center justify-center transition-all duration-300 hover:bg-brand-champagne hover:text-brand-dark hover:border-brand-champagne hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-champagne cursor-pointer select-none"
    >
      <ArrowUp className="w-4 h-4 stroke-[2.5]" />
    </button>
  );
};
