<script lang="ts">
export let Posititon:string;
export let options:optn[];
export let rotation:string;

type optn={
    title:        string;
    name:string;
    type:         string;
    internalLink: string;
    url: string;
    _type:        string;
    _key:         string;
}
</script>
<div class="absolute w-[7.5rem] h-[67.5rem] top-0 {Posititon} flex flex-col justify-center m-auto">
    <div class="{rotation} flex justify-center">
        {#each options as option}
            <a href={option.internalLink || option.url} class="text-[1.25rem] font-[400] leading-[1.25rem] px-[1rem]">{option.title || option.name}</a>
        {/each}
    </div>

</div>