import React, { useState, useEffect } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { COLLECTIONS_DATA } from '../../data/collections';
import { BUSINESS_DATA } from '../../data/business';
import { ArrowRight, Sparkles } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';
import { scrollToSection } from '../../lib/utils';

interface CollectionsProps {
  initialFilter?: string;
}

export const Collections: React.FC<CollectionsProps> = ({ initialFilter = 'All' }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>(initialFilter);

  useEffect(() => {
    if (initialFilter) {
      setSelectedFilter(initialFilter);
    }
  }, [initialFilter]);

  const categories = [
    'All',
    'Living Room',
    'Bedroom Furniture',
    'Wardrobes & Storage',
    'TV Consoles & Wall Units',
    'Custom Interiors',
    'Complete Home Combos',
  ];

  const filteredItems = selectedFilter === 'All'
    ? COLLECTIONS_DATA
    : COLLECTIONS_DATA.filter((item) => item.category === selectedFilter || (selectedFilter === 'Complete Home Combos' && item.category.includes('Combos')));

  return (
    <section id="collections" className="py-16 sm:py-24 bg-brand-surface border-b border-brand-border/70 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4">
          <SectionHeading
            eyebrow="Browse Our Collection"
            title="Featured Showroom Pieces"
            description="Explore popular designs available for direct inspection at our Lohgaon store."
            className="mb-0 max-w-2xl"
          />

          <button
            onClick={() => scrollToSection('#location')}
            className="text-xs uppercase tracking-wider font-semibold text-brand-dark hover:text-brand-teak flex items-center gap-1.5 cursor-pointer self-start md:self-end"
          >
            <span>Custom Dimension Blueprint</span>
            <ArrowRight aria-hidden="true" className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 no-scrollbar" role="tablist" aria-label="Collections Filter">
          {categories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={selectedFilter === cat}
              onClick={() => setSelectedFilter(cat)}
              className={`text-xs uppercase tracking-wider px-3.5 py-2 transition-all whitespace-nowrap cursor-pointer border ${
                selectedFilter === cat
                  ? 'bg-brand-dark text-white border-brand-dark font-medium shadow-subtle'
                  : 'bg-white text-brand-dark/70 border-brand-border hover:bg-brand-cream hover:text-brand-dark'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Short, Balanced Cards: 2-col on mobile, 3-col on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6">
          {filteredItems.map((item) => {
            const whatsappLink = `https://wa.me/${BUSINESS_DATA.contact.whatsappNumber}?text=${encodeURIComponent(
              `Hello Veer Furniture Mall Lohgaon, I am interested in ${item.title} (${item.category}). Could you share available sizes and pricing?`
            )}`;

            return (
              <div
                key={item.id}
                className="group bg-white border border-brand-border hover:border-brand-teak/50 transition-all duration-300 hover:shadow-subtle flex flex-col justify-between overflow-hidden"
              >
                {/* Image Wrap: ~135px on mobile, ~190-200px on desktop */}
                <div className="relative h-36 sm:h-48 lg:h-52 w-full overflow-hidden bg-brand-charcoal">
                  <img
                    src={item.imageUrl}
                    alt={`${item.title} - ${item.subtitle}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Category Tag & Badge */}
                  <div className="absolute top-2 left-2 flex items-center gap-1.5">
                    <span className="bg-brand-dark/85 backdrop-blur-sm text-white text-[9px] uppercase tracking-wider px-2 py-0.5 font-medium">
                      {item.category}
                    </span>
                    {item.accentBadge && (
                      <span className="hidden sm:inline-flex bg-brand-champagne text-brand-dark text-[9px] uppercase tracking-wider font-semibold px-2 py-0.5 items-center gap-1">
                        <Sparkles aria-hidden="true" className="w-2.5 h-2.5" />
                        {item.accentBadge}
                      </span>
                    )}
                  </div>
                </div>

                {/* Content Area: ~90-100px */}
                <div className="p-3.5 sm:p-5 flex-1 flex flex-col justify-between space-y-2.5">
                  <div>
                    <span className="text-[10px] text-brand-teak uppercase tracking-wider font-medium line-clamp-1">
                      {item.subtitle}
                    </span>
                    <h3 className="font-display text-sm sm:text-base lg:text-lg font-medium text-brand-dark group-hover:text-brand-teak transition-colors line-clamp-1 mt-0.5">
                      {item.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-brand-muted mt-1 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Concise Action: WhatsApp Enquiry */}
                  <div className="pt-2 border-t border-brand-border/60 flex items-center justify-between">
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#25D366] hover:text-[#1da851] uppercase tracking-wider cursor-pointer transition-colors"
                    >
                      <FaWhatsapp aria-hidden="true" className="w-3.5 h-3.5 flex-shrink-0" />
                      <span>Enquiry</span>
                    </a>

                    <button
                      onClick={() => scrollToSection('#location')}
                      className="text-[11px] text-brand-dark hover:text-brand-teak flex items-center gap-1 font-medium cursor-pointer"
                    >
                      <span>Showroom</span>
                      <ArrowRight aria-hidden="true" className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Compact Flat Combo Box */}
        <div className="mt-10 sm:mt-12 bg-brand-dark text-white p-6 sm:p-8 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left space-y-1">
            <span className="text-[10px] uppercase tracking-wider text-brand-champagne font-semibold">
              Complete Home Packages
            </span>
            <h4 className="font-display text-lg sm:text-xl font-medium text-white">
              Furnishing a 1BHK, 2BHK or 3BHK flat in Pune?
            </h4>
            <p className="text-zinc-300 text-xs sm:text-sm max-w-xl">
              Get bundled sofa sets, master hydraulic beds, sliding wardrobes, and dining sets at honest mall wholesale rates.
            </p>
          </div>

          <a
            href={`https://wa.me/${BUSINESS_DATA.contact.whatsappNumber}?text=${encodeURIComponent(
              'Hello Veer Furniture Mall Lohgaon, I would like details and pricing on your complete 2BHK / 3BHK home furniture packages.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-brand-champagne text-brand-dark font-semibold text-xs uppercase tracking-wider hover:bg-brand-champagneLight transition-colors whitespace-nowrap self-stretch sm:self-auto"
          >
            <FaWhatsapp aria-hidden="true" className="w-4 h-4 flex-shrink-0" />
            <span>Get Package Quotation</span>
          </a>
        </div>

      </div>
    </section>
  );
};
