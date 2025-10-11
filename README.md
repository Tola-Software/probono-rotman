# ROTMAN - Street Food Website

A production-ready Next.js 14 website for ROTMAN street food vendor specializing in Roti Bakar and Terang Bulan.

## Features

- **Dark Theme**: Modern dark UI with warm "toasted" accents
- **Mobile First**: Responsive design optimized for mobile devices
- **Interactive Menu**: Category filtering, customizable options, and cart functionality
- **WhatsApp Integration**: Direct ordering via WhatsApp with prefilled messages
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **SEO Optimized**: Meta tags, JSON-LD structured data, and optimized images

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React Icons

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd rotman
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with SEO
│   ├── page.tsx           # Home page
│   ├── menu/page.tsx      # Menu page
│   ├── about/page.tsx     # About page
│   ├── contact/page.tsx   # Contact page
│   └── order/page.tsx     # Order/Cart page
├── components/            # Reusable React components
│   ├── Navbar.tsx         # Navigation bar
│   ├── Hero.tsx           # Hero section
│   ├── MenuGrid.tsx       # Menu items grid
│   ├── CategoryPills.tsx  # Category filter buttons
│   ├── OptionsPicker.tsx  # Item customization modal
│   ├── WhyUs.tsx          # Features section
│   ├── HoursLocation.tsx  # Hours and location info
│   ├── Testimonials.tsx   # Customer reviews
│   ├── Footer.tsx         # Footer component
│   └── MobileBottomBar.tsx # Mobile navigation
├── data/                  # Static data
│   └── menu.ts           # Menu items and categories
├── public/images/         # Image assets
└── styles/
    └── globals.css       # Global styles and CSS variables
```

## Configuration

### Brand Colors (in globals.css)

- Background: `#0B0D10`
- Surface: `#11151A`
- Accent: `#D46C31` (toasted caramel)
- Secondary: `#C38F5F` (buttery bronze)
- Text Primary: `#E6E8EB`
- Text Muted: `#9AA3AF`

### WhatsApp Integration

Update the phone number in:

- `components/Navbar.tsx`
- `components/Hero.tsx`
- `app/contact/page.tsx`
- `app/order/page.tsx`

Current number: `+62 812-3456-7890`

### Location & Hours

Update business information in:

- `app/layout.tsx` (JSON-LD schema)
- `components/HoursLocation.tsx`
- `components/Footer.tsx`

## Deployment

### Build for Production

```bash
npm run build
npm start
```

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically with zero configuration

### Deploy to Other Platforms

The built application can be deployed to:

- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Any Node.js hosting service

## Adding Real Images

Replace placeholder files in `/public/images/` with actual food photos:

- `roti-bakar-classic.webp` (400x300px)
- `roti-bakar-choco-cheese.webp` (400x300px)
- `roti-bakar-ovomaltine.webp` (400x300px)
- `terang-bulan-classic.webp` (400x300px)
- `terang-bulan-keju-coklat.webp` (400x300px)
- `terang-bulan-nutella.webp` (400x300px)
- `combos.webp` (400x300px)
- `iced-tea.webp` (400x300px)
- `kopi-susu.webp` (400x300px)
- `stall-hero.webp` (800x600px)

## Performance

- Lighthouse Score Target: 95+
- Image optimization with Next.js Image component
- Automatic code splitting
- Prefetching for faster navigation

## Browser Support

- Chrome 91+
- Firefox 90+
- Safari 14+
- Edge 91+

## License

Private project for ROTMAN street food vendor.

## Contact

For technical support or customization:

- Email: dev@rotman.id
- WhatsApp: +62 812-3456-7890
