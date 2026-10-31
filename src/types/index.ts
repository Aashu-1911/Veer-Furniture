export interface BusinessDetails {
  name: string;
  branch: string;
  tagline: string;
  establishedNotice?: string;
  address: {
    street: string;
    locality: string;
    landmark: string;
    city: string;
    state: string;
    pincode: string;
    fullFormatted: string;
  };
  coordinates: {
    lat: number;
    lng: number;
    formatted: string;
  };
  contact: {
    phoneDisplay: string;
    phoneCallable: string;
    whatsappNumber: string;
    whatsappPreFilledText: string;
    email?: string;
  };
  hours: {
    days: string;
    timing: string;
    openStatusNotice: string;
  };
  maps: {
    shortUrl: string;
    directUrl: string;
    embedQueryUrl: string;
    directionsUrl: string;
  };
  reputation: {
    googleRating: number;
    googleReviewCount: number;
    highlightPill: string;
  };
  social?: {
    instagram?: string;
    facebook?: string;
    youtube?: string;
  };
  categoriesOffered: string[];
}

export interface CollectionItem {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  description: string;
  materials: string[];
  dimensionsSample: string;
  imageUrl: string;
  accentBadge?: string;
  featured?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Living Room' | 'Bedroom' | 'Dining' | 'Custom Interiors' | 'Showroom Floor';
  description: string;
  imageUrl: string;
  isAuthenticShowroom?: boolean;
  aspectRatio: 'square' | 'portrait' | 'landscape' | 'wide';
}

export interface CustomerReview {
  id: string;
  reviewerName: string;
  initials: string;
  rating: number;
  reviewDate: string;
  reviewText: string;
  source: 'Google' | 'Google Maps' | 'Justdial';
  verifiedCustomer: boolean;
  locationContext?: string;
}

export interface NavItem {
  label: string;
  href: string;
  isAction?: boolean;
}

