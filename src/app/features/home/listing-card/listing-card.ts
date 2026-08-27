import { Component, inject, input, output } from '@angular/core';
import { Apartment } from '../../../core/models/apartment.model';
import { RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { ApartmentService } from '../../../core/services/apartment.service';

@Component({
  imports: [RouterLink, CurrencyPipe],
  selector: 'app-listing-card',
  styleUrl: './listing-card.scss',
  templateUrl: './listing-card.html',
})
export class ListingCard {
  private readonly apartmentService: ApartmentService = inject(ApartmentService);
  listing = input.required<Apartment>();
  toggleFavItem = output<string>();

 isFavourite(id: string): boolean {
    return this.apartmentService.isFavourite(id);
  }

}
