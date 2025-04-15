
import { Meta, StoryObj } from "@storybook/react";
import { CaralIcon } from "iconcaral2";
import * as React from "react";
import { toast } from "sonner";
import { Toaster } from ".";
import { Button } from "../Button";

type ToasterProps = React.ComponentProps<typeof Toaster>;

const meta: Meta<ToasterProps> = {
  title: "UI/Sooner",
  component: Toaster,
  tags: ["autodocs"],
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div className="flex items-center justify-center">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    theme: {
      options: ["dark", "light", "system"],
      control: { type: "select" },
      description: "Toast's theme, either 'light', 'dark', or 'system'.",
      table: {
        defaultValue: { summary: "system" },
      }
    },
    richColors: {
      control: { type: "boolean" },
      description: "Makes error and success states more colorful.",
      table: {
        defaultValue: { summary: "false" },
      }
    },
    expand: {
      control: { type: "boolean" },
      description: "Toasts will be expanded by default.",
      table: {
        defaultValue: { summary: "false" },
      }
    },
    visibleToasts: {
      control: { type: "number" },
      description: "Amount of visible toasts.",
      table: {
        defaultValue: { summary: "3" },
      }
    },
    position: {
      options: [
        "top-left",
        "top-right",
        "bottom-left",
        "bottom-right",
        "top-center",
        "bottom-center",
      ],
      control: { type: "select" },
      description: "Position of the toast.",
      table: {
        defaultValue: { summary: "bottom-right" },
      }
    },
    closeButton: {
      control: { type: "boolean" },
      description: "Show close button.",
      table: {
        defaultValue: { summary: "false" },
      }
    },
    toastOptions: {
      control: { type: "object" },
      description: "Options for the toast.",
      table: {
        defaultValue: {
          summary: `{}`
        },
        type: { summary: "object", detail: "ToastOptions" },
      }
    },
    gap: {
      control: { type: "number" },
      description: "Gap between toasts.",
      table: {
        defaultValue: { summary: "14" },
      },
    },
    icons: {
      control: { type: "object" },
      description: "Icons for the toast.",
      table: {
        defaultValue: { summary: "{}" },
      }
    },
  },
  args: {
    theme: "light",
    richColors: false,
    expand: false,
    visibleToasts: 10,
    position: "bottom-right",
    closeButton: false,
    icons: {
      success: <CaralIcon name="check" size={14} />,
      info: <CaralIcon name="circleInfo" size={14} />,
      error: <CaralIcon name="xCircle" size={14} />,
      loading: <CaralIcon name="sync" size={14} classname='animate-spin' />,
    },
    gap: 14,
  },
};

export default meta;

type TosterStory = StoryObj<ToasterProps>;

export const Default: TosterStory = {

  render: (args) => {
    return (
      <div className="flex items-center justify-center h-[30vh]">
        <Button
          onClick={() => {
            toast("Event has been created", {
              description: "Sunday, December 03, 2023 at 9:00 AM",
            });
          }}
        >
          Show Toast
        </Button>
        <Toaster {...args} />
      </div>
    );
  }
};

export const Variants: TosterStory = {
  render: (args) => {
    const [activeType, setActiveType] = React.useState(allTypes[4])
    return (
      <div className="flex flex-col space-y-4">
        <Button onClick={() => toast("My first toast")} variant="outline">
          Give me a toast
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            toast("Event has been created", {
              description: "Sunday, December 03, 2023 at 9:00 AM",
              action: {
                label: "Undo",
                onClick: () => console.log("Undo"),
              },
            })
          }
        >
          Show Toast
        </Button>
        {allTypes.map((type) => (
          <div key={type.name} className="grid grid-cols-[150px_1fr] gap-2 items-center px-2.5">
            <Button
              variant="ghost"
              data-active={activeType.name === type.name}
              onClick={() => {
                type.action()
                setActiveType(type)
              }}
              key={type.name}
            >
              {type.name}
            </Button>
            <pre className="bg-gray-100 p-2 rounded text-sm">
              {type.snippet || type.action.toString()}
            </pre>
          </div>
        ))}
        <Toaster {...args} />
      </div>

    )
  }
}

