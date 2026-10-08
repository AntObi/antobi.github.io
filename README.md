# antobi.github.io

Personal site for Anthony Onwuli.

This version is built with **SvelteKit** and prerendered as a fully static site for GitHub Pages. The design takes inspiration from technical research sites such as janosh.dev while keeping the content and visual identity specific to Anthony's work in atomistic machine learning, materials discovery and scientific software.

## Local development

```bash
npm install
npm run dev
```

Then open the local URL printed by Vite.

## Validation

```bash
npm run check
npm run build
```

The production build is written to `build/`.

## Repository structure

- `src/routes/` — pages. The directory structure becomes the URL structure.
- `src/lib/` — reusable components and structured site data.
- `src/app.css` — global design tokens and shared styles.
- `static/` — files copied directly into the built site.
- `.github/workflows/` — validation, PR previews and GitHub Pages deployment.
- `docs/sveltekit-walkthrough.md` — guided explanation of how the site works.

## Deployment

Pull requests are validated automatically and branches in this repository receive a preview under `/pr-preview/pr-<number>/`.

Merges to `master` build and publish the static output to `gh-pages`.
