import React, { useState, useEffect } from 'react';
import { Menu, Phone, Navigation } from 'lucide-react';
import { NAV_ITEMS } from '../../data/navigation';
import { BUSINESS_DATA } from '../../data/business';
import { MobileMenu } from './MobileMenu';
import { scrollToSection } from '../../lib/utils';
import logoImg from '../../assets/images/logo.png';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = NAV_ITEMS.filter((item) => !item.isAction);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-brand-surface/98 backdrop-blur-md border-b border-brand-border/90 shadow-subtle py-3'
            : 'bg-brand-dark/90 backdrop-blur-md border-b border-white/10 py-3.5 sm:py-4 shadow-elevated'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Brand Logo, Wordmark & Location */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#home');
              }}
              className="group flex items-center gap-3 sm:gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-champagne cursor-pointer select-none"
            >
              {/* Seamless Logo (No white background, larger size) */}
              <img
                src={logoImg}
                alt="Veer Furniture Mall Logo"
                className="h-12 w-12 sm:h-14 sm:w-14 object-contain filter drop-shadow-[0_2px_10px_rgba(200,162,106,0.3)] transition-transform duration-300 group-hover:scale-105 flex-shrink-0"
              />

              <div className="flex flex-col text-left">
                <div className="flex items-center gap-2">
                  <span
                    className={`font-display text-xl sm:text-2xl font-semibold tracking-widest uppercase transition-colors ${
                      isScrolled ? 'text-brand-dark group-hover:text-brand-teak' : 'text-white'
                    }`}
                  >
                    VEER
                  </span>
                  <span
                    className={`text-[9px] uppercase tracking-ultra px-1.5 py-0.5 border ${
                      isScrolled
                        ? 'border-brand-teak/30 text-brand-teak'
                        : 'border-brand-champagne/60 text-brand-champagne'
                    }`}
                  >
                    LOHGAON
                  </span>
                </div>
                <span
                  className={`text-[10px] tracking-wider uppercase font-light transition-colors ${
                    isScrolled ? 'text-brand-muted' : 'text-zinc-300'
                  }`}
                >
                  Furniture Mall · Pune Airport Area
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-7">
              {navLinks.map((item) => {
                const sectionId = item.href.replace('#', '');
                const isActive = activeSection === sectionId;

                return (
                  <button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    className={`text-xs uppercase tracking-widest font-medium transition-all py-1 border-b-2 cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-champagne ${
                      isActive
                        ? isScrolled
                          ? 'border-brand-teak text-brand-teak font-semibold'
                          : 'border-brand-champagne text-brand-champagne font-semibold'
                        : isScrolled
                        ? 'border-transparent text-brand-dark/80 hover:text-brand-teak hover:border-brand-teak/40'
                        : 'border-transparent text-white/90 hover:text-brand-champagne hover:border-brand-champagne/40'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>

            {/* Right Action buttons */}
            <div className="hidden sm:flex items-center space-x-3 flex-shrink-0">
              {/* High Visibility Phone Number Button */}
              <a
                href={BUSINESS_DATA.contact.phoneCallable}
                aria-label={`Call Showroom at ${BUSINESS_DATA.contact.phoneDisplay}`}
                className={`flex items-center gap-2 whitespace-nowrap text-xs sm:text-sm font-semibold tracking-wide px-3.5 sm:px-4 py-2.5 transition-all border cursor-pointer select-none ${
                  isScrolled
                    ? 'border-brand-border bg-white text-brand-dark hover:bg-brand-cream hover:border-brand-teak shadow-subtle'
                    : 'border-brand-champagne/50 bg-brand-charcoal/80 text-white hover:bg-brand-charcoal hover:border-brand-champagne shadow-md'
                }`}
              >
                <Phone className="w-4 h-4 text-brand-champagne flex-shrink-0 animate-pulse" />
                <span className="font-semibold text-white sm:text-brand-dark lg:text-inherit">
                  {BUSINESS_DATA.contact.phoneDisplay}
                </span>
              </a>

              <button
                onClick={() => scrollToSection('#contact')}
                className={`flex items-center gap-2 text-xs uppercase tracking-widest font-semibold px-4 py-2.5 transition-all cursor-pointer shadow-subtle whitespace-nowrap ${
                  isScrolled
                    ? 'bg-brand-dark text-white hover:bg-brand-teak'
                    : 'bg-brand-champagne text-brand-dark hover:bg-brand-champagneLight'
                }`}
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Visit Showroom</span>
              </button>
            </div>

            {/* Mobile Menu Hamburger */}
            <div className="flex items-center sm:hidden gap-2 flex-shrink-0">
              <a
                href={BUSINESS_DATA.contact.phoneCallable}
                aria-label="Call Showroom"
                className={`p-2 border rounded-none ${
                  isScrolled
                    ? 'border-brand-border text-brand-dark'
                    : 'border-white/30 text-white bg-white/5'
                }`}
              >
                <Phone className="w-4 h-4 text-brand-champagne" />
              </a>

              <button
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open Navigation Menu"
                className={`p-2 border rounded-none transition-colors ${
                  isScrolled
                    ? 'border-brand-border text-brand-dark hover:bg-brand-cream'
                    : 'border-white/30 text-white bg-white/5 hover:bg-white/10'
                }`}
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Slide-out Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        activeSection={activeSection}
      />
    </>
  );
};

