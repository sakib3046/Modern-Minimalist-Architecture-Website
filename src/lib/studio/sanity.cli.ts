import { defineCliConfig } from 'sanity/cli';
import {
  PUBLIC_SANITY_PROJECT_ID,
  PUBLIC_SANITY_DATASET,
} from '$env/static/public';

export default defineCliConfig({
  api: {
    projectId: PUBLIC_SANITY_PROJECT_ID,
    dataset: PUBLIC_SANITY_DATASET,
  },
});
