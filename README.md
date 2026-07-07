# docs-system

A documentation single-page application built with React and Vite. Scalable and framework-agnostic — designed to host summarized documentation for any technology.

## Current Docs

- **Pandas** — Essential Pandas guide for Data Engineering (Spanish)
- **Beautiful Soup 4** — HTML/XML parsing for web scraping
- **MySQL Connector/Python** — Official Oracle MySQL driver (DB-API 2.0)

## Tech Stack

| Tool | Purpose |
|---|---|
| React 19 | UI framework |
| react-router 7 | Client-side routing |
| Vite 8 | Build tool and dev server |
| ESLint | Linting |
| pnpm | Package manager |
| Vercel | Deployment |

## Getting Started

```bash
pnpm install
pnpm dev        # development server with HMR
pnpm build      # production build to dist/
pnpm preview    # preview production build locally
pnpm lint       # lint source files
```

## Project Structure

```
src/
├── main.jsx                  # Entry point
├── App.jsx                   # Root component with routes
├── Home.jsx                  # Landing page
├── Pandas.jsx                # Pandas documentation
├── BS4.jsx                   # Beautiful Soup 4 documentation
├── MySQL_ConnectorPy.jsx     # MySQL Connector/Python documentation
├── index.css                 # Global styles
└── assets/                   # Images and icons
```

## Adding New Documentation

1. Create a new page component in `src/` (e.g. `MyTopic.jsx`).
2. Add a route in `src/App.jsx`.
3. Add a card linking to it in `src/Home.jsx`.

Each page is self-contained with its own styles and navigation.

## Deployment

Deployed on Vercel with SPA rewrites configured in `vercel.json`. All routes fall back to `index.html` for client-side routing.
