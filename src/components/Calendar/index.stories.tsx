import type { Meta, StoryObj } from '@storybook/react';
import { addDays } from "date-fns";
import { es } from "date-fns/locale";
import React, { ComponentProps } from 'react';
import { DateRange, DayPickerProps } from 'react-day-picker';
import { JSX } from 'react/jsx-runtime';
import { Calendar } from '.';

type CalendarProps = ComponentProps<typeof Calendar>;


const meta: Meta<CalendarProps> = {
  title: "UI/Calendar",
  component: Calendar,
  tags: ["autodocs"],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    mode: {
      control: { type: "select" },
      options: ["single", "range"],
      description: 'Select the type of calendar to be displayed whether it is a single date or a time range.'
    },
    numberOfMonths: {
      if: { arg: 'mode', eq: 'range' },
      control: { type: "number" },
      
    },
    defaultMonth: {
      if: { arg: 'mode', eq: 'range' },
      control: { type: "date" },
    },
    showOutsideDays: {
      control: { type: "boolean" },
      description: 'Displays the months that complete the week of the next month shown on the screen.'
    },

  },
  decorators: [
    (Story) => (
      <div>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<CalendarProps>;

export const Default: Story = {
  args: {
    showOutsideDays: true,
    mode: 'single',
    numberOfMonths: 2,
    defaultMonth: new Date(),
    locale: es,
  },
  render: (args: JSX.IntrinsicAttributes & DayPickerProps) => {
    const [date, setDate] = React.useState<Date | undefined>(new Date());
    const [dateRange, setDateRange] = React.useState<DateRange | undefined>({
      from: new Date(),
      to: addDays(new Date(), 20),
    })

    return args.mode === 'single' ? (
      <Calendar
        {...args}
        mode='single'
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
    ) : (
      <Calendar
        {...args}
        mode='range'
        defaultMonth={dateRange?.from}
        selected={dateRange}
        onSelect={setDateRange}
        className="rounded-md border"
      />
    )
  },
};

export const Range: Story = {
  args: {
    showOutsideDays: true,
    mode: 'range',
    numberOfMonths: 2,
    defaultMonth: new Date(),
  },
  render: (args: JSX.IntrinsicAttributes & DayPickerProps) => {
    const [dateRange, setDateRange] = React.useState<DateRange | undefined>({
      from: new Date(),
      to: addDays(new Date(), 20),
    })

    return (
      <Calendar
        {...args}
        mode='range'
        defaultMonth={dateRange?.from}
        selected={dateRange}
        onSelect={setDateRange}
        className="rounded-md border"
      />
    )
  }
};
