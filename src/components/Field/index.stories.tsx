import { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";
import { Field } from "./index";


type StoryProps = ComponentProps<typeof Field>;

const meta: Meta<StoryProps> = {
    title: "UI/Form Components/Field",
    component: Field,
    tags: ["autodocs"],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        type: {
            control: { type: "select" },
            options: ["button", "checkbox", "color", "date", "datetime-local", "email", "file", "hidden", "image", "month", "number", "password", "radio", "range", "reset", "search", "submit", "tel", "text", "time", "url", "week"],
            description: 'An Field can have different text-based types based on the type of value the user will enter.'
        },
        placeholder:{
            description: "Placeholder text for the Field. If using this instead of a label (which is not recommended), be sure to provide an aria-label for screen reader users."
        },
        required: {
            description: "If true, the Field will be marked as required. This will add a red text to the label and a message in Spanish or English depending on the user's language.",
            options: [true, false],
            control: { type: "boolean" },
            defaultValue: false,
        },
        optional: {
            description: "If true, the Field will be marked as optional. This will add a gray text to the label and a message in Spanish or English depending on the user's language.",
            options: [true, false],
            control: { type: "boolean" },
            defaultValue: true,
        },
        helper: {
            description: "Helper text for the Field. This will be displayed below the Field."
        },
        label: {
            description: "Label text for the Field. This will be displayed above the Field."
        },
        id: {  
            description: "Id for the Field. This will be used to link the label with the Field."
        }

    }
};

export default meta;

type Story = StoryObj<StoryProps>;


export const Default: Story = {
    args: {
        type: "text",
        placeholder: "Placeholder",
        id: "",
        required: false,
        optional: true,
        helper: "Helper"
    },
    render: (props) => <Field {...props} />,
};