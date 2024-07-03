<script lang='ts'>
  import Carousel from "./Carousel.svelte";

export let HeaderData;
//console.log(HeaderData) 
</script>
<Carousel carouselImages={HeaderData.sliderImage}/>