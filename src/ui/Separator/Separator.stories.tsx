import { ComponentProps } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Separator } from "./Separator";

type StoryProps = ComponentProps<typeof Separator>;

const meta: Meta<StoryProps> = {
    title: "UI/Separator",
    component: Separator,
    tags: ["autodocs"],
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
        decorative: {
            control: {
                type: 'boolean',
            }
        }
    },
};

export default meta;

type Story = StoryObj<StoryProps>;


export const Default: Story = {
    args: {
        orientation: "horizontal",
        className: "bg-seidor-warning-default",
        decorative: true,
    },
    render: (props) => <div>
        <div className="space-y-1">
            <h4 className="text-lg font-medium leading-none">Caral UI</h4>
            <p className="text-sm text-muted-foreground">
                Una librería de componentes.
            </p>
        </div>
        <Separator {...props} className="my-2 bg-seidor-warning-default" />
        <div className="flex h-5 items-center space-x-4 text-sm">
            <div>Blog</div>
            <Separator {...props} orientation="vertical" />
            <div>Docs</div>
            <Separator {...props} orientation="vertical" />
            <div>Source</div>
        </div>
    </div>,
};