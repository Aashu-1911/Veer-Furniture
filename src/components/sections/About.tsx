import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { CheckCircle2, Compass, ShieldCheck, Truck } from 'lucide-react';
import { BUSINESS_DATA } from '../../data/business';
import { Button } from '../ui/Button';
import { scrollToSection } from '../../lib/utils';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../ui/ScrollReveal';

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
        <ScrollReveal>
          <SectionHeading
            eyebrow="Our Story"
            title="Crafted Comfort for Everyday Living"
            description="Veer Furniture Mall Lohgaon brings direct showroom and wholesale furniture solutions to homeowners across Pune."
          />
        </ScrollReveal>

        {/* 2-Column Clean Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Clean Single Showroom Photograph (5 cols) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <ScrollReveal direction="up" delay={0.1}>
              <div className="relative overflow-hidden rounded-2xl border border-brand-border/80 shadow-[0_8px_25px_rgba(0,0,0,0.06)] bg-white">
                <img
                  src="/assets/images/img-14.png"
                  alt="Veer Furniture Mall Lohgaon showroom storefront and entrance facade"
                  className="w-full h-72 sm:h-88 lg:h-[380px] object-cover object-center transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
                <div className="p-3.5 bg-white border-t border-brand-border flex items-center justify-between text-xs">
                  <span className="text-brand-teak font-medium">Veer Furniture Mall — Lohgaon Storefront</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Narrative & 4 Concise Pillars (7 cols) */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            
            <ScrollReveal delay={0.08}>
              <div className="space-y-3 text-brand-muted text-sm sm:text-base leading-relaxed">
                <p>
                  Located at <strong className="text-brand-dark font-semibold">Yojna Nagar</strong> on Lohegaon-Wagholi Road, Veer Furniture Mall bridges the gap between high boutique markups and fragile furniture. We provide direct access to premium hardwoods, smooth hydraulic mechanisms, and custom sizing designed for modern Pune homes.
                </p>
              </div>
            </ScrollReveal>

            {/* 4 Concise Value Pillars */}
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-brand-border">
              {commitments.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <StaggerItem key={idx} className="space-y-1">
                    <div className="flex items-center gap-2">
                      <div className="p-2 bg-brand-cream rounded-xl border border-brand-border text-brand-teak shadow-sm">
                        <IconComponent aria-hidden="true" className="w-3.5 h-3.5" />
                      </div>
                      <h4 className="font-display text-sm font-semibold text-brand-dark">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-xs text-brand-muted leading-relaxed pl-8">
                      {item.description}
                    </p>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>

            {/* CTA action */}
            <ScrollReveal delay={0.15}>
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
            </ScrollReveal>

          </div>

        </div>

      </div>
    </section>
  );
};
