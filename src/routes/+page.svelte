<script>
  import { asset, resolve } from '$app/paths';
  import ProjectCard from '$lib/components/ProjectCard.svelte';
  import SocialLinks from '$lib/components/SocialLinks.svelte';
  import { projects, recentWork, writingTopics } from '$lib/data.js';
</script>

<svelte:head>
  <title>Anthony Onwuli · Machine Learning Scientist</title>
  <meta property="og:title" content="Anthony Onwuli · Machine Learning Scientist" />
</svelte:head>

<section class="profile-hero">
  <img class="profile-photo" src={asset('profile.png')} alt="Anthony Onwuli" width="176" height="176" />
  <h1>Anthony Onwuli</h1>
  <SocialLinks />
  <p class="intro">
    <strong>Machine Learning Scientist</strong> working on atomistic machine learning,
    materials discovery and scientific computing. I build models and scientific software that connect
    materials data, atomistic simulation and high-throughput computational workflows.
  </p>
</section>

<section class="section">
  <div class="section-title">
    <p class="eyebrow">Selected outputs</p>
    <h2>Recent Work</h2>
  </div>
  <div class="card-grid">
    {#each recentWork as project}
      <ProjectCard {project} />
    {/each}
  </div>
</section>

<section class="section">
  <div class="section-title">
    <p class="eyebrow">Scientific software</p>
    <h2>Open Source</h2>
    <p>Public research software for materials informatics and computational materials design.</p>
  </div>
  <div class="card-grid">
    {#each projects as project}
      <ProjectCard {project} />
    {/each}
  </div>
  <p class="section-link"><a href={resolve('/software')}>Explore software →</a></p>
</section>

<section class="section">
  <div class="section-title">
    <p class="eyebrow">Technical notebook</p>
    <h2>Writing</h2>
    <p>
      I am building this into a public notebook for the parts of atomistic ML and computational
      materials science that are useful beyond a single project.
    </p>
  </div>
  <div class="topic-grid">
    {#each writingTopics as topic}
      <article class="topic">
        <h3>{topic.title}</h3>
        <p>{topic.description}</p>
      </article>
    {/each}
  </div>
  <p class="section-link"><a href={resolve('/writing')}>Writing and notes →</a></p>
</section>
