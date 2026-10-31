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
            ? 'bg-brand-dark/95 backdrop-blur-md shadow-lg py-2.5 sm:py-3'
            : 'bg-transparent py-3 sm:py-4'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 lg:gap-8">
            
            {/* Brand Logo & Identification (Enlarged with generous right margin) */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#home');
              }}
              className="group flex items-center gap-3 sm:gap-4 mr-6 lg:mr-12 xl:mr-16 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-champagne cursor-pointer select-none flex-shrink-0"
            >
              <img
                src={logoImg}
                alt="Veer Furniture Mall Logo"
                className="h-16 w-16 sm:h-20 sm:w-20 object-contain filter drop-shadow-[0_4px_12px_rgba(200,162,106,0.35)] transition-transform duration-300 group-hover:scale-105 flex-shrink-0"
              />

              <div className="flex flex-col text-left justify-center">
                <span className="font-display text-2xl sm:text-3xl font-bold tracking-wider uppercase text-white leading-none">
                  VEER
                </span>
                <span className="text-xs sm:text-sm font-semibold tracking-[0.22em] uppercase text-brand-champagne mt-1.5 leading-none whitespace-nowrap">
                  FURNITURE MALL
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links (Centered with spacious gap from logo) */}
            <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6 mx-auto">
              {navLinks.map((item) => {
                const sectionId = item.href.replace('#', '');
                const isActive = activeSection === sectionId;

                return (
                  <button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    className={`text-xs uppercase tracking-wider font-medium transition-all py-1.5 cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-champagne whitespace-nowrap ${
                      isActive
                        ? 'text-brand-champagne font-bold'
                        : 'text-white/80 hover:text-brand-champagne'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>

            {/* Right Action buttons (Desktop) — Rounded Pill Dimensions (185px x 44px) */}
            <div className="hidden md:flex items-center space-x-3 flex-shrink-0">
              {/* Phone Button */}
              <a
                href={BUSINESS_DATA.contact.phoneCallable}
                aria-label={`Call Showroom at ${BUSINESS_DATA.contact.phoneDisplay}`}
                className="w-[165px] lg:w-[185px] h-[44px] rounded-full flex items-center justify-center gap-2 text-xs uppercase tracking-wider font-semibold transition-all border border-white/25 bg-black/30 hover:bg-white/15 hover:border-brand-champagne text-white backdrop-blur-sm select-none whitespace-nowrap shadow-sm"
              >
                <Phone className="w-3.5 h-3.5 text-brand-champagne flex-shrink-0" />
                <span>{BUSINESS_DATA.contact.phoneDisplay}</span>
              </a>

              {/* Visit Showroom Button */}
              <a
                href={BUSINESS_DATA.maps.directUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Veer Furniture Mall Lohgaon on Google Maps"
                className="w-[165px] lg:w-[185px] h-[44px] rounded-full flex items-center justify-center gap-2 text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer whitespace-nowrap border border-brand-champagne bg-brand-champagne text-brand-dark hover:bg-brand-champagneLight hover:border-brand-champagneLight shadow-subtle"
              >
                <Navigation className="w-3.5 h-3.5 flex-shrink-0" />
                <span>VISIT SHOWROOM</span>
              </a>
            </div>

            {/* Mobile Menu Hamburger (Rounded) */}
            <div className="flex items-center md:hidden gap-1.5 flex-shrink-0">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open Navigation Menu"
                className="p-2.5 rounded-full border border-white/20 text-white bg-black/30 backdrop-blur-sm hover:bg-white/15 transition-colors"
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
