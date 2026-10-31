import React from 'react';
import { ArrowDownRight, MapPin } from 'lucide-react';
import { Button } from '../ui/Button';
import { BUSINESS_DATA } from '../../data/business';
import { scrollToSection } from '../../lib/utils';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative bg-brand-dark text-white overflow-hidden pt-28 pb-12 sm:pt-36 sm:pb-16 lg:py-24 scroll-mt-20 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 2-Column Clean Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT: Eyebrow, Heading, Short Description, 2 CTAs */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-left">
            
            {/* Location Eyebrow */}
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-brand-champagne font-medium">
              <span className="w-2 h-2 rounded-full bg-brand-champagne animate-pulse" />
              <span>Lohgaon Showroom · Pune Airport Area</span>
            </div>

            {/* Elegant Display Heading */}
            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.12]">
              Furniture That Makes a House Feel Like Yours.
            </h1>

            {/* Short Supporting Description */}
            <p className="font-sans text-sm sm:text-base lg:text-lg text-zinc-300 font-light max-w-xl leading-relaxed">
              Direct showroom living, bedroom, and dining furniture crafted for modern Pune homes.
            </p>

            {/* Two Primary CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <Button
                variant="champagne"
                size="md"
                onClick={() => scrollToSection('#collections')}
                className="group"
              >
                <span>Explore Collections</span>
                <ArrowDownRight aria-hidden="true" className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
              </Button>

              <Button
                variant="outline"
                size="md"
                onClick={() => scrollToSection('#location')}
                className="text-white border-white/30 hover:border-white hover:bg-white/10"
              >
                <MapPin aria-hidden="true" className="w-4 h-4 mr-2 text-brand-champagne" />
                <span>Visit Showroom</span>
              </Button>
            </div>

          </div>

          {/* RIGHT: ONE Large Premium Furniture Photograph with subtle minimal label */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative overflow-hidden border border-white/15 shadow-architectural bg-brand-charcoal">
              <img
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=85"
                alt="Curated living room furniture at Veer Furniture Mall Lohgaon"
                className="w-full h-64 sm:h-88 lg:h-[400px] object-cover object-center transition-transform duration-700 hover:scale-105"
                loading="eager"
              />
              
              {/* Small, Unobtrusive Image Tag */}
              <div className="absolute bottom-3 right-3 bg-brand-dark/85 backdrop-blur-sm px-3 py-1 border border-white/10 text-[10px] tracking-wider uppercase text-zinc-300">
                Lohgaon Showroom Display
              </div>
            </div>
          </div>

        </div>

        {/* BELOW HERO: Compact, Single-Row Verified Trust Information Strip */}
        <div className="mt-10 sm:mt-14 pt-6 sm:pt-8 border-t border-white/10">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm text-zinc-300 font-normal">
            <div className="flex items-center gap-2">
              <span className="text-brand-champagne font-semibold text-base font-display">4.9 ★</span>
              <span>Verified Google Rating ({BUSINESS_DATA.reputation.googleReviewCount}+ Reviews)</span>
            </div>

            <div className="hidden md:inline-block w-1 h-1 rounded-full bg-white/30" />

            <div className="flex items-center gap-2">
              <span className="text-white font-semibold font-display">320+</span>
              <span>Pune Homeowners Served</span>
            </div>

            <div className="hidden md:inline-block w-1 h-1 rounded-full bg-white/30" />

            <div className="flex items-center gap-2">
              <span className="text-brand-champagne font-semibold">Open Daily:</span>
              <span>{BUSINESS_DATA.hours.timing} (7 Days)</span>
            </div>

            <div className="hidden lg:inline-block w-1 h-1 rounded-full bg-white/30" />

            <div className="flex items-center gap-1.5 text-zinc-400 text-xs">
              <MapPin aria-hidden="true" className="w-3.5 h-3.5 text-brand-champagne" />
              <span>Yojna Nagar, Lohegaon-Wagholi Road</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
