import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials"
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      // Custom Vite configuration for Storybook build
      build: {
        sourcemap: false,
        commonjsOptions: {
          include: [/node_modules/],
          transformMixedEsModules: true
        }
      },
      resolve: {
        alias: {
          // Add any necessary aliases here
        },
      },
    });
  },
  core: {
    disableTelemetry: true,
  },
  staticDirs: ['../public'],
};

export default config;