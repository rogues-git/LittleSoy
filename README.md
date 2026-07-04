# Little Soe Revolution Product — B2B Housekeeping Website

A modern, premium, fully responsive B2B website for **Little Soe Revolution Product**, a supplier of housekeeping and cleaning products to hospitals, corporate offices, schools, banquet halls, hotels and industrial facilities.

Built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion** and **Lucide React**. No backend — all content is local data; the contact form submits via **Web3Forms**.

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve production build
```

## Configuration

### 1. Web3Forms (contact form)
The inquiry form posts to Web3Forms. Get a free access key at <https://web3forms.com> and set it in `.env.local`:

```
NEXT_PUBLIC_WEB3FORMS_KEY=your-access-key-here
```

### 2. Company details
All business info (name, address, phone, email, **GST number**, social links, Google Map embed) lives in one place:

- `src/lib/site.ts`

Replace the placeholder phone, email, address, GST number and the Google Maps embed URL with the real values. The GST and address are currently sample placeholders.

## Where the content lives

| Content | File |
| --- | --- |
| Products (drives Products page **and** the alphabetical mega menu) | `data/products.json` |
| Testimonials | `data/testimonials.json` |
| Industries Served | `data/industries.json` |
| Client logos list | `data/clients.json` |
| Product images | `public/products/` |
| Industry images | `public/industries/` |
| Client logos | `public/clients/` |
| Testimonial review screenshots | `public/testimonials/` |
| Hero / about / logo | `public/` |

> **Images:** all assets are auto-generated branded **SVG placeholders** (see `scripts/gen-assets.mjs`). Replace them with real photos/logos — keep the same file names, or update the paths in the matching JSON / `site.ts`. `next.config.mjs` already allows `images.unsplash.com` if you prefer remote images.

## Project structure

```
data/                     Local JSON content
public/                   Images & static assets (SVG placeholders)
scripts/gen-assets.mjs    Regenerates placeholder assets
src/
  app/                    Routes: / (home), /products, sitemap, robots, layout
  components/
    layout/               Navbar, MegaMenu, MobileMenu, Footer, ScrollProgress, WhatsApp
    sections/             Hero, About, Milestones, WhyChooseUs, Industries,
                          Testimonials, Clients, CTA, Contact, ContactForm, TrustedBrands
    products/             ProductsExplorer, ProductCard, ProductModal
    ui/                   Button, SectionHeading, Reveal, Marquee, AnimatedCounter
  lib/                    site config, data loaders, motion variants, nav, utils
  types/                  Shared TypeScript types
```

## Features

- Sticky navbar that turns translucent with a blur effect on scroll
- Products **mega menu** — products categorised alphabetically with live search
- Full-screen hero with parallax, gradient overlay and floating/entrance animations
- Infinite logo marquees (Trusted Brands + two-row grayscale Clients showcase)
- Animated milestone counters (count-up on scroll into view)
- Premium "Why Choose Us" and "Industries Served" cards with hover effects
- Testimonials masonry gallery with hover-zoom and a keyboard-navigable lightbox
- Products page with search + category + industry filters and a product detail modal
- Emerald-gradient CTA band and a split Contact section with Google Map + validated form
- 4-column footer with glowing social icons, floating WhatsApp button
- SEO: metadata, Open Graph, `sitemap.xml`, `robots.txt`; mobile-first and type-safe

## Brand palette

| Token | Value |
| --- | --- |
| Primary — Emerald Green | `#014D40` |
| Secondary — Premium Gold (accent) | `#C5A06A` |
| Background | `#FFFFFF` |
| Section background | `#F7F7F7` |
| Text — Dark Gray | `#222222` |
