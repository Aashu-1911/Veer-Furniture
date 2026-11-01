export interface OfferingCategory {
  id: string;
  title: string;
  subtitle: string;
  shortTag: string;
  description: string;
  imageUrl: string;
  categoryFilter: string;
}

export const OFFERINGS_DATA: OfferingCategory[] = [
  {
    id: 'living-sofas',
    title: 'Living Room & Sofas',
    subtitle: 'L-Shape & Sectional Couches',
    shortTag: 'L-Shape & Sofas',
    description: 'Custom-sized sofas in stain-resistant fabrics and seasoned hardwood frames.',
    imageUrl: '/assets/images/img-6.png',
    categoryFilter: 'Living Room',
  },
  {
    id: 'beds-bedroom',
    title: 'Bedroom & Hydraulic Beds',
    subtitle: 'Storage & Platform Beds',
    shortTag: 'Storage Beds',
    description: 'King and Queen beds with smooth German hydraulic gas struts for effortless storage.',
    imageUrl: '/assets/images/img-8.png',
    categoryFilter: 'Bedroom Furniture',
  },
  {
    id: 'wardrobes-storage',
    title: 'Wardrobes & Storage',
    subtitle: 'Sliding & Modular Units',
    shortTag: 'Sliding Wardrobes',
    description: 'Floor-to-ceiling sliding wardrobes with soft-close hardware and tailored internal layout.',
    imageUrl: '/assets/images/img-9.png',
    categoryFilter: 'Wardrobes & Storage',
  },
  {
    id: 'tv-consoles',
    title: 'TV Consoles & Media Units',
    subtitle: 'Wall-Mount & Fluted Panels',
    shortTag: 'TV Wall Units',
    description: 'Modern fluted panels with concealed wire channels and acoustic media compartments.',
    imageUrl: '/assets/images/img-2.png',
    categoryFilter: 'TV Consoles & Wall Units',
  },
  {
    id: 'mandir-temples',
    title: 'Home Temples & Mandirs',
    subtitle: 'Handcrafted Wooden Shrines',
    shortTag: 'Wooden Mandirs',
    description: 'Sacred home shrines featuring laser-cut Om jaali, storage, and polished wood.',
    imageUrl: '/assets/images/img-13.png',
    categoryFilter: 'Custom Interiors',
  },
  {
    id: 'complete-packages',
    title: 'Full Bedroom & Home Combos',
    subtitle: 'Bed & Wardrobe Ensembles',
    shortTag: 'Home Combos',
    description: 'Complete matched living, dining, and bedroom furniture ensembles at wholesale prices.',
    imageUrl: '/assets/images/img-12.png',
    categoryFilter: 'Complete Home Combos',
  },
];
