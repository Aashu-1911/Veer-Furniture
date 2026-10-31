import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { BUSINESS_DATA } from '../../data/business';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappHref = `https://wa.me/${BUSINESS_DATA.contact.whatsappNumber}?text=${encodeURIComponent(
    BUSINESS_DATA.contact.whatsappPreFilledText
  )}`;

  return (
    <aside aria-label="Direct messaging contact" className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Consultation tooltip prompt */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 mb-2 bg-brand-dark text-white text-xs px-3.5 py-2 shadow-elevated border border-white/10 animate-fade-in max-w-xs">
          <span>Need custom dimensions or catalog on WhatsApp?</span>
          <button
            onClick={() => setShowTooltip(false)}
            aria-label="Dismiss consultation prompt"
            className="text-white/60 hover:text-white ml-1 p-0.5"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Main WhatsApp Button */}
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Enquiry with Veer Furniture Mall Lohgaon"
        className="group flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20BD5A] text-white p-3.5 sm:px-4 sm:py-3 shadow-elevated transition-all duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#25D366] cursor-pointer"
      >
        <MessageSquare className="w-5 h-5 fill-current" />
        <span className="hidden sm:inline-block text-xs font-semibold tracking-wider uppercase">
          WhatsApp Enquiry
        </span>
      </a>
    </aside>
  );
};

