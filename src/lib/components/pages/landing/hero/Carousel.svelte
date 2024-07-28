<script lang="ts">
  import emblaCarouselSvelte, {
    type EmblaCarouselType,
    type EmblaOptionsType,
    type EmblaPluginType,
  } from 'embla-carousel-svelte';
  import Autoplay from 'embla-carousel-autoplay';
  import SanityImage from '$lib/sanity/sanity-image/sanity-image.svelte';
  import { imgBuilder } from '$lib/sanity/sanity-client';
  import DotButton from './DotButton.svelte';

  export let carouselImages;
  export let sliderImageText;

  let emblaApi: EmblaCarouselType;
  let sectionEl: HTMLElement;
  let selectedIndex = 0;
  let scrollSnaps: number[];
  let isIntersecting = false;
  export let plugins: EmblaPluginType[] = [Autoplay()];
  export let options: Partial<EmblaOptionsType> = { loop: false };

  const onInit = (event: CustomEvent<EmblaCarouselType>) => {
    emblaApi = event.detail;
    scrollSnaps = event.detail.scrollSnapList();
    selectedIndex = event.detail.selectedScrollSnap();
  };

  $: if (emblaApi) {
    emblaApi.on('select', ({ selectedScrollSnap, scrollSnapList }) => {
      selectedIndex = selectedScrollSnap();
      scrollSnaps = scrollSnapList();
    });
  }

  // console.log(carouselImages);
</script>

<div
  class="embla relative"
  use:emblaCarouselSvelte={{ options, plugins }}
  on:emblaInit={onInit}>
  <div class="embla__container">
    {#each carouselImages as carImg}
      <div
        class="embla__slide h-[36.074rem] w-[22.5rem] md:w-[59rem]
      xl:h-[47.313rem] xl:w-[75rem]">
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
  <div
    class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
    <h1 class="text-[2.5rem] font-[400] text-white md:text-[5rem]">
      {sliderImageText}
    </h1>
  </div>
</div>
{#if !!scrollSnaps?.length}
  <nav class=" flex items-center justify-center pt-[32px]">
    <div class="flex space-x-[8px]">
      {#each scrollSnaps as _, index}
        <DotButton
        slideNumber={index+1}
          active={index === selectedIndex}
          clickAction={() => {
            emblaApi.scrollTo(index);
          }} />
      {/each}
    </div>
  </nav>
{/if}

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
