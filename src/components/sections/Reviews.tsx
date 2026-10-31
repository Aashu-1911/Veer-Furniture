import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { REVIEWS_DATA } from '../../data/reviews';
import { BUSINESS_DATA } from '../../data/business';
import { Star, ShieldCheck, ExternalLink, MessageSquareQuote } from 'lucide-react';

export const Reviews: React.FC = () => {
  // Duplicate reviews array to create seamless, continuous infinite right-to-left loop
  const marqueeReviews = [...REVIEWS_DATA, ...REVIEWS_DATA];

  return (
    <section id="reviews" className="py-16 sm:py-24 bg-brand-cream/30 border-b border-brand-border/70 scroll-mt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Verified Google Rating Badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-6">
          <SectionHeading
            eyebrow="Customer Reviews"
            title="Real Feedback from Pune Homeowners"
            description="Genuine customer experiences from visitors who furnished their homes at Veer Furniture Mall Lohgaon."
            className="mb-0 max-w-2xl"
          />

          {/* Factual Verified Google Rating Pill */}
          <a
            href={BUSINESS_DATA.maps.directUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View verified Google Maps reviews for Veer Furniture Mall Lohgaon"
            className="group flex items-center gap-3 bg-white px-4 py-2.5 border border-brand-border shadow-subtle hover:border-brand-teak transition-all self-start md:self-end"
          >
            <div className="flex items-center gap-1 text-amber-500" aria-label="5 stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} aria-hidden="true" className="w-4 h-4 fill-current" />
              ))}
            </div>
            <div className="text-xs">
              <span className="font-semibold text-brand-dark mr-1">{BUSINESS_DATA.reputation.googleRating} ★</span>
              <span className="text-brand-muted font-normal">on Google Maps</span>
            </div>
            <ExternalLink aria-hidden="true" className="w-3.5 h-3.5 text-brand-teak opacity-70 group-hover:opacity-100 ml-1 transition-opacity" />
          </a>
        </div>

      </div>

      {/* Infinite Horizontal Marquee Moving Right to Left */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Left and right subtle fade gradient for luxury aesthetic */}
        <div aria-hidden="true" className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-r from-brand-surface via-brand-surface/70 to-transparent z-10" />
        <div aria-hidden="true" className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-l from-brand-surface via-brand-surface/70 to-transparent z-10" />

        {/* Moving Track: slides from right to left, pauses when hovered */}
        <div 
          className="animate-marquee-left flex gap-4 sm:gap-6 items-stretch"
          aria-label="Scrolling customer reviews. Hover to pause."
        >
          {marqueeReviews.map((rev, idx) => (
            <div
              key={`${rev.id}-${idx}`}
              className="w-[300px] sm:w-[350px] md:w-[380px] flex-shrink-0 bg-white p-5 sm:p-6 border border-brand-border hover:border-brand-teak/50 transition-all duration-300 flex flex-col justify-between space-y-3.5 shadow-subtle hover:shadow-elevated select-none"
            >
              {/* Stars & Verified Badge */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-amber-500" aria-label={`${rev.rating} stars`}>
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} aria-hidden="true" className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>

                <div className="flex items-center gap-1 text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 border border-emerald-200 font-medium">
                  <ShieldCheck aria-hidden="true" className="w-3 h-3" />
                  <span>Verified Visit</span>
                </div>
              </div>

              {/* Review Text */}
              <p className="text-brand-dark text-xs sm:text-sm leading-relaxed italic line-clamp-4">
                "{rev.reviewText}"
              </p>

              {/* Reviewer Details */}
              <div className="pt-3 border-t border-brand-border/60 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-brand-cream border border-brand-border text-brand-teak flex items-center justify-center font-semibold text-[10px]">
                    {rev.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-brand-dark leading-tight">{rev.reviewerName}</div>
                    <div className="text-[11px] text-brand-muted">{rev.locationContext}</div>
                  </div>
                </div>

                <span className="text-[10px] text-brand-teak uppercase tracking-wider font-medium flex items-center gap-1">
                  <MessageSquareQuote aria-hidden="true" className="w-3 h-3 text-brand-champagne" />
                  <span>{rev.source}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Strip with Direct Google Maps Link */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 sm:mt-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-brand-border/60 text-xs text-brand-muted">
          <span>
            Hover over any review card to pause. Authentic testimonials from verified visitors.
          </span>

          <a
            href={BUSINESS_DATA.maps.directUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-wider font-semibold text-brand-dark hover:text-brand-teak inline-flex items-center gap-1.5 px-4 py-2 bg-white border border-brand-border hover:bg-brand-cream transition-colors shadow-subtle cursor-pointer"
          >
            <span>View All Reviews on Google Maps</span>
            <ExternalLink aria-hidden="true" className="w-3.5 h-3.5 text-brand-teak" />
          </a>
        </div>
      </div>
    </section>
  );
};
