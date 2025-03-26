import type { Meta, StoryObj } from '@storybook/react';

import { CaralIcon } from 'iconcaral2';
import React, { ComponentProps } from 'react';
import { Sidebar, SidebarGroup, SidebarGroupContent, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarRail } from '.';
import { Button } from '../Button';
import { CustomTrigger, MenuTrigger } from './custom-trigger';

type ButtonProps = ComponentProps<typeof SidebarProvider> & ComponentProps<typeof Sidebar> & {
  items: any[];
};

const meta: Meta<ButtonProps> = {
  title: "UI/Sidebar",
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  component: SidebarProvider,
  args: {
    side: 'left',
    variant: 'sidebar',
    collapsible: 'icon',
    items: [
      { title: 'Dashboard', url: '/dashboard', icon: 'eye' },
      { title: 'Users', url: '/users', icon: 'users' },
      { title: 'Settings', url: '/settings', icon: 'gear' },
    ],
  },
  argTypes: {
    side: {
      control: {
        type: 'select',
      },
      options: ['left', 'right'],
    },
    variant: {
      control: {
        type: 'select',
      },
      options: ['sidebar', 'floating', 'inset'],
    },
    collapsible: {
      control: {
        type: 'select',
      },
      options: ['offcanvas', 'icon', 'none']
    },
    items: {
      control: {
        type: 'object',
      }
    }
  },
};

export default meta;
type Story = StoryObj<ButtonProps>;


export const Default: Story = {
  render: function (props) {
    const { side, variant, collapsible, items } = props;
    const [open, setOpen] = React.useState(false);
    return (
      <SidebarProvider open={open} onOpenChange={setOpen}>
        <Sidebar side={side} variant={variant} collapsible={collapsible}>
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
              <SidebarMenu className='group-data-[collapsible=icon]:items-center gap-2.5 text-foreground'>
                <MenuTrigger />
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={item.url === '/dashboard'} size='lg'>
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
          <CustomTrigger side={side as any} />
          <SidebarRail />
        </Sidebar>
        <main className='bg-background w-full'>

          {/*
        Aqui va el children
      */}
        </main>
      </SidebarProvider>
    )
  }
};


export const Header: Story = {
  args: {
    side: 'left',
    variant: 'sidebar',
    collapsible: 'icon',
  },
  render: function (props) {
    return (
      <SidebarProvider>
        <Sidebar {...props}>
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
        </Sidebar>
      </SidebarProvider>
    )
  }
};