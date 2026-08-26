# RentHub implementation notes

## Requirement traceability

| Assignment requirement | Implementation |
|---|---|
| Registration and authentication | `features/auth/*`, `core/services/auth.service.ts` |
| Authorized posting/comments | `core/guards/auth.guard.ts`, auth checks in comment/inquiry UI and services |
| Apartment listings | `core/models/apartment.model.ts`, `core/services/apartment.service.ts` |
| Home featured carousel | `features/home/home.*` |
| Paginated listings | `features/home/home.ts` |
| Search | Home search control |
| Location filter | Home location control |
| Price range filter | Home min/max rent controls |
| Amenities filter | Home amenity control |
| Sorting | Home sort control |
| Favourite action | `ApartmentService.toggleFavourite()` |
| Listing details | `features/listing-details/*` |
| Direct inquiry | `core/services/inquiry.service.ts`, listing details |
| Comments | `CommentService`, `CommunicationPanel` |
| Replies | `Comment.parentId` and reply UI |
| Profile | `features/profile/*` |
| Communication | `features/communication/communication.*` |
| Create post | `features/create-post/*` |
| Validation | Angular Reactive Forms validators |
| Preview and submit | `features/create-post-preview/*` |
| Edit preview | sessionStorage draft restoration |
| Back to Home | preview clears draft and navigates home |
| Unit test: component | `home.spec.ts` |
| Unit test: service | `apartment.service.spec.ts` |
| Unit test: module | `communication.module.spec.ts` |
| CSS library | Bootstrap 5 |
| Standalone Angular app | Root/features use standalone components |
| NgModule exposure | Communication comment component uses `CommunicationModule` |
