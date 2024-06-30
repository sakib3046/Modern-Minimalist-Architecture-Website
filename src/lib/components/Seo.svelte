<script lang="ts">
  import { MetaTags } from 'svelte-meta-tags';
  import { urlFor } from '$lib/sanity/sanity-client';
  import type { SanityAsset } from '@sanity/image-url/lib/types/types';
  import type { SeoProps } from '$lib/types/common.types';

  export let seo: SeoProps;
  export let siteOgImg: SanityAsset | undefined = undefined;

  let title = seo.title;
  let description = seo.description;
  let ogImage = seo?.ogImage ?? siteOgImg;

  const openGraphImages = ogImage
    ? [
        { w: 800, h: 600 },
        { w: 1200, h: 630 },
        { w: 600, h: 600 },
        { w: 256, h: 256 },
      ].map(({ w, h }) => ({
        url: `${urlFor(ogImage).width(w).height(h).url()}`,
        width: w,
        height: h,
        alt: `${title}`,
      }))
    : [];
</script>

<MetaTags
  {title}
  {description}
  canonical="https://www.edistys.dev"
  openGraph={{
    type: 'website',
    title,
    description,
    url: 'https://www.edistys.dev',
    images: openGraphImages,
    siteName: 'Edistys',
  }}
  twitter={{
    cardType: 'summary_large_image',
    title,
    description,
    image: urlFor(ogImage).width(600).height(400).auto('format').url(),
  }} />
