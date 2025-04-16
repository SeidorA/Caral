import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { CaralIcon } from 'iconcaral2';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { ClassProp } from 'class-variance-authority/types';
import { ClassValue } from 'clsx';
import { DayPicker } from 'react-day-picker';
import { default as default_2 } from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { DialogProps } from '@radix-ui/react-dialog';
import { FC } from 'react';
import { Icons } from 'iconcaral2';
import { JSX as JSX_2 } from 'react/jsx-runtime';
import * as LabelPrimitive from '@radix-ui/react-label';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import { PropsWithChildren } from 'react';
import * as React_2 from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { toast } from 'sonner';
import { Toaster as Toaster_2 } from 'sonner';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { VariantProps } from 'class-variance-authority';

/**
 * It can display images, icons or user initials, with different sizes and shapes to suit different contexts.
 *
 * It is used in user profiles, comments, chat participant lists and team views to aid in quick identification.
 */
export declare const Avatar: React_2.ForwardRefExoticComponent<Omit<AvatarPrimitive.AvatarProps & React_2.RefAttributes<HTMLSpanElement>, "ref"> & React_2.RefAttributes<HTMLSpanElement>>;

export declare const AvatarComponent: React_2.ForwardRefExoticComponent<Omit<AvatarProps, "ref"> & React_2.RefAttributes<HTMLElement>>;

export declare const AvatarFallback: React_2.ForwardRefExoticComponent<Omit<AvatarPrimitive.AvatarFallbackProps & React_2.RefAttributes<HTMLSpanElement>, "ref"> & React_2.RefAttributes<HTMLSpanElement>>;

export declare const AvatarImage: React_2.ForwardRefExoticComponent<Omit<AvatarPrimitive.AvatarImageProps & React_2.RefAttributes<HTMLImageElement>, "ref"> & React_2.RefAttributes<HTMLImageElement>>;

export declare interface AvatarProps extends React_2.ComponentProps<typeof Avatar>, VariantProps<typeof avatarVariants> {
    src?: string;
    fallback: string;
}

export declare const AvatarStack: FC<AvatarStackFields>;

declare interface AvatarStackFields extends default_2.HTMLAttributes<HTMLDivElement> {
    maxChildren?: number;
    size?: "default" | "sm" | "md" | "lg";
}

declare const avatarVariants: (props?: ({
    variant?: "link" | "default" | "info" | "aprove" | "warning" | "danger" | "indigo" | "sakura" | "outline" | "ghost" | null | undefined;
    size?: "default" | "sm" | "md" | "lg" | null | undefined;
} & ClassProp) | undefined) => string;

export declare const Button: React_2.ForwardRefExoticComponent<ButtonProps & React_2.RefAttributes<HTMLButtonElement>>;

export declare interface ButtonProps extends React_2.ButtonHTMLAttributes<HTMLButtonElement>, 
/** Color Del boton */
VariantProps<typeof buttonVariants> {
    asChild?: boolean;
    iconName?: Icons;
}

export declare const buttonVariants: (props?: ({
    variant?: "link" | "default" | "info" | "aprove" | "warning" | "danger" | "indigo" | "sakura" | "outline" | "ghost" | null | undefined;
    size?: "default" | "sm" | "md" | "lg" | "icon" | null | undefined;
} & ClassProp) | undefined) => string;

export declare function Calendar({ className, classNames, showOutsideDays, ...props }: CalendarProps): JSX_2.Element;

export declare namespace Calendar {
    var displayName: string;
}

export declare type CalendarProps = React_2.ComponentProps<typeof DayPicker>;

export { CaralIcon }

export declare const Checkbox: React_2.ForwardRefExoticComponent<Omit<CheckboxPrimitive.CheckboxProps & React_2.RefAttributes<HTMLButtonElement>, "ref"> & React_2.RefAttributes<HTMLButtonElement>>;

export declare function cn(...inputs: ClassValue[]): string;

export declare function Combobox({ items, placeholder, noResultsText, onSelect, buttonClassName, contentClassName, }: ComboboxProps): JSX_2.Element;

