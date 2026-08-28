# RentHub 🏠

A seamless, user-friendly digital platform for apartment rentals. RentHub enables landlords to publish rental properties and allows prospective renters to discover, filter, favourite, and inquire about available apartments.

## 📌 Project Overview

RentHub is a frontend-based apartment rental platform developed as part of an application assignment.

The application provides two primary user experiences:

Landlords can create and manage apartment listings with property details, amenities, pricing, location, and photos.
Renters can browse available apartments, search and filter listings, view detailed property information, favourite properties, and send direct inquiries to landlords.

Since the assignment does not provide a backend/API specification, the application uses browser web storage as a mock persistence layer. This keeps the application fully functional without requiring a backend server and allows the data layer to be replaced with real APIs later without changing the core feature contracts.

## 🔗 Project Links
- GitHub Repository: `<GITHUB_REPOSITORY_URL>`
- Live Application: `<DEPLOYED_APPLICATION_URL>`

## ✨ Key Features
### 🔐 Authentication & Authorization
- User registration and login.
- Logout and protected routes.
- Landlord and renter roles.
- Session/ Local persistence using browser storage.
### 🏠 Property Discovery
- Featured property carousel.
- Paginated apartment listings.
- Property search.
- Location and price filtering.
- Sorting.
- Favourite/unfavourite functionality.
- Responsive property cards.
- Empty-state handling.
### 🔎 Property Details
- Property photos and information.
- Rental price and location.
- Amenities.
- Landlord/contact information.
- Comments and replies.
- Direct inquiry functionality.
### 🏢 Landlord Features
- Create apartment listings.
- Required field validation.
- Add property details, amenities, contact information, and photos.
- Preview → Edit → Submit workflow. `(Bonus Implementation)`
- View personal property posts.
### 💬 Communication
- Send direct inquiries to landlords.
- View sent and received inquiries.
- Property comments and replies.
- Communication data persisted locally.
### 👤 Profile
- View registered user information.
- View user's property posts.
### 📱 Responsive Design
- The application is designed to provide a consistent and user-friendly experience across different screen sizes and devices, including:
* 1. Desktop *
* 2. Laptop *
* 3. Tablet *
* 4. Mobile *

The UI adapts layouts, property cards, navigation, forms, and content sections to provide a responsive experience across supported screen sizes.

### ⚡ Modern Angular Features & Practices
- Standalone Components for the main application.
- Angular Signals where applicable for reactive state management.
- Modern Angular Control Flow such as @if / @for where applicable.
- Angular Router and route guards.
- Angular Forms and validation.
- Angular Dependency Injection.
- TypeScript 6.
- RxJS 7.
- Vitest 4 for unit testing.

The Communication feature intentionally includes an NgModule-based implementation to satisfy the assignment requirement.

### 🛠️ Technology Stack
| Technology     |	Version    |
|----------------|-------------|
| Angular	     |  22.1.x     | 
| TypeScript	 |  6.0.x      |
| Node.js	     |  24.x       |
| Vitest	     |  4.x        |
| RxJS	         |  7.8.x      |
| Bootstrap	     |  5.3.x      |
| Persistence	 | Web Storage |


## 📝 Requirements covered
- User registration and login with route protection.
- Home screen with featured carousel, paginated listings, search, location/price filters, sorting, quick View Details and Favourite actions.
- Interest expression through favourites and direct inquiries.
- Details Property Information with photos, rental/property information, contact information, amenities, comments and replies.
- Allow Landlord's  to create New Post with the with all neccessary details and photos and having required validation on field to collect the rigth information.
- Preview and Submit flow, including Edit with data preserved and Back to Home. `(Bonus Implementation)`
- Profile page showing the registered user's basic account information and their posts.
- Communication/Messages page showing received and sent direct inquiries.
- Unit tests for a component `(home.spec.ts)`, service `(apartment.service.spec.ts)` and NgModule-based `(communication.module.spec.ts)` communication feature.

