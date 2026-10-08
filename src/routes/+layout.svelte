<script>
  import '../app.css';
  import { resolve } from '$app/paths';

  let { children } = $props();
</script>

<svelte:head>
  <meta
    name="description"
    content="Anthony Onwuli — machine learning scientist working on atomistic modelling, materials discovery and scientific software."
  />
  <meta property="og:site_name" content="Anthony Onwuli" />
  <meta property="og:type" content="website" />
  <meta
    property="og:description"
    content="Machine learning scientist working on atomistic modelling, materials discovery and scientific software."
  />
  <meta property="og:image" content="https://avatars.githubusercontent.com/u/30937913?v=4" />
  <meta name="twitter:card" content="summary" />
</svelte:head>

<header class="site-header">
  <nav class="site-nav" aria-label="Primary navigation">
    <a class="brand" href={resolve('/')}>AO</a>
    <div class="nav-links">
      <a href={resolve('/research')}>Research</a>
      <a href={resolve('/software')}>Open Source</a>
      <a href={resolve('/cv')}>CV</a>
    </div>
  </nav>
</header>

<main>
  {@render children()}
</main>

<footer class="site-footer">
  <p>Anthony Onwuli</p>
</footer>
