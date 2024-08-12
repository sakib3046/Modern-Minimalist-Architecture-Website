<script lang="ts">
  import type { Projects } from '$lib/types/projects';
  import ProjectCard from './projectCard.svelte';

  export let projectsData: Projects[];
  function catName(projectsData: object[]) {
    let tags: string[] = [];
    for (let data of projectsData) {
      tags.push(data.project.categoryName.name);
    }
    tags.push('all.');
    return tags;
  }
  let allTags = catName(projectsData);
console.log(allTags);
</script>

<div
  class="flex w-full flex-col justify-center px-[0.938rem] py-[3.956rem] md:px-[2.5rem] md:py-[7.956rem] xl:px-[20rem]">
  <div class="flex flex-row justify-between">
    <div class="text-[2rem] font-[700] leading-[2.4rem] -tracking-[0.047rem]">
      latest projects.
    </div>
    <div class=" flex flex-row-reverse">
      {#each allTags as tag}
        <div class="px-[1rem]">
          <button>{tag}</button>
        </div>
      {/each}
    </div>
  </div>
  <div class="flex flex-row flex-wrap justify-center gap-[1rem] md:gap-[3rem]">
    {#each projectsData as data}
      <ProjectCard projectCardData={data} />
    {/each}
  </div>
</div>
