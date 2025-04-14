import { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";
import { useArgs } from "storybook/internal/preview-api";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from ".";
import { Button } from "../Button";

type StoryProps = ComponentProps<typeof Sheet>;

const meta: Meta<StoryProps> = {
    title: "UI/Sheet",
    component: Sheet,
    tags: ["autodocs"],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        open: {
            control: {
                type: 'boolean',
            }
        },
        modal: {
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
        open: false,
        modal: false,
    },
    render: function Render(props) {
        const [{ open }, updateArgs] = useArgs();

        function onChange() {
            updateArgs({ open: !open });
        }

        return <Sheet {...props} onOpenChange={onChange} open={open}>
            <SheetTrigger asChild>
                <Button variant="outline">Open</Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Are you absolutely sure?</SheetTitle>
                    <SheetDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    }
};