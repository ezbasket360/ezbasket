# EZbasket V1 — Design Spec

**Date:** 2026-08-23
**Status:** Approved by owner, ready for implementation planning

## 1. Purpose

EZbasket is a new establishment building a single-seller online store. Product requirements are not yet finalized and the scope is expected to evolve significantly over time. This spec covers **V1 only**: the smallest useful, real (not throwaway) foundation that lets the owner validate the idea and iterate on the catalog without the codebase fighting them later.

The owner is non-technical and is building this with Claude's guidance as a teaching engagement — every implementation step should be explained in plain language, not just executed.

## 2. Decisions made

| Question | Decision |
|---|---|
| Establishment type | Online store (e-commerce) |
| Seller model | Single seller (not a multi-vendor marketplace) |
| Builder | Owner + Claude, non-technical owner, wants each step taught |
| Hosting budget | Free / near-free to start |
| V1 functional scope | Browse products + add to basket. **No real checkout/payments, no user accounts, no orders yet.** |

## 3. Architecture & stack (Approach A)

- **Next.js** (App Router, TypeScript) — single codebase for both the pages customers see and the server-side logic (fetching product data, etc.)
- **PostgreSQL**, hosted by **Supabase** (free tier) — the database that stores product data. Supabase also provides a built-in spreadsheet-style table editor for managing data without code.
- **Prisma** — ORM (translation layer) between the Next.js code and the Postgres database.
- **Tailwind CSS** — styling.
- **Vercel** (free tier) — hosting for the live site, connected to a GitHub repo for deploys.

Rationale: product data lives in a real database from day one (not hardcoded), so V2 features (checkout, accounts, inventory) are additive migrations rather than rewrites. No custom admin UI in V1 — Supabase's table editor is sufficient until proven otherwise.

## 4. Data model (V1)

```prisma
model Product {
  id          String   @id @default(cuid())
  name        String
  slug        String   @unique
  description String?
  price       Decimal
  imageUrl    String?
  category    String?      // free-text, no separate Category table yet
  active      Boolean  @default(true)   // hide without deleting
  attributes  Json?        // escape hatch for undecided product-specific fields
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}
```

No `Order`, `User`, `Category`, or `Cart` tables in V1 — deferred until checkout/accounts are in scope.

## 5. Pages

- **Home** — welcome banner + placeholder branding, link to Shop.
- **Shop** (`/products`) — grid of product cards (image, name, price, Add to Basket).
- **Product detail** (`/products/[slug]`) — full description, price, quantity picker, Add to Basket.
- **Basket** (`/basket`) — line items with quantity/remove controls, running subtotal, a visibly **disabled** "Checkout — Coming soon" button.
- **Shared header/footer** — nav links (Home, Shop, Basket with item-count badge), placeholder contact info in footer.

## 6. Basket behavior

- Client-side only in V1: stored in the browser via `localStorage`, not in the database.
- Survives page refresh and tab close on the same browser; does **not** follow the visitor across devices/browsers (no accounts yet — expected and acceptable for V1).
- Quantity cannot go below 1; going lower removes the item. Empty basket shows a clear empty-state message.

## 7. Error handling

- Empty catalog → friendly "nothing here yet, check back soon" message, not a blank page.
- Hidden/deleted/unknown product slug → friendly "product not found" page.
- Database temporarily unreachable → friendly "something went wrong, try again" message, not a crash.

## 8. Testing approach

TypeScript's type checking catches many mistakes at write-time. No heavy automated test suite in V1 given the catalog/features are still expected to change — effort is better spent once things stabilize. Each feature is manually verified in a running browser as it's built. Automated tests are introduced starting with the checkout/payments phase, since money-handling code warrants stronger protection.

## 9. Explicitly out of scope for V1

- Real checkout / payment processing
- User accounts / login
- Order history
- Multi-vendor support
- Categories as a real data table (currently free-text on Product)
- Custom admin UI for managing products (use Supabase table editor)
- Automated test suite

## 10. Future evolution notes (not committed, just flagged)

- Checkout/payments (e.g. Stripe) will likely require: `Order`, `OrderItem` tables, moving the basket server-side or tying it to a session/account, and introducing automated tests.
- If categories grow complex (filters, hierarchies), promote `category` from free-text to a real `Category` table.
- If product management outgrows the Supabase table editor (e.g. non-technical staff need a friendlier UI, bulk actions, image uploads), build a custom admin panel.
