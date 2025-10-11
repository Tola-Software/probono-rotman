You are a senior full-stack engineer and UX copywriter. Build a production-ready **Next.js 14 (App Router)** website for a street-food vendor named **ROTMAN** specializing in **Roti Bakar** and **Terang Bulan**. Use a **dark theme**, **Tailwind CSS**, and **smooth, tasteful animations**. Keep the content simple and clear, optimized for mobile first.

## Goals

- Fast, lightweight site with crystal-clear info: what we sell, where/when to find us, how to order via WhatsApp.
- Visual punch (dark background, warm “toasted” accents, bold food imagery) without clutter.
- Animated sections and images that feel lively but never distracting.

## Tech & Libraries

- Next.js 14, App Router (`/app`)
- Tailwind CSS (no other CSS frameworks)
- Framer Motion for reveal-on-scroll, subtle parallax, and micro-interactions
- Lucide-react icons
- TypeScript
- next/font (Inter or Urbanist)

## Brand & Palette (dark, “toasted”)

- Background: #0B0D10
- Surface: #11151A
- Accent: #D46C31 (toasted caramel)
- Secondary: #C38F5F (buttery bronze)
- Text primary: #E6E8EB; Muted: #9AA3AF
  Implement via CSS variables in `globals.css` and map to Tailwind.

## Vendor Identity (use in copy)

Vendor: **ROTMAN**  
Tagline: **Roti Bakar & Terang Bulan — Bold flavors, late nights.**  
USP bullets:

- Made-to-order, smoky & fresh
- Halal ingredients
- Ready in under 5 minutes
  Hours: **Mon–Sun 16:00 – 23:00**  
  Location: **Jl. Karang Sari No.4 Padangsambian kaja, Bali** _(make editable)_  
  WhatsApp: **+62 813-3703-7980**  
  WhatsApp link (prefilled):  
  `https://wa.me/6281234567890?text=Hi%20ROTMAN!%20I%20want%20to%20order%3A%20%5Bitem%20names%5D%20%2D%20pickup%2Fdelivery%3F`

## Pages & Routes

- `/` (Home): Hero, Signature Items, Why Choose Us, Hours & Location map, Testimonials/Reviews, CTA.
- `/menu`: Grid of items with images, short desc, price; category filter (Roti Bakar, Terang Bulan, Combos, Drinks); size & add-on selectors; add to “WA cart” (client-side array) and compose prefilled WhatsApp text.
- `/about`: Short story, hygiene/quality badges, small gallery.
- `/contact`: WhatsApp CTA button, phone, email, embedded map; simple contact form (client-side only).
- `/order` (optional): Shows selected items summary → “Order via WhatsApp” button with URL-encoded text.

## Components (in `/components`)

- `Navbar` (sticky; logo, links; WhatsApp CTA button)
- `Hero` with headline, subcopy, CTA, featured food image (masked curved shape); animated smoke/steam (Framer Motion)
- `CategoryPills` for menu filters
- `MenuGrid` with animated cards (hover lift, gentle tilt/glare)
- `OptionsPicker` (size, add-ons, toppings; updates local state)
- `WhyUs` (Fast, Fresh, Halal) with micro-animations
- `HoursLocation` with hours list, mini static map image, “Get Directions”
- `Testimonials` (3–5 items, auto-slide on mobile; swipe on touch)
- `MobileBottomBar` (sticky: Home, Menu, Order, Contact)
- `Footer` with socials and mini newsletter form (no backend)

## Animations (Framer Motion)

- Section entrance: fade + 20px rise on viewport
- Parallax on hero image & garnish PNGs (small translateY on scroll)
- Hover tilt/glare on menu cards (transform + gradient overlay)
- Testimonials auto-slide every 5s; swipe on touch
- Respect `prefers-reduced-motion`

## Images (use `/public/images`)

- `roti-bakar-classic.webp`, `roti-bakar-choco-cheese.webp`, `roti-bakar-ovomaltine.webp`
- `terang-bulan-classic.webp`, `terang-bulan-keju-coklat.webp`, `terang-bulan-nutella.webp`
- `combos.webp`, `iced-tea.webp`, `kopi-susu.webp`, `stall-hero.webp`
  Use `next/image`; hero image `priority`.

## Menu Seed Data (put in `/data/menu.ts`)

Create typed data with categories: **"Roti Bakar"**, **"Terang Bulan"**, **"Combos"**, **"Drinks"**.  
Each item: `{ id, name, price, desc, category, image, badges?: string[], options?: { sizes?: [...], addOns?: [...], toppings?: [...] } }`

### Roti Bakar