const promiseCode = "`${data.name} toast has been added`"

const allTypes = [
  {
    name: "Default",
    snippet: `toast('Event has been created')`,
    action: () => toast("Event has been created"),
  },
  {
    name: "Description",
    snippet: `toast.message('Event has been created', {
      description: 'Monday, January 3rd at 6:00pm',
    })`,
    action: () =>
      toast("Event has been created", {
        description: "Monday, January 3rd at 6:00pm.Monday, January 3rd at 6:00pm.Monday, January 3rd at 6:00pm.Monday, January 3rd at 6:00pm",
        closeButton: true,
        duration: 100000
      }),
  },
  {
    name: "Success",
    action: () => toast.success("Event has been created", {
      description: "Monday, January 3rd at 6:00pm.",
      action: {
        label: "see more",
        onClick: () => console.log("Undo"),
      }, closeButton: true, duration: 100000
    }),
  },
  {
    name: "Info",
    action: () => toast.info("Be at the area 10 minutes before the event time",
      {
        description: "Monday, January 3rd at 6:00pm",
        action: {
          label: "see more",
          onClick: () => console.log("Undo"),
        }, closeButton: true
      }
    ),
  },
  {
    name: "Warning",
    action: () => toast.warning("Event start time cannot be earlier than 8am",
      {
        description: "Monday, January 3rd at 6:00pm",
        action: {
          label: "see more",
          onClick: () => console.log("Undo"),
        }, closeButton: true
      }
    ),
  },
  {
    name: "Error",
    action: () => toast.error("Event has not been created",
      {
        description: "Monday, January 3rd at 6:00pm",
        action: {
          label: "see more",
          onClick: () => console.log("Undo"),
        }, closeButton: true
      }
    ),
  },
  {
    name: "Action",
    action: () =>
      toast.message("Event has been created", {
        action: {
          label: "Undo",
          onClick: () => console.log("Undo"),
        },
      }),
  },
  {
    name: "Cancel",
    snippet: `toast.message('Event has been created', {
      cancel: {
        label: 'Cancel',
        onClick: () => console.log('Cancel'),
      },
    })`,
    action: () =>
      toast.message("Event has been created", {
        cancel: {
          label: "Cancel",
          onClick: () => console.log("Cancel"),
        },
      }),
  },
  {
    name: "Promise",
    snippet: `const promise = () => new Promise((resolve) => setTimeout(() => resolve({ name: 'Sonner' }), 2000));

toast.promise(promise, {
  loading: 'Loading...',
  success: (data) => {
    return ${promiseCode};
  },
  error: 'Error',
});`,
    action: () =>
      toast.promise<{ name: string }>(
        () =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve({ name: "Sonner" })
            }, 2000)
          }),
        {
          loading: "Loading...",
          success: (data) => {
            return `${data.name} toast has been added`
          },
          error: "Error",
        }
      ),
  },
  {
    name: "Custom",
    snippet: `toast(
      <div>
        A custom toast with a{' '}
        <a href="https://emilkowal.ski/" target="_blank" rel="noopener noreferrer" className="underline">
          link
        </a>
      </div>
    );`,
    action: () => toast(
      <div>
        A custom toast with a{' '}
        <a href="https://emilkowal.ski/" target="_blank" rel="noopener noreferrer" className="underline">
          link
        </a>
      </div>
    ),
  },
  {
    name: "Custom Icon",
    snippet: `toast('A Sonner toast', {
      className: 'my-classname',
      description: 'With a description and an icon',
      duration: 5000,
      icon: <MyIcon />,
    });`,
    action: () => toast("A Sonner toast", {
      className: 'my-classname',
      description: "With a description and an icon",
      duration: 5000,
      icon: <span>🚀</span>,
    }),
  },
]