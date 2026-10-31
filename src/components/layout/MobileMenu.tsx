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
        className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs transition-opacity duration-300 md:hidden"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Floating Card Popup matching reference image */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation Menu"
        className="fixed top-16 right-4 z-50 w-[240px] sm:w-[260px] bg-white rounded-[28px] p-5 sm:p-6 shadow-2xl border border-gray-100 flex flex-col md:hidden animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Close Button top-right */}
        <div className="flex justify-end -mt-1 -mr-1 mb-1">
          <button
            onClick={onClose}
            aria-label="Close Menu"
            className="p-1 rounded-full text-zinc-400 hover:text-zinc-700 hover:bg-gray-100 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Navigation Links list */}
        <nav className="flex flex-col space-y-3.5">
          {links.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.href}
                onClick={() => {
                  onClose();
                  scrollToSection(item.href);
                }}
                className={`text-left text-base font-bold transition-colors cursor-pointer select-none ${
                  isActive
                    ? 'text-[#c52b2b]'
                    : 'text-zinc-900 hover:text-[#c52b2b]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Divider Line */}
        <div className="border-t border-gray-100 my-4" />

        {/* Call Now and WhatsApp Chat Action Pills */}
        <div className="flex flex-col gap-2.5">
          <a
            href={BUSINESS_DATA.contact.phoneCallable}
            className="w-full py-2.5 px-4 rounded-full bg-[#c52b2b] hover:bg-[#a82222] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-transform active:scale-95"
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
            className="w-full py-2.5 px-4 rounded-full bg-[#22c55e] hover:bg-[#16a34a] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-transform active:scale-95"
          >
            <span>WHATSAPP CHAT</span>
            <FaWhatsapp className="w-4 h-4 flex-shrink-0" />
          </a>
        </div>
      </div>
    </>
  );
};
