import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { Router, RouterLink } from "@angular/router";
import { AuthService } from "../../../core/services/auth.service";
import { UserRole } from "../../../core/models/user.model";

@Component({
  selector: "app-register",
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: "./register.html",
  styleUrl: "../auth.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent {
  private readonly fb = inject(FormBuilder);
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);
  submitted = false;
  error = "";
  readonly form = this.fb.nonNullable.group({
    name: ["", [Validators.required, Validators.minLength(2)]],
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required, Validators.minLength(6)]],
    role: ["", [Validators.required, ]],
  });

  submit(): void {
    this.submitted = true;
    this.error = "";
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const result = this.auth.register(
      ...(Object.values(this.form.getRawValue()) as [string, string, string, UserRole]),
    );
    if (!result.success) {
      this.error = result.message ?? "Registration failed.";
      return;
    }
    this.router.navigate(["/home"]);
  }
}
