RentHub 🏠

A seamless, user-friendly digital platform for apartment rentals. RentHub allows landlords to publish available apartments and enables prospective renters to discover properties based on their preferences, save favourites, and directly communicate with landlords.

📌 Project Overview

RentHub is a frontend-based apartment rental platform developed as part of an application assignment.

The application provides two primary user experiences:

Landlords can create and manage apartment listings with property details, amenities, pricing, location, and photos.
Renters can browse available apartments, search and filter listings, view detailed property information, favourite properties, and send direct inquiries to landlords.

Since the assignment does not provide a backend/API specification, the application uses browser localStorage as a mock persistence layer. This keeps the application fully functional without requiring a backend server and allows the data layer to be replaced with real APIs later without changing the core feature contracts.

✨ Features
🔐 Authentication & Authorization
User registration.
User login and logout.
Route protection for authenticated pages.
Demo accounts for both landlord and renter roles.
User session persistence using browser localStorage/SessionStorage.
Role-based application behaviour.
🏠 Home / Property Listing
Featured property carousel.
Paginated apartment listings.
Property search.
Location-based filtering.
Price-based filtering.
Sorting options.
Quick View Details action.
Favourite/unfavourite properties.
Responsive property cards.
Empty-state handling when no properties match the search/filter criteria.
🔎 Property Details

Each property details page provides:

Property photos.
Property title and description.
Rental price.
Location information.
Property information.
Amenities.
Landlord/contact information.
Favourite action.
Comments.
Replies to comments.
Direct inquiry/contact functionality.
❤️ Favourites
Renters can favourite properties.
Favourite state is persisted using localStorage.
Users can easily identify and manage properties they are interested in.
💬 Communication & Direct Inquiries
Send inquiries directly to landlords.
View received inquiries.
View sent inquiries.
Communication/messages page.
Inquiry data persisted through the mock localStorage data layer.
🏢 Landlord — Create Property

Landlords can create new apartment listings with:

Property title.
Description.
Rental price.
Location.
Property information.
Amenities.
Contact information.
Property photos.
Required field validation.
Form validation before submission.
👀 Preview & Submit

The property creation flow includes the bonus Preview and Submit functionality.

The flow allows landlords to:

Enter property information.
Validate the form with Angular for validation.
Preview the complete property before submission. (Bonus Impelementation)
Edit the property while preserving entered data.  (Bonus Impelementation)
Go back to the home screen.
Submit the final listing.
👤 Profile

The profile page displays:

Registered user's basic account information.
User information.
User's property posts.
Relevant landlord/renter information based on the account.
💭 Comments & Replies
Users can add comments to property details.
Users can reply to existing comments.
Comment and reply data is persisted using localStorage.
Posted comment and replies can be seen in the Communication (Messages) Page.
🧪 Unit Testing

The project includes tests covering:

Home component — home.spec.ts
Apartment service — apartment.service.spec.ts
Communication NgModule-based feature — communication.module.spec.ts

The Communication feature intentionally demonstrates an NgModule-based Angular component, while the main application primarily uses Angular standalone components.

🛠️ Technology Stack
Angular 22.1.x
TypeScript 6.0.x
Node.js 24.x
Vitest 4.x — unit testing
RxJS 7.8.x
Bootstrap 5.3.x
HTML5 / CSS
Angular Router
Angular Forms
Browser localStorage — mock persistence layer

Recommended/required Node.js version: 24.x

It is recommended to use the latest stable Node.js 24 release compatible with the project dependencies.


⚡ Modern Angular Features & Practices
- Angular 22 — built using the latest major Angular version used by the project.
- Standalone Components — the main application uses Angular's standalone component architecture.
- Angular Signals — reactive state management is used where applicable.
- Modern Angular Control Flow — modern template syntax such as @if and @for is used where applicable.
- Angular Router — provides application navigation and protected routes.
- Angular Forms — handles form state, validation, and user input.
- Angular Dependency Injection — keeps application logic modular and reusable.
- TypeScript 6 — provides type-safe development.
- Vitest 4 — modern unit-testing framework used instead of the traditional Karma-based setup.
- RxJS 7 — supports reactive programming and asynchronous operations.


📋 Prerequisites

Before running the project, make sure the following are installed:

Node.js 24.x
npm
Git

Verify the installed versions:

node --version
npm --version


Example:

v24.x.x

