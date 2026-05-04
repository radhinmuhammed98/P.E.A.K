# P.E.A.K Automotive — Luxury Car Brand Website

> **Precision Engineered Automotive Kinetics**  
> *Engineered to the Peak of Perfection.*

A full-stack, production-ready luxury automotive website built with Next.js 14, React Three Fiber, Framer Motion, and Tailwind CSS.

---

## ✦ Features

- **Animated Preloader** — Logo reveal with progress bar
- **3D Car Viewer** — Procedurally-built car using React Three Fiber (floating, rotating, reflective)
- **Parallax Hero** — Mouse-tracking 3D parallax on the hero section
- **Glassmorphism UI** — Blur, transparency, gold borders throughout
- **Smooth Scroll** — Powered by Lenis
- **Animated Counters** — Stats that count up on scroll-into-view
- **Horizontal Model Scroll** — Three luxury models with scrollable card gallery
- **Technology Panels** — Layered glass cards with animated entry
- **Interior Section** — Scroll-driven scale zoom effect
- **Full Configurator** — Model + colour + wheels + interior + performance mode selector with live 3D preview
- **3 Model Pages** — `/models/aether`, `/models/stratos`, `/models/vertex` with 3D viewer, tabs, specs table
- **404 Page** — On-brand "Destination Uncharted"
- **SEO** — Full metadata, Open Graph, sitemap.xml, robots.txt
- **Fully Responsive** — Mobile, tablet, desktop

---

## ✦ Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS + custom CSS |
| Animation | Framer Motion |
| Smooth Scroll | Lenis |
| 3D | React Three Fiber + Three.js + Drei |
| Fonts | Cinzel, Playfair Display, Cormorant Garamond, Poppins |
| Language | TypeScript |

---

## ✦ Project Structure

```
peak-automotive/
├── app/
│   ├── layout.tsx              # Root layout + fonts + SmoothScrollProvider
│   ├── page.tsx                # Homepage
│   ├── globals.css             # Design system, utilities, animations
│   ├── loading.tsx             # App-level loading state
│   ├── not-found.tsx           # 404 page
│   ├── sitemap.ts              # SEO sitemap
│   ├── robots.ts               # SEO robots
│   ├── configurator/
│   │   ├── page.tsx            # Build Your Car configurator
│   │   └── layout.tsx
│   └── models/
│       ├── aether/page.tsx     # Aether EV model page
│       ├── stratos/page.tsx    # Stratos Sport model page
│       └── vertex/page.tsx     # Vertex Hyper model page
├── components/
│   ├── Preloader.tsx           # Animated logo preloader
│   ├── Navbar.tsx              # Glass nav with mobile menu
│   ├── Hero.tsx                # Fullscreen 3D hero + mouse parallax
│   ├── Footer.tsx              # Dark footer with links
│   ├── ModelPage.tsx           # Shared model detail page component
│   ├── ModelCard.tsx           # Reusable model card
│   ├── SmoothScrollProvider.tsx# Lenis smooth scroll wrapper
│   ├── 3d/
│   │   └── CarViewer.tsx       # React Three Fiber 3D car scene
│   ├── sections/
│   │   ├── PhilosophySection.tsx
│   │   ├── PerformanceStats.tsx
│   │   ├── ModelsSection.tsx
│   │   ├── TechnologySection.tsx
│   │   ├── InteriorSection.tsx
│   │   └── CTASection.tsx
│   └── ui/
│       └── GlassCard.tsx       # Reusable glass card component
└── lib/
    ├── animations.ts           # Custom hooks (reveal, parallax, countUp)
    ├── models.ts               # Model data constants
    └── utils.ts                # cn(), formatPrice(), lerp(), clamp()
```

---

## ✦ Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# 1. Unzip the project
unzip peak-automotive-full.zip
cd peak-automotive

# 2. Install dependencies
npm install --legacy-peer-deps

# 3. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## ✦ Build for Production

```bash
npm run build
npm start
```

---

## ✦ Deploy to Vercel (Recommended)

### Option A — Vercel CLI

```bash
npm install -g vercel
vercel
# Follow prompts — select Next.js, deploy
```

### Option B — Vercel Dashboard

1. Push to GitHub/GitLab
2. Go to [vercel.com](https://vercel.com) → **New Project**
3. Import your repository
4. Framework: **Next.js** (auto-detected)
5. Click **Deploy**

### Environment Variables

No environment variables required for the base build.

---

## ✦ Deploy to GitHub Pages

GitHub Pages does not natively support Next.js App Router with server features. For static export:

1. Add to `next.config.js`:
```js
output: 'export',
trailingSlash: true,
```

2. Build and deploy:
```bash
npm run build
# Upload /out directory to GitHub Pages
```

> Note: The 3D Three.js features require client-side JS and work on all static hosts.

---

## ✦ Customisation Guide

### Change Brand Colours
Edit CSS variables in `app/globals.css`:
```css
:root {
  --gold: #c6a769;       /* Primary gold accent */
  --bg: #f2f2f4;         /* Page background */
  --dark: #0a0a0c;       /* Dark sections */
}
```
Also update `tailwind.config.js` `peak` colour palette.

### Add a New Model
1. Create `/app/models/your-model/page.tsx`
2. Copy structure from `aether/page.tsx`
3. Fill in `ModelData` object
4. Add to `lib/models.ts` and `ModelsSection.tsx`

### Change 3D Car Colour
The `CarViewer` component accepts a `color` prop (hex string):
```tsx
<CarViewer color="#c6a769" />
```

### Change Fonts
Update `@import` in `app/globals.css` and `fontFamily` in `tailwind.config.js`.

---

## ✦ Pages

| Route | Description |
|---|---|
| `/` | Homepage with all sections |
| `/models/aether` | Aether EV model detail |
| `/models/stratos` | Stratos Sport model detail |
| `/models/vertex` | Vertex Hyper model detail |
| `/configurator` | Build Your Car studio |

---

## ✦ Performance Notes

- 3D canvas is dynamically imported with `ssr: false` — no SSR overhead
- Images use Next.js `<Image>` for lazy loading and optimisation
- Framer Motion animations use GPU-accelerated transforms
- All scroll triggers use `IntersectionObserver` (no layout thrashing)
- Lenis smooth scroll runs on `requestAnimationFrame`

---

*P.E.A.K Automotive — A fictional luxury brand. All specifications are illustrative.*
