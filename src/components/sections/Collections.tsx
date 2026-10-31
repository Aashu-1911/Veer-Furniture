import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { COLLECTIONS_DATA } from '../../data/collections';
import { BUSINESS_DATA } from '../../data/business';
import { Button } from '../ui/Button';
import { MessageSquare, Check, Sparkles, Ruler, ArrowRight } from 'lucide-react';
import { scrollToSection } from '../../lib/utils';

export const Collections: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const categories = [
    'All',
    'Living Room',
    'Bedroom Furniture',
    'Wardrobes & Storage',
    'Dining Room',
    'Complete Home Combos',
  ];

  const filteredItems = selectedFilter === 'All'
    ? COLLECTIONS_DATA
    : COLLECTIONS_DATA.filter((item) => item.category === selectedFilter || (selectedFilter === 'Complete Home Combos' && item.category.includes('Combos')));

  return (
    <section id="collections" className="py-20 sm:py-28 bg-brand-cream/60 border-b border-brand-border/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <SectionHeading
            eyebrow="Curated Portfolio"
            title="Furniture Collections for Pune Living"
            description="Engineered for longevity, tailored to your room blueprints, and showcased for hands-on inspection at our Lohgaon showroom."
            className="mb-0"
          />

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => scrollToSection('#contact')}
              className="text-xs tracking-wider uppercase font-semibold"
            >
              <span>Request Custom Blueprint Quote</span>
            </Button>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar" role="tablist" aria-label="Furniture Categories">
          {categories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={selectedFilter === cat}
              onClick={() => setSelectedFilter(cat)}
              className={`text-xs uppercase tracking-wider px-4 py-2.5 transition-all whitespace-nowrap cursor-pointer border ${
                selectedFilter === cat
                  ? 'bg-brand-dark text-white border-brand-dark font-medium shadow-subtle'
                  : 'bg-white/80 text-brand-dark/70 border-brand-border hover:bg-white hover:text-brand-dark'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Editorial Layout: Featured Showcase + Dynamic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => {
            const isWide = index === 0 && selectedFilter === 'All';
            const whatsappLink = `https://wa.me/${BUSINESS_DATA.contact.whatsappNumber}?text=${encodeURIComponent(
              `Hello Veer Furniture Mall Lohgaon, I am inquiring about the ${item.title} (${item.category}). Can you share available dimensions, fabric options, and price estimates?`
            )}`;

            return (
              <div
                key={item.id}
                className={`group bg-white border border-brand-border transition-all duration-300 hover:shadow-elevated flex flex-col justify-between ${
                  isWide ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                {/* Image Wrap */}
                <div className="relative overflow-hidden bg-brand-charcoal">
                  <img
                    src={item.imageUrl}
                    alt={`${item.title} - ${item.subtitle}`}
                    className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                      isWide ? 'h-72 sm:h-96' : 'h-64 sm:h-72'
                    }`}
                    loading="lazy"
                  />

                  {/* Category & Badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="bg-brand-dark/90 backdrop-blur-sm text-white text-[10px] tracking-widest uppercase px-2.5 py-1 font-medium">
                      {item.category}
                    </span>
                    {item.accentBadge && (
                      <span className="bg-brand-champagne text-brand-dark text-[10px] tracking-wider uppercase font-semibold px-2.5 py-1 flex items-center gap-1 shadow-subtle">
                        <Sparkles aria-hidden="true" className="w-3 h-3" />
                        {item.accentBadge}
                      </span>
                    )}
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-2">
                    <div className="text-[11px] uppercase tracking-widest text-brand-teak font-medium">
                      {item.subtitle}
                    </div>
                    <h3 className="font-display text-xl sm:text-2xl font-medium text-brand-dark group-hover:text-brand-teak transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-brand-muted text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Materials & Spec Pills */}
                  <div className="space-y-3 pt-3 border-t border-brand-border/70">
                    <div className="flex items-center gap-1.5 text-xs text-brand-dark font-medium">
                      <Ruler aria-hidden="true" className="w-3.5 h-3.5 text-brand-teak" />
                      <span>{item.dimensionsSample}</span>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {item.materials.map((mat, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1 text-[11px] text-brand-muted bg-brand-surface border border-brand-border px-2.5 py-1"
                        >
                          <Check aria-hidden="true" className="w-3 h-3 text-brand-teak" />
                          <span>{mat}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-brand-border flex items-center justify-between gap-3">
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-semibold text-[#1DA851] hover:text-[#128C3E] uppercase tracking-wider cursor-pointer"
                    >
                      <MessageSquare aria-hidden="true" className="w-4 h-4 fill-current" />
                      <span>Inquire on WhatsApp</span>
                    </a>

                    <button
                      onClick={() => scrollToSection('#contact')}
                      className="text-xs text-brand-dark hover:text-brand-teak flex items-center gap-1 font-medium cursor-pointer"
                    >
                      <span>Showroom Info</span>
                      <ArrowRight aria-hidden="true" className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Home Furniture Combo Banner */}
        <div className="mt-14 bg-brand-dark text-white p-8 sm:p-10 border border-white/10 shadow-architectural flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-left">
            <span className="text-[10px] uppercase tracking-ultra text-brand-champagne font-semibold">
              Complete Pune Apartment Packages
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-medium text-white">
              Furnishing a New Flat in Lohgaon or East Pune?
            </h3>
            <p className="text-zinc-300 text-sm max-w-2xl leading-relaxed">
              Inquire about our comprehensive 1BHK, 2BHK, and 3BHK home furniture bundles including matching master beds, wardrobes, sectional sofas, and dining sets at honest direct-from-mall rates.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto flex-shrink-0">
            <a
              href={`https://wa.me/${BUSINESS_DATA.contact.whatsappNumber}?text=${encodeURIComponent(
                'Hello Veer Furniture Mall Lohgaon, I am furnishing a new home in Pune and would like details on your 2BHK / 3BHK complete home furniture packages.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-champagne text-brand-dark font-semibold text-xs uppercase tracking-wider hover:bg-brand-champagneLight transition-colors"
            >
              <MessageSquare aria-hidden="true" className="w-4 h-4" />
              <span>Get Combo Package Details</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
