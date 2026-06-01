# Bhaavam Foundation Website

A modern, empathetic mental health aid website for [Bhaavam Foundation](https://www.instagram.com/bhaavam_foundation) (@bhaavam_foundation).

## Tech Stack

- **Next.js 14** (App Router, TypeScript)
- **Tailwind CSS** — calming sage, mist, and cream palette
- **Radix UI** primitives + shadcn-style components
- **Framer Motion** — gentle, reduced-motion-aware animations
- **Lucide React** icons

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/              # Routes & global layout
├── components/
│   ├── home/         # Landing page sections
│   ├── layout/       # Header, footer
│   ├── motion/       # Framer Motion wrappers
│   └── ui/           # Button, Card, etc.
├── data/site.ts      # Centralized content
└── lib/utils.ts      # cn() helper
```

## Pages

| Route | Status |
|-------|--------|
| `/` | Home — hero, mission pillars, impact stats, CTA |
| `/about` | Placeholder |
| `/initiatives` | Placeholder |
| `/resources` | Placeholder |
| `/contact` | Placeholder |

## Accessibility

- Semantic HTML (`main`, `section`, `nav`, `footer`)
- Skip-to-content link
- ARIA labels on navigation and interactive controls
- `prefers-reduced-motion` respected
- WCAG-minded contrast (soft ink on cream backgrounds)

## Content source

Foundation copy and recommendations are synced from the public Instagram profile **[@bhaavam_foundation](https://www.instagram.com/bhaavam_foundation/)**. Update `src/data/instagram.ts` when new posts go live.

## License

Private — Bhaavam Foundation.
