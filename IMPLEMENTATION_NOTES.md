# RentHub implementation notes

## Requirement traceability

| Assignment requirement | Implementation |
|---|---|
| Registration and authentication | `features/auth/*`, `core/services/auth.service.ts` |
| Authorized posting/comments | `core/guards/auth.guard.ts`, auth checks in comment/inquiry UI and services |
| Apartment listings | `core/models/apartment.model.ts`, `core/services/apartment.service.ts` |
| Home featured carousel | `features/home/featured-listing/featured-listing.ts` |
| Paginated listings | `features/home/home.ts` |
| Search | Home search control `features/home/filter-control/filter-control.ts` |
| Location filter | Home location control `features/home/filter-control/filter-control.ts` |
| Price range filter | Home min/max rent controls `features/home/filter-control/filter-control.ts` |
| Amenities filter | Home amenity control `features/home/filter-control/filter-control.ts` |
| Sorting | Home sort control `features/home/filter-control/filter-control.ts` |
| Favourite action | `ApartmentService.toggleFavourite()` |
| Apartment/Listing details | `features/apartment-details/*` |
| Direct inquiry | `core/services/inquiry.service.ts` |
| Comments | `CommentService`, `features/apartment-details/apartment-details-comment-panel/apartment-details-comment-panel.*` |
| Replies | `Comment.parentId` and reply UI |
| Profile | `features/profile/*` |
| Communication | `features/communication/communication.*` |
| Create post | `features/create-post/*` |
| Validation | Angular Reactive Forms validators |
| Preview and submit (Bonus Implementation) | `features/create-post-preview/*` |
| Edit preview (Bonus Implementation) | sessionStorage draft restoration |
| Back to Home | preview clears draft and navigates home |
| Unit test: component | `home.spec.ts` |
| Unit test: service | `apartment.service.spec.ts` |
| Unit test: module | `communication.module.spec.ts` |
| CSS library | Bootstrap 5 |
| Standalone Angular app | Root/features use standalone components |
| NgModule exposure | Communication component uses `CommunicationModule` |
