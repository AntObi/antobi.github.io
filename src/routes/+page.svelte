<script>
  import { resolve } from '$app/paths';
  import ProjectCard from '#lib/components/ProjectCard.svelte';
  import SocialLinks from '#lib/components/SocialLinks.svelte';
  import { projects, recentWork } from '#lib/data.js';
</script>

<svelte:head>
  <title>Anthony Onwuli · Machine Learning Scientist</title>
  <meta property="og:title" content="Anthony Onwuli · Machine Learning Scientist" />
</svelte:head>

<section class="hero">
  <div class="hero-copy">
    <p class="hero-kicker">Materials × machine learning</p>
    <h1>Anthony Onwuli</h1>
    <p class="hero-role">Machine Learning Scientist II · Materials Nexus</p>
    <p class="hero-intro">
      I work on atomistic machine learning, materials discovery and scientific computing.
      My interests sit between model development and the scientific systems around it:
      data generation, simulation, evaluation and reproducible research software.
    </p>
    <SocialLinks />
  </div>

  <aside class="hero-aside" aria-label="Profile">
    <div class="portrait-frame">
      <img
        class="profile-photo"
        src="https://avatars.githubusercontent.com/u/30937913?v=4"
        alt="Anthony Onwuli"
        width="240"
        height="240"
      />
    </div>
    <div class="focus-list">
      <span>Atomistic ML</span>
      <span>Materials discovery</span>
      <span>Scientific software</span>
    </div>
  </aside>
</section>

<section class="section section--research">
  <div class="section-heading">
    <div>
      <p class="section-index">01</p>
      <p class="eyebrow">Selected research</p>
    </div>
    <div>
      <h2>Recent work</h2>
      <p>
        Publications and research outputs spanning chemical representations,
        generative materials design and high-throughput computational screening.
      </p>
    </div>
  </div>

  <div class="card-grid research-grid">
    {#each recentWork as project}
      <ProjectCard {project} />
    {/each}
  </div>

  <p class="section-link"><a href={resolve('/research')}>See research and publications →</a></p>
</section>

<section class="section section--opensource">
  <div class="section-heading">
    <div>
      <p class="section-index">02</p>
      <p class="eyebrow">Open source</p>
    </div>
    <div>
      <h2>Scientific software</h2>
      <p>
        Public tools I develop or contribute to for materials informatics,
        chemical screening and computational materials design.
      </p>
    </div>
  </div>

  <div class="opensource-grid">
    {#each projects as project}
      <ProjectCard {project} />
    {/each}
  </div>

  <p class="section-link"><a href={resolve('/software')}>Explore open-source projects →</a></p>
</section>