## 📂 Project Structure 
```bash
src/
├── app/
|   ├── app.html
|   ├── app.scss
|   ├── app.ts
|   ├── app.routes.ts
|   ├── core/
|   |   ├── guards/
|   |   |   └── auth.guard.ts 
|   |   ├── services/
|   |   |   ├── apartment.service.ts
|   |   |   ├── apartment.service.spec.ts
|   |   |   ├── auth.service.ts
|   |   |   ├── comment.service.ts
|   |   |   └── inquiry.service.ts
|   |   ├── models/
|   |   |   ├── apartment.model.ts
|   |   |   ├── comment.model.ts
|   |   |   ├── inquiry.model.ts
|   |   |   └── user.model.ts
|   ├── features/
|   |   ├── apartment-details/
|   |   |   ├── apartment-details.html
|   |   |   ├── apartment-details.scss
|   |   |   ├── apartment-details.ts
|   |   |   |   ├── apartment-details-about-property
|   |   |   |   |   ├── apartment-details-about-property.html
|   |   |   |   |   ├── apartment-details-about-property.scss
|   |   |   |   |   └── apartment-details-about-property.ts
|   |   |   |   ├── apartment-details-amenities
|   |   |   |   |   ├── apartment-details-amenities.html
|   |   |   |   |   ├── apartment-details-amenities.scss
|   |   |   |   |   └── apartment-details-amenities.ts
|   |   |   |   ├── apartment-details-comment-panel
|   |   |   |   |   ├── apartment-details-comment-panel.html
|   |   |   |   |   ├── apartment-details-comment-panel.scss
|   |   |   |   |   └── apartment-details-comment-panel.ts
|   |   |   |   ├── apartment-details-contact-inquiry
|   |   |   |   |   ├── apartment-details-contact-inquiry.html
|   |   |   |   |   ├── apartment-details-contact-inquiry.scss
|   |   |   |   |   └── apartment-details-contact-inquiry.ts
|   |   |   |   ├── apartment-details-header
|   |   |   |   |   ├── apartment-details-header.html
|   |   |   |   |   ├── apartment-details-header.scss
|   |   |   |   |   └── apartment-details-header.ts
|   |   |   |   ├── apartment-details-pictures
|   |   |   |   |   ├── apartment-details-pictures.html
|   |   |   |   |   ├── apartment-details-pictures.scss
|   |   |   |   |   └── apartment-details-pictures.ts
|   |   |   |   └── apartment-details-rental-details
|   |   |   |   |   ├── apartment-details-rental-details.html
|   |   |   |   |   ├── apartment-details-rental-details.scss
|   |   |   |   |   └── apartment-details-rental-details.ts
|   |   ├── auth/
|   |   |   ├── login
|   |   |   |   ├── login.html
|   |   |   |   ├── login.scss
|   |   |   |   └── login.ts
|   |   |   ├── register
|   |   |   |   ├── register.html
|   |   |   |   ├── register.scss
|   |   |   |   └── register.ts
|   |   |   └──auth.scss
|   |   ├── communication/
|   |   |   ├── communication.html
|   |   |   ├── communication.scss
|   |   |   ├── communication.ts
|   |   |   ├── communication.module.ts
|   |   |   └── communication.module.spec.ts
|   |   ├── create-post/
|   |   |   ├── create-post.html
|   |   |   ├── create-post.scss
|   |   |   └── create-post.ts
|   |   ├── create-post-preview/
|   |   |   ├── create-post-preview.html
|   |   |   ├── create-post-preview.scss
|   |   |   └── create-post-preview.ts
|   |   ├── home/
|   |   |   ├── featured-listing/
|   |   |   |   ├── featured-listing.html
|   |   |   |   ├── featured-listing.scss
|   |   |   |   └── featured-listing.ts
|   |   |   ├── filter-controls/
|   |   |   |   ├── filter-controls.html
|   |   |   |   ├── filter-controls.scss
|   |   |   |   └── filter-controls.ts
|   |   |   ├── listing-card/
|   |   |   |   ├── listing-card.html
|   |   |   |   ├── listing-card.scss
|   |   |   |   └── listing-card.ts
|   |   |   ├── home.html
|   |   |   ├── home.scss
|   |   |   └── home.ts
|   |   └── profile/
|   |   |   ├── profile.html 
|   |   |   ├── profile.scss
|   |   |   └── profile.ts
├── assets/
├── styles.css
└── main.ts
├── index.html
├── angular.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.spec.json
└── package.json
```

## ⚙️ Setup Instructions 
### Requirements
    Node.js: 24.x
    npm: Compatible version bundled with Node.js 24
    Browser: Modern web browser

** 1. clone the repo: **
```bash 
git clone https://github.com/aakashsinghpatel/Rent-explorer.git
```

* 2. Install all `npm` dependancies: *
```bash 
cd Rent-explorer
npm install
```
* 3. Start development server *
```bash 
npm start
```
* 4. Build production application *
```bash
npm run build
```
* 5. Run unit tests *
```bash
npm test
```
### 🔑  Demo credentials
** Landlord's Credentials: **
```bash
- Email: `landlord@renthub.com`
- Password: `Demo@123`
```
** Renter's Credentials: **
```bash
- Email: `renter@renthub.com`
- Password: `Demo@123`
```


