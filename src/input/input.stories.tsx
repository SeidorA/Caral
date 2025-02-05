import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './input';

const meta: Meta<typeof Input> = {
title: "Components/input",
  tags: ["autodocs"],
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;


export const Default: Story = {
  args: {
    label: "Input Example",
    ContextIcon: "",
    type: "text",
    placeholder: "Caral",
    required: false,
    helper: "",
    optional: false,
    id: ""
  }
};



export const Required: Story = {
  args: {
    label: "Input Example",
    ContextIcon: "",
    type: "text",
    placeholder: "Caral",
    required: true,
    helper: "",
    optional: false,
    id: ""
  }
};

export const Optional: Story = {
  args: {
    label: "Input Example",
    ContextIcon: "",
    type: "text",
    placeholder: "Caral",
    optional: true,
    helper: "",
    required: false,
    id: ""
  }
};

export const SensitiveData: Story = {
  args: {
    label: "Sensitive Data",
    ContextIcon: "",
    type: "password",
    placeholder: "Caral",
    required: false,
    helper: "",
    optional: false,
    id: ""
  }
};

export const ContextIcon: Story = {
  args: {
    label: "Context Icon",
    ContextIcon: "Search",
    type: "text",
    placeholder: "Caral",
    required: false,
    helper: "",
    optional: false,
    id: ""
  }
};

export const HelpText: Story = {
  args: {
    label: "Input Example",
    ContextIcon: "",
    type: "text",
    placeholder: "Caral",
    required: false,
    helper: "Help Text",
    optional: false,
    id: ""
  }
};

export const TextArea: Story = {
  args: {
    label: "Text Area",
    ContextIcon: "",
    type: "textarea",
    placeholder: "Caral",
    required: false,
    helper: "",
    optional: false,
    id: ""
  }
};