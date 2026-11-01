import React from 'react';
import { MapPin, Phone, Clock, Mail, Instagram, Facebook, MessageSquare } from 'lucide-react';
import { BUSINESS_DATA } from '../../data/business';
import { scrollToSection } from '../../lib/utils';
import logoImg from '../../assets/images/logo.png';
import { ScrollReveal } from '../ui/ScrollReveal';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#121316] text-white border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal delay={0.05} duration={0.6}>
          {/* Main 3-Column Grid Matching Chakan Reference Exactly */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12">
            
            {/* Col 1 (Left): Brand Identity, Tagline, Socials (lg:col-span-4) */}
            <div className="lg:col-span-4 flex flex-col">
              <div className="flex items-center gap-3.5">
                <div className="w-14 h-14 rounded-full overflow-hidden bg-brand-charcoal border border-white/20 p-1 flex items-center justify-center flex-shrink-0 shadow-md">
                  <img
                    src={logoImg}
                    alt="Veer Furniture Mall Logo"
                    className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(200,162,106,0.3)]"
                  />
                </div>
                <div className="flex flex-col select-none leading-none justify-center">
                  <span className="font-display text-[19px] sm:text-[20px] lg:text-[21px] font-medium tracking-[0.27em] uppercase text-white leading-none mr-[-0.27em]">
                    VEER
                  </span>
                  <span className="font-sans text-[8px] sm:text-[8.5px] lg:text-[9px] font-bold tracking-[0.075em] uppercase text-brand-champagne mt-1 sm:mt-1.5 leading-none whitespace-nowrap mr-[-0.075em]">
                    FURNITURE MALL
                  </span>
                </div>
              </div>

              <p className="font-sans text-xs sm:text-sm text-zinc-400 mt-5 leading-relaxed font-normal max-w-sm">
                Pune Airport Area's largest and most trusted modular furniture warehouse-showroom. Serving luxury comfort at factory-direct wholesale pricing across Pune.
              </p>

              {/* Social Icons with Rounded Squares */}
              <div className="flex items-center gap-3 mt-6">
                <a
                  href={BUSINESS_DATA.social?.instagram || 'https://instagram.com'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-white/5 hover:bg-brand-teak text-white/80 hover:text-white transition-all border border-white/10 hover:border-brand-champagne"
                  aria-label="Follow Veer Furniture Mall on Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>

                <a
                  href={BUSINESS_DATA.social?.facebook || 'https://facebook.com'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-white/5 hover:bg-brand-teak text-white/80 hover:text-white transition-all border border-white/10 hover:border-brand-champagne"
                  aria-label="Follow Veer Furniture Mall on Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>

                <a
                  href={`https://wa.me/${BUSINESS_DATA.contact.whatsappNumber}?text=${encodeURIComponent(
                    BUSINESS_DATA.contact.whatsappPreFilledText
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-white/5 hover:bg-emerald-600 text-white/80 hover:text-white transition-all border border-white/10 hover:border-brand-champagne"
                  aria-label="Inquire directly on WhatsApp"
                >
                  <MessageSquare className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Col 2 (Middle): Quick Links (lg:col-span-3) */}
            <div className="lg:col-span-3 flex flex-col">
              <h3 className="font-display text-xs font-bold uppercase tracking-widest text-brand-champagne border-b border-white/10 pb-2 mb-4">
                QUICK LINKS
              </h3>
              <div className="flex flex-col gap-3 font-sans text-xs sm:text-sm">
                <a
                  href="#home"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('#home');
                  }}
                  className="text-zinc-400 hover:text-brand-champagne hover:underline transition-colors font-medium tracking-wide"
                >
                  Home Showroom
                </a>

                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('#about');
                  }}
                  className="text-zinc-400 hover:text-brand-champagne hover:underline transition-colors font-medium tracking-wide"
                >
                  Heritage & About
                </a>

                <a
                  href="#offerings"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('#offerings');
                  }}
                  className="text-zinc-400 hover:text-brand-champagne hover:underline transition-colors font-medium tracking-wide"
                >
                  Furniture Categories
                </a>

                <a
                  href="#gallery"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('#gallery');
                  }}
                  className="text-zinc-400 hover:text-brand-champagne hover:underline transition-colors font-medium tracking-wide"
                >
                  Exhibition Gallery
                </a>

                <a
                  href="#reviews"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('#reviews');
                  }}
                  className="text-zinc-400 hover:text-brand-champagne hover:underline transition-colors font-medium tracking-wide"
                >
                  Customer Reviews
                </a>

                <a
                  href="#location"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('#location');
                  }}
                  className="text-zinc-400 hover:text-brand-champagne hover:underline transition-colors font-medium tracking-wide"
                >
                  Store Inquiries
                </a>
              </div>
            </div>

            {/* Col 3 (Right): Contact Coordinates (md:col-span-2 lg:col-span-5) */}
            <div className="md:col-span-2 lg:col-span-5 flex flex-col">
              <h3 className="font-display text-xs font-bold uppercase tracking-widest text-brand-champagne border-b border-white/10 pb-2 mb-4">
                CONTACT COORDINATES
              </h3>
              <div className="flex flex-col gap-4 font-sans text-xs sm:text-sm">
                {/* Address */}
                <div className="flex gap-3 text-zinc-300">
                  <MapPin className="w-4 h-4 text-brand-champagne flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">
                    Veer Furniture Mall, Opp. Yojana Poultry Farm, Yojna Nagar, Lohegaon-Wagholi Road, Lohgaon, Pune, Maharashtra 411047
                  </span>
                </div>

                {/* Phone */}
                <div className="flex gap-3 text-zinc-300 items-start">
                  <Phone className="w-4 h-4 text-brand-champagne flex-shrink-0 mt-0.5" />
                  <div className="flex flex-col">
                    <a
                      href={BUSINESS_DATA.contact.phoneCallable}
                      className="hover:text-brand-champagne transition-colors font-medium"
                    >
                      {BUSINESS_DATA.contact.phoneDisplay}
                    </a>
                    {BUSINESS_DATA.contact.secondaryPhones && (
                      <div className="flex flex-wrap gap-x-2 text-xs text-zinc-400 mt-0.5">
                        {BUSINESS_DATA.contact.secondaryPhones.map((p, i) => (
                          <a
                            key={i}
                            href={`tel:${p.replace(/\s+/g, '')}`}
                            className="hover:text-brand-champagne transition-colors"
                          >
                            {p}{i < BUSINESS_DATA.contact.secondaryPhones!.length - 1 ? ' • ' : ''}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-3 text-zinc-300 items-center">
                  <Mail className="w-4 h-4 text-brand-champagne flex-shrink-0" />
                  <a
                    href={`mailto:${BUSINESS_DATA.contact.email}`}
                    className="hover:text-brand-champagne transition-colors"
                  >
                    {BUSINESS_DATA.contact.email}
                  </a>
                </div>

                {/* Timing */}
                <div className="flex gap-3 text-zinc-300 items-center">
                  <Clock className="w-4 h-4 text-brand-champagne flex-shrink-0" />
                  <span>
                    Showroom Open: {BUSINESS_DATA.hours.timing} (Open All Days)
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Bar: Copyright & Made By Street Up with Hyperlink */}
          <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
            <p className="font-sans text-[11px] sm:text-xs text-white/50 font-normal">
              &copy; {new Date().getFullYear()} Veer Furniture Mall. All Rights Reserved. | Lohgaon, Pune, Maharashtra
            </p>

            <p className="font-sans text-[11px] sm:text-xs text-brand-champagne tracking-widest uppercase font-semibold flex items-center justify-center gap-1.5">
              <span>MADE BY</span>
              <a
                href="https://www.street-up.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-champagne hover:text-white hover:underline transition-all font-bold"
              >
                STREET UP
              </a>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
};
