import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
} from "@angular/core";
import { CurrencyPipe } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { ApartmentService } from "../../core/services/apartment.service";
import { AuthService } from "../../core/services/auth.service";
import { InquiryService } from "../../core/services/inquiry.service";
import { CommunicationModule } from "../communication/communication.module";

@Component({
  selector: "app-listing-details",
  standalone: true,
  imports: [CurrencyPipe, FormsModule, RouterLink, CommunicationModule],
  templateUrl: "./listing-details.html",
  styleUrl: "./listing-details.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListingDetailsComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly apartments = inject(ApartmentService);
  readonly auth = inject(AuthService);
  private readonly inquiry = inject(InquiryService);
  readonly id = this.route.snapshot.paramMap.get("id") ?? "";
  readonly apartment = computed(() => this.apartments.getById(this.id));
  readonly isFavourite = computed(() =>
    this.apartment() ? this.apartments.isFavourite(this.id) : false,
  );
  readonly inquiryOpen = signal(false);
  inquiryText = "";
  readonly inquirySent = signal(false);
  toggleFavourite(): void {
    this.apartments.toggleFavourite(this.id);
  }
  sendInquiry(): void {
    const apartment = this.apartment();
    if (!apartment || !this.inquiryText.trim()) return;
    this.inquirySent.set(
      this.inquiry.send(
        apartment.id,
        apartment.title,
        apartment.landlordId,
        apartment.landlordName,
        this.inquiryText,
      ),
    );
    if (this.inquirySent()) {
      this.inquiryText = "";
      this.inquiryOpen.set(false);
    }
  }
}
