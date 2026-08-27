import { CurrencyPipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { Apartment } from '../../../core/models/apartment.model';

@Component({
  imports: [CurrencyPipe],
  selector: 'app-apartment-details-rental-details',
  styleUrl: './apartment-details-rental-details.scss',
  templateUrl: './apartment-details-rental-details.html',
})
export class ApartmentDetailsRentalDetails {
  apartment = input.required<Apartment>();
}
