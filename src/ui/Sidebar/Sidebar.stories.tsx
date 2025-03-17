import type { Meta, StoryObj } from '@storybook/react';

import React, { ComponentProps } from 'react';
import { CustomTrigger, MenuTrigger } from './custom-trigger';
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarRail, SidebarTrigger } from './sidebar';
import { CaralIcon } from 'iconcaral2';
import { Button } from '../Button/Button';

type StoryProps = ComponentProps<typeof Sidebar>;

const meta: Meta<StoryProps> = {
  title: "UI/Sidebar",
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  component: Sidebar,
  argTypes: {
    side: {
      control: {
        type: 'radio',
        options: ['left', 'right'],
      }
    },
    variant: {
      control: {
        type: 'radio',
        options: ['sidebar', 'floating', 'inset'],
      }
    },
    collapsible: {
      control: {
        type: 'select',
        options: ['offcanvas', 'icon', 'none']
      }
    },
  },
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {
  args: {
    side: 'left',
    variant: 'sidebar',
    collapsible: 'offcanvas',
  },
  render: function Render(props) {
    const [open, setOpen] = React.useState(true)

    return <SidebarProvider open={open} onOpenChange={setOpen}>
      <Sidebar {...props}  >
        <SidebarContent>
          <SidebarGroup />
          <SidebarGroup />
        </SidebarContent>
      </Sidebar>
      <SidebarTrigger />
    </SidebarProvider>
  }
};

export const Floating: Story = {
  args: {
    side: 'left',
    variant: 'floating',
    collapsible: 'icon',
  },
  render: function Render(props) {
    const [open, setOpen] = React.useState(true)

    return <SidebarProvider open={open} onOpenChange={setOpen}>
      <Sidebar {...props}  >
        <SidebarContent>
          <SidebarGroup />
          <SidebarGroup />
        </SidebarContent>
      </Sidebar>
      <SidebarTrigger />
    </SidebarProvider>
  }
};

export const Inset: Story = {
  args: {
    side: 'left',
    variant: 'inset',
    collapsible: 'offcanvas',
  },
  render: (props) => <SidebarProvider>
    <Sidebar {...props}  >
      <SidebarContent>
        <SidebarGroup />
        <SidebarGroup />
      </SidebarContent>
    </Sidebar>
    <SidebarTrigger />
  </SidebarProvider>
};

export const With_Header: Story = {
  args: {
    side: 'left',
    variant: 'sidebar',
    collapsible: 'icon',
  },
  render: function Render(props) {
    // const imageSrc = currentTheme === "dark" ? '/daiana-dark.svg' : '/daiana.svg';
    return <SidebarProvider>
      <Sidebar {...props}  >
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem className="flex items-center justify-center space-x-2">
              <SidebarMenuButton asChild >
                <Button variant='ghost' className='hover:bg-transparent'>
                  <img src="https://supadev.seidoranalytics.com/storage/v1/object/public/Images/daiana/logo-daiana%20(1).svg" alt="Logo Daiana" width={37} height={37} className="w-9 h-auto" />
                  <img
                    src="https://supadev.seidoranalytics.com/storage/v1/object/public/Images/daiana/daiana.svg"
                    alt="Logo Daiana Nombre"
                    width={100}
                    height={37}
                    className="w-32 h-auto transition-all duration-300"
                  />
                </Button>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup />
          <SidebarGroup />
        </SidebarContent>
      </Sidebar>
      <SidebarTrigger />
    </SidebarProvider>
  }
}

export const Custom_Trigger: Story = {
  args: {
    side: 'left',
    variant: 'sidebar',
    collapsible: 'icon',
  },
  render: function Render(props) {
    const items = [
      {
        title: 'Dashboard',
        url: '/dashboard',
        icon: 'bars',
      },
      {
        title: 'Knowledge',
        url: '/knowledge',
        icon: 'cloudSync',
      }
    ]

    const [open, setOpen] = React.useState(true)
    return <SidebarProvider open={open} onOpenChange={setOpen}>
      <Sidebar {...props}>
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem className="flex items-center justify-center space-x-2">
              <SidebarMenuButton asChild >
                <Button variant='ghost' className='hover:bg-transparent'>
                  <img src="https://supadev.seidoranalytics.com/storage/v1/object/public/Images/daiana/logo-daiana%20(1).svg" alt="Logo Daiana" width={37} height={37} className="w-9 h-auto" />
                  {open &&
                    <img
                      src="https://supadev.seidoranalytics.com/storage/v1/object/public/Images/daiana/daiana.svg"
                      alt="Logo Daiana Nombre"
                      width={100}
                      height={37}
                      className="w-32 h-auto transition-all duration-300"
                    />
                  }
                </Button>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarGroup>
          {/* <SidebarGroupLabel>Application</SidebarGroupLabel> */}
          <SidebarGroupContent>
            <SidebarMenu className='group-data-[collapsible=icon]:items-center gap-2.5'>
              <MenuTrigger />
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={item.url === '/knowledge'} size='lg'>
                    <a href='#' className='pl-3.5'>
                      <CaralIcon name={item.icon as any} />
                      <span className='group-data-[collapsible=icon]:hidden'>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <CustomTrigger side={props.side as any} />
        <SidebarRail />
      </Sidebar>
    </SidebarProvider>
  }
};