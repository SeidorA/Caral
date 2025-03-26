import { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";
import { Label } from ".";
import { Checkbox } from "../Checkbox";


type StoryProps = ComponentProps<typeof Label>;

const meta: Meta<StoryProps> = {
    title: "UI/Label",
    component: Label,
    tags: ["autodocs"],
    parameters: {
        layout: 'centered',
    },
    argTypes: {

    }
};

export default meta;

type Story = StoryObj<StoryProps>;


export const Default: Story = {
    args: {
        htmlFor: "terms",
        children: "Accept terms and conditions",
    },
    render: (props) => <div className="flex items-center space-x-2">
        <Checkbox id={props.htmlFor} />
        <Label {...props} />
    </div>,
};

export const Disabled: Story = {
    args: {
        htmlFor: "terms",
        children: "Accept terms and conditions",
    },
    render: (props) => <div className="flex items-center space-x-2">
        <Checkbox id={props.htmlFor} disabled />
        <Label {...props} />
    </div>,
};