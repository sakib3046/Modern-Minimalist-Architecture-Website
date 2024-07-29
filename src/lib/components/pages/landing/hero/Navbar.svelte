<script lang="ts">
  import Sidebar from "./Sidebar.svelte";
  export let logoText;
  export let navigations;
  export let links;
  let plinks= links.portfolios.portfolios;
  let slinks= links.social.socials
  let allLinks= slinks.concat(plinks)
  
  
</script>

<div class="flex w-full flex-row justify-between p-[0.938rem] xl:justify-center">
  <a href="/" class="flex flex-row text-[1.75rem] font-[700] leading-[1.75]">
    {logoText.logoTextPrimary}
    <spa class="hidden xl:block">{logoText.logoTextSecondary}</spa>
  </a>
  <a href="" class="my-auto xl:hidden">
    <div
      class="flex h-[2.5rem] w-[2.5rem] flex-col justify-center px-[0.25rem] xl:hidden">
      <div class="my-[0.25rem] h-[0.125rem] w-full bg-CodGray"></div>
      <div class="my-[0.25rem] h-[0.125rem] w-full bg-CodGray"></div>
    </div>
  </a>
  <div class="hidden xl:block">
      <Sidebar Posititon='left-0' options={navigations} rotation='-rotate-90'/>
      <Sidebar Posititon='right-0' options={allLinks} rotation='rotate-90'/>
  </div>
</div>