declare type ComboboxGroupType = {
    heading: string;
    items: ComboboxItemType[];
};

declare type ComboboxItemType = {
    value: string;
    label: string;
    icon?: Icons;
};

declare interface ComboboxProps {
    items: ComboboxItemType[] | ComboboxGroupType[];
    placeholder?: string;
    noResultsText?: string;
    onSelect?: (value: string) => void;
    buttonClassName?: string;
    contentClassName?: string;
}

export declare const Command: React_2.ForwardRefExoticComponent<Omit<{
    children?: React_2.ReactNode;
} & Pick<Pick<React_2.DetailedHTMLProps<React_2.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React_2.HTMLAttributes<HTMLDivElement>> & {
    ref?: React_2.Ref<HTMLDivElement>;
} & {
    asChild?: boolean;
}, "key" | "asChild" | keyof React_2.HTMLAttributes<HTMLDivElement>> & {
    label?: string;
    shouldFilter?: boolean;
    filter?: (value: string, search: string, keywords?: string[]) => number;
    defaultValue?: string;
    value?: string;
    onValueChange?: (value: string) => void;
    loop?: boolean;
    disablePointerSelection?: boolean;
    vimBindings?: boolean;
} & React_2.RefAttributes<HTMLDivElement>, "ref"> & React_2.RefAttributes<HTMLDivElement>>;

export declare const CommandDialog: ({ children, ...props }: DialogProps) => JSX_2.Element;

export declare const CommandEmpty: React_2.ForwardRefExoticComponent<Omit<{
    children?: React_2.ReactNode;
} & Pick<Pick<React_2.DetailedHTMLProps<React_2.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React_2.HTMLAttributes<HTMLDivElement>> & {
    ref?: React_2.Ref<HTMLDivElement>;
} & {
    asChild?: boolean;
}, "key" | "asChild" | keyof React_2.HTMLAttributes<HTMLDivElement>> & React_2.RefAttributes<HTMLDivElement>, "ref"> & React_2.RefAttributes<HTMLDivElement>>;

export declare const CommandGroup: React_2.ForwardRefExoticComponent<Omit<{
    children?: React_2.ReactNode;
} & Omit<Pick<Pick<React_2.DetailedHTMLProps<React_2.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React_2.HTMLAttributes<HTMLDivElement>> & {
    ref?: React_2.Ref<HTMLDivElement>;
} & {
    asChild?: boolean;
}, "key" | "asChild" | keyof React_2.HTMLAttributes<HTMLDivElement>>, "value" | "heading"> & {
    heading?: React_2.ReactNode;
    value?: string;
    forceMount?: boolean;
} & React_2.RefAttributes<HTMLDivElement>, "ref"> & React_2.RefAttributes<HTMLDivElement>>;

declare type CommandGroupType = {
    heading: string;
    items: CommandItemType[];
};

export declare const CommandInput: React_2.ForwardRefExoticComponent<Omit<Omit<Pick<Pick<React_2.DetailedHTMLProps<React_2.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "key" | keyof React_2.InputHTMLAttributes<HTMLInputElement>> & {
    ref?: React_2.Ref<HTMLInputElement>;
} & {
    asChild?: boolean;
}, "key" | "asChild" | keyof React_2.InputHTMLAttributes<HTMLInputElement>>, "onChange" | "type" | "value"> & {
    value?: string;
    onValueChange?: (search: string) => void;
} & React_2.RefAttributes<HTMLInputElement>, "ref"> & React_2.RefAttributes<HTMLInputElement>>;

export declare const CommandItem: React_2.ForwardRefExoticComponent<Omit<{
    children?: React_2.ReactNode;
} & Omit<Pick<Pick<React_2.DetailedHTMLProps<React_2.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React_2.HTMLAttributes<HTMLDivElement>> & {
    ref?: React_2.Ref<HTMLDivElement>;
} & {
    asChild?: boolean;
}, "key" | "asChild" | keyof React_2.HTMLAttributes<HTMLDivElement>>, "onSelect" | "disabled" | "value"> & {
    disabled?: boolean;
    onSelect?: (value: string) => void;
    value?: string;
    keywords?: string[];
    forceMount?: boolean;
} & React_2.RefAttributes<HTMLDivElement>, "ref"> & React_2.RefAttributes<HTMLDivElement>>;

