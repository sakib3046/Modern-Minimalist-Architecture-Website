<script lang="ts">
  import type { AboutCard } from "$lib/types/landing.types";

    export let aboutCardData:AboutCard;
    
</script>
<div class="flex flex-col justify-start mb-[32px] md:mb-[48px]">
    <h3 class="text-[2.5rem] leading-[2.5rem] md:leading-[3.5rem] font-[700] md:text-[3.5rem] text-white">{aboutCardData.count}</h3>
    <p class="text-[1rem] font-[400] leading-[1.5rem] text-white ">{aboutCardData.title_p1}</p>
    <p class="text-[1rem] font-[400] leading-[1.5rem] text-white ">{aboutCardData.title_p2}</p>
</div>