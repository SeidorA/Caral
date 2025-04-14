import { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from ".";
import { Button } from "../Button";


type StoryProps = ComponentProps<typeof Tooltip & { content: string }>;

const meta: Meta<StoryProps> = {
  title: "UI/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  parameters: {
    layout: 'centered',
  },
  argTypes: {


  },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
  args: {
    delayDuration: 200,
    children: 'Tooltip',
    defaultOpen: false,
  },
  render: function Render(props) {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant={'ghost'}> {props.children}</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Add to library</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )

  }
};