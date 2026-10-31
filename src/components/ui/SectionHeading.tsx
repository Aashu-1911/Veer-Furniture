import React from 'react';
import { cn } from '../../lib/utils';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  dark?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  align = 'left',
  dark = false,
  className,
}) => {
  return (
    <div
      className={cn(
        'max-w-3xl mb-12 sm:mb-16',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className
      )}
    >
      {eyebrow && (
        <div className="flex items-center gap-3 mb-3 justify-start sm:justify-start">
          {align === 'center' && <span className="w-6 h-[1px] bg-brand-champagne inline-block"></span>}
          <span
            className={cn(
              'text-xs uppercase tracking-widest font-medium',
              dark ? 'text-brand-champagne' : 'text-brand-teak'
            )}
          >
            {eyebrow}
          </span>
          {align === 'center' && <span className="w-6 h-[1px] bg-brand-champagne inline-block"></span>}
        </div>
      )}
      <h2
        className={cn(
          'font-display text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.15]',
          dark ? 'text-white' : 'text-brand-dark'
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-4 text-base sm:text-lg leading-relaxed font-normal',
            dark ? 'text-zinc-300' : 'text-brand-muted',
            align === 'center' ? 'mx-auto max-w-2xl' : ''
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
};

