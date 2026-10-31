import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, Navigation, Phone, Sparkles } from 'lucide-react';
import { Button } from '../ui/Button';
import { BUSINESS_DATA } from '../../data/business';
import { scrollToSection } from '../../lib/utils';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-brand-dark text-white overflow-hidden pt-24 pb-16 lg:py-0 scroll-mt-20"
    >
      {/* Background Architectural Canvas & Subtle Lighting */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1920&q=85"
          alt="Architectural living room interior by Veer Furniture Mall Lohgaon"
          className="w-full h-full object-cover object-center opacity-30 scale-105 filter brightness-90 contrast-105"
          loading="eager"
        />
        {/* Architectural Vignette Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-brand-dark/40" />
      </div>

      {/* Main Architectural Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Actions (7 cols) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            
            {/* Top Branch Stamp */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 border border-brand-champagne/40 bg-brand-charcoal/60 backdrop-blur-sm"
            >
              <Sparkles aria-hidden="true" className="w-3.5 h-3.5 text-brand-champagne" />
              <span className="text-[11px] uppercase tracking-ultra font-medium text-brand-champagne">
                Lohgaon Showroom · Pune Airport Area
              </span>
            </motion.div>

            {/* Main Editorial Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="space-y-3"
            >
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-medium tracking-tight text-white leading-[1.08]">
                Furniture That Makes a House Feel Like Yours.
              </h1>
              <p className="font-sans text-base sm:text-lg lg:text-xl text-zinc-300 font-light max-w-2xl leading-relaxed">
                Step inside Veer Furniture Mall, Lohgaon. From deep-seated handcrafted sofas and silent hydraulic beds to custom-tailored wardrobes, we bring enduring comfort to modern Pune homes.
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <Button
                variant="champagne"
                size="lg"
                onClick={() => scrollToSection('#collections')}
                className="group"
              >
                <span>Explore Collections</span>
                <ArrowDownRight aria-hidden="true" className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection('#contact')}
                className="text-white border-white/30 hover:border-white hover:bg-white/10"
              >
                <Navigation aria-hidden="true" className="w-4 h-4 mr-2 text-brand-champagne" />
                <span>Visit Our Showroom</span>
              </Button>
            </motion.div>

            {/* Verified Trust Strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-6 sm:pt-8 border-t border-white/15"
            >
              <div>
                <div className="font-display text-2xl sm:text-3xl font-semibold text-brand-champagne">
                  4.9 ★
                </div>
                <div className="text-xs text-zinc-400 mt-1 uppercase tracking-wider">
                  Verified Google Rating
                </div>
              </div>

              <div>
                <div className="font-display text-2xl sm:text-3xl font-semibold text-white">
                  320+
                </div>
                <div className="text-xs text-zinc-400 mt-1 uppercase tracking-wider">
                  Pune Homeowners
                </div>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <div className="font-display text-2xl sm:text-3xl font-semibold text-white">
                  7 Days
                </div>
                <div className="text-xs text-zinc-400 mt-1 uppercase tracking-wider">
                  Open 9 AM – 9:30 PM
                </div>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Architectural Framed Image & Floating Specs Card (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="lg:col-span-5 relative"
          >
            {/* Architectural Border & Offset Frame */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-2 sm:-inset-3 border border-brand-champagne/30 -z-10 translate-x-3 translate-y-3 hidden sm:block" />
              
              <div className="relative overflow-hidden shadow-architectural border border-white/20 bg-brand-charcoal">
                <img
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=80"
                  alt="Emerald luxury lounge suite in Veer Furniture Mall Lohgaon"
                  className="w-full h-80 sm:h-96 lg:h-[440px] object-cover object-center transition-transform duration-700 hover:scale-105"
                />

                {/* Corner Architectural Stamp */}
                <div className="absolute top-4 left-4 bg-brand-dark/90 backdrop-blur-md px-3 py-1.5 border border-white/10 text-[10px] tracking-widest uppercase text-brand-champagne font-medium">
                  Atelier Showcase
                </div>

                {/* Bottom Overlay Info Card */}
                <div className="absolute bottom-0 inset-x-0 bg-brand-dark/95 backdrop-blur-md p-5 border-t border-white/15">
                  <div className="flex items-center justify-between text-xs text-brand-champagne uppercase tracking-widest font-medium mb-1">
                    <span>Lohgaon In-Stock Feature</span>
                    <span>Customizable</span>
                  </div>
                  <h3 className="font-display text-base sm:text-lg text-white font-medium">
                    The Solarium Curved Sectional
                  </h3>
                  <p className="text-zinc-400 text-xs mt-1">
                    Salwood frame • Anti-stain velvet • 32D high-resilience comfort
                  </p>
                  
                  <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between">
                    <a
                      href={BUSINESS_DATA.contact.phoneCallable}
                      className="text-xs text-brand-champagne hover:underline inline-flex items-center gap-1 font-medium"
                    >
                      <Phone aria-hidden="true" className="w-3 h-3" />
                      <span>Inquire: {BUSINESS_DATA.contact.phoneDisplay}</span>
                    </a>
                    <span className="text-[10px] text-zinc-400 uppercase tracking-widest">
                      Yojna Nagar, Lohgaon
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom Architectural Coordinates Strip */}
      <div className="absolute bottom-0 inset-x-0 hidden md:flex items-center justify-between px-8 py-3 bg-brand-charcoal/70 border-t border-white/10 text-[11px] text-zinc-400 uppercase tracking-widest">
        <span>Showroom Branch: {BUSINESS_DATA.branch}</span>
        <span>GPS Coordinates: {BUSINESS_DATA.coordinates.formatted}</span>
        <button
          onClick={() => scrollToSection('#about')}
          className="text-brand-champagne hover:text-white flex items-center gap-1.5 cursor-pointer"
        >
          <span>Discover The Showroom</span>
          <ArrowDownRight aria-hidden="true" className="w-3.5 h-3.5" />
        </button>
      </div>
    </section>
  );
};
