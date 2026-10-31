import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { BUSINESS_DATA } from '../../data/business';
import { Button } from '../ui/Button';
import {
  MapPin,
  Phone,
  MessageSquare,
  Clock,
  Navigation,
  ExternalLink,
  Send,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';

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
      errors.name = 'Please provide your full name.';
    }
    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      errors.phone = 'Please provide a valid 10-digit mobile number.';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Build WhatsApp direct enquiry message with all form fields
    const message = `Hello Veer Furniture Mall Lohgaon,\n\nName: ${formData.name}\nPhone: ${formData.phone}\nInterested In: ${formData.requirement}\nRoom Blueprint / Custom Notes: ${formData.dimensionsNote || 'None specified'}\n\nPlease share catalog and quotation for my home in Pune.`;
    
    const whatsappUrl = `https://wa.me/${BUSINESS_DATA.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    setFormSubmitted(true);
    // Open WhatsApp in new tab for real user utility
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-brand-surface relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Visit Our Lohgaon Showroom"
          title="Experience Materials & Craft in Person"
          description="We are located in Yojna Nagar, near the Pune International Airport area. Walk in daily or connect directly for custom floorplan consultations."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Verified Location Info & Direct Action Desks (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="bg-white p-7 sm:p-8 border border-brand-border shadow-subtle space-y-6">
              
              <div className="border-b border-brand-border pb-5">
                <span className="text-[10px] uppercase tracking-ultra text-brand-teak font-semibold block mb-1">
                  Official Showroom Branch
                </span>
                <h3 className="font-display text-2xl font-semibold text-brand-dark">
                  {BUSINESS_DATA.name}
                </h3>
                <p className="text-xs text-brand-muted mt-1 uppercase tracking-wider">
                  {BUSINESS_DATA.branch} · {BUSINESS_DATA.coordinates.formatted}
                </p>
              </div>

              {/* Showroom Address */}
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="p-2 bg-brand-cream border border-brand-border text-brand-teak flex-shrink-0 mt-0.5">
                    <MapPin aria-hidden="true" className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-brand-dark font-medium mb-1">Physical Address:</strong>
                    <p className="text-brand-muted leading-relaxed">
                      {BUSINESS_DATA.address.fullFormatted}
                    </p>
                    <span className="inline-block text-xs text-brand-teak mt-1 font-medium">
                      Landmark: {BUSINESS_DATA.address.landmark}
                    </span>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2 bg-brand-cream border border-brand-border text-brand-teak flex-shrink-0 mt-0.5">
                    <Clock aria-hidden="true" className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-brand-dark font-medium mb-1">Visiting Hours:</strong>
                    <p className="text-brand-muted">
                      {BUSINESS_DATA.hours.timing}
                    </p>
                    <span className="text-xs text-emerald-700 font-medium">
                      {BUSINESS_DATA.hours.days}
                    </span>
                  </div>
                </div>

                {/* Contact Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2 bg-brand-cream border border-brand-border text-brand-teak flex-shrink-0 mt-0.5">
                    <Phone aria-hidden="true" className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-brand-dark font-medium mb-1">Showroom Telephone:</strong>
                    <a
                      href={BUSINESS_DATA.contact.phoneCallable}
                      className="text-base font-semibold text-brand-dark hover:text-brand-teak transition-colors"
                    >
                      {BUSINESS_DATA.contact.phoneDisplay}
                    </a>
                    <span className="block text-xs text-brand-muted mt-0.5">
                      Direct customer assistance & showroom directions
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-brand-border flex flex-col sm:flex-row gap-3">
                <Button
                  variant="primary"
                  size="md"
                  asLink
                  href={BUSINESS_DATA.contact.phoneCallable}
                  className="flex-1"
                >
                  <Phone aria-hidden="true" className="w-4 h-4 mr-2" />
                  <span>Call Now</span>
                </Button>

                <Button
                  variant="champagne"
                  size="md"
                  asLink
                  href={BUSINESS_DATA.maps.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Navigation aria-hidden="true" className="w-4 h-4 mr-2" />
                  <span>Get Directions</span>
                </Button>
              </div>

            </div>

            {/* Direct WhatsApp Callout Banner */}
            <div className="bg-[#25D366]/10 border border-[#25D366]/30 p-5 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#25D366] text-white flex items-center justify-center flex-shrink-0">
                  <MessageSquare aria-hidden="true" className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-brand-dark block">
                    Instant WhatsApp Blueprint Consultation
                  </span>
                  <span className="text-[11px] text-brand-muted">
                    Send room measurements for immediate photo options
                  </span>
                </div>
              </div>

              <a
                href={`https://wa.me/${BUSINESS_DATA.contact.whatsappNumber}?text=${encodeURIComponent(
                  BUSINESS_DATA.contact.whatsappPreFilledText
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs font-semibold uppercase tracking-wider transition-colors flex-shrink-0"
              >
                Chat
              </a>
            </div>

          </div>

          {/* Right Column: Google Maps Embed & Custom Quote Assistant (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Real Interactive Google Map */}
            <div className="bg-white border border-brand-border shadow-subtle overflow-hidden">
              <div className="p-4 bg-brand-surface border-b border-brand-border flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin aria-hidden="true" className="w-4 h-4 text-brand-teak" />
                  <span className="text-xs uppercase tracking-wider font-semibold text-brand-dark">
                    Lohgaon Showroom Location Map
                  </span>
                </div>
                <a
                  href={BUSINESS_DATA.maps.directUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-brand-teak hover:underline inline-flex items-center gap-1 font-medium"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink aria-hidden="true" className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Verified Embedded Google Map targeting Veer Furniture Mall Lohgaon */}
              <div className="w-full h-72 sm:h-88 relative bg-zinc-100">
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

              <div className="p-3 bg-brand-surface border-t border-brand-border text-center text-[11px] text-brand-muted">
                Yojna Nagar, Lohegaon-Wagholi Road corridor · Opposite / near Indian Oil corridor · Pin: 411047
              </div>
            </div>

            {/* Custom Consultation & Quote Form with Genuine Client Handling */}
            <div className="bg-white p-7 sm:p-8 border border-brand-border shadow-subtle">
              <div className="mb-6">
                <h4 className="font-display text-xl font-medium text-brand-dark">
                  Request Custom Quote or Blueprint Estimate
                </h4>
                <p className="text-xs text-brand-muted mt-1">
                  Fill in your furniture requirements. This generates a pre-formatted blueprint inquiry directly sent to our Lohgaon showroom manager via WhatsApp for instantaneous catalog & pricing response.
                </p>
              </div>

              {formSubmitted ? (
                <div
                  aria-live="polite"
                  className="p-6 bg-emerald-50 border border-emerald-200 text-emerald-900 space-y-3 animate-fade-in"
                >
                  <div className="flex items-center gap-2 font-semibold">
                    <CheckCircle aria-hidden="true" className="w-5 h-5 text-emerald-600" />
                    <span>Inquiry Forwarded to WhatsApp!</span>
                  </div>
                  <p className="text-xs leading-relaxed text-emerald-800">
                    Your inquiry details have been forwarded to the Veer Furniture Mall Lohgaon consultation desk (+91 90542 92929). If WhatsApp did not launch automatically, click below to open chat:
                  </p>
                  <a
                    href={`https://wa.me/${BUSINESS_DATA.contact.whatsappNumber}?text=${encodeURIComponent(
                      `Hello Veer Furniture Mall Lohgaon,\n\nName: ${formData.name}\nPhone: ${formData.phone}\nInterested In: ${formData.requirement}\nRoom Notes: ${formData.dimensionsNote || 'None'}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-bold text-[#1DA851] underline"
                  >
                    <span>Click here to open WhatsApp Consultation</span>
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs uppercase tracking-wider font-medium text-brand-dark mb-1">
                        Your Full Name *
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
                        className={`w-full px-3.5 py-2.5 text-sm border bg-brand-surface focus:outline-none focus:ring-1 focus:ring-brand-teak ${
                          formErrors.name ? 'border-red-500' : 'border-brand-border'
                        }`}
                      />
                      {formErrors.name && (
                        <span id="name-error" className="text-[11px] text-red-600 mt-1 flex items-center gap-1" role="alert">
                          <AlertCircle aria-hidden="true" className="w-3 h-3" />
                          {formErrors.name}
                        </span>
                      )}
                    </div>

                    <div>
                      <label htmlFor="contact-phone" className="block text-xs uppercase tracking-wider font-medium text-brand-dark mb-1">
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
                        className={`w-full px-3.5 py-2.5 text-sm border bg-brand-surface focus:outline-none focus:ring-1 focus:ring-brand-teak ${
                          formErrors.phone ? 'border-red-500' : 'border-brand-border'
                        }`}
                      />
                      {formErrors.phone && (
                        <span id="phone-error" className="text-[11px] text-red-600 mt-1 flex items-center gap-1" role="alert">
                          <AlertCircle aria-hidden="true" className="w-3 h-3" />
                          {formErrors.phone}
                        </span>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-requirement" className="block text-xs uppercase tracking-wider font-medium text-brand-dark mb-1">
                      Furniture Category of Interest
                    </label>
                    <select
                      id="contact-requirement"
                      name="requirement"
                      value={formData.requirement}
                      onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm border border-brand-border bg-brand-surface focus:outline-none focus:ring-1 focus:ring-brand-teak cursor-pointer"
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
                    <label htmlFor="contact-notes" className="block text-xs uppercase tracking-wider font-medium text-brand-dark mb-1">
                      Approximate Dimensions / Blueprint Details (Optional)
                    </label>
                    <textarea
                      id="contact-notes"
                      name="dimensionsNote"
                      rows={3}
                      value={formData.dimensionsNote}
                      onChange={(e) => setFormData({ ...formData, dimensionsNote: e.target.value })}
                      placeholder="e.g. Living room wall is 12ft, need an L-shaped sofa in beige or grey fabric..."
                      className="w-full px-3.5 py-2.5 text-sm border border-brand-border bg-brand-surface focus:outline-none focus:ring-1 focus:ring-brand-teak"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <Button type="submit" variant="primary" size="md" className="w-full sm:w-auto">
                      <Send aria-hidden="true" className="w-4 h-4 mr-2" />
                      <span>Forward Inquiry via WhatsApp</span>
                    </Button>
                    <span className="text-[11px] text-brand-muted">
                      Direct connection to Lohgaon manager. No automated spam.
                    </span>
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
