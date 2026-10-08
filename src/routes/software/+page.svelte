<script>
  import ProjectCard from '#lib/components/ProjectCard.svelte';
  import { packagingContributions, projects, upstreamContributions } from '#lib/data.js';

  let query = $state('');
  let activeTag = $state('All');
  const tags = ['All', ...new Set(projects.flatMap((project) => project.tags))];

  let filteredProjects = $derived(
    projects.filter((project) => {
      const matchesQuery = JSON.stringify(project).toLowerCase().includes(query.toLowerCase());
      const matchesTag = activeTag === 'All' || project.tags.includes(activeTag);
      return matchesQuery && matchesTag;
    })
  );
</script>

<svelte:head>
  <title>Open Source · Anthony Onwuli</title>
  <meta name="description" content="Open-source scientific software by Anthony Onwuli." />
</svelte:head>

<header class="page-header">
  <p class="eyebrow">Open source</p>
  <h1>Scientific software in the open</h1>
  <p class="page-lede">
    Projects where I have sustained development or maintenance responsibility, followed by selected
    upstream contributions and packaging work across the scientific Python ecosystem.
  </p>
</header>

<section class="opensource-section">
  <div class="project-controls">
    <label>
      <span class="sr-only">Search software</span>
      <input bind:value={query} placeholder="Search projects..." />
    </label>
    <div class="filter-row" aria-label="Filter projects by topic">
      {#each tags as tag}
        <button class:active={activeTag === tag} onclick={() => (activeTag = tag)}>{tag}</button>
      {/each}
    </div>
  </div>

  <div class="card-grid opensource-grid">
    {#each filteredProjects as project (project.name)}
      <ProjectCard {project} />
    {/each}
  </div>

  {#if filteredProjects.length === 0}
    <p class="empty-state">No projects match that search.</p>
  {/if}
</section>

<section class="upstream-section">
  <div class="section-heading section-heading--compact">
    <div>
      <p class="section-index">03</p>
      <p class="eyebrow">Upstream</p>
    </div>
    <div>
      <h2>Selected contributions</h2>
      <p>
        Technical contributions to established projects that I use in computational materials science
        and atomistic machine learning. These are kept separate from software where I have sustained
        ownership or maintenance responsibility.
      </p>
    </div>
  </div>

  <div class="upstream-list">
    {#each upstreamContributions as project}
      <article class="upstream-item">
        <div>
          <h3><a href={project.href}>{project.name}</a></h3>
          <p>{project.description}</p>
        </div>
        <div class="contribution-row">
          {#each project.contributions as contribution}
            <a class="contribution-stat" href={contribution.href}>{contribution.label}</a>
          {/each}
        </div>
      </article>
    {/each}
  </div>
</section>

<section class="packaging-section">
  <div class="section-heading section-heading--compact">
    <div>
      <p class="section-index">04</p>
      <p class="eyebrow">Packaging</p>
    </div>
    <div>
      <h2>Release & ecosystem maintenance</h2>
      <p>
        Conda-forge packaging, feedstock maintenance and release work for scientific software.
      </p>
    </div>
  </div>

  <div class="packaging-grid">
    {#each packagingContributions as project}
      <article class="packaging-item">
        <h3><a href={project.href}>{project.name}</a></h3>
        <p>{project.description}</p>
        <div class="contribution-row">
          {#each project.contributions as contribution}
            <a class="contribution-stat" href={contribution.href}>{contribution.label}</a>
          {/each}
        </div>
      </article>
    {/each}
  </div>
</section>
