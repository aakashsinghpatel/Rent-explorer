import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { RouterLink } from "@angular/router";
import { AuthService } from "../../core/services/auth.service";
import { ApartmentService } from "../../core/services/apartment.service";

@Component({
  selector: "app-profile",
  standalone: true,
  imports: [RouterLink],
  templateUrl: "./profile.html",
  styleUrl: "./profile.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent {
  readonly auth = inject(AuthService);
  readonly apartments = inject(ApartmentService);
  readonly myListings = () => {
    const user = this.auth.currentUser();
    return user
      ? this.apartments.apartments().filter((a) => a.landlordId === user.id)
      : [];
  };
}
