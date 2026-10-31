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
    <section id="reviews" className="py-16 sm:py-24 bg-brand-cream/30 border-b border-brand-border/70 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Compact Google Rating Badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-6">
          <SectionHeading
            eyebrow="Customer Reviews"
            title="Real Feedback from Pune Residents"
            description="Verified experiences from homeowners who visited and furnished their homes with Veer Furniture Mall Lohgaon."
            className="mb-0 max-w-2xl"
          />

          {/* Compact Verified Rating Pill */}
          <div className="flex items-center gap-3 bg-white px-4 py-2.5 border border-brand-border shadow-subtle self-start md:self-end">
            <div className="flex items-center gap-1 text-amber-500" aria-label="5 stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} aria-hidden="true" className="w-4 h-4 fill-current" />
              ))}
            </div>
            <div className="text-xs">
              <span className="font-semibold text-brand-dark mr-1">{BUSINESS_DATA.reputation.googleRating} ★</span>
              <span className="text-brand-muted">({BUSINESS_DATA.reputation.googleReviewCount}+ Google Reviews)</span>
            </div>
          </div>
        </div>

        {/* Compact Review Cards: 1-col on mobile, 3-col on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {visibleReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white p-5 sm:p-6 border border-brand-border hover:border-brand-teak/40 transition-colors flex flex-col justify-between space-y-3.5 shadow-subtle"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-amber-500" aria-label={`${rev.rating} stars`}>
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} aria-hidden="true" className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>

                <div className="flex items-center gap-1 text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 border border-emerald-200">
                  <ShieldCheck aria-hidden="true" className="w-3 h-3" />
                  <span>Verified Purchase</span>
                </div>
              </div>

              {/* Review Text: Clean and clamped to prevent tall cards */}
              <p className="text-brand-dark text-xs sm:text-sm leading-relaxed italic line-clamp-3">
                "{rev.reviewText}"
              </p>

              {/* Reviewer Details */}
              <div className="pt-3 border-t border-brand-border/60 flex items-center justify-between text-xs">
                <div>
                  <div className="font-semibold text-brand-dark">{rev.reviewerName}</div>
                  <div className="text-[11px] text-brand-muted">{rev.locationContext || 'Pune Resident'}</div>
                </div>
                <span className="text-[10px] text-brand-teak uppercase tracking-wider font-medium">
                  {rev.source}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination & Read on Google CTA */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-brand-border/60">
          <span className="text-[11px] text-brand-muted">
            Reproduced from verified public customer reviews for Veer Furniture Mall Pune.
          </span>

          <div className="flex items-center gap-3">
            {totalPages > 1 && (
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(0, p - 1))}
                  disabled={currentPage === 0}
                  aria-label="Previous reviews"
                  className="p-1.5 border border-brand-border bg-white text-brand-dark disabled:opacity-30 disabled:cursor-not-allowed hover:bg-brand-cream cursor-pointer"
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
                  className="p-1.5 border border-brand-border bg-white text-brand-dark disabled:opacity-30 disabled:cursor-not-allowed hover:bg-brand-cream cursor-pointer"
                >
                  <ChevronRight aria-hidden="true" className="w-4 h-4" />
                </button>
              </div>
            )}

            <a
              href={BUSINESS_DATA.maps.directUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-wider font-semibold text-brand-dark hover:text-brand-teak inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-brand-border"
            >
              <span>Read on Google</span>
              <ExternalLink aria-hidden="true" className="w-3 h-3" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
