import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { ComponentProps } from "react";
import { Button } from ".";
import { iconGroups } from '../../atoms/icons';


type StoryProps = ComponentProps<typeof Button>;

const meta: Meta<StoryProps> = {
    title: "UI/Form Components/Button",
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
            description: 'Used to describe the color of the button',
            defaultValue: ["default"]
        },
        children: {
            description: 'The content of the button'
        },
        size: {
            control: { type: "select" },
            options: ["default", "sm", "lg", "icon"],
            description: 'Determines the size of the button or if it includes an icon'
        },
        type: {
            control: { type: "select" },
            options: ["submit", "reset", "button"],
            description: 'Determines what type of button it is'
        },
        iconName: {
            if: { arg: 'size', eq: 'icon' },
            control: { type: "select" },
            options: Object.keys(iconGroups).reduce<string[]>((acc, key) => [...acc, ...(iconGroups[key as keyof typeof iconGroups] || [])], []),
            description: 'Name of the icon you want to include in the button'
        },
    },
    args: { onClick: fn() },
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

    },
    render: (props) => <div className="flex gap-2">
        <Button {...props} size="icon" iconName="eye" />
        <Button {...props} variant='aprove' size="icon" iconName="building" />
        <Button {...props} variant='danger' size="icon" iconName="clickCursor" />
        <Button {...props} variant='indigo' size="icon" iconName="camera" />
        <Button {...props} variant='info' size="icon" iconName="pc" />
        <Button {...props} variant='sakura' size="icon" iconName="cloud" />
        <Button {...props} variant='warning' size="icon" iconName="airplane" />
        <Button {...props} variant='outline' size="icon" iconName="creditCard" />
        <Button {...props} variant='ghost' size="icon" iconName="train" />
    </div>,
};

export const Icon_Text: Story = {
    args: {
        children: "Button Caral",
    },
    render: (props) => <div className="flex gap-2">
        <Button {...props} size="icon" iconName="eye" >Icon Left</Button>
        <Button {...props} size="icon" iconName="building" >Icon Right</Button>
    </div>,
};