import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  signal,
} from "@angular/core";
import {
  FormArray,
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { Apartment } from "../../core/models/apartment.model";
import { AuthService } from "../../core/services/auth.service";
import { IMAGE_1 } from "../../core/services/apartment.service";

const DRAFT_KEY = "rentHubPostPreview";

@Component({
  selector: "app-create-post",
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: "./create-post.html",
  styleUrl: "./create-post.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreatePostComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);
  private readonly auth = inject(AuthService);
  submitted = false;
  selectedImages = signal<string[]>([]);
  readonly amenityOptions = [
    "Gym/Fitness Center",
    "Swimming Pool",
    "Car Parking",
    "Visitor Parking",
    "Power Backup",
    "Shopping Disposal",
    "Private Lawn",
    "Water Heater",
    "Plant Security System",
    "Laundry Service",
    "Elevator",
    "Club House",
  ];
  readonly buildingOptions = [
    "Apartment",
    "Independent House",
    "Building",
    "Studio",
  ];
  readonly form = this.fb.nonNullable.group({
    building: ["Apartment", Validators.required],
    title: ["", [Validators.required, Validators.minLength(3)]],
    shared: [false],
    location: ["", Validators.required],
    squareFeet: [0, [Validators.required, Validators.min(1)]],
    leaseType: ["long-term" as Apartment["leaseType"], Validators.required],
    price: [0, [Validators.required, Validators.min(1)]],
    negotiable: [false],
    priceMode: ["per-month" as Apartment["priceMode"], Validators.required],
    furnished: [false, Validators.required],
    vegetarianPreference: [
      "not-preferred" as "preferred" | "not-preferred",
      Validators.required,
    ],
    landlordName: ["", Validators.required],
    landlordEmail: ["", [Validators.required, Validators.email]],
    amenities: this.fb.array(this.amenityOptions.map(() => false)),
    description: ["", [Validators.required, Validators.maxLength(1400)]],
  });

  get amenities(): FormArray {
    return this.form.controls.amenities;
  }

  ngOnInit(): void {
    const raw = sessionStorage.getItem(DRAFT_KEY);
    if (!raw) {
      const user = this.auth.currentUser();
      if (user)
        this.form.patchValue({
          landlordName: user.name,
          landlordEmail: user.email,
        });
      return;
    }
    try {
      const data = JSON.parse(raw) as Record<string, unknown>;
      this.form.patchValue({
        building: String(data["building"] ?? "Apartment"),
        title: String(data["title"] ?? ""),
        shared: Boolean(data["shared"]),
        location: String(data["location"] ?? ""),
        squareFeet: Number(data["squareFeet"] ?? 0),
        leaseType: (data["leaseType"] as Apartment["leaseType"]) ?? "long-term",
        price: Number(data["price"] ?? 0),
        negotiable: Boolean(data["negotiable"]),
        priceMode: (data["priceMode"] as Apartment["priceMode"]) ?? "per-month",
        furnished: Boolean(data["furnished"]),
        vegetarianPreference:
          (data["vegetarianPreference"] as "preferred" | "not-preferred") ??
          "not-preferred",
        landlordName: String(data["landlordName"] ?? ""),
        landlordEmail: String(data["landlordEmail"] ?? ""),
        description: String(data["description"] ?? ""),
      });
      this.selectedImages.set([...data['images'] as string[] ?? []]);
      const selected = Array.isArray(data["amenities"])
        ? (data["amenities"] as string[])
        : [];
      this.amenityOptions.forEach((name, index) =>
        this.amenities.at(index).setValue(selected.includes(name)),
      );
    } catch {
      sessionStorage.removeItem(DRAFT_KEY);
    }
  }

  onImagesSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) {
      return;
    }
    const files = Array.from(input.files);
    files.forEach((file) => {
      if (!file.type.startsWith("image/")) {
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === "string") {
          this.selectedImages.set([...this.selectedImages(), reader.result]);
        }
      };
      reader.readAsDataURL(file);``
    });
    input.value = "";
  }

  removeImage(index: number): void {
    this.selectedImages.set(this.selectedImages().filter((_, i) => i !== index));
  }

  submit(): void {
    this.submitted = true;
    const user = this.auth.currentUser();
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const raw = this.form.getRawValue();
    const draft = {
      ...raw,
      landlordName: user?.name,
      landlordEmail: user?.email,
      amenities: this.amenityOptions.filter((_, index) => raw.amenities[index]),
      images: this.selectedImages().length > 0 ? this.selectedImages() : [IMAGE_1],
    };
    sessionStorage.setItem(DRAFT_KEY, JSON.stringify(draft));
    this.router.navigate(["/create-post/preview"]);
  }

  reset(): void {
    sessionStorage.removeItem(DRAFT_KEY);
    this.form.reset({
      building: "Apartment",
      title: "",
      shared: false,
      location: "",
      squareFeet: 0,
      leaseType: "long-term",
      price: 0,
      negotiable: false,
      priceMode: "per-month",
      furnished: false,
      vegetarianPreference: "not-preferred",
      landlordName: this.auth.currentUser()?.name ?? "",
      landlordEmail: this.auth.currentUser()?.email ?? "",
      description: "",
    });
    this.amenities.controls.forEach((control) => control.setValue(false));
    this.submitted = false;
  }
}
