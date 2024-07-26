<script lang="ts">
  import type { Footer } from "$lib/types/Footer";
  import FooterCard from "./footerCard.svelte";

  export let footerData:Footer;
  console.log(footerData);
</script>

<div
  class="flex w-full flex-col justify-center bg-MineShaftV2/25 px-[0.938rem] py-[4rem] md:px-[2.5rem] md:py-[7.5rem] xl:px-[20rem]">
  <div class=" flex flex-auto flex-wrap justify-between">
    <div
      class="optionDiv max-w-[22.5rem] text-[3.55rem] font-bold leading-[3.5rem] md:max-w-[16.5rem] md:text-[5rem] md:leading-[5rem]">
      {footerData.title}
      <i class="fa-sharp fa-solid fa-turn-up rotate-90 text-[2.55rem] md:text-[3.55rem]"></i>
    </div>
    <div class="flex flex-auto flex-wrap">
        <FooterCard optionTitle="" options={footerData.sections.section}/>
        <FooterCard optionTitle={footerData.social.title} options={footerData.social.socials}/>
        <FooterCard optionTitle="" options={footerData.portfolios.portfolios}/>
    </div>
  </div>
  <div class=" flex flex-col md:flex-row justify-start md:justify-center  pt-[2rem] md:pt-5">
    {#each footerData.CopyWriteInfo as info }
      <h1 class="pl-[2rem]">{info}</h1>
    {/each}
  </div>
</div>

<style>
  .optionDiv {
    @apply pl-[2rem] md:pl-[3rem];
  }
</style>

