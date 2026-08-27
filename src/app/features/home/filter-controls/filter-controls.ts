import { Component, input, output } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  imports: [FormsModule],
  selector: "app-filter-controls",
  styleUrl: "./filter-controls.scss",
  templateUrl: "./filter-controls.html",
})
export class FilterControls {
  search = input.required<string>();
  location = input.required<string>();
  amenity = input.required<string>();
  minPrice = input.required<number|null>();
  maxPrice = input.required<number|null>();
  sort = input.required<string>();

  onSetSearch = output<string>();
  onSetLocation = output<string>();
  onSetAmenity = output<string>();
  onSetMinPrice = output<string>();
  onSetMaxPrice = output<string>();
  onSetSort = output<string>();

  readonly amenityOptions = [
    "Parking",
    "WiFi",
    "Power Backup",
    "Security System",
    "Gym/Fitness Center",
    "Swimming Pool",
    "Private Lawn",
    "Elevator",
    "Club House",
  ];
}
