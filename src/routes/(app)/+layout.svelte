<script lang="ts">
  import { urlFor } from '$lib/sanity/sanity-client';
  import type { LayoutData } from './$types';
  import Navbar from "../../lib/components/pages/landing/hero/Navbar.svelte";
  import Footer from '$lib/components/pages/landing/footer/footer.svelte';
  export let data: LayoutData;
  $: ({
    site: {
      logos: { logoText, favicon },
    },
  } = data);

  let faviconImage = favicon
    ? urlFor(favicon).size(256, 256).ignoreImageParams().url()
    : null;
    $:console.log(data)
</script>

<svelte:head>
  <link rel="icon" type="image/png" href={faviconImage} />
</svelte:head>

<main class="overflow-hidden">

</main>
<div class="w-screen min-h-[3.375rem] md:min-h-[6.5rem]">
  <Navbar/>
</div>


<slot />
<Footer footerData={data.site.footer}/>