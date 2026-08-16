# Fix 1 — Homepage CSS not loading

## Reported symptom
The supplied screenshot shows the homepage rendering as plain browser HTML: default Times-style text, blue underlined links, unstyled buttons, no hero background, no layout, and no navigation styling.

## Repository check
The homepage references the shared stylesheets from the `/public` site root:

- `/theme.css?v=65`
- `/quick-booking.css?v=65`
- `/quick-booking-overrides.css?v=65`

Those CSS files exist in `public/`.

The repository also contains cPanel Apache rules in both the repository root and `public/` to support either document-root arrangement.

## Likely failure
The screenshot is consistent with the browser receiving `index.html` while one or more CSS assets are not being served from the same public URL root. When CSS is unavailable, the browser falls back to exactly the unstyled presentation shown in the screenshot.

## Fix 1 scope
This fix record is intentionally documentation-only. Per the project rule, all future corrective changes will be recorded sequentially under `/fix/` as `fix 2.md`, `fix 3.md`, etc. Do not create unrelated files in `/fix/`.

## Verification target
After the cPanel document root/rewrite configuration is corrected, the homepage must show:

- styled Mesmerizing Kashmir header
- hero image/background
- Jost typography
- gold/teal buttons
- destination cards
- package cards
- responsive navigation
- all existing sections and media

## Important
Do not delete or rewrite the existing site CSS while diagnosing this issue. The screenshot indicates an asset-serving/path problem rather than evidence that the design CSS itself should be replaced.