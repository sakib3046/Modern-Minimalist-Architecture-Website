<script lang="ts">
    import type { HTMLButtonAttributes } from 'svelte/elements';
  import { cn } from '$lib/utils/helpers';
    interface $$Props extends HTMLButtonAttributes {
      active: boolean;
      clickAction: () => void;
      slideNumber:number
    }
    export let slideNumber:number;
  </script>
  
  <button
    class={cn(
      'group flex cursor-pointer items-center justify-center r bg-transparent transition-colors duration-300',
      $$props.active && '',
      $$props.class,
    )}
    on:click={$$props.clickAction}
    aria-current={$$props.active}
    aria-label="Next Slide"
    {...$$restProps}
  >
    <div
    class={cn(
      'transition-colors duration-300 text-[#8F8F8F] text-[0.938rem] font-[400] leading-[2.625rem]',
      $$props.active && 'text-Emperor',
    )}
  >{slideNumber}.</div>
  </button>
  