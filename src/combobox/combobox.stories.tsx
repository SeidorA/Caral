import type { Meta, StoryObj } from '@storybook/react';

import ComboBox from './combobox';

const meta: Meta<typeof ComboBox> = {
title: "Components/ComboBox",
  tags: ["autodocs"],
  component: ComboBox,
};

export default meta;
type Story = StoryObj<typeof ComboBox>;



const fruitOptions = [
    {
        items: [
            { value: "Granadas", label: "Granadas" },
            { value: "Ornitorico", label: "Ornitorico" },
            { value: "Camiones", label: "Camiones" },
          ],
    },
    {
      category: "Frutas",
      items: [
        { value: "banana", label: "Banana" },
        { value: "frutilla", label: "Frutilla" },
        { value: "kiwi", label: "Kiwi" },
      ],
    }
    
  ];
  

export const Default: Story = {
  args: {    
    searchable: true,
    options: fruitOptions
  }
};
