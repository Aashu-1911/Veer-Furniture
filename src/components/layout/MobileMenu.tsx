import React, { useEffect } from 'react';
import { X, Phone, MapPin, Clock } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';
import { NAV_ITEMS } from '../../data/navigation';
import { BUSINESS_DATA } from '../../data/business';
import { scrollToSection } from '../../lib/utils';
import logoImg from '../../assets/images/logo.png';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, activeSection }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
      className="fixed inset-0 z-50 flex flex-col bg-brand-dark/95 backdrop-blur-xl text-white transition-opacity duration-300 md:hidden"
    >
      {/* Top Bar inside Menu */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
        <div className="flex items-center gap-3">
          <img
            src={logoImg}
            alt="Veer Furniture Mall Logo"
            className="h-10 w-10 object-contain filter drop-shadow-[0_2px_8px_rgba(200,162,106,0.3)]"
          />
          <div className="flex flex-col text-left leading-none">
            <span className="font-display text-lg font-bold tracking-wider uppercase text-white">
              VEER
            </span>
            <span className="text-[9px] font-semibold tracking-widest uppercase text-brand-champagne mt-0.5">
              FURNITURE MALL
            </span>
            <span className="text-[8px] tracking-wider uppercase font-medium text-zinc-400 mt-0.5">
              PUNE AIRPORT AREA
            </span>
          </div>
        </div>
        <button
          onClick={onClose}
          aria-label="Close navigation menu"
          className="p-2 text-zinc-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-champagne cursor-pointer"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Nav items list */}
      <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col justify-between">
        <nav className="flex flex-col space-y-5">
          {NAV_ITEMS.map((item) => {
            const sectionId = item.href.replace('#', '');
            const isActive = activeSection === sectionId;

            return (
              <button
                key={item.href}
                onClick={() => {
                  onClose();
                  scrollToSection(item.href);
                }}
                className={`text-left text-xl font-display uppercase tracking-widest py-1 transition-all ${
                  isActive
                    ? 'text-brand-champagne font-semibold pl-2 border-l-2 border-brand-champagne'
                    : 'text-zinc-300 hover:text-white hover:pl-2'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Quick Contact & Details inside drawer */}
        <div className="pt-8 border-t border-white/10 space-y-4">
          <div className="flex flex-col gap-2.5">
            <a
              href={BUSINESS_DATA.contact.phoneCallable}
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-brand-teak hover:bg-brand-teak/90 text-white text-xs uppercase tracking-widest font-semibold transition-colors shadow-sm"
            >
              <Phone className="w-4 h-4" />
              <span>Call Showroom ({BUSINESS_DATA.contact.phoneDisplay})</span>
            </a>
            <a
              href={`https://wa.me/${BUSINESS_DATA.contact.whatsappNumber}?text=${encodeURIComponent(
                BUSINESS_DATA.contact.whatsappPreFilledText
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs uppercase tracking-widest font-semibold transition-colors shadow-sm"
            >
              <FaWhatsapp className="w-4 h-4 flex-shrink-0" />
              <span>Enquire on WhatsApp</span>
            </a>
          </div>

          <div className="text-xs text-zinc-400 space-y-2 pt-2">
            <div className="flex items-start gap-2">
              <MapPin className="w-3.5 h-3.5 text-brand-champagne flex-shrink-0 mt-0.5" />
              <span>{BUSINESS_DATA.address.fullFormatted}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-brand-champagne flex-shrink-0" />
              <span>{BUSINESS_DATA.hours.timing} ({BUSINESS_DATA.hours.days})</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
