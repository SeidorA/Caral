import { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";
import { Separator } from ".";
import { cn } from "../../lib/utils";

type StoryProps = ComponentProps<typeof Separator>;

const meta: Meta<StoryProps> = {
    title: "UI/Separator",
    component: Separator,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        orientation: {
            control: {
                type: 'select',
                options: ['horizontal', 'vertical']
            }
        },
    },
};

export default meta;

type Story = StoryObj<StoryProps>;


export const Default: Story = {
    args: {
        orientation: "horizontal",
        className: "bg-seidor-warning",
    },
    render: (props) => <div>
        <div className="space-y-1">
            <h4 className="text-lg font-medium leading-none">Caral UI</h4>
            <p className="text-sm text-muted-foreground">
                Una librería de componentes.
            </p>
        </div>
        <Separator {...props} className={cn('my-2', props.className)} />
        <div className="flex h-5 items-center space-x-4 text-sm">
            <div>Blog</div>
            <Separator {...props} orientation="vertical" />
            <div>Docs</div>
            <Separator {...props} orientation="vertical" />
            <div>Source</div>
        </div>
    </div>,
};

export const Vertical: Story = {
    args: {
        orientation: "vertical",
        className: "bg-seidor-warning",
    },
    render: (props) => <div className="h-96">
        <Separator {...props} />

    </div>,
};

export const Horizontal: Story = {
    args: {
        orientation: "horizontal",
        className: "bg-seidor-warning",
    },
    render: (props) => <div className="w-96">
        <Separator {...props} />
    </div>,
};