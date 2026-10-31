import React, { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { WhatWeOffer } from './components/sections/WhatWeOffer';
import { Gallery } from './components/sections/Gallery';
import { Collections } from './components/sections/Collections';
import { Reviews } from './components/sections/Reviews';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';
import { Preloader } from './components/layout/Preloader';
import { FloatingWhatsApp } from './components/ui/FloatingWhatsApp';
import { BackToTop } from './components/ui/BackToTop';
import { useActiveSection } from './hooks/useActiveSection';

export const App: React.FC = () => {
  const [isPreloaderDone, setIsPreloaderDone] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  
  const sectionIds = ['home', 'about', 'offerings', 'gallery', 'collections', 'reviews', 'location'];
  const activeSection = useActiveSection(sectionIds, 120);

  const handleSelectCategoryFromOfferings = (cat: string) => {
    setSelectedCategory(cat);
  };

  return (
    <div className="min-h-screen bg-brand-surface text-brand-dark flex flex-col font-sans selection:bg-brand-champagne selection:text-brand-dark">
      {/* Skip to Main Content Link for Keyboard / Screen Reader Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2.5 focus:bg-brand-dark focus:text-white focus:ring-2 focus:ring-brand-champagne"
      >
        Skip to main content
      </a>

      {/* Brand Preloader */}
      {!isPreloaderDone && (
        <Preloader onComplete={() => setIsPreloaderDone(true)} />
      )}

      {/* Main App Layout */}
      <Navbar activeSection={activeSection} />

      <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
        {/* 1. Home / Hero */}
        <Hero />

        {/* 2. Our Story / About */}
        <About />

        {/* 3. What We Offer */}
        <WhatWeOffer onSelectCategory={handleSelectCategoryFromOfferings} />

        {/* 4. Our Showroom / Gallery */}
        <Gallery />

        {/* 5. Browse Our Collection */}
        <Collections initialFilter={selectedCategory} />

        {/* 6. Customer Reviews */}
        <Reviews />

        {/* 7. Visit Our Store */}
        <Contact />
      </main>

      {/* 8. Contact / Footer */}
      <Footer />

      {/* Interactive Utilities */}
      <FloatingWhatsApp />
      <BackToTop />
    </div>
  );
};

export default App;
