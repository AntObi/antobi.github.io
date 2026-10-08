<script>
  import { base } from '$app/paths';
  import { socials } from '$lib/data.js';

  const hrefFor = (href) => (href.startsWith('/') ? `${base}${href}` : href);
</script>

<nav class="social-links" aria-label="Profile links">
  {#each socials as social}
    <a href={hrefFor(social.href)}>{social.label}</a>
  {/each}
</nav>
