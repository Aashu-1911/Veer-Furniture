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
      if (window.scrollY > 25) {
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
            ? 'bg-brand-surface/98 backdrop-blur-md border-b border-brand-border/90 shadow-subtle py-2.5 sm:py-3'
            : 'bg-brand-dark/95 backdrop-blur-md border-b border-white/10 py-3 sm:py-3.5 shadow-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3">
            
            {/* Brand Logo & Identification */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#home');
              }}
              className="group flex items-center gap-2.5 sm:gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-champagne cursor-pointer select-none flex-shrink-0"
            >
              <img
                src={logoImg}
                alt="Veer Furniture Mall Logo"
                className="h-10 w-10 sm:h-11 sm:w-11 object-contain filter drop-shadow-[0_2px_8px_rgba(200,162,106,0.3)] transition-transform duration-300 group-hover:scale-105 flex-shrink-0"
              />

              <div className="flex flex-col text-left">
                <div className="flex items-center gap-1.5">
                  <span
                    className={`font-display text-lg sm:text-xl font-semibold tracking-wider uppercase transition-colors ${
                      isScrolled ? 'text-brand-dark group-hover:text-brand-teak' : 'text-white'
                    }`}
                  >
                    VEER
                  </span>
                  <span
                    className={`text-[8px] uppercase tracking-wider px-1 py-0.5 border ${
                      isScrolled
                        ? 'border-brand-teak/30 text-brand-teak'
                        : 'border-brand-champagne/60 text-brand-champagne'
                    }`}
                  >
                    LOHGAON
                  </span>
                </div>
                <span
                  className={`text-[9px] tracking-wider uppercase font-light transition-colors ${
                    isScrolled ? 'text-brand-muted' : 'text-zinc-300'
                  }`}
                >
                  Furniture Mall · Pune
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-5 xl:space-x-6">
              {navLinks.map((item) => {
                const sectionId = item.href.replace('#', '');
                const isActive = activeSection === sectionId;

                return (
                  <button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    className={`text-xs uppercase tracking-wider font-medium transition-all py-1 border-b cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-champagne whitespace-nowrap ${
                      isActive
                        ? isScrolled
                          ? 'border-brand-teak text-brand-teak font-semibold'
                          : 'border-brand-champagne text-brand-champagne font-semibold'
                        : isScrolled
                        ? 'border-transparent text-brand-dark/80 hover:text-brand-teak hover:border-brand-teak/40'
                        : 'border-transparent text-white/85 hover:text-brand-champagne hover:border-brand-champagne/40'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>

            {/* Right Action buttons (Desktop) */}
            <div className="hidden md:flex items-center space-x-2.5 flex-shrink-0">
              {/* Compact Phone Number */}
              <a
                href={BUSINESS_DATA.contact.phoneCallable}
                aria-label={`Call Showroom at ${BUSINESS_DATA.contact.phoneDisplay}`}
                className={`flex items-center gap-1.5 whitespace-nowrap text-xs font-semibold px-3 py-2 transition-all border select-none ${
                  isScrolled
                    ? 'border-brand-border bg-white text-brand-dark hover:bg-brand-cream hover:border-brand-teak'
                    : 'border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-brand-champagne'
                }`}
              >
                <Phone className="w-3.5 h-3.5 text-brand-champagne flex-shrink-0" />
                <span>{BUSINESS_DATA.contact.phoneDisplay}</span>
              </a>

              {/* Primary Showroom CTA */}
              <button
                onClick={() => scrollToSection('#location')}
                className={`flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold px-3.5 py-2 transition-all cursor-pointer shadow-subtle whitespace-nowrap ${
                  isScrolled
                    ? 'bg-brand-dark text-white hover:bg-brand-teak'
                    : 'bg-brand-champagne text-brand-dark hover:bg-brand-champagneLight'
                }`}
              >
                <Navigation className="w-3 h-3" />
                <span>Visit Showroom</span>
              </button>
            </div>

            {/* Mobile Menu Hamburger (Only logo and menu button on mobile header) */}
            <div className="flex items-center md:hidden gap-1.5 flex-shrink-0">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open Navigation Menu"
                className={`p-2 border transition-colors ${
                  isScrolled
                    ? 'border-brand-border text-brand-dark hover:bg-brand-cream'
                    : 'border-white/20 text-white bg-white/5 hover:bg-white/10'
                }`}
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Slide-out Mobile Menu Drawer */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        activeSection={activeSection}
      />
    </>
  );
};
