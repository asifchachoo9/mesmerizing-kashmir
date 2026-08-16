# Fix 1 — Homepage CSS / cPanel asset loading

## Reported symptom
The homepage was rendering as plain browser HTML: default Times-style text, blue underlined links, unstyled buttons, no hero background, no layout, and no navigation styling.

## Source file changed for Fix 1
- `public/index.html`

The homepage source was cleaned of the remaining Hatchable runtime/bootstrap markup and kept as a standalone cPanel page.

## ZIP rule
`fix/fix 1.zip` is a **patch ZIP**, not a full website package. It contains **only the source file changed for Fix 1**:

```text
public/index.html
```

Do not extract Fix 1 as a complete fresh website. Replace the matching source file in the existing cPanel site.

## Project rule
For every future fix:
1. Update the real website source file(s) first.
2. Record the exact changed source file(s) in `fix/fix N.md`.
3. Create `fix/fix N.zip` containing **only those changed source file(s)**.
4. Never put the full `public/` website into a numbered fix ZIP.
5. Continue sequentially with `fix 2`, `fix 3`, etc.
