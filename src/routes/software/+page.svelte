<script>
  import ProjectCard from '$lib/components/ProjectCard.svelte';
  import { projects } from '$lib/data.js';

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
  <title>Software · Anthony Onwuli</title>
  <meta name="description" content="Open-source scientific software by Anthony Onwuli." />
</svelte:head>

<header class="page-header">
  <p class="eyebrow">Software</p>
  <h1>Open-source materials software</h1>
  <p class="page-lede">
    Public tools I develop or contribute to for materials informatics, representation learning and
    computational materials design.
  </p>
</header>

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

<div class="card-grid">
  {#each filteredProjects as project (project.name)}
    <ProjectCard {project} />
  {/each}
</div>

{#if filteredProjects.length === 0}
  <p class="empty-state">No projects match that search.</p>
{/if}
