# Stomp Shack

Site for Stomp Shack, New Orleans queer country line dancing. Every Sunday night @ 7pm at Hi-Ho Lounge, 2239 St. Claude Ave.

Live at [stompshack.netlify.app](https://stompshack.netlify.app) (canonical domain: [stompshacknola.com](https://stompshacknola.com)).

## Stack

- [React](https://react.dev/) + [TanStack Router](https://tanstack.com/router) (client-side SPA, file-based routing)
- [Vite](https://vite.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/) with CSS-first theming
- Fonts: Acier BAT via [Adobe Fonts](https://fonts.adobe.com/)

## Getting Started

```bash
pnpm install
pnpm dev
```

Dev server runs at http://localhost:3000.

## Building For Production

```bash
pnpm build
```

Output goes to `dist/`.

## Theme

All design tokens live in the Tailwind 4 `@theme` block in `src/styles.css`:

- `--font-acier` - Acier BAT, set as the default body font
- `--color-brand` (`#9c1f21`) - site background red
- `--color-pop` (`#ed1b68`) - pink header / accents
- `--color-ice` (`#c4dbe9`) - light blue accents

Edit tokens there to change the look site-wide; utilities like `bg-pop` and `text-brand` are generated from them.

## Content

The site is a single page:

- `src/routes/__root.tsx` - root route, renders the `Header` (nav links scroll to page sections)
- `src/routes/index.tsx` - hero, photo sections, FAQ (copy in the `FAQS` array), and contact info
- `src/components/Header.tsx` - pink nav bar with anchor links

Images live in `public/` (`stompshack-full.png`, `stompshack-action-1/2/3.jpeg`).

## SEO & Discoverability

- `index.html` - title, description, canonical, OpenGraph/Twitter cards, and JSON-LD structured data (Organization + weekly Event)
- `public/robots.txt`, `public/sitemap.xml` - search engine crawling
- `public/llms.txt` - summary for AI assistants

Canonical URLs are hardcoded to `https://stompshacknola.com` - when the domain is connected, find/replace it across `index.html`, `public/robots.txt`, `public/sitemap.xml`, and `public/llms.txt`.

## Deployment

Hosted on Netlify via `netlify.toml` (build: `pnpm build`, publish: `dist`, SPA redirect).

```bash
netlify deploy --prod --build
```

Project admin: https://app.netlify.com/projects/stompshack

## Linting & Formatting

Uses [eslint](https://eslint.org/) (TanStack config) and [prettier](https://prettier.io/):

```bash
pnpm lint
pnpm format
pnpm check
```
