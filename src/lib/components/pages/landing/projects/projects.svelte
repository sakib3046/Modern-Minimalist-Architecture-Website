<script lang="ts">
  import type { Projects } from "$lib/types/landing.types";
  import ProjectCard from "./projectCard.svelte";

export let projectsData:Projects;
console.log(projectsData);


</script>

<div class="w-full flex flex-col justify-center py-[3.956rem] md:py-[7.956rem] px-[0.938rem] md:px-[2.5rem] xl:px-[20rem]">
    <div class="flex flex-row justify-between">
        <div class="text-[2rem] font-[700] leading-[2.4rem] -tracking-[0.047rem]">latest projects.</div>
        <div class="">
            all.
        </div>
    </div>
    <div class="flex flex-row gap-[1rem] md:gap-[3rem] flex-wrap justify-center">
        <!-- {#each projectsData.projects as data }
            <ProjectCard projectCardData={data}/>
        {/each} -->
    </div>
</div>

