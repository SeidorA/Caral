import type { Meta, StoryObj } from '@storybook/react';

import { Avatar } from './avatar';

const meta: Meta<typeof Avatar> = {
title: "Components/Avatar",
  tags: ["autodocs"],
  component: Avatar,
};

export default meta;
type Story = StoryObj<typeof Avatar>;



export const Default: Story = {
  args: {
    bgcolor: "primary"
  }
};

