import { Injectable, computed, signal } from '@angular/core';
import { Apartment, ApartmentDraft } from '../models/apartment.model';
import { AuthService } from './auth.service';

const APARTMENTS_KEY = 'rentHubApartments';
const FAVOURITES_KEY = 'rentHubFavourites';

const IMAGE_1 = 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80';
const IMAGE_2 = 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80';
const IMAGE_3 = 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80';

@Injectable({ providedIn: 'root' })
export class ApartmentService {
  private readonly apartmentsSignal = signal<Apartment[]>(this.loadApartments());
  private readonly favouriteIdsSignal = signal<string[]>(this.loadFavourites());

  readonly apartments = this.apartmentsSignal.asReadonly();
  readonly favouriteIds = this.favouriteIdsSignal.asReadonly();
  readonly favouriteCount = computed(() => this.favouriteIdsSignal().length);

  constructor(private readonly auth: AuthService) {}

  getById(id: string): Apartment | undefined {
    return this.apartmentsSignal().find(apartment => apartment.id === id);
  }

  isFavourite(id: string): boolean {
    return this.favouriteIdsSignal().includes(id);
  }

  toggleFavourite(id: string): void {
    const current = this.favouriteIdsSignal();
    const next = current.includes(id) ? current.filter(item => item !== id) : [...current, id];
    this.favouriteIdsSignal.set(next);
    localStorage.setItem(FAVOURITES_KEY, JSON.stringify(next));
  }

  addApartment(draft: ApartmentDraft): Apartment {
    const user = this.auth.currentUser();
    const apartment: Apartment = {
      id: crypto.randomUUID(),
      ...draft,
      landlordId: user?.id ?? draft.landlordId,
      landlordName: user?.name ?? draft.landlordName,
      landlordEmail: user?.email ?? draft.landlordEmail,
      images: [IMAGE_1],
      featured: false,
      createdAt: new Date().toISOString()
    };
    const next = [apartment, ...this.apartmentsSignal()];
    this.apartmentsSignal.set(next);
    localStorage.setItem(APARTMENTS_KEY, JSON.stringify(next));
    return apartment;
  }

  private loadApartments(): Apartment[] {
    const raw = localStorage.getItem(APARTMENTS_KEY);
    if (raw) {
      try { return JSON.parse(raw) as Apartment[]; } catch { /* reset below */ }
    }
    const seeded = this.seedApartments();
    localStorage.setItem(APARTMENTS_KEY, JSON.stringify(seeded));
    return seeded;
  }

  private loadFavourites(): string[] {
    const raw = localStorage.getItem(FAVOURITES_KEY);
    if (!raw) return [];
    try { return JSON.parse(raw) as string[]; } catch { return []; }
  }

  private seedApartments(): Apartment[] {
    return [
      {
        id: 'apt-101', title: 'Modern 2 BHK Apartment', building: 'Green Valley Residency', shared: false,
        location: 'Vijay Nagar, Indore', squareFeet: 1150, leaseType: 'long-term', price: 18000, negotiable: true,
        priceMode: 'per-month', furnished: true, amenities: ['Gym/Fitness Center', 'Parking', 'Power Backup', 'Security System'],
        description: 'A well-connected 2 BHK apartment with practical amenities and a comfortable layout.',
        images: [IMAGE_1, IMAGE_2], landlordId: 'landlord-1', landlordName: 'Rahul Sharma', landlordEmail: 'rahul@renthub.demo', featured: true, createdAt: '2026-08-01T09:00:00Z'
      },
      {
        id: 'apt-102', title: 'Bright 1 BHK Near Main Road', building: 'City View Homes', shared: false,
        location: 'Palasia, Indore', squareFeet: 720, leaseType: 'both', price: 12000, negotiable: false,
        priceMode: 'per-month', furnished: false, amenities: ['Car Parking', 'Water Heater', 'Elevator'],
        description: 'Compact apartment with easy access to daily conveniences and public transport.',
        images: [IMAGE_2], landlordId: 'landlord-2', landlordName: 'Neha Verma', landlordEmail: 'neha@renthub.demo', featured: true, createdAt: '2026-08-03T09:00:00Z'
      },
      {
        id: 'apt-103', title: 'Spacious Shared Apartment', building: 'Lakeview Towers', shared: true,
        location: 'Bhawarkua, Indore', squareFeet: 1350, leaseType: 'short-term', price: 9000, negotiable: true,
        priceMode: 'utilities-included', furnished: true, amenities: ['Swimming Pool', 'WiFi', 'Private Lawn'],
        description: 'Furnished shared apartment option with utilities included in the monthly amount.',
        images: [IMAGE_3], landlordId: 'landlord-3', landlordName: 'Amit Jain', landlordEmail: 'amit@renthub.demo', featured: false, createdAt: '2026-08-04T09:00:00Z'
      },
      {
        id: 'apt-104', title: 'Family 3 BHK Apartment', building: 'Sunrise Enclave', shared: false,
        location: 'Rau, Indore', squareFeet: 1600, leaseType: 'long-term', price: 24000, negotiable: true,
        priceMode: 'per-month', furnished: false, amenities: ['Club House', 'Security System', 'Parking'],
        description: 'Large family-friendly apartment with practical facilities and a quiet setting.',
        images: [IMAGE_1], landlordId: 'landlord-4', landlordName: 'Pooja Mehta', landlordEmail: 'pooja@renthub.demo', featured: false, createdAt: '2026-08-05T09:00:00Z'
      },
      {
        id: 'apt-105', title: 'Furnished Studio', building: 'Central Square', shared: false,
        location: 'MG Road, Indore', squareFeet: 500, leaseType: 'short-term', price: 10000, negotiable: false,
        priceMode: 'per-month', furnished: true, amenities: ['WiFi', 'Elevator', 'Power Backup'],
        description: 'Simple furnished studio for a tenant looking for a central location.',
        images: [IMAGE_2], landlordId: 'landlord-5', landlordName: 'Karan Patel', landlordEmail: 'karan@renthub.demo', featured: false, createdAt: '2026-08-06T09:00:00Z'
      },
      {
        id: 'apt-106', title: '2 BHK With Private Lawn', building: 'Orchid Heights', shared: false,
        location: 'Scheme 140, Indore', squareFeet: 1250, leaseType: 'both', price: 19500, negotiable: true,
        priceMode: 'per-month', furnished: false, amenities: ['Private Lawn', 'Parking', 'Security System'],
        description: 'Balanced 2 BHK option with a private outdoor space and parking.',
        images: [IMAGE_3], landlordId: 'landlord-6', landlordName: 'Ritu Singh', landlordEmail: 'ritu@renthub.demo', featured: false, createdAt: '2026-08-07T09:00:00Z'
      }
    ];
  }
}