declare type CommandItemType = {
    label: string;
    icon?: Icons;
};

export declare const CommandList: React_2.ForwardRefExoticComponent<Omit<{
    children?: React_2.ReactNode;
} & Pick<Pick<React_2.DetailedHTMLProps<React_2.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React_2.HTMLAttributes<HTMLDivElement>> & {
    ref?: React_2.Ref<HTMLDivElement>;
} & {
    asChild?: boolean;
}, "key" | "asChild" | keyof React_2.HTMLAttributes<HTMLDivElement>> & {
    label?: string;
} & React_2.RefAttributes<HTMLDivElement>, "ref"> & React_2.RefAttributes<HTMLDivElement>>;

export declare const CommandSeparator: React_2.ForwardRefExoticComponent<Omit<Pick<Pick<React_2.DetailedHTMLProps<React_2.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React_2.HTMLAttributes<HTMLDivElement>> & {
    ref?: React_2.Ref<HTMLDivElement>;
} & {
    asChild?: boolean;
}, "key" | "asChild" | keyof React_2.HTMLAttributes<HTMLDivElement>> & {
    alwaysRender?: boolean;
} & React_2.RefAttributes<HTMLDivElement>, "ref"> & React_2.RefAttributes<HTMLDivElement>>;

export declare const CommandShortcut: {
    ({ className, ...props }: React_2.HTMLAttributes<HTMLSpanElement>): JSX_2.Element;
    displayName: string;
};

export declare const CustomCommand: React_2.FC<CustomCommandProps>;

declare interface CustomCommandProps {
    commandGroups: CommandGroupType[];
    placeholder?: string;
    noResults?: string;
    kbdText?: string;
}

export declare const Dialog: React_2.FC<DialogPrimitive.DialogProps>;

export declare const DialogClose: React_2.ForwardRefExoticComponent<DialogPrimitive.DialogCloseProps & React_2.RefAttributes<HTMLButtonElement>>;

export declare const DialogCommand: React_2.FC<CustomCommandProps & DialogProps>;

export declare const DialogContent: React_2.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogContentProps & React_2.RefAttributes<HTMLDivElement>, "ref"> & React_2.RefAttributes<HTMLDivElement>>;

export declare const DialogDescription: React_2.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogDescriptionProps & React_2.RefAttributes<HTMLParagraphElement>, "ref"> & React_2.RefAttributes<HTMLParagraphElement>>;

export declare const DialogFooter: {
    ({ className, ...props }: React_2.HTMLAttributes<HTMLDivElement>): JSX_2.Element;
    displayName: string;
};

export declare const DialogHeader: {
    ({ className, ...props }: React_2.HTMLAttributes<HTMLDivElement>): JSX_2.Element;
    displayName: string;
};

export declare const DialogOverlay: React_2.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogOverlayProps & React_2.RefAttributes<HTMLDivElement>, "ref"> & React_2.RefAttributes<HTMLDivElement>>;

export declare const DialogPortal: React_2.FC<DialogPrimitive.DialogPortalProps>;

export declare const DialogTitle: React_2.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogTitleProps & React_2.RefAttributes<HTMLHeadingElement>, "ref"> & React_2.RefAttributes<HTMLHeadingElement>>;

export declare const DialogTrigger: React_2.ForwardRefExoticComponent<DialogPrimitive.DialogTriggerProps & React_2.RefAttributes<HTMLButtonElement>>;

export declare const Field: FC<FieldsType>;

declare interface FieldsType extends React.InputHTMLAttributes<HTMLInputElement> {
    id?: string;
    placeholder?: string;
    required?: boolean;
    optional?: boolean;
    helper?: string;
    label?: string;
}