- Classic Butter Sugar — **IDR 18K** — “Crisp toast, butter, sugar.” — badges: ["Bestseller"]
- Choco Cheese — **IDR 24K** — “Thick chocolate + grated cheese.”
- Keju Susu — **IDR 24K** — “Condensed milk & cheese.”
- Ovomaltine Crunch — **IDR 30K** — “Malty chocolate spread, crunch.”
- Nutella Banana — **IDR 32K** — “Nutella, sliced banana.”
- Tiramisu Cream — **IDR 26K** — “Coffee-cocoa cream, light dust.”

### Terang Bulan (Martabak Manis)

- Classic Choco Sprinkles — **IDR 28K** — “Fluffy, buttery, choco meises.” — badges: ["Signature"]
- Keju Coklat — **IDR 32K** — “Cheese + chocolate overload.”
- Kacang Wijen — **IDR 28K** — “Roasted peanut & sesame.”
- Pandan Keju Susu — **IDR 30K** — “Pandan batter, cheese & milk.”
- Nutella Almond — **IDR 36K** — “Nutella, toasted almond.”
- Milo Dinosaur — **IDR 34K** — “Milo powder + extra drizzle.”

### Combos

- Midnight Duo — **IDR 32K** — “Roti Bakar Choco Cheese + Iced Tea.” — badges: ["Value"]
- Sweet Night Set — **IDR 38K** — “Terang Bulan Keju Coklat + Iced Lime Tea.”
- Family Box — **IDR 95K** — “2 Roti Bakar + 1 Terang Bulan + 3 Drinks.” — badges: ["Share"]
- Student Deal — **IDR 25K** — “Roti Bakar Butter Sugar + Iced Tea.”

### Drinks

- Iced Lime Tea — **IDR 12K** — “Tart & refreshing.”
- Teh Tarik — **IDR 16K** — “Pulled milk tea.”
- Es Kopi Susu — **IDR 22K** — “Sweet iced coffee.”
- Mineral Water — **IDR 8K** — “Still water.”

### Options (apply where relevant)

- **Sizes**: `Regular` (default), `Jumbo (+8K)`
- **Add-ons**: `Extra Cheese (+4K)`, `Extra Chocolate (+4K)`, `Extra Topping (+5K)`, `Split Flavor (+3K, Terang Bulan only)`
- **Toppings (pick up to 2 for free, then +3K each)**: `Chocolate`, `Cheese`, `Peanut`, `Sesame`, `Condensed Milk`, `Banana`, `Milo`, `Almond`

## WhatsApp “Cart” (client side)

- Allow users to select items (with options) and quantity; keep in local state.
- Compose a prefilled WhatsApp message from the cart:
  `Hi ROTMAN! I want to order:\n1x Roti Bakar Choco Cheese (Jumbo, Extra Cheese)\n1x Terang Bulan Keju Coklat\nPickup at 20:00\nName: [Your Name]`
- URL-encode and open with `wa.me` link.

## Accessibility & Performance

- Semantic HTML, alt text on all images.
- Prefetch primary routes.
- Lighthouse targets ≥ 95 (Performance/Best Practices/SEO).
- Respect `prefers-reduced-motion`.

## SEO & Meta

- `metadata` in `app/layout.tsx`: title, description, OG.
- JSON-LD LocalBusiness (name ROTMAN, address, openingHours, servesCuisine: “Indonesian”, `hasMenu`).

## Output Format — VERY IMPORTANT

Return **only** a complete project as a series of files with paths and code blocks. No commentary outside code.
Structure:

- `package.json` (scripts: dev, build, start; deps: next, react, react-dom, tailwindcss, postcss, autoprefixer, framer-motion, lucide-react, typescript, @types/node, @types/react)
- `tailwind.config.ts`, `postcss.config.js`, `tsconfig.json`, `.eslintrc.json`
- `/app/layout.tsx`, `/app/page.tsx`, `/app/menu/page.tsx`, `/app/about/page.tsx`, `/app/contact/page.tsx`, `/app/order/page.tsx`
- `/components/*` (as listed)
- `/data/menu.ts` (with the complete seed data above)
- `/public/images/*` (placeholders with comments)
- `/styles/globals.css` (Tailwind + CSS variables)

## Copy tone

Friendly, punchy, street-food vibe with Indonesian flavor terms. Short sentences. Zero jargon.

## Acceptance Criteria

- Dark UI with warm, “toasted” accents applied via CSS variables.
- Mobile-first layouts; desktop enhances with grids.
- Framer Motion animations for hero, sections, cards, and testimonials.
- WhatsApp CTA works with a prefilled, URL-encoded cart summary.
- Menu renders from `/data/menu.ts`, supports category filtering, sizes, add-ons, and toppings.
- No external backend required; no errors on fresh install.
