import { withThemeByClassName } from '@storybook/addon-themes';
import type { Preview } from '@storybook/react';
import "../src/index.css";

/* snipped for brevity */

export const decorators = [withThemeByClassName({
  themes: {
    light: 'light',
    dark: 'dark',
  },
  defaultTheme: 'light',
})];

const preview: Preview = {
  tags: ['autodocs'],
  parameters: {
    controls: {
      matchers: {
        
        date: /Date$/i,
      },
    },
  },
};

export default preview;