import type { Meta, StoryObj } from '@storybook/react';

import { Timeline, TimelineItem } from './timeline';

const meta: Meta<typeof Timeline> = {
title: "Components/timeline/Vertical",
  tags: ["autodocs"],
  component: Timeline,
};

export default meta;
type Story = StoryObj<typeof Timeline>;

  
export const Default: Story = {
  args: {
    status: "Done",
    line: true,
    first: true,
    end: true
  }
};



export const row: Story = {
    render: (args) => (
        <div className="flex flex-col gap-0">
            <TimelineItem status='Done' line={true} first={false} end={true}>
              <p className='h-60 bg-seidor-blue-dark text-white p-5'>Children</p>
            </TimelineItem>

            <TimelineItem status='Done' line={true} first={true} end={true}>
              <p className='h-60 bg-seidor-blue-dark text-white p-5'>Children</p>
            </TimelineItem>

            <TimelineItem status='Done' line={true} first={true} end={false}>
              <p className='h-60 bg-seidor-blue-dark text-white p-5'>Children</p>
            </TimelineItem>
        </div>
    ),
    args: {
        status: "Done",
        title: "Hola",
        line: true,
        first: true,
        end: true
    }
};