import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
} from "@angular/core";
import { CurrencyPipe } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterLink } from "@angular/router";
import { Apartment } from "../../core/models/apartment.model";
import { ApartmentService } from "../../core/services/apartment.service";
import { ListingCard } from "./listing-card/listing-card";
import { FeaturedListing } from "./featured-listing/featured-listing";
import { FilterControls } from "./filter-controls/filter-controls";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [FeaturedListing,FilterControls, ListingCard, FormsModule],
  templateUrl: "./home.html",
  styleUrl: "./home.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  private readonly apartmentService = inject(ApartmentService);
  readonly apartments = this.apartmentService.apartments;
  readonly search = signal("");
  readonly location = signal("");
  readonly amenity = signal("");
  readonly minPrice = signal<number | null>(null);
  readonly maxPrice = signal<number | null>(null);
  readonly sort = signal<"newest" | "priceAsc" | "priceDesc">("newest");
  readonly page = signal(1);
  readonly pageSize = 3;
  readonly featuredIndex = signal(0);

  readonly featured = computed(() =>
    this.apartments()
      .filter((a) => a.featured)
      .slice(0, 3),
  );
  readonly filtered = computed(() => {
    const q = this.search().trim().toLowerCase();
    const loc = this.location().trim().toLowerCase();
    const min = this.minPrice();
    const max = this.maxPrice();
    const amenity = this.amenity();
    const result = this.apartments().filter(
      (a) =>
        (!q ||
          `${a.title} ${a.description} ${a.building} ${a.location}`
            .toLowerCase()
            .includes(q)) &&
        (!loc || a.location.toLowerCase().includes(loc)) &&
        (!amenity || a.amenities.includes(amenity)) &&
        (min === null || a.price >= min) &&
        (max === null || a.price <= max),
    );
    return [...result].sort((a, b) =>
      this.sort() === "priceAsc"
        ? a.price - b.price
        : this.sort() === "priceDesc"
          ? b.price - a.price
          : b.createdAt.localeCompare(a.createdAt),
    );
  });
  readonly pageCount = computed(() =>
    Math.max(1, Math.ceil(this.filtered().length / this.pageSize)),
  );
  readonly paged = computed(() =>
    this.filtered().slice(
      (this.page() - 1) * this.pageSize,
      this.page() * this.pageSize,
    ),
  );

  setSearch(value: string): void {
    this.search.set(value);
    this.page.set(1);
  }
  setLocation(value: string): void {
    this.location.set(value);
    this.page.set(1);
  }
  setAmenity(value: string): void {
    this.amenity.set(value);
    this.page.set(1);
  }
  setMinPrice(value: string): void {
    this.minPrice.set(value ? Number(value) : null);
    this.page.set(1);
  }
  setMaxPrice(value: string): void {
    this.maxPrice.set(value ? Number(value) : null);
    this.page.set(1);
  }
  setSort(value: string): void {
    this.sort.set(value as "newest" | "priceAsc" | "priceDesc");
    this.page.set(1);
  }
  toggleFavourite(id: string): void {
    this.apartmentService.toggleFavourite(id);
  }
  isFavourite(id: string): boolean {
    return this.apartmentService.isFavourite(id);
  }
  previousPage(): void {
    this.page.update((p) => Math.max(1, p - 1));
  }
  nextPage(): void {
    this.page.update((p) => Math.min(this.pageCount(), p + 1));
  }
  previousFeatured(): void {
    this.featuredIndex.update((i) => Math.max(0, i - 1));
  }
  nextFeatured(): void {
    this.featuredIndex.update((i) =>
      Math.min(Math.max(0, this.featured().length - 1), i + 1),
    );
  }
  trackById(_: number, item: Apartment): string {
    return item.id;
  }
}
