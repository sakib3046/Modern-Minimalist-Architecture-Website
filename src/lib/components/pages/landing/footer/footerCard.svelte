<script lang="ts">
  import type { FooterCard } from '$lib/types/Footer';
  export let options:FooterCard[];
  export let optionTitle:string | undefined = undefined;
  
</script>

<div class="flex flex-col justify-start md:shrink-0 md:self-stretch pl-[2rem] md:pl-[3rem]  text-MineShaft w-[13rem] max-w-[78rem] leading-[2.5rem] mt-[2rem] md:mt-0">
  
    {#if optionTitle}
    <h6>{optionTitle}</h6>
    {/if}

  
  {#each options as option}
    <ul class="list-none">
      <li>
        <a href={option.url}>
          
          {option.name}

        </a>
      </li>
    </ul>

  {/each}
</div>

