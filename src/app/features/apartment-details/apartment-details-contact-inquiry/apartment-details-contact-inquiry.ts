import { Component, input, output, signal } from "@angular/core";
import { Apartment } from "../../../core/models/apartment.model";
import { FormsModule } from "@angular/forms";

@Component({
  imports: [FormsModule],
  selector: "app-apartment-details-contact-inquiry",
  styleUrl: "./apartment-details-contact-inquiry.scss",
  templateUrl: "./apartment-details-contact-inquiry.html",
})
export class ApartmentDetailsContactInquiry {
  apartment = input.required<Apartment>();
  onSendInquiry = output<any>();
  isAuthenticated = input.required<boolean>();

  readonly inquiryOpen = signal(false);
  inquiryText = "";
  readonly inquirySent = signal(false);

  sendInquiry(): void {
    const apartment: Apartment = this.apartment();
    if (!apartment || !this.inquiryText.trim()) return;
    this.onSendInquiry.emit({
      apartmentId: apartment.id,
      apartmentTitle: apartment.title,
      landlordId: apartment.landlordId,
      landlordName: apartment.landlordName,
      message: this.inquiryText,
    });
    this.inquirySent.set(true);
    if (this.inquirySent()) {
      this.inquiryText = "";
      this.inquiryOpen.set(false);
    }
  }
}
