import { Routes } from "@angular/router";
import { authGuard, landLordGuard } from "./core/guards/auth.guard";

export const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "home",
  },
  {
    path: "home",
    loadComponent: () =>
      import("./features/home/home").then((m) => m.HomeComponent),
  },
  {
    path: "login",
    loadComponent: () =>
      import("./features/auth/login/login").then((m) => m.LoginComponent),
  },
  {
    path: "register",
    loadComponent: () =>
      import("./features/auth/register/register").then(
        (m) => m.RegisterComponent,
      ),
  },
  {
    path: "listing/:id",
    loadComponent: () =>
      import("./features/apartment-details/apartment-details").then(
        (m) => m.ApartmentDetailsComponent,
      ),
  },
  {
    path: "create-post",
    canActivate: [authGuard, landLordGuard],
    loadComponent: () =>
      import("./features/create-post/create-post").then(
        (m) => m.CreatePostComponent,
      ),
  },
  {
    path: "create-post/preview",
    canActivate: [authGuard, landLordGuard],
    loadComponent: () =>
      import("./features/create-post-preview/create-post-preview").then(
        (m) => m.CreatePostPreviewComponent,
      ),
  },
  {
    path: "profile",
    canActivate: [authGuard],
    loadComponent: () =>
      import("./features/profile/profile").then((m) => m.ProfileComponent),
  },
  {
    path: "communication",
    canActivate: [authGuard],
    loadComponent: () =>
      import("./features/communication/communication").then(
        (m) => m.CommunicationComponent,
      ),
  },
  { path: "**", redirectTo: "home" },
];
