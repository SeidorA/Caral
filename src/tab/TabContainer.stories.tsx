


import type { Meta, StoryObj } from '@storybook/react';

import { TabContainer } from './tab';
import { Tab } from './tab';

const meta: Meta<typeof TabContainer> = {
title: "Components/Tabs/TabContainer",
  tags: ["autodocs"],
  component: TabContainer,

  argTypes: {
    children:{
        description:  "Enter the tabs that make up this grid",
        control: {
            type: "object"
        }, 
    }
  }
};

export default meta;
type Story = StoryObj<typeof TabContainer>;


export const Default: Story = {
  args: {
    children: <>
      <Tab status="Active" title="Tab Active" />
      <Tab status="Default" title="Tab Default" />      
      <Tab status="Dessable" title="Tab Dessable" />
    </>
  }
};

