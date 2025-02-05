import type { Preview } from "@storybook/react";
import "../src/sass/caral.scss"
import "../src/index.css"

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        
        date: /Date$/i,
      },
    },

    backgrounds: {
      values: [
        { name: 'Light', value: '#E2E8F0' },
        { name: 'Dark', value: '#0F172B' },
      ],
    },

  },
};

export default preview;
