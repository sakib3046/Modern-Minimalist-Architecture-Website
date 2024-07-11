<script>
    export let aboutCardData;
    console.log(aboutCardData.title);
</script>
<div class="flex flex-col justify-start">
    <h1 class="text-[2.5rem] md:text-[3.5rem] text-white">{aboutCardData.count}</h1>
    <p class="text-[1rem] text-white ">{aboutCardData.title_p1}</p>
    <p class="text-[1rem] text-white ">{aboutCardData.title_p2}</p>
</div>