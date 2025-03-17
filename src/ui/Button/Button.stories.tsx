import { ComponentProps } from "react";
import { Button } from "./Button";
import { Meta, StoryObj } from "@storybook/react";
// import { fn } from "@storybook/test";


type StoryProps = ComponentProps<typeof Button>;

const meta: Meta<StoryProps> = {
    title: "UI/Button",
    component: Button,
    tags: ["autodocs"],
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    argTypes: {
        variant: {
            control: { type: "select" },
            options: ["default", "aprove", "danger", "indigo", "info", "sakura", "warning", "outline", "ghost", "link"],
        },
        size: {
            control: { type: "select" },
            options: ["default", "sm", "lg", "icon"],
        },
        type: {
            control: { type: "select" },
            options: ["submit", "reset", "button"],
        },
    },
    // args: { onClick: fn() },
};

export default meta;

type Story = StoryObj<StoryProps>;


export const Default: Story = {
    args: {
        children: "Button Caral",
        size: "default",
        variant: "default",
        type: "button",
        asChild: false,
    },
    render: (props) => <Button {...props} />,
};

export const Colors: Story = {
    args: {
        children: "Button Caral",
    },
    render: (props) => <div className="flex flex-col gap-2">
        <Button {...props} >Default</Button>
        <Button {...props} variant="aprove">Button Aprove</Button>
        <Button {...props} variant="danger">Button Danger</Button>
        <Button {...props} variant="indigo">Button Indigo</Button>
        <Button {...props} variant="info">Button Info</Button>
        <Button {...props} variant="sakura">Button Sakura</Button>
        <Button {...props} variant="warning">Button Warning</Button>
        <Button {...props} variant="outline">Button Outline</Button>
        <Button {...props} variant="ghost">Button Ghost</Button>
        <Button {...props} variant="link">Button Link</Button>
    </div>,
};

export const Sizes: Story = {
    args: {
        children: "Button Caral",
    },
    render: (props) => <div className="flex flex-col gap-2">
        <Button {...props} size="sm">Button Small</Button>
        <Button {...props} size="md">Button Medium</Button>
        <Button {...props} size="default">Button Default</Button>
        <Button {...props} size="lg">Button Large</Button>
    </div>,
};

export const Icons: Story = {
    args: {
        children: "Button Caral"
    },
    render: (props) => <div className="flex gap-2">
        <Button {...props} size="icon" iconName="eye">Button Icon</Button>
        <Button {...props} variant='aprove' size="icon" iconName="building">Button Icon</Button>
        <Button {...props} variant='danger' size="icon" iconName="clickCursor">Button Icon</Button>
        <Button {...props} variant='indigo' size="icon" iconName="camera">Button Icon</Button>
        <Button {...props} variant='info' size="icon" iconName="pc">Button Icon</Button>
        <Button {...props} variant='sakura' size="icon" iconName="cloud">Button Icon</Button>
        <Button {...props} variant='warning' size="icon" iconName="airplane">Button Icon</Button>
        <Button {...props} variant='outline' size="icon" iconName="creditCard">Button Icon</Button>
        <Button {...props} variant='ghost' size="icon" iconName="train">Button Icon</Button>
    </div>,
};