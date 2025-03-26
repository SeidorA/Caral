import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import React, { ComponentProps } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from ".";
import { Button } from "../Button";
import { DialogCommand } from "../Command";
import { Input } from "../Input";
import { Label } from "../Label";

type DialogProps = ComponentProps<typeof Dialog>;

const meta: Meta = {
  title: "UI/Dialog",
  component: Dialog,
  tags: ["autodocs"],
  parameters: {
    layout: 'centered',
  },
  args: {
    onOpenChange: fn((value) => !value),
  },
  argTypes: {
    open: {
      control: {
        type: "boolean",
      },
      description: "Muestra u oculta el diálogo.",
      table: { type: { summary: "boolean" }, defaultValue: { summary: "false" } },
    },
    onOpenChange: {
      action: "onOpenChange",
      description: "Se dispara cuando se abre o cierra el diálogo.",
    },
  },
};

export default meta;

type DialogStory = StoryObj<DialogProps>;

export const Default: DialogStory = {
  render: (props) => {
    return < Dialog {...props} >
      <DialogTrigger asChild>
        <Button variant="ghost">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  }
};

type DialogCommandProps = ComponentProps<typeof DialogCommand>;

type DialogCommandStory = StoryObj<DialogCommandProps>;

export const With_Command: DialogCommandStory = {
  args: {
    commandGroups: [
      {
        heading: "Suggestions",
        items: [
          { label: "Calendar", icon: 'calendar' },
          { label: "Search Emoji", icon: 'search' },
          { label: "Calculator", icon: 'calculator' },
        ]
      },
      {
        heading: "Settings",
        items: [
          { label: "Profile", icon: 'userConfig' },
          { label: "Billing", icon: 'creditCard' },
          { label: "Settings", icon: 'gear' },
        ]
      }
    ],
    kbdText: "⌘J",
    onOpenChange: fn((value) => !value),
    noResults: "No results found.",
    placeholder: "Type a command or search...",
  },
  render: (props) => {
    const [_open, setOpen] = React.useState(false)

    React.useEffect(() => {
      const down = (e: KeyboardEvent) => {
        if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
          e.preventDefault()
          setOpen((_open) => !_open)
        }
      }

      document.addEventListener("keydown", down)
      return () => document.removeEventListener("keydown", down)
    }, [])

    return <DialogCommand open={_open} {...props} />
  }
}