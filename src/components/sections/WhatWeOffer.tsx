import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { OFFERINGS_DATA } from '../../data/offerings';
import { ArrowRight } from 'lucide-react';
import { scrollToSection } from '../../lib/utils';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../ui/ScrollReveal';

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
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-4">
            <SectionHeading
              eyebrow="What We Offer"
              title="Core Furniture Categories"
              description="Explore our primary showroom categories designed and sized for modern Pune homes."
              className="mb-0 max-w-2xl"
            />
            <button
              onClick={() => scrollToSection('#collections')}
              className="text-xs uppercase tracking-wider font-semibold text-brand-teak hover:text-white hover:bg-brand-teak px-4 py-2 rounded-full border border-brand-border hover:border-brand-teak transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap self-start md:self-end shadow-sm"
            >
              <span>View All Collections</span>
              <ArrowRight aria-hidden="true" className="w-3.5 h-3.5" />
            </button>
          </div>
        </ScrollReveal>

        {/* Short, Balanced Category Cards: 2-col on mobile, 3-col on desktop */}
        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6" staggerDelay={0.06}>
          {OFFERINGS_DATA.map((item) => (
            <StaggerItem key={item.id}>
              <div
                onClick={() => handleCategoryClick(item.categoryFilter)}
                className="group bg-white rounded-2xl border border-brand-border/80 hover:border-brand-champagne/80 shadow-[0_8px_25px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(200,162,106,0.16)] hover:-translate-y-1.5 transition-all duration-500 cursor-pointer flex flex-col justify-between overflow-hidden h-full"
              >
                {/* Image Container: ~130px on mobile, ~185px on desktop */}
                <div className="relative h-32 sm:h-44 lg:h-48 w-full overflow-hidden bg-brand-charcoal">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-2 left-2 sm:top-2.5 sm:left-2.5 bg-brand-dark/85 backdrop-blur-md text-white text-[8.5px] sm:text-[9.5px] uppercase tracking-wider px-2 sm:px-2.5 py-0.5 rounded-full font-medium shadow-sm whitespace-nowrap max-w-[88%] truncate">
                    <span className="sm:hidden">{item.shortTag}</span>
                    <span className="hidden sm:inline">{item.subtitle}</span>
                  </div>
                </div>

                {/* Text Area */}
                <div className="p-3 sm:p-5 flex-1 flex flex-col justify-between space-y-2">
                  <div>
                    <h3 className="font-display text-[13px] sm:text-base lg:text-lg font-medium text-brand-dark group-hover:text-brand-teak transition-colors line-clamp-2 min-h-[2.35rem] sm:min-h-[2.85rem] leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-brand-muted mt-1 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-2.5 border-t border-brand-border/60 flex items-center justify-between text-[11px] font-semibold text-brand-teak group-hover:text-brand-dark uppercase tracking-wider">
                    <span>Browse</span>
                    <ArrowRight aria-hidden="true" className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
};

