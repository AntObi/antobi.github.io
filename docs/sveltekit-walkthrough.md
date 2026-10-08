# SvelteKit walkthrough

This repository is deliberately small so it can double as a practical introduction to SvelteKit.

## 1. Svelte versus SvelteKit

**Svelte** is the component framework. A `.svelte` file combines markup, JavaScript and component-scoped CSS.

**SvelteKit** is the application framework around Svelte. It provides routing, layouts, data loading, build configuration, prerendering and deployment adapters.

A useful analogy is:

- Svelte component ~= a reusable UI function
- SvelteKit route ~= a page/controller
- `src/lib` ~= reusable application library
- `static` ~= files served verbatim
- adapter-static ~= compile the application into ordinary HTML/CSS/JS

## 2. File-based routing

Look at `src/routes/`.

```text
src/routes/
├── +layout.js
├── +layout.svelte
├── +page.svelte
├── research/+page.svelte
├── software/+page.svelte
├── writing/+page.svelte
└── cv/+page.svelte
```

The mapping is:

- `src/routes/+page.svelte` -> `/`
- `src/routes/research/+page.svelte` -> `/research/`
- `src/routes/software/+page.svelte` -> `/software/`
- `src/routes/cv/+page.svelte` -> `/cv/`

No routing table is required.

## 3. The shared layout

`src/routes/+layout.svelte` wraps every page. It owns the navigation, footer and global metadata.

`src/routes/+layout.js` contains:

```js
export const prerender = true;
export const trailingSlash = 'always';
```

`prerender = true` tells SvelteKit that every route should be generated as static HTML at build time.

That is why this site works well on GitHub Pages: there is no Node server in production.

## 4. Configuration in SvelteKit 3

SvelteKit 3 moved project configuration into the SvelteKit Vite plugin.

In `vite.config.js`:

```js
sveltekit({
  adapter: adapter({ pages: 'build', assets: 'build' }),
  paths: {
    base: process.env.BASE_PATH ?? ''
  }
})
```

The adapter controls how the app is emitted for hosting. `adapter-static` writes ordinary static files.

The dynamic `paths.base` value is what lets the same source build at the production root and under a PR-preview subdirectory.

## 5. Components

Reusable UI lives in `src/lib/components/`.

For example, `ProjectCard.svelte` receives a JavaScript object:

```svelte
<script>
  let { project } = $props();
</script>

<h3>{project.name}</h3>
<p>{project.description}</p>
```

`$props()` is Svelte 5's way of receiving component properties.

A parent can then render:

```svelte
<ProjectCard project={project} />
```

## 6. Reactive state

The software page is the main interactive example.

```js
let query = $state('');
let activeTag = $state('All');

let filteredProjects = $derived(
  projects.filter(...)
);
```

- `$state` declares state that can change in the browser.
- `$derived` declares a value computed from other reactive state.

When the search box changes, Svelte updates only the affected project list.

## 7. Structured content

`src/lib/data.js` is the source of truth for publications, projects, CV entries and homepage work.

That prevents the same publication or project from being retyped in several pages.

As the site grows, this can be split into YAML/JSON files or generated from APIs, but keeping it as plain JavaScript makes the first migration easy to understand.

## 8. Internal routes and static assets

SvelteKit 3 provides helpers in `$app/paths`.

- `resolve('/software')` generates an internal route with the configured base path.
- `asset('profile.png')` generates the correct URL for a file in `static/`.

These helpers are why a PR preview under `/pr-preview/pr-2/` does not accidentally link back to the production root.

## 9. Build lifecycle

Local development:

```bash
npm run dev
```

Validation:

```bash
npm run check
```

Static production build:

```bash
npm run build
```

The adapter writes the final site into `build/`.

## 10. Good next exercises

1. Add a project to `src/lib/data.js`.
2. Change `ProjectCard.svelte` and see every card update.
3. Add a new route such as `src/routes/notes/+page.svelte`.
4. Add a reusable component.
5. Move writing entries into Markdown.
6. Add Pagefind-based global search.
7. Add scientific visualisation components for structures, phase diagrams or embedding plots.
