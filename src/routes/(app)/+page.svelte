<script lang="ts">
  import About from '$lib/components/pages/landing/about/about.svelte';
  import Testimonial from '$lib/components/pages/landing/testimonial/testimonial.svelte';
  import Header from '$lib/components/pages/landing/hero/Header.svelte';
  import Projects from '$lib/components/pages/landing/projects/projects.svelte';
  export let data;
  $: ({
    site: {
      logos: { ogImage },
    },
    page: { sections },
  } = data);
</script>

<div class="w-full">
  {#each sections as props}
    {#if props._type === 'landing.header'}
      <Header HeaderData={props} />
    {/if}
  {/each}
  {#if !!Projects?.length}
    <Projects projectsData={data.page.projects} />
  {/if}
  {#each sections as props}
    {#if props._type === 'landing.about'}
      <About aboutData={props} />
    {:else if props._type === 'landing.testimonial'}
      <Testimonial testimonialData={props} />
    {/if}
  {/each}
</div>
