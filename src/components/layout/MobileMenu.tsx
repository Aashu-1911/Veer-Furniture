import React, { useEffect } from 'react';
import { Phone, X } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';
import { BUSINESS_DATA } from '../../data/business';
import { scrollToSection } from '../../lib/utils';

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

  const links = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Products', href: '#collections', id: 'collections' },
    { label: 'Gallery', href: '#gallery', id: 'gallery' },
    { label: 'Reviews', href: '#reviews', id: 'reviews' },
    { label: 'Contact', href: '#location', id: 'location' },
  ];

  return (
    <>
      {/* Dimmed backdrop to close on tap */}
      <div
        className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm transition-opacity duration-300 md:hidden"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Floating Card Popup matching luxury website theme */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation Menu"
        className="fixed top-20 right-4 z-50 w-[260px] sm:w-[280px] bg-[#16191E]/95 backdrop-blur-xl rounded-[24px] p-5 shadow-[0_20px_50px_rgba(0,0,0,0.7)] border border-white/10 flex flex-col md:hidden animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Header with Title & Close Button */}
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
          <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-brand-champagne">
            SHOWROOM MENU
          </span>
          <button
            onClick={onClose}
            aria-label="Close Menu"
            className="p-1.5 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Navigation Links list */}
        <nav className="flex flex-col space-y-1.5">
          {links.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.href}
                onClick={() => {
                  onClose();
                  scrollToSection(item.href);
                }}
                className={`text-left text-sm font-semibold tracking-wide transition-all cursor-pointer select-none flex items-center justify-between py-2 px-3 rounded-xl ${
                  isActive
                    ? 'text-brand-champagne bg-brand-champagne/15 font-bold shadow-xs'
                    : 'text-zinc-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>{item.label}</span>
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-champagne shadow-[0_0_8px_rgba(200,162,106,0.9)]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Divider Line */}
        <div className="border-t border-white/10 my-3.5" />

        {/* Call Now and WhatsApp Chat Action Pills */}
        <div className="flex flex-col gap-2.5">
          <a
            href={BUSINESS_DATA.contact.phoneCallable}
            className="w-full py-2.5 px-4 rounded-full bg-brand-champagne hover:bg-brand-champagneLight text-brand-dark text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all active:scale-95"
          >
            <span>CALL NOW</span>
            <Phone className="w-3.5 h-3.5" />
          </a>

          <a
            href={`https://wa.me/${BUSINESS_DATA.contact.whatsappNumber}?text=${encodeURIComponent(
              BUSINESS_DATA.contact.whatsappPreFilledText
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 px-4 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all active:scale-95"
          >
            <span>WHATSAPP CHAT</span>
            <FaWhatsapp className="w-4 h-4 flex-shrink-0" />
          </a>
        </div>
      </div>
    </>
  );
};
