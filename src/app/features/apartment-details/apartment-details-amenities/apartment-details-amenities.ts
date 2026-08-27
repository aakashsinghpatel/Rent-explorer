import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-apartment-details-amenities',
  styleUrl: './apartment-details-amenities.scss',
  templateUrl: './apartment-details-amenities.html',
})
export class ApartmentDetailsAmenities {
    amenities = input.required<string[]>();
}
