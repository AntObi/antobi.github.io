<script>
  import { publications, thesis } from '#lib/data.js';

  const publicationsNewestFirst = [...publications].sort((a, b) => b.date.localeCompare(a.date));
</script>

<svelte:head>
  <title>Research · Anthony Onwuli</title>
  <meta name="description" content="Research and publications by Anthony Onwuli." />
</svelte:head>

<header class="page-header">
  <p class="eyebrow">Research</p>
  <h1>Materials science, machine learning and chemical space</h1>
  <p class="page-lede">
    My academic work has focused on chemical representations, high-throughput materials screening
    and navigating large crystal-chemical search spaces. My current work extends that background
    into atomistic machine learning and scientific ML systems.
  </p>
</header>

<section class="section">
  <h2>Publications</h2>
  <div class="publication-list">
    {#each publicationsNewestFirst as paper}
      <article class="publication">
        <p class="publication-year">{paper.year}</p>
        <div>
          <h3><a href={paper.href}>{paper.title}</a></h3>
          <p>{paper.authors}</p>
          <p class="muted">{paper.venue} · {paper.type}</p>
        </div>
      </article>
    {/each}
  </div>
</section>

<section class="section thesis-section">
  <p class="eyebrow">Thesis</p>
  <h2><a href={thesis.href}>{thesis.title}</a></h2>
  <p>{thesis.institution} · {thesis.year}</p>
</section>
