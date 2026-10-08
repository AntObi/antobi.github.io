<script>
  import '../app.css';
  import { resolve } from '$app/paths';
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
  <meta property="og:image" content="https://antobi.github.io/profile.png" />
  <meta name="twitter:card" content="summary" />
</svelte:head>

<header class="site-header">
  <nav class="site-nav" aria-label="Primary navigation">
    <a class="brand" href={resolve('/')}>Anthony Onwuli</a>
    <div class="nav-links">
      <a href={resolve('/research')}>Research</a>
      <a href={resolve('/software')}>Software</a>
      <a href={resolve('/writing')}>Writing</a>
      <a href={resolve('/cv')}>CV</a>
    </div>
  </nav>
</header>

<main>
  <slot />
</main>

<footer class="site-footer">
  <p>
    Built with SvelteKit ·
    <a href="https://github.com/AntObi/antobi.github.io">source on GitHub</a>
  </p>
</footer>
