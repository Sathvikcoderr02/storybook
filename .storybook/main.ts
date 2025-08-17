import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-links",
    "@storybook/addon-interactions",
    "@storybook/addon-onboarding"
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {
      strictMode: true
    }
  },
  core: {
    disableTelemetry: true,
    builder: '@storybook/builder-vite'
  },
  features: {
    storyStoreV7: true,
  },
  docs: {
    autodocs: 'tag',
  },
  staticDirs: ['../public']
};

export default config;