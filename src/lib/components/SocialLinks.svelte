<script>
  import { resolve } from '$app/paths';
  import { socials } from '#lib/data.js';

  const hrefFor = (href) => (href.startsWith('/') ? resolve(href) : href);
</script>

<nav class="social-links" aria-label="Profile links">
  {#each socials as social}
    <a href={hrefFor(social.href)}>{social.label}</a>
  {/each}
</nav>
