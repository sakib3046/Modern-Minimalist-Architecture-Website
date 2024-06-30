import { defineConfig } from 'sanity';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas/index';
import { AppStructure } from './deskStucture';
import { PUBLIC_SANITY_PROJECT_ID } from '$env/static/public';
import { structureTool } from 'sanity/structure';

export default defineConfig([
  {
    projectId: PUBLIC_SANITY_PROJECT_ID,
    dataset: 'production',
    name: 'production-workspace',
    basePath: '/studio/production',
    title: 'Production',
    // icon: Logo,
    plugins: [structureTool({ structure: AppStructure }), visionTool()],
    schema: {
      types: schemaTypes,
    },
  },
  {
    projectId: PUBLIC_SANITY_PROJECT_ID,
    dataset: 'staging',
    name: 'staging-workspace',
    basePath: '/studio/staging',
    title: 'Staging',
    // icon: Logo,
    plugins: [structureTool({ structure: AppStructure }), visionTool()],
    schema: {
      types: schemaTypes,
    },
  },
]);
