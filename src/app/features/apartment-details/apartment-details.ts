import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
} from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { ApartmentService } from "../../core/services/apartment.service";
import { AuthService } from "../../core/services/auth.service";
import { InquiryService } from "../../core/services/inquiry.service";
import { CommunicationModule } from "../communication/communication.module";
import { ApartmentDetailsAmenities } from "./apartment-details-amenities/apartment-details-amenities";
import { ApartmentDetailsHeader } from "./apartment-details-header/apartment-details-header";
import { ApartmentDetailsPictures } from "./apartment-details-pictures/apartment-details-pictures";
import { ApartmentDetailsAboutProperty } from "./apartment-details-about-property/apartment-details-about-property";
import { ApartmentDetailsRentalDetails } from "./apartment-details-rental-details/apartment-details-rental-details";
import { ApartmentDetailsContactInquiry } from "./apartment-details-contact-inquiry/apartment-details-contact-inquiry";

@Component({
  selector: "app-apartment-details",
  standalone: true,
  imports: [
    FormsModule,
    RouterLink,
    ApartmentDetailsHeader,
    ApartmentDetailsPictures,
    ApartmentDetailsRentalDetails,
    ApartmentDetailsAboutProperty,
    ApartmentDetailsAmenities,
    ApartmentDetailsContactInquiry,
    CommunicationModule,
  ],
  templateUrl: "./apartment-details.html",
  styleUrl: "./apartment-details.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApartmentDetailsComponent {
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
  sendInquiry(payload: any) {
    this.inquiry.send(
      payload.apartmentId,
      payload.apartmentTitle,
      payload.landlordId,
      payload.landlordName,
      payload.message,
    );
  }
}
