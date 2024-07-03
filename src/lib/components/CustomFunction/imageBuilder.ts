import imageUrlBuilder from '@sanity/image-url';
import { sanityClient } from '$lib/sanity/sanity-client';
const builder = imageUrlBuilder(sanityClient);

// export let imagebuilder=(image:object)=>( 
//     return builder.image(image).url();
// );
export function imagebuilder(image:object) {
    return builder.image(image).url();
}