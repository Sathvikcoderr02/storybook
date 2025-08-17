import type { Preview } from '@storybook/react';
import '../src/index.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
      expanded: true,
    },
    darkMode: {
      stylePreview: true,
      darkClass: 'dark',
      lightClass: 'light',
      classTarget: 'html',
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#1a1a1a' },
      ],
    },
    layout: 'centered',
    docs: {
      toc: true,
    },
    options: {
      storySort: {
        order: ['Introduction', 'Components', 'Examples'],
      },
    },
  },
};

export default preview;