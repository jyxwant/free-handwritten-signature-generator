# Repository Guidelines

## Project Structure & Modules
- `index.html`: Single-page app shell, SEO/meta tags, Ads slots.
- `styles.css`: Apple/ChatGPT-inspired styles, responsive layout.
- `signature.js`: Canvas drawing, PNG/PDF export, UI state.
- `i18n.js`: Language detection, runtime text/meta updates.
- `vercel.json`: Static deploy target. No build step.
- `README.md` / `DEPLOYMENT.md`: Usage and deployment docs.

## Build, Test, and Development
- `python -m http.server 8000`: Serve locally at `http://localhost:8000`.
- `npx serve .`: Alternative static server.
- No bundler/build by default. Keep scripts at end of `body` for performance.

## Coding Style & Naming
- **JavaScript**: ES6+, 4‑space indent, camelCase for variables/functions; avoid globals.
- **CSS**: Use variables in `:root`; BEM‑like class names are preferred; 4‑space indent.
- **Files**: lower‑case with hyphens where applicable (e.g., `signature.js`, `styles.css`).
- **i18n keys**: camelCase (e.g., `metaTitle`, `exportPdf`).

## Testing Guidelines
- Manual verification across desktop/mobile:
  - Draw, clear, PNG/PDF export work and are crisp.
  - Language switch persists, updates `<html lang/dir>`, `<title>`, meta description.
  - Ads placeholders don’t overlap UI; hidden on small screens.
- Optional: create quick checklists in PRs; no automated tests yet.

## Commit & Pull Requests
- Commits: imperative, concise (e.g., "Add rtl + hreflang support").
- Group related changes; avoid unrelated refactors.
- PRs must include:
  - Purpose summary and screenshots/GIFs of UI before/after.
  - Steps to test (commands + expected results).
  - Any i18n keys added and languages updated.

## i18n & SEO Notes
- Prefer runtime i18n via `i18n.js`; add `metaTitle`/`metaDescription` for each locale.
- Keep `<link rel="canonical">` domain accurate; alternates use `?lang=xx`.
- RTL: set via `document.documentElement.dir = 'rtl'` for Arabic.
- Don’t commit real AdSense IDs; use placeholders in the repo.