export declare const Input: React_2.ForwardRefExoticComponent<Omit<React_2.DetailedHTMLProps<React_2.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref"> & React_2.RefAttributes<HTMLInputElement>>;

export declare const InputPassword: React_2.ForwardRefExoticComponent<Omit<React_2.DetailedHTMLProps<React_2.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref"> & React_2.RefAttributes<HTMLInputElement>>;

export declare const Label: React_2.ForwardRefExoticComponent<Omit<LabelPrimitive.LabelProps & React_2.RefAttributes<HTMLLabelElement>, "ref"> & VariantProps<(props?: ClassProp | undefined) => string> & React_2.RefAttributes<HTMLLabelElement>>;

export declare const Popover: React_2.FC<PopoverPrimitive.PopoverProps>;

export declare const PopoverAnchor: React_2.ForwardRefExoticComponent<PopoverPrimitive.PopoverAnchorProps & React_2.RefAttributes<HTMLDivElement>>;

export declare const PopoverContent: React_2.ForwardRefExoticComponent<Omit<PopoverPrimitive.PopoverContentProps & React_2.RefAttributes<HTMLDivElement>, "ref"> & React_2.RefAttributes<HTMLDivElement>>;

export declare const PopoverTrigger: React_2.ForwardRefExoticComponent<PopoverPrimitive.PopoverTriggerProps & React_2.RefAttributes<HTMLButtonElement>>;

export declare const Select: React_2.FC<SelectPrimitive.SelectProps>;

export declare function SelectComponent({ placeholder, selectLabel, selectItems, className, ...props }: SelectComponentProps): JSX_2.Element;

declare type SelectComponentProps = {
    placeholder?: string;
    selectLabel?: string;
    selectItems: SelectItemProps[];
    className?: string;
    onValueChange?: (value: string) => void;
    defaultValue?: string;
};

export declare const SelectContent: React_2.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectContentProps & React_2.RefAttributes<HTMLDivElement>, "ref"> & React_2.RefAttributes<HTMLDivElement>>;

export declare const SelectGroup: React_2.ForwardRefExoticComponent<SelectPrimitive.SelectGroupProps & React_2.RefAttributes<HTMLDivElement>>;

export declare const SelectItem: React_2.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectItemProps & React_2.RefAttributes<HTMLDivElement>, "ref"> & React_2.RefAttributes<HTMLDivElement>>;

declare type SelectItemProps = {
    value: string;
    key: string;
};

export declare const SelectLabel: React_2.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectLabelProps & React_2.RefAttributes<HTMLDivElement>, "ref"> & React_2.RefAttributes<HTMLDivElement>>;

export declare function SelectScrollableComponent({ placeholder, selectItems, className }: SelectScrollableComponentProps): JSX_2.Element;

declare type SelectScrollableComponentProps = Omit<SelectComponentProps, "selectItems"> & {
    selectItems: SelectScrollableItemProps[];
};

declare type SelectScrollableItemProps = {
    groupname: string;
    items: SelectItemProps[];
};

export declare const SelectScrollDownButton: React_2.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectScrollDownButtonProps & React_2.RefAttributes<HTMLDivElement>, "ref"> & React_2.RefAttributes<HTMLDivElement>>;

export declare const SelectScrollUpButton: React_2.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectScrollUpButtonProps & React_2.RefAttributes<HTMLDivElement>, "ref"> & React_2.RefAttributes<HTMLDivElement>>;

export declare const SelectSeparator: React_2.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectSeparatorProps & React_2.RefAttributes<HTMLDivElement>, "ref"> & React_2.RefAttributes<HTMLDivElement>>;

export declare const SelectTrigger: React_2.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectTriggerProps & React_2.RefAttributes<HTMLButtonElement>, "ref"> & React_2.RefAttributes<HTMLButtonElement>>;

export declare const SelectValue: React_2.ForwardRefExoticComponent<SelectPrimitive.SelectValueProps & React_2.RefAttributes<HTMLSpanElement>>;

export declare function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): JSX_2.Element;

