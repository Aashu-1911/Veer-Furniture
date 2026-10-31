import React from 'react';
import { FaWhatsapp } from 'react-icons/fa6';
import { BUSINESS_DATA } from '../../data/business';

export const FloatingWhatsApp: React.FC = () => {
  const whatsappHref = `https://wa.me/${BUSINESS_DATA.contact.whatsappNumber}?text=${encodeURIComponent(
    BUSINESS_DATA.contact.whatsappPreFilledText
  )}`;

  return (
    <aside aria-label="Direct messaging contact" className="fixed bottom-5 right-5 z-40">
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Enquiry with Veer Furniture Mall Lohgaon"
        className="group flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20BD5A] text-white px-4 py-3 sm:px-4 sm:py-3 rounded-full shadow-elevated transition-all duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#25D366] cursor-pointer"
      >
        <FaWhatsapp className="w-5 h-5 text-white flex-shrink-0" />
        <span className="hidden sm:inline-block text-xs font-semibold tracking-wide">
          WhatsApp
        </span>
      </a>
    </aside>
  );
};
