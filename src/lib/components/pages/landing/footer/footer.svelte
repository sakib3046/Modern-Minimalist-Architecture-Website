<script lang="ts">
  import FooterCard from "./footerCard.svelte";

  export let footerData;
  console.log(footerData);
</script>

<div
  class="flex w-full flex-col justify-center bg-MineShaftV2/25 px-[0.938rem] py-[4rem] md:px-[2.5rem] md:py-[7.5rem] xl:px-[20rem]">
  <div class=" flex flex-auto flex-wrap justify-between">
    <div
      class="optionDiv max-w-full text-[3.55rem] font-bold leading-[3.5rem] md:max-w-[16.5rem] md:text-[5rem] md:leading-[5rem]">
      {footerData.title}
    </div>
    <div class="flex flex-auto flex-wrap justify-end">
        <FooterCard optionsTitle= 'we hire' options={footerData.contacts}/>
      <!-- <div class="optionDiv">
        jksjk
      </div>
      <div class="optionDiv">djhsajh</div>
      <div class="optionDiv">djhsajh</div> -->
    </div>
  </div>
</div>

<style>
  .optionDiv {
    @apply pl-[2rem] md:pl-[3rem];
  }
</style>
