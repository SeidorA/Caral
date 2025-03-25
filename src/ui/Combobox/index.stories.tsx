import { Meta, StoryObj } from '@storybook/react'
import { ComponentProps } from 'react'
import { Combobox } from '.'

type CombobosProps = ComponentProps<typeof Combobox>

const meta: Meta = {
  title: 'UI/Combobox',
  component: Combobox,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    items: {
      control: {
        type: 'object',
      },
      description: 'Lista de items a mostrar en el combobox (puede ser un array de objetos o un array de objetos agrupados)',
    },
    placeholder: {
      control: {
        type: 'text',
      },
      description: 'Texto a mostrar cuando no hay un item seleccionado',
    },
    noResultsText: {
      control: {
        type: 'text',
      },
      description: 'Texto a mostrar cuando no hay resultados',
    },
    onSelect: {
      description: 'Función que se ejecuta cuando se selecciona un item',
    },
    buttonClassName: {
      control: {
        type: 'text',
      },
      description: 'Clases CSS para el botón del combobox',
      table: {
        category: 'Styling',
        defaultValue: { summary: 'w-[200px] justify-between bg-transparent' },
      }
    },
    contentClassName: {
      control: {
        type: 'text',
      },
      description: 'Clases CSS para el contenido del combobox',
      table: {
        category: 'Styling',
        defaultValue: { summary: 'w-[200px] justify-between bg-transparent' },
      }
    },
  },
}

export default meta

type ComboboxStory = StoryObj<CombobosProps>

export const Default: ComboboxStory = {
  args: {
    items: [
      { value: "calendar", label: "Calendar" },
      { value: "search emoji", label: "Search Emoji" },
      { value: "calculator", label: "Calculator" },
      { value: "profile", label: "Profile" },
      { value: "billing", label: "Billing" },
      { value: "settings", label: "Settings" },
    ],
    placeholder: 'Select an option...',
    noResultsText: 'No results found.',
    onSelect: (value) => alert(value),
    buttonClassName: '',
    contentClassName: '',
  },
  render: function Render(props) {
    return (
      <Combobox
        items={props.items}
        placeholder={props.placeholder}
        noResultsText={props.noResultsText}
        onSelect={props.onSelect}
        buttonClassName={props.buttonClassName}
        contentClassName={props.contentClassName}
      />
    )
  },
}


export const Combobox_With_Icons: ComboboxStory = {
  args: {
    items: [
      { value: "calendar", label: "Calendar", icon: 'calendar' },
      { value: "search emoji", label: "Search Emoji", icon: 'search' },
      { value: "calculator", label: "Calculator", icon: 'calculator' },
      { value: "profile", label: "Profile", icon: 'userConfig' },
      { value: "billing", label: "Billing", icon: 'creditCard' },
      { value: "settings", label: "Settings", icon: 'gear' },
    ],
    onSelect: (value) => alert(value),
    placeholder: 'Select an option...',
    noResultsText: 'No results found.',
  },
  render: (props) => {
    return <Combobox
      {...props}
    />
  }
}

export const Combobox_With_Groups: ComboboxStory = {
  args: {
    items: [
      {
        heading: "Suggestions",
        items: [
          { value: "calendar", label: "Calendar", icon: 'calendar' },
          { value: "search emoji", label: "Search Emoji", icon: 'search' },
          { value: "calculator", label: "Calculator", icon: 'calculator' },
        ]
      },
      {
        heading: "Settings",
        items: [
          { value: "profile", label: "Profile", icon: 'userConfig' },
          { value: "billing", label: "Billing", icon: 'creditCard' },
          { value: "settings", label: "Settings", icon: 'gear' },
        ]
      }
    ],
    onSelect: (value) => alert(value),
    placeholder: 'Select an option...',
    noResultsText: 'No results found.',
  },
  render: (props) => {
    return <Combobox {...props} />
  }
}