<script lang='ts'>
  import type {Header} from "$lib/types/landing.types";
  import Carousel from "./Carousel.svelte";

export let HeaderData : Header;
// console.log(HeaderData) 
</script>
<div class="px-[0.938rem] md:px-[2.5rem] xl:px-[22.5rem] bg-center bg-cover xl:bg-contain text-center text-nowrap bg-Alabster">
  <Carousel carouselImages={HeaderData.sliderImage} sliderImageText={HeaderData.sliderImageText}/>
</div>
<div class="smScreenHeading md:mdxlScreenHeading px-[0.938rem] md:px-[2.5rem] xl:px-[22.5rem] text-center py-[4rem] md:py-[8rem] bg-Alabster">
  <p>{HeaderData.headerText[0].children[0].text}</p>
</div>
