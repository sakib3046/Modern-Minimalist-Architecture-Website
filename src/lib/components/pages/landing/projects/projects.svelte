<script lang="ts">
  import type { Category } from '$lib/types/landing.types';
  import type { Projects } from '$lib/types/projects';
  import { ChevronDown } from 'lucide-svelte';
  import ProjectCard from './projectCard.svelte';

  export let projectsData: Projects[];
  export let category: Category[];

  let filteredProject = projectsData;
  let allCategory = [
    { _id: String(Math.random() * 1000), name: 'all.' },
    ...category,
  ];
  let activeCategory = allCategory[0];
  function filterProjectByCategory() {
    if (activeCategory.name === 'all.') {
      filteredProject = projectsData;
    } else {
      filteredProject = projectsData.filter(({ categoryName }) => {
        return categoryName._id === activeCategory._id;
      });
    }
  }
  $: activeCategory, filterProjectByCategory();
</script>

<div
  class="flex w-full flex-col justify-center px-[0.938rem] py-[3.956rem] md:px-[2.5rem] md:py-[7.956rem] xl:px-[20rem]">
  <div class="flex flex-row justify-between">
    <div class="flex w-full flex-col sm:flex-row">
      <div class="text-[2rem] font-[700] leading-[2.4rem] -tracking-[0.047rem]">
        latest projects.
      </div>
      <div class="hidden flex-row sm:flex">
        {#each allCategory as category}
          <div class="px-[1rem]">
            <button
              on:click={() => {
                activeCategory = category;
              }}>
              {category.name}
            </button>
          </div>
        {/each}
      </div>
      <div class="relative sm:hidden">
        <select
          class="border-black/0.2 mt-[1.5rem] w-full appearance-none border-[1px] bg-white p-[0.5rem]"
          bind:value={activeCategory}>
          {#each allCategory as category}
            <option value={category}>{category.name}</option>
          {/each}
        </select>
        <div class="absolute right-[0.5rem] top-[35px]"><ChevronDown /></div>
      </div>
    </div>
  </div>
  <div class="flex flex-row flex-wrap justify-center gap-[1rem] md:gap-[3rem]">
    {#each filteredProject as data}
      <ProjectCard projectCardData={data} />
    {/each}
  </div>
</div>
