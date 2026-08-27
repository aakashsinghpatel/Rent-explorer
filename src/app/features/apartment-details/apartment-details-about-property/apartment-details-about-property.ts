import { Component, input } from '@angular/core';
import { Apartment } from '../../../core/models/apartment.model';

@Component({
  imports: [],
  selector: 'app-apartment-details-about-property',
  styleUrl: './apartment-details-about-property.scss',
  templateUrl: './apartment-details-about-property.html',
})
export class ApartmentDetailsAboutProperty {
  apartment = input.required<Apartment>();
}
