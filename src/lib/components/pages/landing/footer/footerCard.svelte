<script lang="ts">
    export let optionsTitle;
    export let options;
    console.log(options);
    

</script>
<div class="">
<h1>{optionsTitle}</h1>
{#each options as option}

        <ul class="list-none">
            <li>

                <a href={option.url}>{option.name}</a>
            </li>
        </ul>    
{/each}
</div>