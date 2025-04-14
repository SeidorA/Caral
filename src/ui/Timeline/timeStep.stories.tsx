import type { Meta, StoryObj } from '@storybook/react';

import { TimeStep } from '.';



const meta: Meta<typeof TimeStep> = {
  title: "ui/timeline/Horizontal",
  tags: ["autodocs"],
  component: TimeStep,
};

export default meta;
type Story = StoryObj<typeof TimeStep>;




export const Simple: Story = {
  args: {
    status: "Done",
    title: "Hola",
    line: true,
    first: true,
    end: true
  }
};


export const row: Story = {
  render: (args) => (
    <div className="flex">
      <TimeStep {...args} />
      <TimeStep {...args} />
      <TimeStep number={3} line={false} status='Default' title="Final" />
    </div>
  ),
  args: {
    status: "Done",
    title: "Hola",
    line: true,
    first: true,
  }
};