🚀 Getting Started
1. Clone the repository
git clone <GITHUB_REPOSITORY_URL>

2. Navigate to the project
cd renthub

3. Install dependencies
npm install

4. Start the development server
npm start


The application will be available at:

http://localhost:4200


If your Angular configuration uses a different port, use the URL displayed in the terminal.

🏗️ Build

To create a production build:

npm run build


The generated production files will be available in the Angular build output directory configured by the project.

🧪 Run Tests

Run the complete test suite with:

npm test


The test suite includes coverage for the requested component, service, and NgModule-based communication feature.

Relevant test files include:

home.spec.ts
apartment.service.spec.ts
communication.module.spec.ts

🔑 Demo Credentials
Landlord Account
Email: landlord@renthub.com
Password: Demo@123

Renter Account
Email: renter@renthub.com
Password: Demo@123


You can also create a new account through the Register screen.

👥 User Roles
Landlord

A landlord can:

Log in/register.
Create apartment listings.
Add property information and photos.
Preview a listing before submission.
Edit listing information before submission.
View their property posts.
Receive inquiries from renters.
Respond to prospective renters.
Renter

A renter can:

Log in/register.
Browse available properties.
Search properties.
Filter by location and price.
Sort listings.
View property details.
Favourite properties.
Comment on properties.
Reply to comments.
Send direct inquiries to landlords.
View sent and received communications.
💾 Data Persistence

This project does not depend on a backend or external API.

For the purpose of this frontend assignment, the following application data is persisted using browser localStorage:

Authentication/session information.
Registered users.
Apartment listings.
Favourites.
Comments.
Replies.
Direct inquiries/messages.

This approach makes the project fully runnable as a standalone frontend application.

Future API Integration

The localStorage implementation is intentionally isolated behind application services/data contracts so that it can be replaced with a real backend/API.

A future backend could provide:

User authentication.
JWT/session-based authorization.
Apartment CRUD APIs.
Image/file storage.
Favourite APIs.
Comment/reply APIs.
Inquiry/message APIs.
Server-side filtering and pagination.

The UI feature contracts can remain largely unchanged while replacing the underlying persistence implementation.

🧩 Application Architecture

The application primarily uses Angular standalone components and Angular's routing and dependency-injection mechanisms.

The project also intentionally contains an NgModule-based Communication feature to satisfy the assignment requirement for demonstrating and testing an NgModule-based feature.

Main areas
Authentication
├── Login
├── Register
└── Route Protection

Property Management
├── Home
├── Property Listing
├── Property Details
└── Create/Edit Property

User Features
├── Profile
├── Favourites
└── Communication

Communication
├── Direct Inquiries
├── Comments
└── Replies

Data Layer
└── localStorage-based services

🔄 Property Creation Flow

The landlord property creation process follows this flow:

Create New Post
       ↓
Enter Property Details
       ↓
Form Validation
       ↓
Preview
       ↓
Edit (optional)
       ↓
Submit
       ↓
Property Listing


The Edit functionality preserves the entered information, allowing the landlord to make changes without losing previously entered data.

📱 Responsive Design

The application is designed to provide a user-friendly experience across common screen sizes, including:

Desktop.
Laptop.
Tablet.
Mobile devices.
✅ Assignment Requirements Coverage
Requirement	Status
User registration	✅ Implemented
User login	✅ Implemented
Route protection	✅ Implemented
Featured carousel	✅ Implemented
Paginated listings	✅ Implemented
Property search	✅ Implemented
Location filtering	✅ Implemented
Price filtering	✅ Implemented
Sorting	✅ Implemented
Quick View Details	✅ Implemented
Favourite action	✅ Implemented
Direct inquiries	✅ Implemented
Property details	✅ Implemented
Property photos	✅ Implemented
Rental/property information	✅ Implemented
Contact information	✅ Implemented
Amenities	✅ Implemented
Comments	✅ Implemented
Replies	✅ Implemented
Landlord post creation	✅ Implemented
Required field validation	✅ Implemented
Preview and Submit	✅ Implemented
Edit with preserved data	✅ Implemented
Back to Home	✅ Implemented
Profile page	✅ Implemented
User's posts	✅ Implemented
Received inquiries	✅ Implemented
Sent inquiries	✅ Implemented
Component unit test	✅ Implemented
Service unit test	✅ Implemented
NgModule-based feature test	✅ Implemented
🧪 Testing Details

The project includes unit tests for the requested areas:

