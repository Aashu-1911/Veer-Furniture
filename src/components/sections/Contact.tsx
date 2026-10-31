import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { BUSINESS_DATA } from '../../data/business';
import { Button } from '../ui/Button';
import {
  MapPin,
  Phone,
  Clock,
  Navigation,
  ExternalLink,
  Send,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    requirement: 'Living Room Sofa',
    dimensionsNote: '',
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) {
      errors.name = 'Please enter your name.';
    }
    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      errors.phone = 'Please enter a valid 10-digit number.';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const message = `Hello Veer Furniture Mall Lohgaon,\n\nName: ${formData.name}\nPhone: ${formData.phone}\nInterested In: ${formData.requirement}\nRoom Notes: ${formData.dimensionsNote || 'None specified'}\n\nPlease share catalog and quotation for my home in Pune.`;
    const whatsappUrl = `https://wa.me/${BUSINESS_DATA.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    setFormSubmitted(true);
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="location" className="py-16 sm:py-24 bg-brand-surface scroll-mt-20 border-b border-brand-border/70">
      <div id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Visit Our Store"
          title="Lohgaon Showroom & Location"
          description="Visit our store in Yojna Nagar near Pune Airport to experience frames, finishes, and comfort first-hand."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Verified Location, Phone & Quick Desks (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            
            <div className="bg-white p-6 sm:p-7 border border-brand-border shadow-subtle space-y-5">
              
              <div className="border-b border-brand-border/70 pb-4">
                <span className="text-[10px] uppercase tracking-wider text-brand-teak font-semibold block mb-0.5">
                  Lohgaon Branch Showroom
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-semibold text-brand-dark">
                  {BUSINESS_DATA.name}
                </h3>
                <p className="text-xs text-brand-muted mt-0.5">
                  {BUSINESS_DATA.branch} · {BUSINESS_DATA.coordinates.formatted}
                </p>
              </div>

              {/* Showroom Details */}
              <div className="space-y-3.5 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <div className="p-1.5 bg-brand-cream border border-brand-border text-brand-teak flex-shrink-0 mt-0.5">
                    <MapPin aria-hidden="true" className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="block text-brand-dark font-medium">Physical Address:</strong>
                    <p className="text-brand-muted text-xs leading-relaxed mt-0.5">
                      {BUSINESS_DATA.address.fullFormatted}
                    </p>
                    <span className="text-[11px] text-brand-teak font-medium block mt-0.5">
                      Landmark: {BUSINESS_DATA.address.landmark}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1.5 bg-brand-cream border border-brand-border text-brand-teak flex-shrink-0 mt-0.5">
                    <Clock aria-hidden="true" className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="block text-brand-dark font-medium">Visiting Hours:</strong>
                    <p className="text-brand-muted text-xs mt-0.5">
                      {BUSINESS_DATA.hours.timing} (Open 7 Days Daily)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1.5 bg-brand-cream border border-brand-border text-brand-teak flex-shrink-0 mt-0.5">
                    <Phone aria-hidden="true" className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="block text-brand-dark font-medium">Showroom Helpline:</strong>
                    <a
                      href={BUSINESS_DATA.contact.phoneCallable}
                      className="text-sm font-semibold text-brand-dark hover:text-brand-teak transition-colors block mt-0.5"
                    >
                      {BUSINESS_DATA.contact.phoneDisplay}
                    </a>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-brand-border/70 flex gap-2.5">
                <Button
                  variant="primary"
                  size="sm"
                  asLink
                  href={BUSINESS_DATA.contact.phoneCallable}
                  className="flex-1"
                >
                  <Phone aria-hidden="true" className="w-3.5 h-3.5 mr-1.5" />
                  <span>Call Now</span>
                </Button>

                <Button
                  variant="champagne"
                  size="sm"
                  asLink
                  href={BUSINESS_DATA.maps.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Navigation aria-hidden="true" className="w-3.5 h-3.5 mr-1.5" />
                  <span>Directions</span>
                </Button>
              </div>

            </div>

            {/* Direct WhatsApp Callout */}
            <div className="bg-[#25D366]/10 border border-[#25D366]/30 p-4 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-[#25D366] text-white flex items-center justify-center flex-shrink-0">
                  <FaWhatsapp aria-hidden="true" className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-brand-dark block">
                    WhatsApp Consultation
                  </span>
                  <span className="text-[11px] text-brand-muted">
                    Send floor blueprints for instant estimates
                  </span>
                </div>
              </div>

              <a
                href={`https://wa.me/${BUSINESS_DATA.contact.whatsappNumber}?text=${encodeURIComponent(
                  BUSINESS_DATA.contact.whatsappPreFilledText
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs font-semibold uppercase tracking-wider transition-colors flex-shrink-0"
              >
                Chat
              </a>
            </div>

          </div>

          {/* Right Column: Google Maps Embed + Consultation Form (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Interactive Embedded Google Map for Lohgaon */}
            <div className="bg-white border border-brand-border shadow-subtle overflow-hidden">
              <div className="p-3 bg-brand-surface border-b border-brand-border flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 font-semibold text-brand-dark">
                  <MapPin aria-hidden="true" className="w-3.5 h-3.5 text-brand-teak" />
                  <span>Lohgaon Showroom Map</span>
                </div>
                <a
                  href={BUSINESS_DATA.maps.directUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-teak hover:underline inline-flex items-center gap-1 font-medium text-[11px]"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink aria-hidden="true" className="w-3 h-3" />
                </a>
              </div>

              <div className="w-full h-60 sm:h-72 relative bg-zinc-100">
                <iframe
                  title="Veer Furniture Mall Lohgaon Pune Google Map"
                  src={BUSINESS_DATA.maps.embedQueryUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full filter contrast-105"
                />
              </div>
            </div>

            {/* Compact Quote & Blueprint Inquiry Form */}
            <div className="bg-white p-6 sm:p-7 border border-brand-border shadow-subtle">
              <div className="mb-4">
                <h4 className="font-display text-lg font-medium text-brand-dark">
                  Request Custom Quote or Catalog
                </h4>
                <p className="text-xs text-brand-muted mt-0.5">
                  Sends directly to our Lohgaon showroom manager via WhatsApp for instantaneous response.
                </p>
              </div>

              {formSubmitted ? (
                <div
                  aria-live="polite"
                  className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-900 space-y-2 animate-fade-in"
                >
                  <div className="flex items-center gap-2 font-semibold text-xs sm:text-sm">
                    <CheckCircle aria-hidden="true" className="w-4 h-4 text-emerald-600" />
                    <span>Inquiry Forwarded to WhatsApp!</span>
                  </div>
                  <p className="text-xs text-emerald-800">
                    If WhatsApp did not launch automatically, click below to open your chat:
                  </p>
                  <a
                    href={`https://wa.me/${BUSINESS_DATA.contact.whatsappNumber}?text=${encodeURIComponent(
                      `Hello Veer Furniture Mall Lohgaon,\n\nName: ${formData.name}\nPhone: ${formData.phone}\nInterested In: ${formData.requirement}\nRoom Notes: ${formData.dimensionsNote || 'None'}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs uppercase tracking-wider font-bold text-[#1DA851] underline"
                  >
                    <span>Open WhatsApp Chat</span>
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="contact-name" className="block text-[11px] uppercase tracking-wider font-medium text-brand-dark mb-1">
                        Full Name *
                      </label>
                      <input
                        id="contact-name"
                        name="fullName"
                        type="text"
                        autoComplete="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Anand Shinde"
                        aria-invalid={!!formErrors.name}
                        aria-describedby={formErrors.name ? "name-error" : undefined}
                        className={`w-full px-3 py-2 text-xs sm:text-sm border bg-brand-surface focus:outline-none focus:ring-1 focus:ring-brand-teak ${
                          formErrors.name ? 'border-red-500' : 'border-brand-border'
                        }`}
                      />
                      {formErrors.name && (
                        <span id="name-error" className="text-[10px] text-red-600 mt-0.5 flex items-center gap-1" role="alert">
                          <AlertCircle aria-hidden="true" className="w-3 h-3" />
                          {formErrors.name}
                        </span>
                      )}
                    </div>

                    <div>
                      <label htmlFor="contact-phone" className="block text-[11px] uppercase tracking-wider font-medium text-brand-dark mb-1">
                        Mobile Number *
                      </label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        inputMode="tel"
                        autoComplete="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 9876543210"
                        aria-invalid={!!formErrors.phone}
                        aria-describedby={formErrors.phone ? "phone-error" : undefined}
                        className={`w-full px-3 py-2 text-xs sm:text-sm border bg-brand-surface focus:outline-none focus:ring-1 focus:ring-brand-teak ${
                          formErrors.phone ? 'border-red-500' : 'border-brand-border'
                        }`}
                      />
                      {formErrors.phone && (
                        <span id="phone-error" className="text-[10px] text-red-600 mt-0.5 flex items-center gap-1" role="alert">
                          <AlertCircle aria-hidden="true" className="w-3 h-3" />
                          {formErrors.phone}
                        </span>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-requirement" className="block text-[11px] uppercase tracking-wider font-medium text-brand-dark mb-1">
                      Furniture Category
                    </label>
                    <select
                      id="contact-requirement"
                      name="requirement"
                      value={formData.requirement}
                      onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                      className="w-full px-3 py-2 text-xs sm:text-sm border border-brand-border bg-brand-surface focus:outline-none focus:ring-1 focus:ring-brand-teak cursor-pointer"
                    >
                      <option value="Living Room Sofa">Living Room Sectional / Sofa Set</option>
                      <option value="Master Bedroom Bed">Luxury King/Queen Hydraulic Bed</option>
                      <option value="Sliding Wardrobe">Floor-to-Ceiling Sliding Wardrobe</option>
                      <option value="Dining Table Set">Solid Teak / Marble-Top Dining Set</option>
                      <option value="TV Media Console">Wall Mounted TV Console & Fluted Panel</option>
                      <option value="Full Flat Furniture Combo">Complete 2BHK / 3BHK Full-Home Furniture Package</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-notes" className="block text-[11px] uppercase tracking-wider font-medium text-brand-dark mb-1">
                      Room Size or Special Notes (Optional)
                    </label>
                    <textarea
                      id="contact-notes"
                      name="dimensionsNote"
                      rows={2}
                      value={formData.dimensionsNote}
                      onChange={(e) => setFormData({ ...formData, dimensionsNote: e.target.value })}
                      placeholder="e.g. Need an L-shaped sofa in beige velvet, living room wall is 11ft..."
                      className="w-full px-3 py-2 text-xs sm:text-sm border border-brand-border bg-brand-surface focus:outline-none focus:ring-1 focus:ring-brand-teak"
                    />
                  </div>

                  <div className="pt-1 flex items-center justify-between">
                    <Button type="submit" variant="primary" size="sm" className="w-full sm:w-auto">
                      <Send aria-hidden="true" className="w-3.5 h-3.5 mr-1.5" />
                      <span>Send WhatsApp Inquiry</span>
                    </Button>
                  </div>
                </form>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
