export interface OfferingCategory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  categoryFilter: string;
}

export const OFFERINGS_DATA: OfferingCategory[] = [
  {
    id: 'living-sofas',
    title: 'Living Room & Sofas',
    subtitle: 'Sectionals & L-Shape Couches',
    description: 'Custom-sized sofas in stain-resistant fabrics and seasoned hardwood frames.',
    imageUrl: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80',
    categoryFilter: 'Living Room',
  },
  {
    id: 'beds-bedroom',
    title: 'Bedroom & Hydraulic Beds',
    subtitle: 'Storage & Platform Beds',
    description: 'King and Queen beds with smooth German hydraulic gas struts for effortless storage.',
    imageUrl: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80',
    categoryFilter: 'Bedroom Furniture',
  },
  {
    id: 'wardrobes-storage',
    title: 'Wardrobes & Storage',
    subtitle: 'Sliding & Modular Units',
    description: 'Floor-to-ceiling sliding wardrobes with soft-close hardware and tailored internal layout.',
    imageUrl: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=800&q=80',
    categoryFilter: 'Wardrobes & Storage',
  },
  {
    id: 'dining-suites',
    title: 'Dining Sets',
    subtitle: 'Solid Wood & Stone Tops',
    description: 'Durable solid teakwood and marble-top dining tables with ergonomic upholstered chairs.',
    imageUrl: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=800&q=80',
    categoryFilter: 'Dining Room',
  },
  {
    id: 'tv-consoles',
    title: 'TV Consoles & Media Units',
    subtitle: 'Wall-Mount & Floating Consoles',
    description: 'Modern fluted panels with concealed wire channels and acoustic media compartments.',
    imageUrl: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80',
    categoryFilter: 'Living Room',
  },
  {
    id: 'complete-packages',
    title: 'Full Home Furniture Combos',
    subtitle: '2BHK & 3BHK Home Bundles',
    description: 'Complete matched living, dining, and bedroom furniture ensembles at wholesale prices.',
    imageUrl: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=800&q=80',
    categoryFilter: 'Complete Home Combos',
  },
];
