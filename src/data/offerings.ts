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
    subtitle: 'Sofas & Couches',
    shortTag: 'Sofas',
    description: 'Comfortable sofas and L-shape sets.',
    imageUrl: '/assets/images/img-6.png',
    categoryFilter: 'Living Room',
  },
  {
    id: 'beds-bedroom',
    title: 'Bedroom & Hydraulic Beds',
    subtitle: 'Storage Beds',
    shortTag: 'Beds',
    description: 'King and Queen beds with easy storage.',
    imageUrl: '/assets/images/img-8.png',
    categoryFilter: 'Bedroom Furniture',
  },
  {
    id: 'wardrobes-storage',
    title: 'Wardrobes & Storage',
    subtitle: 'Sliding Wardrobes',
    shortTag: 'Wardrobes',
    description: 'Sliding door wardrobes and cupboards.',
    imageUrl: '/assets/images/img-9.png',
    categoryFilter: 'Wardrobes & Storage',
  },
  {
    id: 'tv-consoles',
    title: 'TV Consoles & Media Units',
    subtitle: 'TV Wall Units',
    shortTag: 'TV Units',
    description: 'Modern TV panels with wire space.',
    imageUrl: '/assets/images/img-2.png',
    categoryFilter: 'TV Consoles & Wall Units',
  },
  {
    id: 'mandir-temples',
    title: 'Home Temples & Mandirs',
    subtitle: 'Wooden Mandirs',
    shortTag: 'Mandirs',
    description: 'Wooden mandirs with fine carving.',
    imageUrl: '/assets/images/img-13.png',
    categoryFilter: 'Custom Interiors',
  },
  {
    id: 'complete-packages',
    title: 'Full Bedroom & Home Combos',
    subtitle: 'Home Packages',
    shortTag: 'Combos',
    description: 'Complete home furniture sets.',
    imageUrl: '/assets/images/img-12.png',
    categoryFilter: 'Complete Home Combos',
  },
];
