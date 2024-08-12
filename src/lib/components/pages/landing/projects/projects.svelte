<script lang="ts">
  import type { Category } from '$lib/types/landing.types';
  import type { Projects } from '$lib/types/projects';
  import ProjectCard from './projectCard.svelte';

  export let projectsData: Projects[];
  export let category:Category[];

  let filteredProject=projectsData;
  let allCategory=[{_id:String(Math.random()*1000),name:'all'},...category]
  let activeCategory=allCategory[0]
  $:console.log(activeCategory);
  function filterProjectByCategory() {
    if (activeCategory.name==="all" ) {
      filteredProject=projectsData;
    }
    else{
      filteredProject=projectsData.filter(({categoryName})=>{
        return categoryName._id===activeCategory._id
      })
    }
  }
$:activeCategory,filterProjectByCategory();
// $:console.log(filteredProject);

</script>

<div
  class="flex w-full flex-col justify-center px-[0.938rem] py-[3.956rem] md:px-[2.5rem] md:py-[7.956rem] xl:px-[20rem]">
  <div class="flex flex-row justify-between">
    <div class="text-[2rem] font-[700] leading-[2.4rem] -tracking-[0.047rem]">
      latest projects.
    </div>
    <div class=" flex flex-row">
      {#each allCategory as category}
        <div class="px-[1rem]">
          <button on:click={()=>{
            activeCategory=category
          }}>{category.name}</button>
        </div>
      {/each}
    </div>
  </div>
  <div class="flex flex-row flex-wrap justify-center gap-[1rem] md:gap-[3rem]">
    {#each filteredProject as data}
      <ProjectCard projectCardData={data} />
    {/each}
  </div>
</div>
