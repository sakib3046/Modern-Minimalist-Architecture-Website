<script lang="ts">
  export let options;
  export let optionTitle;
</script>

<div class="flex flex-col justify-start md:shrink-0 md:self-stretch pl-[2rem] md:pl-[3rem]  text-MineShaft leading-[2.5rem] mt-[2rem] md:mt-0">
  <h1>
    {#if optionTitle}
      {optionTitle}
    {/if}
  </h1>
  
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

