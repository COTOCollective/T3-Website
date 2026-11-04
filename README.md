# T3-Website

Website for **T3 Consulting, Inc.**, an infrastructure engineering and environmental compliance firm.

The site was designed in Claude Design. It is a single-page React app that compiles in the browser, so there are no dependencies to install and no build step.

## Pages

| Route | Page | Component | File |
|---|---|---|---|
| `#home` | Home | `HomeA` | `src/home-a.jsx` |
| `#delivery` | Delivery Engineering | `V1` | `src/de-v1.jsx` |
| `#distribution` | Distribution Engineering | `DistV1` | `src/dist-v1.jsx` |
| `#environmental` | Environmental | `EnvPage` | `src/env-v1.jsx` |
| `#about` | About | `AboutPage` | `src/about.jsx` |
| `#contact` | Contact | `ContactA` | `src/contact.jsx` |

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
index.html      Entry point: loads styles, components and the router
src/            React components (.jsx) and site styles (de.css)
assets/         Logos and photography
_ds/            T3 design system: tokens (color, type, spacing) and base components
prototipos/     Design canvases with the explored layout variants (not part of the site)
framer-build/   Script that generates single-file exports
```

## How navigation works

- `index.html` defines the routes in the `PAGES` object and switches pages based on the URL hash (`#about`, `#contact`, and so on).
- `src/de-shared.jsx` holds the header, the footer and the `ROUTES` table, which maps each nav label to its route.
- The **Talk to a Technical Professional** and **Request our Capability Statement** buttons go to `#contact`.
- A card whose title matches a page in `ROUTES` links to that page.

### Adding a page

1. Create the component in `src/` and expose it with `window.MyPage = MyPage`.
2. Load it in `index.html` with `<script type="text/babel" src="src/my-page.jsx"></script>`.
3. Add the page to `PAGES` in `index.html`.
4. If it belongs in the menu, add it to `NAV` and `ROUTES` in `src/de-shared.jsx`.

## Tech stack

- React 18.3.1 and Babel Standalone 7.29.0, loaded from unpkg
- T3 Consulting design system (`_ds/`)

## Deployment

The site is static, so it runs on GitHub Pages, Netlify or Vercel with no extra configuration. To enable GitHub Pages, go to **Settings → Pages → Deploy from a branch** and choose `main` with the root folder.
