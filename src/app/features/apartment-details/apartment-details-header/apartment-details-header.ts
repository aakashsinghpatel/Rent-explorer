import { Component, input, output } from '@angular/core';
import { Apartment } from '../../../core/models/apartment.model';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-apartment-details-header',
  styleUrl: './apartment-details-header.scss',
  templateUrl: './apartment-details-header.html',
})
export class ApartmentDetailsHeader {
  apartment = input.required<Apartment>();
  isFavourite = input.required<boolean>();
  onToggleFavourite = output();
}
