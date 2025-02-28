import type { Meta, StoryObj } from '@storybook/react';

import { Tab } from './tab';

const meta: Meta<typeof Tab> = {
title: "Components/Tabs/tab",
  tags: ["autodocs"],
  component: Tab,
};

export default meta;
type Story = StoryObj<typeof Tab>;

  
export const Default: Story = {
  args: {
    title: "Tab",
    status: "Default"
  }
};

export const Active: Story = {
  args: {
    title: "Tab",
    status: "Active"
  }
};
