"use client"

import * as React from "react"

import { CaralIcon, Icons } from "iconcaral2"
import { cn } from "../../utils"
import { Button } from "../Button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../Command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../Popover"

interface ComboboxProps {
  items: ComboboxItemType[] | ComboboxGroupType[]
  placeholder?: string
  noResultsText?: string
  onSelect?: (value: string) => void
  buttonClassName?: string
  contentClassName?: string
}

type ComboboxGroupType = {
  heading: string;
  items: ComboboxItemType[];
};

type ComboboxItemType = {
  value: string
  label: string;
  icon?: Icons; // El ícono es opcional y debe ser un componente CaralIcon
};

export function Combobox({
  items,
  placeholder = "Select an option...",
  noResultsText = "No results found.",
  onSelect,
  buttonClassName,
  contentClassName,
}: ComboboxProps) {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  const handleSelect = (currentValue: string) => {
    const newValue = currentValue === value ? "" : currentValue
    setValue(newValue)
    setOpen(false)
    onSelect?.(newValue)
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn("w-[200px] justify-between bg-transparent", buttonClassName)}
        >
          {value
            ? "items" in items[0]
              ? (items as ComboboxGroupType[])
                .flatMap((group) => group.items)
                .find((item) => item.value === value)?.label
              : (items as ComboboxItemType[]).find((item) => item.value === value)?.label
            : placeholder}
          <CaralIcon
            name="chevronDown"
            classname={cn(
              "ml-2 h-4 w-4 shrink-0 opacity-50 transition-transform duration-300 ease-in-out",
              open && "rotate-180"
            )}
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent className={cn("w-[200px] p-0", contentClassName)}>
        <Command>
          <CommandInput placeholder={`Search ${placeholder.toLowerCase()}...`} />
          <CommandList>
            <CommandEmpty>{noResultsText}</CommandEmpty>
            <CommandGroup>
              {items.map((item) =>
                "items" in item ? (
                  <React.Fragment key={item.heading}>
                    <CommandGroup heading={item.heading}>
                      {item.items.map((subItem) => (
                        <CommandItem
                          key={subItem.value}
                          value={subItem.value}
                          onSelect={handleSelect}
                          className="[&_svg]:size-3"
                        >
                          {subItem.icon && <CaralIcon name={subItem.icon} classname="mr-2" />}
                          {subItem.label}
                          <CaralIcon
                            name="check"
                            classname={cn(
                              "text-seidor-aprove ml-auto",
                              value === subItem.value ? "opacity-100" : "opacity-0"
                            )}
                          />
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </React.Fragment>
                ) : (
                  <CommandItem
                    key={item.value}
                    value={item.value}
                    onSelect={handleSelect}
                    className="[&_svg]:size-3"
                  >
                    {item.icon && <CaralIcon name={item.icon} classname="mr-2" />}
                    {item.label}
                    <CaralIcon
                      name="check"
                      classname={cn(
                        "text-seidor-aprove ml-auto",
                        value === item.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </CommandItem>
                )
              )}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}


