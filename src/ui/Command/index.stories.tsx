import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import React, { ComponentProps } from "react";
import { CustomCommand, DialogCommand } from ".";

type CommandProps = ComponentProps<typeof CustomCommand>;

const meta: Meta = {
  title: "UI/Command",
  component: CustomCommand,
  tags: ["autodocs"],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    commandGroups: {
      control: {
        type: 'object',
      },
      description: 'Un objeto que contiene un array de objetos con la forma `{ heading: string, items: { label: string, icon?: Icons }[] }`',
    },
    noResults: {
      control: {
        type: 'text',
      },
      description: 'El mensaje que se muestra cuando no hay resultados',
    },
    placeholder: {
      control: {
        type: 'text',
      },
      description: 'El texto del placeholder del input',
    },
  },
};

export default meta;


type CommandWithIconsStory = StoryObj<CommandProps>;

export const Default: CommandWithIconsStory = {
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
    noResults: "No results found.",
    placeholder: "Type a command or search...",
  },
  render: (props) => {
    return <CustomCommand
      commandGroups={props.commandGroups}
      noResults={props.noResults}
      placeholder={props.placeholder}
    />
  }
};


type DialogCommandProps = ComponentProps<typeof DialogCommand>;

type DialogCommandStory = StoryObj<DialogCommandProps>;

export const With_Dialog: DialogCommandStory = {
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
    onOpenChange: fn((value) => !value),
    kbdText: "ctrl + J",
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