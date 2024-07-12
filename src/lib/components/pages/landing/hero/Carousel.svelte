<script>
  import emblaCarouselSvelte from 'embla-carousel-svelte';
  import Autoplay from 'embla-carousel-autoplay';
  import SanityImage from '$lib/sanity/sanity-image/sanity-image.svelte';
  import { imgBuilder } from '$lib/sanity/sanity-client';

  export let carouselImages;
  export let sliderImageText;
  // console.log(carouselImages);
  let options = { loop: false };
  let plugins = [Autoplay()];
</script>

<div class="embla relative" use:emblaCarouselSvelte={{ options, plugins }}>
  <div class="embla__container ">
    {#each carouselImages as carImg}
      <div class="embla__slide w-[22.5rem] h-[36.074rem] md:w-[59rem] 
      xl:w-[75rem] xl:h-[47.313rem]">
        <SanityImage
          lqip
          class="h-full w-full object-cover"
          src={carImg}
          sizes="(min-width: 1024px) 90vw, 100vw"
          imageUrlBuilder={imgBuilder}
          alt={'banner.image.alt'} />
      </div>
    {/each}
  </div>
  <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
    <h1 class="text-white text-[2.5rem] md:text-[5rem] font-[400]">{sliderImageText}</h1>
  </div>
</div>

<style>
  .embla {
    overflow: hidden;
  }
  .embla__container {
    display: flex;
  }
  .embla__slide {
    flex: 0 0 100%;
    min-width: 0;
  }
</style>
