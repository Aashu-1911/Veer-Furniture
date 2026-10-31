import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { CheckCircle2, Compass, ShieldCheck, Truck } from 'lucide-react';
import { BUSINESS_DATA } from '../../data/business';
import { Button } from '../ui/Button';
import { scrollToSection } from '../../lib/utils';

export const About: React.FC = () => {
  const commitments = [
    {
      icon: Compass,
      title: 'Apartment-Fit Sizing',
      description: 'Customized to your exact room blueprints.',
    },
    {
      icon: ShieldCheck,
      title: 'Wholesale Direct Pricing',
      description: 'Factory-direct rates without middleman markups.',
    },
    {
      icon: CheckCircle2,
      title: 'In-Store Material Testing',
      description: 'Inspect seasoned woods and upholstery in person.',
    },
    {
      icon: Truck,
      title: 'Doorstep Assembly',
      description: 'Careful transport and professional installation across Pune.',
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-brand-surface border-b border-brand-border/70 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Our Story"
          title="Crafted Comfort for Everyday Living"
          description="Veer Furniture Mall Lohgaon brings direct showroom and wholesale furniture solutions to homeowners across Pune."
        />

        {/* 2-Column Clean Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Clean Single Showroom Photograph (5 cols) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative overflow-hidden border border-brand-border shadow-subtle bg-white">
              <img
                src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80"
                alt="Solid wood hydraulic bed suite at Veer Furniture Mall Lohgaon"
                className="w-full h-72 sm:h-88 lg:h-[380px] object-cover object-center transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
              <div className="p-3.5 bg-white border-t border-brand-border flex items-center justify-between text-xs">
                <span className="font-display font-semibold text-brand-dark">Aura Hydraulic Platform Bed</span>
                <span className="text-brand-teak font-medium">Lohgaon Display</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & 4 Concise Pillars (7 cols) */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            
            <div className="space-y-3 text-brand-muted text-sm sm:text-base leading-relaxed">
              <p>
                Located at <strong className="text-brand-dark font-semibold">Yojna Nagar</strong> on Lohegaon-Wagholi Road, Veer Furniture Mall bridges the gap between high boutique markups and fragile furniture. We provide direct access to premium hardwoods, smooth hydraulic mechanisms, and custom sizing designed for modern Pune homes.
              </p>
            </div>

            {/* 4 Concise Value Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-brand-border">
              {commitments.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div key={idx} className="space-y-1">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 bg-brand-cream border border-brand-border text-brand-teak">
                        <IconComponent aria-hidden="true" className="w-3.5 h-3.5" />
                      </div>
                      <h4 className="font-display text-sm font-semibold text-brand-dark">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-xs text-brand-muted leading-relaxed pl-7">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* CTA action */}
            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Button
                variant="primary"
                size="md"
                onClick={() => scrollToSection('#location')}
              >
                <span>Visit Showroom in Lohgaon</span>
              </Button>

              <span className="text-xs text-brand-muted">
                {BUSINESS_DATA.hours.openStatusNotice}
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