export declare const Table: React_2.ForwardRefExoticComponent<React_2.HTMLAttributes<HTMLTableElement> & React_2.RefAttributes<HTMLTableElement>>;

export declare const TableBody: React_2.ForwardRefExoticComponent<React_2.HTMLAttributes<HTMLTableSectionElement> & React_2.RefAttributes<HTMLTableSectionElement>>;

export declare const TableCaption: React_2.ForwardRefExoticComponent<React_2.HTMLAttributes<HTMLTableCaptionElement> & React_2.RefAttributes<HTMLTableCaptionElement>>;

export declare const TableCell: React_2.ForwardRefExoticComponent<React_2.TdHTMLAttributes<HTMLTableCellElement> & React_2.RefAttributes<HTMLTableCellElement>>;

export declare const TableFooter: React_2.ForwardRefExoticComponent<React_2.HTMLAttributes<HTMLTableSectionElement> & React_2.RefAttributes<HTMLTableSectionElement>>;

export declare const TableHead: React_2.ForwardRefExoticComponent<React_2.ThHTMLAttributes<HTMLTableCellElement> & React_2.RefAttributes<HTMLTableCellElement>>;

export declare const TableHeader: React_2.ForwardRefExoticComponent<React_2.HTMLAttributes<HTMLTableSectionElement> & React_2.RefAttributes<HTMLTableSectionElement>>;

export declare const TableRow: React_2.ForwardRefExoticComponent<React_2.HTMLAttributes<HTMLTableRowElement> & React_2.RefAttributes<HTMLTableRowElement>>;

export declare const Tabs: React_2.ForwardRefExoticComponent<TabsPrimitive.TabsProps & React_2.RefAttributes<HTMLDivElement>>;

export declare const TabsContent: React_2.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsContentProps & React_2.RefAttributes<HTMLDivElement>, "ref"> & React_2.RefAttributes<HTMLDivElement>>;

declare type TabsItemsProps = {
    defaultValue: string;
    items: {
        id: string;
        label: React_2.ReactNode;
        disabled?: boolean;
    }[];
    classContent?: string;
    classTrigger?: string;
};

export declare const TabsList: React_2.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsListProps & React_2.RefAttributes<HTMLDivElement>, "ref"> & React_2.RefAttributes<HTMLDivElement>>;

export declare const TabsTrigger: React_2.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsTriggerProps & React_2.RefAttributes<HTMLButtonElement>, "ref"> & React_2.RefAttributes<HTMLButtonElement>>;

export declare const TabsVariants: React_2.ForwardRefExoticComponent<Omit<TabsVariantsProps, "ref"> & React_2.RefAttributes<HTMLDivElement>>;

export declare interface TabsVariantsProps extends React_2.ComponentProps<typeof TabsList> {
    tabItems: TabsItemsProps;
}

export declare const Timeline: FC<timelineProps>;

export declare const TimelineItem: FC<timelineProps>;

declare interface timelineProps extends PropsWithChildren {
    number?: number;
    status?: "Done" | "Disable" | "Default";
    title?: string;
    line?: boolean;
    onClick?: () => void;
    first?: boolean;
    end?: boolean;
}

export declare const TimeStep: FC<timelineProps>;

export declare const Title: FC<PropsWithChildren>;

export { toast }

export declare const Toaster: ({ ...props }: ToasterProps) => JSX_2.Element;

declare type ToasterProps = React.ComponentProps<typeof Toaster_2>;

export declare const Tooltip: React_2.FC<TooltipPrimitive.TooltipProps>;

export declare const TooltipContent: React_2.ForwardRefExoticComponent<Omit<TooltipPrimitive.TooltipContentProps & React_2.RefAttributes<HTMLDivElement>, "ref"> & React_2.RefAttributes<HTMLDivElement>>;

export declare const TooltipProvider: React_2.FC<TooltipPrimitive.TooltipProviderProps>;

export declare const TooltipTrigger: React_2.ForwardRefExoticComponent<TooltipPrimitive.TooltipTriggerProps & React_2.RefAttributes<HTMLButtonElement>>;

export declare function useIsMobile(): boolean;

export { }
