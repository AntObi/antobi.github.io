<script>
  import '../app.css';
  import { base } from '$app/paths';
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
    <a class="brand" href={`${base}/`}>Anthony Onwuli</a>
    <div class="nav-links">
      <a href={`${base}/research/`}>Research</a>
      <a href={`${base}/software/`}>Software</a>
      <a href={`${base}/writing/`}>Writing</a>
      <a href={`${base}/cv/`}>CV</a>
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
