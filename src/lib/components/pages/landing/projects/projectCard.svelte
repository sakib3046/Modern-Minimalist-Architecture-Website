<script lang="ts">
  import { imgBuilder } from "$lib/sanity/sanity-client";
  import SanityImage from "$lib/sanity/sanity-image/sanity-image.svelte";
  import type { Project } from "$lib/types/landing.types";

export let projectCardData:Project;
// console.log(projectCardData);

</script>

<div class="flex flex-col justify-start pt-[4rem] md:pt-[5rem]">
    <SanityImage
          lqip
          class="h-[10.75rem] w-[10.75rem] md:h-[17.75rem] md:w-[17.75rem] xl:h-[16.5rem] xl:w-[16.5rem] object-cover pb-[1rem] md:pb-[1.5rem]"
          src={projectCardData.image}
          sizes="(min-width: 1024px) 90vw, 100vw"
          imageUrlBuilder={imgBuilder}
          alt={'banner.image.alt'} />
          
    <h3 class="text-[1rem] leading-[1.25rem] font-[400] text-Emperor pb-0.625rem">{projectCardData.description}</h3>
    <a href="" class="text-[1.25rem] leading-[1.25rem] font-[700]">{projectCardData.title}</a>
</div>

