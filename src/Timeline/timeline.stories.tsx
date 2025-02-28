import type { Meta, StoryObj } from '@storybook/react';

import { Timeline } from './timeline';

const meta: Meta<typeof Timeline> = {
title: "Components/Timeline",
  tags: ["autodocs"],
  component: Timeline,
};

export default meta;
type Story = StoryObj<typeof Timeline>;

  
export const Default: Story = {
  args: {
    status: "Done",
    title: "Hola",
    line: true,
    first: true,
    end: true
  }
};


