<script>
  import { publications, recentWork } from '$lib/data.js';
  const researchWork = recentWork.filter((item) => item.kind.startsWith('Research') || item.kind.startsWith('Thesis'));
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
  <h2>Selected research</h2>
  <div class="card-grid">
    {#each researchWork as item}
      <article class="card">
        <p class="eyebrow">{item.year}</p>
        <h3><a href={item.href}>{item.name}</a></h3>
        <p>{item.description}</p>
        <div class="link-row">
          {#each item.links as link}
            <a class="pill" href={link.href}>{link.label}</a>
          {/each}
        </div>
      </article>
    {/each}
  </div>
</section>

<section class="section">
  <h2>Publications</h2>
  <div class="publication-list">
    {#each publications as paper}
      <article class="publication">
        <p class="publication-year">{paper.year}</p>
        <div>
          <h3><a href={paper.href}>{paper.title}</a></h3>
          <p>{paper.authors}</p>
          <p class="muted">{paper.venue}</p>
        </div>
      </article>
    {/each}
  </div>
</section>
