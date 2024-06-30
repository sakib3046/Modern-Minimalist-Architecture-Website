import type { SanityImageDefaults } from './types';
/**
 * The default values for sanityImageDefaults
 * The width has been picked to full-width images for up to 1920px @2x screens
 */
export const defaultSanityImageDefaults: SanityImageDefaults = {
  autoWidths: {
    maxWidth: 3840,
    step: 320,
  },
  autoFormat: true,
  lqip: false,
};

export function setSanityImageDefaults(defaults: Partial<SanityImageDefaults>) {
  if (!globalThis.sanityImageDefaults) {
    globalThis.sanityImageDefaults = defaultSanityImageDefaults;
  }
  Object.entries(defaults).forEach(([k, v]) => {
    //@ts-expect-error keys don't match up
    globalThis.sanityImageDefaults[k] = v;
  });
}
