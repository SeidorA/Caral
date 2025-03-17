import { ComponentProps } from "react";
import { Input } from "./Input";
import { InputPassword } from "./InputPassword"
import { Meta, StoryObj } from "@storybook/react";
import { Label } from "../Label/Label";


type StoryProps = ComponentProps<typeof Input>;

const meta: Meta<StoryProps> = {
    title: "UI/Input",
    component: Input,
    tags: ["autodocs"],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        type: {
            control: { type: "select" },
            options: ["button", "checkbox", "color", "date", "datetime-local", "email", "file", "hidden", "image", "month", "number", "password", "radio", "range", "reset", "search", "submit", "tel", "text", "time", "url", "week"],
        },
    }
};

export default meta;

type Story = StoryObj<StoryProps>;


export const Default: Story = {
    args: {
        type: "text",
        placeholder: "Placeholder",
    },
    render: (props) => <Input {...props} />,
};

export const Password: Story = {
    args: {
        type: "password",
        placeholder: "Placeholder",
    },
    render: (props) => <InputPassword {...props} />,
};

export const Disabled: Story = {
    args: {
        type: "text",
        placeholder: "Placeholder",
        disabled: true,
    },
    render: (props) => <Input {...props} />,
};

export const File: Story = {
    args: {
        type: "file",
    },
    render: (props) => <Input {...props} />,
};

export const WothLabel: Story = {
    args: {
        id: "email",
        type: "email",
        placeholder: "Placeholder",
    },
    render: (props) => (
        <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor={props.id}>Label</Label>
            <Input {...props} />
        </div>
    ),
};


