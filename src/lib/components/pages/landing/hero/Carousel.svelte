<script>
// @ts-nocheck
    import Carousel from 'svelte-carousel';
    import { browser } from '$app/environment';
    import { imagebuilder } from '$lib/components/CustomFunction/imageBuilder';

    export let carouselImages;
    console.log(carouselImages) 
  
    /**
   * @type {{ goToNext: () => void; }}
   */
    let carousel; // for calling methods of the carousel instance
    
    const handleNextClick = () => {
      carousel.goToNext()
    }
  </script>  
  {#if browser}
    <Carousel
    arrows={false}
    autoplay={true}
      bind:this={carousel}
    >
    
      <!-- <div class="bg-CodGray"> -->
        {#each carouselImages as carimage }
          <img src={imagebuilder(carimage)} alt="">
        {/each}

      <!-- </div> -->

    </Carousel>
  {/if} 
  