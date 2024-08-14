<script lang="ts">
  import { imgBuilder } from '$lib/sanity/sanity-client';
  import SanityImage from '$lib/sanity/sanity-image/sanity-image.svelte';
  import Projects from './projects.svelte';

  export let projectCardData: Projects;
</script>

<div class="flex flex-col justify-start pt-[4rem] md:pt-[5rem]">
  <SanityImage
    lqip
    class="h-[10.75rem] w-[10.75rem] object-cover pb-[1rem] md:h-[17.75rem] md:w-[17.75rem] md:pb-[1.5rem] xl:h-[16.5rem] xl:w-[16.5rem]"
    src={projectCardData.image}
    sizes="(min-width: 1024px) 90vw, 100vw"
    imageUrlBuilder={imgBuilder}
    alt={projectCardData.image.alt} />

  <h3 class="pb-0.625rem text-[1rem] font-[400] leading-[1.25rem] text-Emperor">
    {projectCardData.categoryName.name}
  </h3>
  <a
    href="/project/{projectCardData.slug.current}"
    class="text-[1.25rem] font-[700] leading-[1.25rem]">
    {projectCardData.title}
  </a>
</div>
