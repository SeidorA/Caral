import { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { ComponentProps } from 'react'
import { Select, SelectComponent, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectScrollableComponent, SelectTrigger, SelectValue } from '.'


type SelectComponentProps = ComponentProps<typeof SelectComponent>
type ScrollableSelectProps = ComponentProps<typeof SelectScrollableComponent>
type SelectProps = ComponentProps<typeof Select>

const meta: Meta<SelectComponentProps> = {
  title: 'UI/Form Components/Select',
  component: Select,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    selectItems: {
      control: { type: 'object' },
      description: 'Arreglo de elementos que se mostrarán en el select',
      table: {
        defaultValue: { summary: '[]' },
        type: { summary: 'object' }
      }
    },
    selectLabel: {
      control: { type: 'text' },
      description: 'Etiqueta para el select'
    },
    className: {
      control: { type: 'text' },
      description: 'Clases adicionales que se agregarán al select trigger',
      table: {
        defaultValue: { summary: 'w-full' },
        type: { summary: 'string' }
      }
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Texto que se mostrará en el select cuando no se haya seleccionado ningún elemento',
      table: {
        defaultValue: { summary: 'Select' },
        type: { summary: 'string' }
      }
    },
  },
  args: {
    onValueChange: fn((value: string) => console.log(value)),
  }
}

export default meta
type SelectComponentsStory = StoryObj<SelectComponentProps>

export const Custom: SelectComponentsStory = {
  args: {
    placeholder: 'Select',
    selectLabel: 'Select an option',
    selectItems: [{ value: 'Option 1', key: '1' }, { value: 'Option 2', key: '2' }, { value: 'Option 3', key: '3' }],
    className: 'w-96',
  },
  render: (props) => {
    return (
      <SelectComponent {...props} />
    )
  },
}

type SelectStory = StoryObj<SelectProps>

export const Default: SelectStory = {
  args: {},
  render: (props) => {
    return (
      <Select {...props}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </Select>
    )
  },
}

export const WithGroupLabel: SelectStory = {
  args: {},
  render: (props) => {
    return (
      <Select {...props}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    )
  }
}

export const Scrollable: SelectStory = {
  args: {},
  render: (props) => {
    return (
      <Select {...props}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Timezones</SelectLabel>
            <SelectItem value="utc-12:00">UTC-12:00</SelectItem>
            <SelectItem value="utc-11:00">UTC-11:00</SelectItem>
            <SelectItem value="utc-10:00">UTC-10:00</SelectItem>
            <SelectItem value="utc-09:00">UTC-09:00</SelectItem>
            <SelectItem value="utc-08:00">UTC-08:00</SelectItem>
            <SelectItem value="utc-07:00">UTC-07:00</SelectItem>
            <SelectItem value="utc-06:00">UTC-06:00</SelectItem>
            <SelectItem value="utc-05:00">UTC-05:00</SelectItem>
            <SelectItem value="utc-04:00">UTC-04:00</SelectItem>
            <SelectItem value="utc-03:00">UTC-03:00</SelectItem>
            <SelectItem value="utc-02:00">UTC-02:00</SelectItem>
            <SelectItem value="utc-01:00">UTC-01:00</SelectItem>
            <SelectItem value="utc+00:00">UTC+00:00</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    )
  }
}

type ScrollableStory = StoryObj<ScrollableSelectProps>

export const Custom_Scrollable: ScrollableStory = {
  args: {
    placeholder: 'Select',
    className: 'w-[180px]',
    selectItems: [
      { groupname: 'Pacific', items: [{ value: 'UTC-12:00', key: 'utc-12' }, { value: 'UTC-11:00', key: 'utc-11' }, { value: 'UTC-10:00', key: 'utc-10' }, { value: 'UTC-09:00', key: 'utc-9' }, { value: 'UTC-08:00', key: 'utc-8' }] },
      { groupname: 'Hawaii', items: [{ value: 'UTC-10:00', key: 'utc-10' }] },
      { groupname: 'Alaska', items: [{ value: 'UTC-09:00', key: 'utc-9' }] },
      { groupname: 'Pacific US', items: [{ value: 'UTC-08:00', key: 'utc-8' }] },
      { groupname: 'Mountain US', items: [{ value: 'UTC-07:00', key: 'utc-7' }] },
      { groupname: 'Central US', items: [{ value: 'UTC-06:00', key: 'utc-6' }] },
      { groupname: 'Eastern US', items: [{ value: 'UTC-05:00', key: 'utc-5' }] },
      { groupname: 'Atlantic', items: [{ value: 'UTC-04:00', key: 'utc-4' }] },
      { groupname: 'South America', items: [{ value: 'UTC-03:00', key: 'utc-3' }] },
      { groupname: 'Mid-Atlantic', items: [{ value: 'UTC-02:00', key: 'utc-2' }] },
      { groupname: 'Azores', items: [{ value: 'UTC-01:00', key: 'utc-1' }] },
      { groupname: 'Greenwich', items: [{ value: 'UTC+00:00', key: 'utc+0' }] },
    ],
  },
  render: (props) => {
    return (
      <SelectScrollableComponent {...props} />
    )
  },
}