# T3-Website

Website for **T3 Consulting, Inc.**, an infrastructure engineering and environmental compliance firm.

The site was designed in Claude Design. It is a single-page React app that compiles in the browser, so there are no dependencies to install and no build step.

## Pages

| Route | Page | Component | File |
|---|---|---|---|
| `#home` | Home | `HomePage` | `src/pages/HomePage.jsx` |
| `#delivery` | Delivery Engineering | `DeliveryEngineeringPage` | `src/pages/DeliveryEngineeringPage.jsx` |
| `#distribution` | Distribution Engineering | `DistributionEngineeringPage` | `src/pages/DistributionEngineeringPage.jsx` |
| `#environmental` | Environmental | `EnvironmentalPage` | `src/pages/EnvironmentalPage.jsx` |
| `#about` | About | `AboutPage` | `src/pages/AboutPage.jsx` |
| `#contact` | Contact | `ContactPage` | `src/pages/ContactPage.jsx` |

## Running locally

Browsers block loading the `.jsx` files if you open `index.html` directly (by double-clicking it or through `file://`). Serve the folder over HTTP with any of these:

```bash
# Python
python -m http.server 8000
# Open http://localhost:8000
```

```bash
# Node
npx serve .
```

In VS Code you can also use the **Live Server** extension: right-click `index.html` and choose **Open with Live Server**.

## Project structure

```
index.html      Entry point: loads styles and every script in dependency order
src/            Site source, organized with Atomic Design (see below)
assets/         Logos and photography
_ds/            T3 design system: tokens (color, type, spacing) and base components
prototipos/     Design canvases with the explored layout variants (not part of the site);
                prototipos/src/ keeps the original pre-refactor components they load
framer-build/   Script that generates single-file exports
```

### `src/` (Atomic Design)

```
src/
├── app.jsx                  Router (#hash → page) and CTA/card link wiring
├── styles/site.css          Site styles
├── utils/                   Design-system imports, routes, asset paths, shared styles, global effects
├── hooks/                   Custom React hooks (useInView, useScrolled, useSectionReveal, ...)
├── data/                    Page copy, one file per page (DE, DIST, ENV, HM, AB, CT)
├── components/
│   ├── atoms/               Smallest pieces: Container, Heading, BodyText, MoreLink, Photo, Reveal, ...
│   ├── molecules/           Groups of atoms: BrandLockup, ServiceCard, RelatedCard, FormField, ...
│   ├── organisms/           Full sections
│   │   ├── layout/          SiteHeader, SiteFooter
│   │   ├── shared/          Sections reused across pages (PageHero, ServicesRail, ClosingCta, ...)
│   │   └── home/ delivery/ environmental/ distribution/ about/ contact/   Page-specific sections
│   └── templates/           PageTemplate (header + sections + footer)
└── pages/                   One component per route, composed from organisms
```

Every component and function is declared as an arrow function (`const Name = () => ...`) with a JSDoc comment.

There is no bundler, so files share the global scope: each file declares its component as a top-level `const`, and `index.html` loads them in order (utils → hooks → data → atoms → molecules → organisms → templates → pages → app). Top-level names must be unique across `src/`.

## How navigation works

- `src/app.jsx` defines the routes in the `PAGES` object and switches pages based on the URL hash (`#about`, `#contact`, and so on).
- `src/utils/routes.js` holds `NAV` (menu items) and the `ROUTES` table, which maps each nav label to its route.
- The **Talk to a Technical Professional** and **Request our Capability Statement** buttons go to `#contact`.
- A card whose title matches a page in `ROUTES` links to that page.

### Adding a page

1. Put the page copy in `src/data/my-page.js`.
2. Build any new sections as organisms in `src/components/organisms/my-page/`, reusing existing atoms and molecules.
3. Compose them in `src/pages/MyPage.jsx` with `PageTemplate`.
4. Load every new file in `index.html` in the matching group (`data` as a plain `<script>`, `.jsx` files as `<script type="text/babel">`).
5. Add the page to `PAGES` in `src/app.jsx`.
6. If it belongs in the menu, add it to `NAV` and `ROUTES` in `src/utils/routes.js`.

## Tech stack

- React 18.3.1 and Babel Standalone 7.29.0, loaded from unpkg
- T3 Consulting design system (`_ds/`)

## Deployment

The site is static, so it runs on GitHub Pages, Netlify or Vercel with no extra configuration. To enable GitHub Pages, go to **Settings → Pages → Deploy from a branch** and choose `main` with the root folder.
