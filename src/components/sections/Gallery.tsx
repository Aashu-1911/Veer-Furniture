import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { GALLERY_DATA } from '../../data/gallery';
import { GalleryItem } from '../../types';
import { ImageLightbox } from '../ui/ImageLightbox';
import { Maximize2, Sparkles } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const categories = [
    'All',
    'Living Room',
    'Bedroom',
    'Dining',
    'Custom Interiors',
    'Showroom Floor',
  ];

  const filteredItems = activeCategory === 'All'
    ? GALLERY_DATA
    : GALLERY_DATA.filter((i) => i.category === activeCategory);

  const openLightbox = (item: GalleryItem) => {
    setLightboxItem(item);
    setIsLightboxOpen(true);
  };

  const handleLightboxNavigate = (index: number) => {
    if (filteredItems[index]) {
      setLightboxItem(filteredItems[index]);
    }
  };

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-brand-surface border-b border-brand-border/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-14 gap-6">
          <SectionHeading
            eyebrow="Visual Living Archive"
            title="Spatial Aesthetics & Craftsmanship"
            description="Explore our living, resting, and dining installations. Click any frame to inspect textural details and dimension options."
            className="mb-0"
          />

          <div className="text-xs text-brand-muted flex items-center gap-2">
            <Sparkles aria-hidden="true" className="w-4 h-4 text-brand-champagne flex-shrink-0" />
            <span>Curated architectural references & authentic showroom vignettes</span>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar" role="tablist" aria-label="Gallery Filters">
          {categories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs uppercase tracking-wider px-4 py-2 transition-all whitespace-nowrap cursor-pointer border ${
                activeCategory === cat
                  ? 'bg-brand-dark text-white border-brand-dark font-medium shadow-subtle'
                  : 'bg-white text-brand-dark/70 border-brand-border hover:bg-brand-cream hover:text-brand-dark'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Asymmetrical Editorial Image Grid - 2 cols on mobile, 2 on tablet, 3 on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {filteredItems.map((item) => {
            const spanClass = item.aspectRatio === 'wide'
              ? 'sm:col-span-2 lg:col-span-2'
              : '';

            return (
              <div
                key={item.id}
                role="button"
                tabIndex={0}
                aria-label={`View enlarged photo: ${item.title}`}
                onClick={() => openLightbox(item)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openLightbox(item);
                  }
                }}
                className={`group relative overflow-hidden bg-brand-charcoal cursor-pointer border border-brand-border shadow-subtle transition-all duration-300 hover:shadow-architectural focus-visible:ring-2 focus-visible:ring-brand-champagne focus-visible:outline-none ${spanClass}`}
              >
                {/* Image Container - Compact on mobile, spacious on tablet/desktop */}
                <div className="relative overflow-hidden h-40 sm:h-72 lg:h-88 w-full">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Gradient & Caption Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/95 via-brand-dark/40 to-transparent flex flex-col justify-end p-2.5 sm:p-6 text-white transition-opacity duration-300 opacity-90 sm:opacity-0 sm:group-hover:opacity-100">
                    <div className="flex items-center justify-between text-[9px] sm:text-xs text-brand-champagne uppercase tracking-wider sm:tracking-widest font-medium mb-0.5 sm:mb-1">
                      <span className="truncate">{item.category}</span>
                      <Maximize2 aria-hidden="true" className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0 ml-1 opacity-80" />
                    </div>
                    <h3 className="font-display text-xs sm:text-base lg:text-lg font-medium text-white truncate sm:line-clamp-none">
                      {item.title}
                    </h3>
                    <p className="hidden sm:block text-zinc-300 text-xs mt-1 line-clamp-2">
                      {item.description}
                    </p>
                    <span className="hidden sm:inline-block text-[10px] text-brand-champagne uppercase tracking-wider mt-2 font-mono">
                      Click to inspect in fullscreen
                    </span>
                  </div>

                  {/* Top-Right Category Pill (Visible at rest on tablet/desktop) */}
                  <div className="hidden sm:block absolute top-3 right-3 bg-brand-dark/75 backdrop-blur-sm text-white text-[10px] uppercase tracking-wider px-2.5 py-1 font-medium group-hover:opacity-0 transition-opacity">
                    {item.category}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Fullscreen Interactive Lightbox */}
      <ImageLightbox
        item={lightboxItem}
        items={filteredItems}
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        onNavigate={handleLightboxNavigate}
      />
    </section>
  );
};
