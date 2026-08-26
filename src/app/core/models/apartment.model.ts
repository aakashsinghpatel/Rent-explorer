export interface Apartment {
  id: string;
  title: string;
  building: string;
  shared: boolean;
  location: string;
  squareFeet: number;
  leaseType: 'long-term' | 'short-term' | 'both';
  price: number;
  negotiable: boolean;
  priceMode: 'per-month' | 'utilities-included';
  furnished: boolean;
  amenities: string[];
  vegetarianPreference?: 'preferred' | 'not-preferred';
  description: string;
  images: string[];
  landlordId: string;
  landlordName: string;
  landlordEmail: string;
  featured: boolean;
  createdAt: string;
}

export interface ApartmentDraft {
  building: string;
  title: string;
  shared: boolean;
  location: string;
  squareFeet: number;
  leaseType: Apartment['leaseType'];
  price: number;
  negotiable: boolean;
  priceMode: Apartment['priceMode'];
  furnished: boolean;
  amenities: string[];
  vegetarianPreference: Apartment['vegetarianPreference'];
  description: string;
  landlordId: string;
  landlordName: string;
  landlordEmail: string;
  images: string[];
}
