<script lang="ts">
  import AboutCards from "./aboutCards.svelte";
  import SanityImage from '$lib/sanity/sanity-image/sanity-image.svelte';
  import { imgBuilder } from '$lib/sanity/sanity-client';
  import type { About } from "$lib/types/landing.types";

  

    export let aboutData:About;
    // console.log(aboutData);
    

</script>
<div class="w-full bg-CodGray flex flex-col justify-center py-[3.956rem] md:py-[7.956rem] px-[0.938rem] md:px-[2.5rem] xl:px-[20rem]">
<div class="md:px-[2.5rem]">
    <h1 class="text-[2rem] font-[700] text-white xl:pl-[4rem]">{aboutData.title}</h1>
    <div class="h-[3rem] md:h-[5rem]"></div>
    <div class="flex flex-col md:flex-row justify-between">
        <div class="w-full md:w-1/2 flex flex-row space-x-[3vw] bg-cover">
            <SanityImage
            lqip
            class="h-full w-full object-cover"
            src={aboutData.sliderImage[0]}
            sizes="(min-width: 1024px) 90vw, 100vw"
            imageUrlBuilder={imgBuilder}
            alt={'banner.image.alt'} />
            <SanityImage
            lqip
            class="h-full w-full object-cover"
            src={aboutData.sliderImage[1]}
            sizes="(min-width: 1024px) 90vw, 100vw"
            imageUrlBuilder={imgBuilder}
            alt={'banner.image.alt'} />
        
        </div>

<div class="h-[3rem] md:hidden"></div>

        <div class="md:w-1/2 flex md:flex-row md:justify-end ">
            <div class="md:w-[23rem] pl-3">
                <h1 class="text-white text-[1.25rem] leading-[1.875rem] font-[400] ">
                    {aboutData.description}
                </h1> 
                <div class="md:h-[5rem] h-[3rem]"></div>
                <div class="text-white grid grid-cols-2">
                    {#each aboutData.projectstatus as projectstatus }
                    <div class="">
                        <AboutCards aboutCardData={projectstatus}/>
                    </div>
                    {/each}
                </div>
            </div>
                
        </div>
    </div>
</div>

</div>