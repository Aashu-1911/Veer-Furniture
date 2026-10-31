import React from 'react';
import { MessageSquare } from 'lucide-react';
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
        className="group flex items-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white p-3 sm:px-3.5 sm:py-2.5 rounded-full shadow-lg transition-all duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#25D366] cursor-pointer"
      >
        <MessageSquare className="w-5 h-5 fill-current" />
        <span className="hidden sm:inline-block text-xs font-semibold tracking-wide">
          WhatsApp
        </span>
      </a>
    </aside>
  );
};
