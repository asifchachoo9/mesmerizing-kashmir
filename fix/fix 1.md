# Fix 1 — Homepage CSS / cPanel asset loading

## Reported symptom
The supplied screenshot shows the homepage rendering as plain browser HTML: default Times-style text, blue underlined links, unstyled buttons, no hero background, no layout, and no navigation styling.

## Root cause addressed
The site must work when cPanel uses either the repository root or the `public/` directory as the document root. The repository includes Apache rules for both arrangements, with the root `.htaccess` serving static files from `public/` while keeping clean public URLs.

## Source files updated
- `public/index.html` — standalone homepage with no Hatchable runtime/bootstrap dependency.
- `.htaccess` — cPanel root deployment and `/public` asset routing.
- `public/.htaccess` — direct `/public` document-root deployment.
- Existing CSS/JS/media files remain the source of truth.

## cPanel package rule
Every corrective change must update the actual source file first. After the source update, the cPanel package must also be rebuilt. The GitHub Actions workflow `.github/workflows/build-cpanel-fix.yml` creates `fix/fix 1.zip` from the current `public/` source plus the root `.htaccess`.

## Verification target
After extracting the ZIP into cPanel, the homepage must show:

- styled Mesmerizing Kashmir header
- hero image/background
- Jost typography
- gold/teal buttons
- destination cards
- package cards
- responsive navigation
- all existing sections and media

## Project rule
For future fixes, update the real source file first and then update the corresponding numbered package in `/fix/`. Use sequential names such as `fix 2.md` and `fix 2.zip`; do not create unrelated files inside `/fix/`.
