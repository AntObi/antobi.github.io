<script>
  import { writingTopics } from '#lib/data.js';
</script>

<svelte:head>
  <title>Writing · Anthony Onwuli</title>
  <meta name="description" content="Technical notes on atomistic machine learning, materials modelling and scientific software." />
</svelte:head>

<header class="page-header">
  <p class="eyebrow">Writing</p>
  <h1>A public technical notebook</h1>
  <p class="page-lede">
    This section is being developed as a place for concrete technical notes rather than a conventional
    personal blog: derivations, implementation notes, reproducible examples and explanations of methods
    I use in computational materials science.
  </p>
</header>

<div class="topic-grid topic-grid--large">
  {#each writingTopics as topic}
    <article class="card">
      <h2>{topic.title}</h2>
      <p>{topic.description}</p>
    </article>
  {/each}
</div>

<section class="section prose">
  <h2>Why keep notes here?</h2>
  <p>
    A portfolio shows outputs. Technical notes show the reasoning and engineering behind them.
    The intention is to publish material that is useful independently of my current employer and
    that can be supported entirely from public information, open-source code and published research.
  </p>
</section>
