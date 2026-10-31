import React from 'react';
import { MapPin, Phone, MessageSquare, Clock, ExternalLink, ArrowRight } from 'lucide-react';
import { BUSINESS_DATA } from '../../data/business';
import { NAV_ITEMS } from '../../data/navigation';
import { COLLECTIONS_DATA } from '../../data/collections';
import { scrollToSection } from '../../lib/utils';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white border-t border-brand-charcoal pt-16 sm:pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 sm:gap-12 pb-16 border-b border-white/10">
          {/* Col 1 & 2: Brand Identity and Architectural Statement */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <div className="flex items-center gap-3.5 mb-2">
                <img
                  src="/logo.png"
                  alt="Veer Furniture Mall Logo"
                  className="h-12 w-12 object-contain filter drop-shadow-[0_2px_8px_rgba(200,162,106,0.3)] flex-shrink-0"
                />
                <div className="flex items-center gap-2">
                  <span className="font-display text-2xl tracking-widest uppercase font-semibold text-white">
                    VEER
                  </span>
                  <span className="text-[10px] tracking-ultra text-brand-champagne uppercase px-2 py-0.5 border border-brand-champagne/40">
                    LOHGAON PUNE
                  </span>
                </div>
              </div>
              <p className="text-zinc-400 text-sm tracking-wide font-light">
                Furniture Mall · Showroom & Wholesale Living Gallery
              </p>
            </div>

            <p className="text-zinc-300 text-sm leading-relaxed max-w-sm">
              Dedicated to crafting enduring living spaces across Lohgaon, Dhanori, Viman Nagar, and East Pune. Hand-built hardwood frames, silent hydraulic mechanisms, and custom-tailored aesthetics.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={BUSINESS_DATA.maps.directUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-brand-champagne hover:text-white transition-colors uppercase tracking-wider font-medium"
              >
                <span>Google Business Listing</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <span className="text-white/20">|</span>
              <span className="text-xs text-zinc-400">
                {BUSINESS_DATA.coordinates.formatted}
              </span>
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-brand-champagne font-semibold mb-5">
              Explore
            </h4>
            <ul className="space-y-3">
              {NAV_ITEMS.filter((i) => !i.isAction).map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="text-zinc-300 hover:text-brand-champagne transition-colors text-sm text-left flex items-center gap-1.5 group cursor-pointer"
                  >
                    <ArrowRight className="w-3 h-3 text-brand-champagne opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Collections Directory */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-brand-champagne font-semibold mb-5">
              Collections
            </h4>
            <ul className="space-y-3">
              {COLLECTIONS_DATA.slice(0, 5).map((col) => (
                <li key={col.id}>
                  <button
                    onClick={() => scrollToSection('#collections')}
                    className="text-zinc-300 hover:text-brand-champagne transition-colors text-sm text-left line-clamp-1 cursor-pointer"
                  >
                    {col.category}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => scrollToSection('#collections')}
                  className="text-brand-champagne hover:underline text-xs tracking-wider uppercase mt-2 font-medium cursor-pointer"
                >
                  View All Categories &rarr;
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Showroom Desk & Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-brand-champagne font-semibold mb-5">
              Lohgaon Showroom
            </h4>
            <div className="space-y-4 text-sm text-zinc-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-champagne flex-shrink-0 mt-1" />
                <span className="leading-snug">{BUSINESS_DATA.address.fullFormatted}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-champagne flex-shrink-0" />
                <a
                  href={BUSINESS_DATA.contact.phoneCallable}
                  className="hover:text-white transition-colors"
                >
                  {BUSINESS_DATA.contact.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-[#25D366] flex-shrink-0" />
                <a
                  href={`https://wa.me/${BUSINESS_DATA.contact.whatsappNumber}?text=${encodeURIComponent(
                    BUSINESS_DATA.contact.whatsappPreFilledText
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp Direct Line
                </a>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-brand-champagne flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block font-medium text-white">{BUSINESS_DATA.hours.timing}</span>
                  <span className="text-xs text-zinc-400">{BUSINESS_DATA.hours.days}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Location Verification Note */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-zinc-400 gap-4">
          <p>
            &copy; {new Date().getFullYear()} Veer Furniture Mall — Lohgaon Branch, Pune. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Branch Notice: Independent Lohgaon showroom representation</span>
            <span>•</span>
            <a
              href={BUSINESS_DATA.maps.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-champagne hover:underline"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

