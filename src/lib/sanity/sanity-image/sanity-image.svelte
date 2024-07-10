<script lang="ts">
  import type { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder';
  import type {
    ImageUrlBuilderOptionsWithAliases,
    SanityImageSource,
  } from '@sanity/image-url/lib/types/types';
  import type { HTMLImgAttributes } from 'svelte/elements';
  import { defaultSanityImageDefaults } from './defaults';
  import {
    generateWidths,
    isSanityDimensionedImage,
    isSanityImageWithLqip,
  } from './fns';
  import type { AutoWidths, SanityImageProps } from './types';
  import { cn } from '$lib/utils/helpers';

  type $$Props = SanityImageProps &
    Omit<HTMLImgAttributes, 'src'> & { fadeInAnimation?: boolean };

  //Max default allows for 1920px width @ 2x
  const defaults = (globalThis.sanityImageDefaults ??=
    defaultSanityImageDefaults);

  export let imageUrlBuilder: ImageUrlBuilder | undefined =
    defaults.imageUrlBuilder;
  export let src: SanityImageSource;
  export let widths: number[] | AutoWidths = defaults.autoWidths;
  export let lqip: boolean = defaults.lqip;
  export let options: Partial<ImageUrlBuilderOptionsWithAliases> = {};
  export let autoFormat: boolean = defaults.autoFormat;
  export let fadeInAnimation = true;

  function imgProps() {
    const builder = imageUrlBuilder
      ?.image(src)
      .withOptions({ auto: autoFormat ? 'format' : undefined });

    if (!builder) {
      throw new Error('No image url builder specified, and no default set!');
    }

    const determinedWidths = Array.isArray(widths)
      ? widths
      : generateWidths(widths ?? defaults.autoWidths, src);

    const determinedLqip = lqip ?? defaults.lqip;

    const [width, height] = isSanityDimensionedImage(src)
      ? [
          src.asset.metadata.dimensions.width,
          src.asset.metadata.dimensions.height,
        ]
      : [undefined, undefined];

    const srcset = determinedWidths
      .map(
        (w: number) =>
          `${builder
            .width(w)
            .withOptions(options ?? {})
            .url()} ${w}w`,
      )
      .join(', ');

    const lqipStyle = `background: ${
      isSanityImageWithLqip(src)
        ? `url(${src.asset.metadata.lqip}) no-repeat`
        : undefined
    }; background-size: cover; `;
    let style = (lqip ? lqipStyle : '') + ($$restProps.style ?? '');

    return { builder, determinedLqip, width, height, srcset, style };
  }

  let img: HTMLImageElement | undefined;
  let imgWrapper: HTMLDivElement | undefined;
  let props = imgProps();
  let isLoaded = false;

  $: if (img) {
    if (img.complete) isLoaded = true;
    else img.addEventListener('load', () => (isLoaded = true));
  }
</script>

<!-- alt tag will come from parent -->
<!-- svelte-ignore a11y-missing-attribute -->
<div
  bind:this={imgWrapper}
  class:loaded={isLoaded}
  class={cn('blurred-img relative h-full w-full', $$props.class)}
  style={props.style}>
  <img
    bind:this={img}
    style="--initial-opacity: {fadeInAnimation && lqip ? 0 : 1}"
    src={props.builder.url()}
    srcset={props.srcset}
    width={props.width}
    height={props.height}
    {...$$restProps} />
</div>

<style>
  img {
    opacity: var(--initial-opacity);
    transition: opacity 250ms ease-in-out;
  }
  .blurred-img.loaded img {
    opacity: 1;
  }

  .blurred-img::before {
    content: '';
    position: absolute;
    inset: 0;
    opacity: 0;
    background-color: white;
  }
  .blurred-img.loaded::before {
    animation: none;
    content: none;
  }
</style>
