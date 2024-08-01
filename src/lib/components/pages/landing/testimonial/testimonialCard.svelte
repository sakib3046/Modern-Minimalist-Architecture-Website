<script lang="ts">
  import type { TestimonialElement } from "$lib/types/landing.types";

    export let cardData:TestimonialElement;
</script>
<div class="">
    <p class="text-[1.25rem] font-[400] leading-[1.875rem] md:text-[1.5rem] md:font-[400] md:leading-[2.25rem] md:pr-[4.5rem]">{cardData.testimonial}
    </p>
    <div class="h-[2rem] md:h-[3rem]"></div>
        <h5 class="text-[1.5rem] font-[700] leading-[2.25rem]">{cardData.clientName}</h5>
        <h5 class="text-[1rem] font-[400] leading-[1.5rem]">{cardData.clientRole}</h5>
</div>

