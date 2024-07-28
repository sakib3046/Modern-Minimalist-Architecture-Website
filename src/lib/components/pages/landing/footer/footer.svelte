<script lang="ts">
  import type { Footer } from '$lib/types/Footer';
  import FooterCard from './footerCard.svelte';
  import { CornerDownRight } from 'lucide-svelte';
  export let footerData: Footer;
</script>

<div
  class="flex w-full flex-col justify-center bg-Alabster px-[0.938rem] py-[4rem] md:px-[2.5rem] md:py-[7.5rem] xl:px-[20rem]">
  <div class=" flex flex-auto flex-wrap justify-between">
    <div
      class="optionDiv  text-[3.55rem] font-bold leading-[3.5rem] md:max-w-[16.5rem] md:text-[5rem] md:leading-[5rem]">
      {footerData.title}
      <div class="w-[1.25rem] h-[1.25rem]"></div>
      <CornerDownRight size=64/>
    </div>
    <div class="flex flex-auto flex-wrap">
      <FooterCard optionTitle="" options={footerData.sections.section} />
      <FooterCard
        optionTitle={footerData.social.title}
        options={footerData.social.socials} />
      <FooterCard optionTitle="" options={footerData.portfolios.portfolios} />
    </div>
  </div>
  <div
    class=" flex flex-col justify-start pt-[2rem] md:flex-row md:justify-center md:pt-5">
    {#each footerData.CopyWriteInfo as info}
      <h1 class="pl-[2rem]">{info}</h1>
    {/each}
  </div>
</div>

<style>
  .optionDiv {
    @apply pl-[2rem] md:pl-[3rem];
  }
</style>
