<script lang="ts">
  import type { navigations } from "$lib/types/nav";

export let Posititon:string;
export let options:navigations[];
export let rotation:string;


</script>
<div class="absolute w-[7.5rem] h-[67.5rem] top-0 {Posititon} flex flex-col justify-center m-auto">
    <div class="{rotation} flex justify-center">
        {#each options as option}
            <a href={option.internalLink || option.url} class="text-[1.25rem] font-[400] leading-[1.25rem] px-[1rem]">{option.title || option.name}</a>
        {/each}
    </div>

</div>