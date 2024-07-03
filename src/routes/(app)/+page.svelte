<script>
// @ts-nocheck

  import Header from "../../lib/components/pages/landing/hero/Header.svelte";
  // export let data;
  // console.log(data)

  export let data;
  $: ({
    site: {
      logos: { ogImage },
    },
    page: { sections},
  } = data);
//  $:console.log(data)
</script>
<!-- <div class="">
    <Header HeaderData={data.page.sections[0]} />
</div> -->

{#each sections as props}
  {#if props._type === 'landing.header'}
    <Header HeaderData={props} />
  {/if}
{/each}