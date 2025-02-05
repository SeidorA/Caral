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
    }
  };


  const Template = (args) => (
    <div className='flex flex-col gap-2'>
      <Btn {...args.info} />
      <Btn {...args.approve} />
      <Btn {...args.warning} />
      <Btn {...args.danger} />
      <Btn {...args.indigo} />
      <Btn {...args.sakura} />
      <Btn {...args.default} />
      <Btn {...args.outline} />
      <Btn {...args.light} />
    </div>
  );

  
export const Colors = Template.bind({});
Colors.args = {
  info: {
    color: 'info',
    children: 'Button Info',
  },
  approve: {
    color: 'approve',
    children: 'Button approve',
  },
  warning: {
    color: 'warning',
    children: 'Button warning',
  },
  danger: {
    color: 'danger',
    children: 'Button danger',
  },
  indigo: {
    color: 'indigo',
    children: 'Button Índigo',
  },
  sakura: {
    color: 'sakura',
    children: 'Button Sakura',
  },
  default: {
    color: 'Default',
    children: 'Button default',
  },
  outline: {
    color: 'outline',
    children: 'Button outline',
  },
  light: {
    color: 'light',
    children: 'Button light',
  },
};



const Templatelg = (args: any) => (
    <div className='flex gap-2'>
      <Btn {...args.trueButton} />
      <Btn {...args.falseButton} />
    </div>
  );
  
  export const Sizes = Templatelg.bind({});
  Sizes.args = {
    trueButton: {
        color: 'Default',
        children: 'Button default',
        large: true
    },
    falseButton: {
        color: 'Default',
        children: 'Button default',
        large: false
    },
  };