<script lang="ts">
  export let options;
  export let optionTitle;
</script>

<div class="optionDiv pl-[2rem] md:pl-[3rem] pt-[2rem] text-MineShaft">
  <h1>
    {#if optionTitle}
      {optionTitle}
    {/if}
  </h1>
  {#each options as option}
    <ul class="list-none">
      <li>
        <a href={option.url}>{option.name}</a>
      </li>
    </ul>
  {/each}
</div>

