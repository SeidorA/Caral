import { ComponentProps } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";
import { useArgs } from "storybook/internal/preview-api";

type StoryProps = ComponentProps<typeof Checkbox>;

const meta: Meta<StoryProps> = {
    title: "UI/Checkbox",
    component: Checkbox,
    tags: ["autodocs"],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        checked: {
            control: {
                type: 'boolean',
            }
        },
        disabled: {
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
        checked: true,
        disabled: false,
    },
    render: function Render(props) {
        const [{ open }, updateArgs] = useArgs();

        function onChange() {
            updateArgs({ open: !open });
        }
        return <Checkbox {...props} onChange={onChange} checked={open} />
    }
};