import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-apartment-details-pictures',
  styleUrl: './apartment-details-pictures.scss',
  templateUrl: './apartment-details-pictures.html',
})
export class ApartmentDetailsPictures {
  title = input.required<string>();
  images = input.required<string[]>();
}
