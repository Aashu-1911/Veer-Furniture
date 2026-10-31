import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { REVIEWS_DATA } from '../../data/reviews';
import { BUSINESS_DATA } from '../../data/business';
import { Star, ShieldCheck, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

export const Reviews: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const reviewsPerPage = 3;
  const totalPages = Math.ceil(REVIEWS_DATA.length / reviewsPerPage);

  const visibleReviews = REVIEWS_DATA.slice(
    currentPage * reviewsPerPage,
    (currentPage + 1) * reviewsPerPage
  );

  return (
    <section id="reviews" className="py-20 sm:py-28 bg-brand-cream/40 border-b border-brand-border/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header + Overall Google Rating Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14 sm:mb-16">
          <div className="lg:col-span-8">
            <SectionHeading
              eyebrow="Homeowner Word of Mouth"
              title="Verified Reviews from Pune Residents"
              description="Real experiences from families and homeowners who furnished their flats with Veer Furniture Mall, Lohgaon."
              className="mb-0"
            />
          </div>

          {/* Prominent Google Rating Badge */}
          <div className="lg:col-span-4 bg-white p-6 border border-brand-border shadow-subtle flex flex-col items-start sm:items-center sm:flex-row justify-between gap-4">
            <div>
              <div className="flex items-center gap-1 text-amber-500 mb-1" aria-label="5 out of 5 stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} aria-hidden="true" className="w-5 h-5 fill-current" />
                ))}
              </div>
              <div className="flex items-baseline gap-2">
                <span className="font-display text-3xl font-semibold text-brand-dark">
                  {BUSINESS_DATA.reputation.googleRating}
                </span>
                <span className="text-xs text-brand-muted">
                  out of 5.0 rating
                </span>
              </div>
              <span className="text-[11px] text-brand-muted block mt-0.5">
                Based on {BUSINESS_DATA.reputation.googleReviewCount}+ verified ratings
              </span>
            </div>

            <a
              href={BUSINESS_DATA.maps.directUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-brand-teak hover:text-brand-dark font-semibold inline-flex items-center gap-1 border-b border-brand-teak/40 pb-0.5"
            >
              <span>Read on Google</span>
              <ExternalLink aria-hidden="true" className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {visibleReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white p-7 border border-brand-border shadow-subtle flex flex-col justify-between space-y-6 relative group hover:border-brand-teak/50 transition-colors"
            >
              {/* Stars & Verification Pill */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-amber-500" aria-label={`${rev.rating} out of 5 stars`}>
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} aria-hidden="true" className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <div className="flex items-center gap-1 text-[11px] text-emerald-700 bg-emerald-50 px-2 py-0.5 border border-emerald-200">
                  <ShieldCheck aria-hidden="true" className="w-3.5 h-3.5" />
                  <span>Verified Purchase</span>
                </div>
              </div>

              {/* Review Text */}
              <p className="text-brand-dark text-sm sm:text-base leading-relaxed italic">
                "{rev.reviewText}"
              </p>

              {/* Reviewer Details */}
              <div className="pt-4 border-t border-brand-border/70 flex items-center gap-3">
                <div className="w-9 h-9 bg-brand-surface border border-brand-border text-brand-teak font-display text-xs font-semibold flex items-center justify-center">
                  {rev.initials}
                </div>
                <div className="text-xs">
                  <div className="font-semibold text-brand-dark">{rev.reviewerName}</div>
                  <div className="text-brand-muted">{rev.locationContext || 'Pune Resident'}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination & Google Link Bar */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-brand-border">
          <div className="text-xs text-brand-muted">
            All reviews reproduced from public consumer submissions for the Veer Furniture Mall regional presence.
          </div>

          <div className="flex items-center gap-3">
            {totalPages > 1 && (
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(0, p - 1))}
                  disabled={currentPage === 0}
                  aria-label="Previous reviews"
                  className="p-2 border border-brand-border bg-white text-brand-dark disabled:opacity-30 disabled:cursor-not-allowed hover:bg-brand-cream cursor-pointer"
                >
                  <ChevronLeft aria-hidden="true" className="w-4 h-4" />
                </button>
                <span className="text-xs font-mono px-2">
                  {currentPage + 1} / {totalPages}
                </span>
                <button
                  onClick={() => setCurrentPage((p) => Math.min(totalPages - 1, p + 1))}
                  disabled={currentPage === totalPages - 1}
                  aria-label="Next reviews"
                  className="p-2 border border-brand-border bg-white text-brand-dark disabled:opacity-30 disabled:cursor-not-allowed hover:bg-brand-cream cursor-pointer"
                >
                  <ChevronRight aria-hidden="true" className="w-4 h-4" />
                </button>
              </div>
            )}

            <a
              href={BUSINESS_DATA.maps.directUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-wider font-semibold text-brand-dark hover:text-brand-teak inline-flex items-center gap-1.5 px-4 py-2 bg-white border border-brand-border"
            >
              <span>View Google Business Profile</span>
              <ExternalLink aria-hidden="true" className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
