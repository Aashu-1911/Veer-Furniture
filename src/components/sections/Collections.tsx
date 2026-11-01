import React, { useState, useEffect } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { COLLECTIONS_DATA } from '../../data/collections';
import { BUSINESS_DATA } from '../../data/business';
import { ArrowRight, Sparkles } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';
import { scrollToSection } from '../../lib/utils';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../ui/ScrollReveal';

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
        <ScrollReveal>
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
        </ScrollReveal>

        {/* Category Filter Tabs */}
        <ScrollReveal delay={0.08}>
          <div className="flex items-center gap-2.5 overflow-x-auto pb-3 mb-8 no-scrollbar" role="tablist" aria-label="Collections Filter">
            {categories.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={selectedFilter === cat}
                onClick={() => setSelectedFilter(cat)}
                className={`text-xs uppercase tracking-wider px-4 py-2 rounded-full transition-all whitespace-nowrap cursor-pointer border ${
                  selectedFilter === cat
                    ? 'bg-brand-dark text-white border-brand-dark font-semibold shadow-md'
                    : 'bg-white text-brand-dark/70 border-brand-border hover:bg-brand-cream hover:border-brand-teak hover:text-brand-dark'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Chakan-Inspired Rounded Elevated Cards: 2-col on mobile, 3-col on desktop */}
        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6" staggerDelay={0.06}>
          {filteredItems.map((item) => {
            const whatsappLink = `https://wa.me/${BUSINESS_DATA.contact.whatsappNumber}?text=${encodeURIComponent(
              `Hello Veer Furniture Mall Lohgaon, I am interested in ${item.title} (${item.category}). Could you share available sizes and pricing?`
            )}`;

            return (
              <StaggerItem key={item.id}>
                <div
                  className="group bg-white rounded-2xl border border-brand-border/80 hover:border-brand-champagne/80 shadow-[0_8px_25px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(200,162,106,0.16)] hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between overflow-hidden h-full"
                >
                  {/* Image Wrap */}
                  <div className="relative h-36 sm:h-48 lg:h-52 w-full overflow-hidden bg-brand-charcoal">
                    <img
                      src={item.imageUrl}
                      alt={`${item.title} - ${item.subtitle}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Category Tag & Badge */}
                    <div className="absolute top-2 left-2 sm:top-2.5 sm:left-2.5 flex items-center gap-1.5 max-w-[88%]">
                      <span className="bg-brand-dark/85 backdrop-blur-md text-white text-[8.5px] sm:text-[9.5px] uppercase tracking-wider px-2 sm:px-2.5 py-0.5 rounded-full font-medium shadow-sm whitespace-nowrap truncate">
                        <span className="sm:hidden">{item.shortTag || item.category}</span>
                        <span className="hidden sm:inline">{item.category}</span>
                      </span>
                      {item.accentBadge && (
                        <span className="hidden sm:inline-flex bg-brand-champagne text-brand-dark text-[9px] uppercase tracking-wider font-semibold px-2.5 py-0.5 rounded-full items-center gap-1 shadow-sm whitespace-nowrap">
                          <Sparkles aria-hidden="true" className="w-2.5 h-2.5" />
                          {item.accentBadge}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="p-3 sm:p-5 flex-1 flex flex-col justify-between space-y-2 sm:space-y-3">
                    <div>
                      <span className="text-[10px] sm:text-xs text-brand-teak uppercase tracking-wider font-medium line-clamp-1">
                        {item.subtitle}
                      </span>
                      <h3 className="font-display text-[13px] sm:text-base lg:text-lg font-medium text-brand-dark group-hover:text-brand-teak transition-colors line-clamp-2 min-h-[2.35rem] sm:min-h-[2.85rem] leading-snug mt-0.5">
                        {item.title}
                      </h3>
                      <p className="text-[11px] sm:text-xs text-brand-muted mt-1 line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Concise Action: WhatsApp Logo Only & Showroom */}
                    <div className="pt-2.5 border-t border-brand-border/60 flex items-center justify-between gap-2">
                      <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Enquire about ${item.title} on WhatsApp`}
                        className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-700 hover:bg-emerald-600 hover:text-white border border-emerald-200 flex items-center justify-center cursor-pointer transition-all duration-300 shadow-sm hover:scale-105 flex-shrink-0"
                      >
                        <FaWhatsapp aria-hidden="true" className="w-4 h-4" />
                      </a>

                      <button
                        onClick={() => scrollToSection('#location')}
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-brand-cream/60 hover:bg-brand-dark hover:text-white text-brand-dark border border-brand-border text-[10px] sm:text-[11px] font-medium cursor-pointer transition-all duration-300"
                      >
                        <span>Showroom</span>
                        <ArrowRight aria-hidden="true" className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Compact Flat Combo Box (Rounded-2xl with Rounded-full CTA) */}
        <ScrollReveal delay={0.12}>
          <div className="mt-10 sm:mt-12 bg-brand-dark text-white p-6 sm:p-8 rounded-2xl border border-white/10 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
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
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-brand-champagne text-brand-dark font-semibold text-xs uppercase tracking-wider hover:bg-brand-champagneLight transition-colors whitespace-nowrap self-stretch sm:self-auto shadow-md"
            >
              <FaWhatsapp aria-hidden="true" className="w-4 h-4 flex-shrink-0" />
              <span>Get Package Quotation</span>
            </a>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