Home Component
home.spec.ts


Tests the Home component and its relevant listing behaviour.

Apartment Service
apartment.service.spec.ts


Tests apartment-related service functionality and the application's property data layer.

Communication Module
communication.module.spec.ts


Tests the NgModule-based Communication feature as required by the assignment.

Run all tests using:

npm test

📂 Project Structure

A simplified structure of the application is:

src/
├── app/
│   ├── authentication/
│   ├── home/
│   ├── apartment/
│   ├── profile/
│   ├── communication/
│   ├── shared/
│   ├── services/
│   ├── guards/
│   └── ...
├── assets/
├── styles.css
└── main.ts

package.json
angular.json
tsconfig.json
README.md


The exact folder structure may vary based on the final project source.

🔒 Important Note About Demo Authentication

The authentication system is implemented for demonstration purposes using browser localStorage.

It is not intended for production authentication because passwords and session information should not be stored directly in browser storage in a production application.

For a production implementation, authentication should be handled through a secure backend using appropriate password hashing, token/session management, authorization, HTTPS, and secure cookie/storage practices.

🌐 Deployment

The assignment requires a deployed application link.

GitHub Repository
<GITHUB_REPOSITORY_URL>

Live Application
<DEPLOYED_APPLICATION_URL>


These links should be updated after the project is pushed to GitHub and deployed to the selected hosting platform.

Possible frontend hosting options include:

Vercel
Netlify
Firebase Hosting
GitHub Pages
AWS / Azure / other static hosting providers
⚙️ Environment Configuration

The current application does not require external API keys or backend environment variables because it uses browser localStorage for persistence.

If a backend is introduced later, environment configuration can be added for values such as:

API_BASE_URL
AUTH_API_URL
IMAGE_STORAGE_URL

📝 Implementation Notes
The application is implemented as a frontend-only assignment.
No external backend/API is required to run the current application.
localStorage is used as a mock data persistence mechanism.
The application is designed so that the mock data layer can be replaced with real API services.
The main application uses Angular standalone components.
The Communication feature intentionally uses an NgModule-based implementation to demonstrate the requested Angular architecture.
Form validation is applied to required property fields.
Property creation includes the bonus Preview → Edit → Submit flow.
Demo credentials are provided for quick evaluation.
The project is intended to run with Node.js 24.x.
🚧 Known Limitations

Because this is a frontend assignment without a supplied backend:

Data is stored locally in the browser.
Data is not synchronized between different browsers/devices.
Authentication is mock/demo authentication.
Images are handled according to the frontend implementation and are not backed by a production file-storage service.
Direct inquiries are simulated through local persistence.
Clearing browser storage will remove the locally persisted application data.

These limitations can be addressed by connecting the application to a production backend/API.

🔮 Future Enhancements

Potential future improvements include:

Real backend/API integration.
Secure authentication and authorization.
JWT or session-based authentication.
Cloud image/file storage.
Real-time messaging.
Email notifications for inquiries.
Advanced property search.
Map-based property discovery.
Geolocation-based search.
Saved searches and notifications.
Landlord dashboard with listing analytics.
Renter dashboard.
Server-side pagination/filtering.
Production-grade error logging.
End-to-end testing.
CI/CD pipeline.
📄 Assignment Deliverables

The completed project contains the requested application functionality and automated tests.

The following external deliverables need to be added after deployment:

GitHub Repository: <GITHUB_REPOSITORY_URL>
Deployed Application: <DEPLOYED_APPLICATION_URL>

These cannot be generated from the source package alone because they require access to the target GitHub repository and hosting account.

👨‍💻 Running the Project — Quick Reference
# Install dependencies
npm install

# Start development server
npm start

# Build production application
npm run build

# Run unit tests
npm test

Requirements
Node.js: 24.x
npm: Compatible version bundled with Node.js 24
Browser: Modern web browser

📌 Summary

RentHub provides a complete frontend apartment-rental experience covering authentication, property discovery, filtering, favourites, detailed property information, landlord listing creation, validation, preview and submission, user profiles, comments/replies, and direct inquiries.

The project is fully runnable without a backend by using localStorage as a mock persistence layer, while maintaining a service-oriented structure that can be extended to support real APIs in the future.

Status: ✅ Assignment features implemented
Bonus: ✅ Preview & Submit flow implemented
Testing: ✅ Component, service, and NgModule-based tests included
Node.js: ✅ 24.x