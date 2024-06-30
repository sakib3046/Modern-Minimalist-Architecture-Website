<script lang="ts">
  import { urlFor } from '$lib/sanity/sanity-client';
  import type { LayoutData } from './$types';

  export let data: LayoutData;
  $: ({
    site: {
      logos: { logo, favicon },
    },
  } = data);

  let faviconImage = favicon
    ? urlFor(favicon).size(256, 256).ignoreImageParams().url()
    : null;
</script>

<svelte:head>
  <link rel="icon" type="image/png" href={faviconImage} />
</svelte:head>

<main class="overflow-hidden">
  <slot />
</main>
