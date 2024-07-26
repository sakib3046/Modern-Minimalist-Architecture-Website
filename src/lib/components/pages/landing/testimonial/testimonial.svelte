<script lang="ts">
  import type { Testimonial } from '$lib/types/common.types';
  import TestimonialCard from './testimonialCard.svelte';

  export let testimonialData:Testimonial;
  // console.log(testimonialData);
</script>

<div
  class="flex w-full flex-col justify-center px-[0.938rem] py-[3.956rem] md:px-[2.5rem] md:py-[7.956rem] xl:px-[20rem]">
  <div class="md:px-[2.5rem]">
    <h1 class="text-[2rem] font-[700] xl:pl-[4rem]">
      {testimonialData.sectionTitle}
    </h1>
    <div class="h-[3rem] md:h-[5rem]"></div>
    <div class="flex flex-col justify-between md:flex-row">
      <div class="flex w-full md:w-1/2">
        <TestimonialCard cardData={testimonialData.testimonial[0]} />
      </div>

      <div class="h-[3rem] md:hidden"></div>

      <div class="flex w-full md:w-1/2">
          <TestimonialCard cardData={testimonialData.testimonial[1]} />
      </div>
    </div>
  </div>
</div>
