import { Component, input, output } from '@angular/core';
import { Apartment } from '../../../core/models/apartment.model';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  imports: [CurrencyPipe, RouterLink],
  selector: 'app-featured-listing',
  styleUrl: './featured-listing.scss',
  templateUrl: './featured-listing.html',
})
export class FeaturedListing {
  featured = input.required<Apartment[]>();
  featuredIndex = input.required<number>();
  onPreviousFeatured = output();
  onNextFeatured = output();
}
