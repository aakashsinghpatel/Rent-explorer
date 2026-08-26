import { TestBed } from '@angular/core/testing';
import { describe, expect, it, beforeEach } from 'vitest';
import { HomeComponent } from './home';

describe('HomeComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HomeComponent] });
  });

  it('creates the home component', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('starts on the first page', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    expect(fixture.componentInstance.page()).toBe(1);
  });
});
