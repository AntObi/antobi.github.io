<script>
  import { education, experience, projects } from '#lib/data.js';
</script>

<svelte:head>
  <title>CV · Anthony Onwuli</title>
  <meta name="description" content="CV of Anthony Onwuli, Machine Learning Scientist." />
</svelte:head>

<header class="page-header cv-header">
  <p class="eyebrow">Curriculum vitae</p>
  <h1>Anthony Onwuli</h1>
  <p class="page-lede">
    Machine Learning Scientist and computational materials scientist working on atomistic ML,
    materials discovery and scientific software.
  </p>
</header>

<section class="cv-block">
  <h2>Experience</h2>
  {#each experience as item}
    <article class="cv-entry">
      <div>
        <h3>{item.title}</h3>
        <p class="muted">{item.organisation}</p>
      </div>
      <p>{item.summary}</p>
    </article>
  {/each}
</section>

<section class="cv-block">
  <h2>Education</h2>
  {#each education as item}
    <article class="cv-entry">
      <div>
        <h3>{item.title}</h3>
        <p class="muted">{item.organisation}</p>
      </div>
      <p><a href={item.href}>{item.summary}</a></p>
    </article>
  {/each}
</section>

<section class="cv-block">
  <h2>Research software</h2>
  <div class="card-grid">
    {#each projects as project}
      <article class="card">
        <p class="eyebrow">{project.role}</p>
        <h3><a href={project.href}>{project.name}</a></h3>
        <p>{project.description}</p>
      </article>
    {/each}
  </div>
</section>

<section class="cv-block">
  <h2>Technical areas</h2>
  <div class="tag-row cv-tags">
    <span class="pill">Machine-learning interatomic potentials</span>
    <span class="pill">Materials property prediction</span>
    <span class="pill">High-throughput DFT and MD</span>
    <span class="pill">Scientific Python</span>
    <span class="pill">HPC</span>
    <span class="pill">Dataset generation and validation</span>
    <span class="pill">Model evaluation</span>
    <span class="pill">Research software engineering</span>
  </div>
</section>
