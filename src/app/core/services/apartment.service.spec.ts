import { TestBed } from '@angular/core/testing';
import { describe, expect, it, beforeEach } from 'vitest';
import { ApartmentService } from './apartment.service';
import { AuthService } from './auth.service';

describe('ApartmentService', () => {
  let service: ApartmentService;

  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({ providers: [ApartmentService, AuthService] });
    service = TestBed.inject(ApartmentService);
  });

  it('loads the seeded apartments', () => {
    expect(service.apartments().length).toBeGreaterThan(0);
  });

  it('toggles a favourite', () => {
    service.toggleFavourite('apt-101');
    expect(service.isFavourite('apt-101')).toBe(true);
    service.toggleFavourite('apt-101');
    expect(service.isFavourite('apt-101')).toBe(false);
  });
});
