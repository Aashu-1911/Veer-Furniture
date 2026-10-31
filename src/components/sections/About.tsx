import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { CheckCircle2, MapPin, Compass, ShieldCheck, Truck } from 'lucide-react';
import { BUSINESS_DATA } from '../../data/business';
import { Button } from '../ui/Button';
import { scrollToSection } from '../../lib/utils';

export const About: React.FC = () => {
  const commitments = [
    {
      icon: Compass,
      title: 'Apartment-Fit Dimension Customization',
      description: 'Pune floor plans vary widely. We customize sofa configurations, bed heights, and wardrobe partitions to your exact room blueprints.',
    },
    {
      icon: ShieldCheck,
      title: 'Direct Wholesale & Retail Transparency',
      description: 'Get substantial value without exorbitant retail markups. We prioritize honest wood specifications, heavy gas-lift hardware, and genuine high-density foams.',
    },
    {
      icon: CheckCircle2,
      title: 'Tactile Showroom Inspection',
      description: 'Never guess from digital photos alone. Visit our Yojna Nagar showroom to sit, touch, and test frame sturdiness and upholstery swatches in person.',
    },
    {
      icon: Truck,
      title: 'White-Glove Delivery & Installation',
      description: 'Careful transport and on-site expert assembly across Lohgaon, Dhanori, Viman Nagar, Wagholi, and greater Pune.',
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-brand-surface border-b border-brand-border/70 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Heading */}
        <SectionHeading
          eyebrow="The Lohgaon Experience"
          title="Where Sound Construction Meets Everyday Living"
          description="Veer Furniture Mall in Lohgaon was established to solve a common dilemma: why should homeowners have to choose between exorbitant luxury prices and flimsy flat-pack furniture?"
        />

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Architectural Imagery Duo (5 cols) */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative">
              {/* Primary Image: Master Bedroom Suite */}
              <div className="relative overflow-hidden border border-brand-border shadow-elevated bg-white">
                <img
                  src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80"
                  alt="Crafted solid wood hydraulic bed suite at Veer Furniture Mall Lohgaon"
                  className="w-full h-80 sm:h-96 object-cover object-center transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
                <div className="p-4 bg-white border-t border-brand-border flex items-center justify-between text-xs">
                  <span className="font-display font-semibold text-brand-dark">Aura Hydraulic Platform</span>
                  <span className="text-brand-teak font-medium">Lohgaon Display</span>
                </div>
              </div>

              {/* Overlapping Secondary Card (Architectural Offset) */}
              <div className="hidden sm:block absolute -bottom-10 -right-8 w-64 bg-brand-dark text-white p-5 shadow-architectural border border-white/10">
                <div className="flex items-center gap-2 text-brand-champagne text-xs uppercase tracking-widest font-semibold mb-2">
                  <MapPin aria-hidden="true" className="w-3.5 h-3.5" />
                  <span>Showroom Floor</span>
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed font-light">
                  Spacious displays on Lohegaon-Wagholi Road. Experience sofas, beds, and dining suites first-hand.
                </p>
                <div className="mt-3 pt-2 border-t border-white/10 text-[10px] text-zinc-400 font-mono">
                  {BUSINESS_DATA.hours.timing}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Pillars (7 cols) */}
          <div className="lg:col-span-7 space-y-8 order-1 lg:order-2">
            
            <div className="space-y-4 text-brand-muted text-base sm:text-lg leading-relaxed">
              <p>
                Conveniently located at <strong className="text-brand-dark font-semibold">Yojna Nagar</strong> near the Pune Airport and Lohegaon-Wagholi corridor, our showroom offers homeowners direct access to masterfully constructed living, dining, and bedroom furniture.
              </p>
              <p>
                Rather than treating furniture as disposable decor, our collections are rooted in solid seasoned hardwoods, marine-grade core ply, and European hardware. Whether furnishing a newly purchased 2BHK apartment or curating a sprawling bungalow in East Pune, we provide personalized guidance from selection to installation.
              </p>
            </div>

            {/* 4 Value Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-brand-border">
              {commitments.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div key={idx} className="space-y-2">
                    <div className="flex items-center gap-2.5">
                      <div className="p-1.5 bg-brand-cream border border-brand-border text-brand-teak">
                        <IconComponent aria-hidden="true" className="w-4 h-4" />
                      </div>
                      <h3 className="font-display text-base font-semibold text-brand-dark">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-brand-muted leading-relaxed pl-8">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* CTA action */}
            <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Button
                variant="primary"
                onClick={() => scrollToSection('#contact')}
              >
                <span>Plan Your Showroom Visit</span>
              </Button>

              <div className="text-xs text-brand-muted">
                <span>Free parking & guided material walkthrough available</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
