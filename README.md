# Amazon Clone (Vanilla JavaScript)

This is a large JavaScript-focused learning project that I built end-to-end as a serious engineering milestone.

I used HTML and CSS only as supporting tools for the UI, while the core focus of this project is JavaScript architecture, logic, async flows, testing, and maintainable code structure.

I did not treat this as a one-off demo. I built it incrementally across 48 commits, starting from a basic product grid and evolving it into a modular, testable app with async backend integration, object-oriented design, and automated tests.

I also practiced the same concepts in different ways across the project (for example: callbacks, Promises, and async/await; procedural and class-based approaches) to build deeper understanding, and I wrote personal notes during parts of that process.

This project is a foundation, and the next step is building more advanced production-level JavaScript projects.

## What I Built

- Dynamic product listing rendered from JavaScript modules
- Add to cart with quantity selection and cart badge updates
- Cart persistence with `localStorage`
- Checkout page with:
	- Order summary generation
	- Delivery option selection
	- Payment summary calculation
- Order creation flow using backend API (`fetch` + async/await)
- Orders and tracking pages
- Test coverage for utility logic, cart behavior, and order summary rendering

## Engineering Highlights

- Modular architecture (`data/`, `scripts/`, `styles/`) instead of one large script
- Refactoring core logic into reusable modules and classes
- OOP progression:
	- Procedural cart
	- OOP cart version
	- Class-based cart with encapsulation improvements
	- Product inheritance/polymorphism for clothing-specific behavior
- Async evolution:
	- Callbacks -> Promises -> `fetch` -> async/await
- Error handling added for network and async operations
- Jasmine test setup and incremental test suite growth

## Real Development Timeline (From Git History)

This repository reflects my actual implementation journey:

- Initial foundation: project scaffolding, product rendering, interactive cart
- Checkout phase: order summary, payment summary, delivery options, quantity updates
- Quality phase: formatting fixes, refactors, data persistence hardening
- Testing phase: utility tests, cart tests, order summary tests, Jasmine setup
- OOP phase: class design, inheritance, private implementation details
- Backend phase: XHR practice, API data loading, Promises, async/await, order creation

## Core Concepts Applied

This project demonstrates practical application of:

- JavaScript fundamentals and clean control flow for UI behavior
- DOM-driven rendering and event architecture for interactive pages
- Data modeling with objects, classes, inheritance, and polymorphism
- Modular design with clear separation between state, rendering, and utilities
- Automated testing with Jasmine for business logic and UI-related behavior
- Async data handling with callbacks, Promises, `fetch`, and async/await
- Error handling and user-safe fallbacks for network-dependent flows
- Git-based iterative development with meaningful checkpoint commits

## Project Structure

- `amazon.html`: main product listing page
- `checkout.html`: checkout flow
- `orders.html`: order history page
- `tracking.html`: tracking page
- `data/`: data modules (cart, products, delivery options, orders)
- `scripts/`: UI logic and page orchestration
- `styles/`: shared and page-specific styling
- `tests/`: Jasmine test runner and specs

## How To Run

1. Open this folder in VS Code.
2. Run a local static server (for example: Live Server extension).
3. Open `amazon.html`.

## Testing

- Open `tests/tests.html` in the browser to run the Jasmine suite.

## Notes

- Some data is loaded from `https://supersimplebackend.dev`.
- Cart and order data are persisted in browser `localStorage`.

## License

MIT License. See `LICENSE`.
