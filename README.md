# RentHub

Angular assignment implementation for an apartment-rental platform.

## Requirements covered

- User registration and login with route protection.
- Home screen with featured carousel, paginated listings, search, location/price filters, sorting, quick View Details and Favourite actions.
- Interest expression through favourites and direct inquiries.
- Listing details with photos, rental/property information, contact information, amenities, comments and replies.
- Create New Post with the fields shown in the assignment wireframe, validation, amenities checkboxes and vegetarian-preference radio buttons.
- Preview and Submit flow, including Edit with data preserved and Back to Home.
- Profile page showing the registered user's basic account information and their posts.
- Communication page showing received and sent direct inquiries.
- Unit tests for a component, service and NgModule-based communication feature.

## Implementation notes

The assignment does not specify a backend/API. To keep the application fully runnable as a frontend assignment, authentication, listings, favourites, comments and inquiries use browser localStorage as the persistence layer. This is a mock frontend data layer and can be replaced by API services without changing the feature contracts.

The main application uses standalone Angular components. A small `CommunicationModule` intentionally contains the comment/reply component so the project also demonstrates and tests an NgModule-based component as requested in the assignment deliverables.

## Demo credentials

- Email: `demo@renthub.com`
- Password: `Demo@123`

A new account can also be registered from the Register screen.

## Commands

```bash
npm install
npm start
```

Build:

```bash
npm run build
```

Tests:

```bash
npm test
```

## Assignment deliverables still requiring external setup

The assignment asks for a GitHub repository link and a deployed application link. Those cannot be created from this source package without access to the target GitHub/hosting accounts, so they should be added to this README after deployment.

## Bonus

Preview and Submit is implemented, including Edit and Back functionality.
