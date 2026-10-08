<script>
  let { project } = $props();
</script>

<article class="card project-card">
  <div class="card-heading">
    <p class="eyebrow">{project.kind ?? project.role}</p>
    <h3><a href={project.href}>{project.name}</a></h3>
  </div>

  {#if project.year}
    <span class="pill muted">{project.year}</span>
  {/if}

  <p class="card-description">{project.description}</p>

  {#if project.contributions}
    <div class="contribution-row" aria-label={`${project.name} contribution statistics`}>
      {#each project.contributions as contribution}
        <a class="contribution-stat" href={contribution.href}>{contribution.label}</a>
      {/each}
    </div>
  {/if}

  {#if project.links}
    <div class="link-row">
      {#each project.links as link}
        <a class="pill" href={link.href}>{link.label}</a>
      {/each}
    </div>
  {/if}

  {#if project.tags}
    <div class="tag-row">
      {#each project.tags as tag}
        <span class="pill muted">{tag}</span>
      {/each}
    </div>
  {/if}
</article>
