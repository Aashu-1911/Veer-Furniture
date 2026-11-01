import React, { useRef, useEffect } from 'react';
import { ArrowDownRight, MapPin } from 'lucide-react';
import { Button } from '../ui/Button';
import { BUSINESS_DATA } from '../../data/business';
import { scrollToSection } from '../../lib/utils';
import { ScrollReveal } from '../ui/ScrollReveal';

export const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay may be restricted in strict battery-saver modes; poster serves as fallback
      });
    }
  }, []);

  return (
    <section
      id="home"
      className="relative bg-brand-dark text-white overflow-hidden pt-32 pb-12 sm:pt-40 sm:pb-16 lg:pt-44 lg:pb-20 scroll-mt-20 border-b border-white/10 min-h-[580px] lg:min-h-[640px] flex flex-col justify-between"
    >
      {/* Background Video with Luxury Editorial Overlay */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/assets/videos/hero-video-poster.jpg"
          className="w-full h-full object-cover object-center pointer-events-none"
          aria-hidden="true"
        >
          <source src="/assets/videos/veer-furniture-hero-10s.mp4" type="video/mp4" />
        </video>

        {/* Balanced video visibility overlay:
            Light balanced tint so the showroom video is bright, vivid, and clearly visible,
            with a soft localized gradient on the text side and drop-shadows for crisp legibility.
        */}
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-transparent w-full md:w-3/5" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/85 via-transparent to-black/35" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-between">
        
        {/* Editorial Text Composition */}
        <ScrollReveal delay={0.08} duration={0.65}>
          <div className="max-w-2xl lg:max-w-3xl space-y-5 sm:space-y-6 text-left py-6 sm:py-10 lg:py-16">
            
            {/* Location Eyebrow (Rounded Pill) */}
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-brand-champagne font-medium px-3.5 py-1.5 rounded-full bg-black/35 backdrop-blur-sm border border-brand-champagne/30 drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
              <span className="w-2 h-2 rounded-full bg-brand-champagne animate-pulse" />
              <span>Lohgaon Showroom · Pune Airport Area</span>
            </div>

            {/* Elegant Display Heading */}
            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.12] drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
              Furniture Showroom in Lohgaon, Pune
            </h1>

            {/* Short Supporting Description */}
            <p className="font-sans text-sm sm:text-base lg:text-lg text-zinc-100 font-light max-w-xl leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              Veer Furniture Mall offers quality sofa sets, hydraulic beds, and wardrobes near Pune Airport at direct factory prices.
            </p>

            {/* Two Primary CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <Button
                variant="champagne"
                size="md"
                onClick={() => scrollToSection('#collections')}
                className="group shadow-architectural"
              >
                <span>View All Furniture</span>
                <ArrowDownRight aria-hidden="true" className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
              </Button>

              <Button
                variant="outline"
                size="md"
                onClick={() => scrollToSection('#location')}
                className="text-white border-white/50 hover:border-white bg-black/30 hover:bg-white/15 backdrop-blur-sm shadow-architectural"
              >
                <MapPin aria-hidden="true" className="w-4 h-4 mr-2 text-brand-champagne" />
                <span>Visit Showroom</span>
              </Button>
            </div>

          </div>
        </ScrollReveal>

        {/* BELOW HERO: Compact, Single-Row Verified Trust Information Strip */}
        <ScrollReveal delay={0.2} duration={0.6}>
          <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/20">
            <div className="flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm text-zinc-100 font-normal drop-shadow-[0_1px_6px_rgba(0,0,0,0.9)]">
              <div className="flex items-center gap-2">
                <span className="text-brand-champagne font-semibold text-base font-display">4.9 ★</span>
                <span>Verified Google Maps Rating</span>
              </div>

              <div className="hidden md:inline-block w-1 h-1 rounded-full bg-white/40" />

              <div className="flex items-center gap-2">
                <span className="text-white font-semibold font-display">Wholesale</span>
                <span>Direct Factory Showroom Rates</span>
              </div>

              <div className="hidden md:inline-block w-1 h-1 rounded-full bg-white/40" />

              <div className="flex items-center gap-2">
                <span className="text-brand-champagne font-semibold">Open Daily:</span>
                <span>{BUSINESS_DATA.hours.timing} (7 Days)</span>
              </div>

              <div className="hidden lg:inline-block w-1 h-1 rounded-full bg-white/40" />

              <div className="flex items-center gap-1.5 text-zinc-200 text-xs">
                <MapPin aria-hidden="true" className="w-3.5 h-3.5 text-brand-champagne" />
                <span>Yojna Nagar, Lohegaon-Wagholi Road</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
