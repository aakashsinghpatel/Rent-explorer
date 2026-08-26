import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from "@angular/core";
import { CurrencyPipe } from "@angular/common";
import { Router, RouterLink } from "@angular/router";
import { ApartmentDraft } from "../../core/models/apartment.model";
import { ApartmentService } from "../../core/services/apartment.service";

const DRAFT_KEY = "rentHubPostPreview";

@Component({
  selector: "app-create-post-preview",
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: "./create-post-preview.html",
  styleUrl: "./create-post-preview.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreatePostPreviewComponent {
  private readonly router = inject(Router);
  private readonly apartments = inject(ApartmentService);
  readonly data = signal<ApartmentDraft | null>(this.read());
  private read(): ApartmentDraft | null {
    const raw = sessionStorage.getItem(DRAFT_KEY);
    if (!raw) {
      queueMicrotask(() => this.router.navigate(["/create-post"]));
      return null;
    }
    try {
      return JSON.parse(raw) as ApartmentDraft;
    } catch {
      return null;
    }
  }
  edit(): void {
    this.router.navigate(["/create-post"]);
  }
  back(): void {
    sessionStorage.removeItem(DRAFT_KEY);
    this.router.navigate(["/home"]);
  }
  submit(): void {
    const data = this.data();
    if (!data) return;
    this.apartments.addApartment(data);
    sessionStorage.removeItem(DRAFT_KEY);
    this.router.navigate(["/home"]);
  }
}
