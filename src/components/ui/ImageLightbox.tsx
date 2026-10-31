import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Info } from 'lucide-react';
import { GalleryItem } from '../../types';

interface ImageLightboxProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({
  item,
  items,
  isOpen,
  onClose,
  onNavigate,
}) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (!item) return;

      const currentIndex = items.findIndex((i) => i.id === item.id);
      if (e.key === 'ArrowRight' && currentIndex < items.length - 1) {
        onNavigate(currentIndex + 1);
      }
      if (e.key === 'ArrowLeft' && currentIndex > 0) {
        onNavigate(currentIndex - 1);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, item, items, onClose, onNavigate]);

  if (!isOpen || !item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Full size furniture gallery viewer"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md transition-opacity duration-300 p-4 sm:p-8"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        aria-label="Close image viewer"
        className="absolute top-5 right-5 sm:top-8 sm:right-8 z-50 text-white/80 hover:text-white p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-champagne cursor-pointer"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev button */}
      {currentIndex > 0 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNavigate(currentIndex - 1);
          }}
          aria-label="Previous image"
          className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/25 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-champagne cursor-pointer"
        >
          <ChevronLeft className="w-7 h-7" />
        </button>
      )}

      {/* Next button */}
      {currentIndex < items.length - 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNavigate(currentIndex + 1);
          }}
          aria-label="Next image"
          className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/25 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-champagne cursor-pointer"
        >
          <ChevronRight className="w-7 h-7" />
        </button>
      )}

      {/* Image container */}
      <div
        className="relative max-w-5xl max-h-[85vh] flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={item.imageUrl}
          alt={item.title}
          className="max-h-[70vh] sm:max-h-[75vh] w-auto max-w-full object-contain shadow-2xl border border-white/10"
        />

        {/* Caption */}
        <div className="w-full mt-4 bg-brand-charcoal/90 border border-white/10 p-4 text-left">
          <div className="flex items-center justify-between text-xs text-brand-champagne uppercase tracking-widest font-medium mb-1">
            <span>{item.category}</span>
            <span>{currentIndex + 1} / {items.length}</span>
          </div>
          <h3 className="font-display text-lg text-white font-medium">{item.title}</h3>
          <p className="text-zinc-300 text-sm mt-1">{item.description}</p>
          <div className="mt-2 pt-2 border-t border-white/10 flex items-center gap-1.5 text-xs text-zinc-400">
            <Info className="w-3.5 h-3.5 text-brand-champagne flex-shrink-0" />
            <span>Showroom viewing & custom dimension tailoring available in Lohgaon, Pune.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

