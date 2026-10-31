import React from 'react';
import { cn } from '../../lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'champagne' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  asLink?: boolean;
  href?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  asLink = false,
  href,
  target,
  rel,
  children,
  className,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-champagne focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed select-none';

  const variants = {
    primary: 'bg-brand-dark text-brand-surface hover:bg-brand-teak border border-brand-dark hover:border-brand-teak shadow-subtle',
    secondary: 'bg-brand-cream text-brand-dark hover:bg-brand-warm border border-brand-border',
    outline: 'bg-transparent text-brand-dark border border-brand-dark/25 hover:border-brand-dark hover:bg-brand-dark/5',
    champagne: 'bg-brand-champagne text-brand-dark font-semibold hover:bg-brand-champagneLight border border-brand-champagne shadow-subtle',
    dark: 'bg-brand-dark text-white hover:bg-brand-charcoal border border-white/10 shadow-architectural',
  };

  const sizes = {
    sm: 'text-xs uppercase tracking-wider px-4 py-2.5 rounded-none',
    md: 'text-sm px-6 py-3.5 rounded-none tracking-wide',
    lg: 'text-base px-8 py-4 rounded-none tracking-wide font-medium',
  };

  const combinedClass = cn(baseStyles, variants[variant], sizes[size], className);

  if (asLink && href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={combinedClass}
        onClick={props.onClick as unknown as React.MouseEventHandler<HTMLAnchorElement>}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClass} {...props}>
      {children}
    </button>
  );
};

