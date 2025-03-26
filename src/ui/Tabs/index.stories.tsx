import { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";
import { TabsContent, TabsVariants } from ".";

type TabsVariantsProps = ComponentProps<typeof TabsVariants>;

const meta: Meta = {
  title: "UI/TabsVariants",
  component: TabsVariants,
  tags: ["autodocs"],
  parameters: {
    layout: 'centered',
  },
  subcomponents: { TabsContent },
};

export default meta;

type TabsVariantsStory = StoryObj<TabsVariantsProps>;

export const Default: TabsVariantsStory = {
  args: {
    tabItems: {
      defaultValue: "tab1",
      items: [
        { id: "tab1", label: "Tab Active" },
        { id: "tab2", label: "Tab Default" },
        { id: "tab3", label: "Tab Disable", disabled: true },
      ],
    },
  },
  render: (props) => {
    const content = [
      { id: "tab1", content: <div className="text-3xl text-seidor-aprove text-nowrap">Tab Active Content</div> },
      { id: "tab2", content: "Tab Active Content" },
      { id: "tab3", content: "Tab Active Content" },
    ]
    return <TabsVariants {...props}>
      {content.map((item) => (
        <TabsContent key={item.id} value={item.id}>
          {item.content}
        </TabsContent>
      ))}
    </TabsVariants>
  },
};

export const TabsContentStory: StoryObj<ComponentProps<typeof TabsContent>> = {
  args: {
    value: "tab1",
    children: "Content for TabsContent",
  },
  decorators: [
    (Story) => <TabsVariants tabItems={{ defaultValue: "tab1", items: [{ id: "tab1", label: "Tab Active" }] }}><Story /></TabsVariants>,
  ],
  render: (props) => (<TabsContent {...props} />),
};