import { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";
import { Input } from ".";
import { Label } from "../Label";
import { InputPassword } from "./InputPassword";
import { Controls, Description } from "@storybook/blocks";


type StoryProps = ComponentProps<typeof Input>;

const meta: Meta<StoryProps> = {
    title: "UI/Form Components/Input",
    component: Input,
    tags: ["autodocs"],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        type: {
            control: { type: "select" },
            options: ["button", "checkbox", "color", "date", "datetime-local", "email", "file", "hidden", "image", "month", "number", "password", "radio", "range", "reset", "search", "submit", "tel", "text", "time", "url", "week"],
            description: 'An input can have different text-based types based on the type of value the user will enter.'
        },
        placeholder:{
            description: "Placeholder text for the input. If using this instead of a label (which is not recommended), be sure to provide an aria-label for screen reader users."
        },
        id: {
            description: "The attribute ID is a unique identifier assigned to the input component. ",
            control: { type: "text" }
        }
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
        <div className="grid w-full items-center gap-1.5">
            <Label htmlFor={props.id}>Label</Label>
            <Input {...props} />
        </div>
    ),
};

export const Date: Story = {
    args: {
        type: "date",
    },
    render: (props) => <Input {...props} />,
};


