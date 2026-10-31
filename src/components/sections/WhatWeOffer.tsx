import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { OFFERINGS_DATA } from '../../data/offerings';
import { ArrowRight } from 'lucide-react';
import { scrollToSection } from '../../lib/utils';

interface WhatWeOfferProps {
  onSelectCategory?: (category: string) => void;
}

export const WhatWeOffer: React.FC<WhatWeOfferProps> = ({ onSelectCategory }) => {
  const handleCategoryClick = (category: string) => {
    if (onSelectCategory) {
      onSelectCategory(category);
    }
    scrollToSection('#collections');
  };

  return (
    <section id="offerings" className="py-16 sm:py-24 bg-brand-cream/40 border-b border-brand-border/70 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-4">
          <SectionHeading
            eyebrow="What We Offer"
            title="Core Furniture Categories"
            description="Explore our primary showroom categories designed and sized for modern Pune homes."
            className="mb-0 max-w-2xl"
          />
          <button
            onClick={() => scrollToSection('#collections')}
            className="text-xs uppercase tracking-wider font-semibold text-brand-teak hover:text-brand-dark flex items-center gap-1.5 cursor-pointer whitespace-nowrap self-start md:self-end"
          >
            <span>View All Collections</span>
            <ArrowRight aria-hidden="true" className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Short, Balanced Category Cards: 2-col on mobile, 3-col on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6">
          {OFFERINGS_DATA.map((item) => (
            <div
              key={item.id}
              onClick={() => handleCategoryClick(item.categoryFilter)}
              className="group bg-white border border-brand-border hover:border-brand-teak/50 transition-all duration-300 hover:shadow-subtle cursor-pointer flex flex-col justify-between overflow-hidden"
            >
              {/* Image Container: ~130px on mobile, ~185px on desktop */}
              <div className="relative h-32 sm:h-44 lg:h-48 w-full overflow-hidden bg-brand-charcoal">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-2 left-2 bg-brand-dark/80 backdrop-blur-sm text-white text-[9px] uppercase tracking-wider px-2 py-0.5 font-medium">
                  {item.subtitle}
                </div>
              </div>

              {/* Text Area: ~85-100px */}
              <div className="p-3.5 sm:p-5 flex-1 flex flex-col justify-between space-y-2">
                <div>
                  <h3 className="font-display text-sm sm:text-lg font-medium text-brand-dark group-hover:text-brand-teak transition-colors line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-brand-muted mt-1 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-brand-border/60 flex items-center justify-between text-[11px] font-semibold text-brand-teak group-hover:text-brand-dark uppercase tracking-wider">
                  <span>Browse</span>
                  <ArrowRight aria-hidden="true" className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
