import type { Meta, StoryObj } from '@storybook/react';
import { Btn } from './button';


const meta: Meta<typeof Btn> = {
  
  tags: ["autodocs"],
  title: "Components/Button",
  parameters: {
    layout: "centered"
  },

    component: Btn,
    argTypes: {
        children:{
            description:  "The content of the button",
            control: {
                type: "text"
            }, 
        },color:{
            description:  "The color of the button",
            control: {
                type: "select",
                
            }, 
        }
}};



export default meta;
type Story = StoryObj<typeof Btn>;


export const Default: Story = {
    args: {
        children: "Button Caral",
        color: "Default",
        large: false,
        disabled: false,
        JustIcon: false
    },
    
    
  };



  // .storybook/preview.js
