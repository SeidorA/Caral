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
    
    docs: {
      transformSource: (input: string) => {
        return input.replace(
          /({\s*args:\s*{([^}]+)}\s*},\s*render:\s*\(\s*props\s*\)\s*=>\s*<\s*([^ ]+)\s*{...props}\s*\/>)/,
          `<$3 $2 />`
        );
      },
    },
  },
};

export default preview;