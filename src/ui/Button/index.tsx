import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { CaralIcon, type Icons } from 'iconcaral2';
import * as React from "react";
import { cn } from "../../utils";

const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-6 [&_svg]:shrink-0",
    {
        variants: {
            variant: {
                default:
                    "bg-seidor-blue-dark text-white shadow hover:bg-seidor-blue-dark/90",
                info:
                    "bg-seidor-info text-white shadow-sm hover:bg-seidor-info/90",
                aprove:
                    "bg-seidor-aprove text-white shadow-sm hover:bg-seidor-aprove/90",
                warning:
                    "bg-seidor-warning text-white shadow-sm hover:bg-seidor-warning/90",
                danger:
                    "bg-seidor-danger text-white shadow-sm hover:bg-seidor-danger/90",
                indigo:
                    "bg-seidor-indigo text-white shadow-sm hover:bg-seidor-indigo/90",
                sakura:
                    "bg-seidor-sakura text-white shadow-sm hover:bg-seidor-sakura/90",
                outline:
                    "border border-seidor-gray-hard bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "text-primary underline-offset-4 hover:underline",
            },
            size: {
                default: "h-11 px-4 py-2",
                sm: "h-9 rounded-md px-3 text-xs",
                md: "h-10 rounded-md px-4",
                lg: "h-12 rounded-md px-8",
                icon: "h-11 min-w-11",
            }
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean
    iconName?: Icons
}


const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, children, variant, size, iconName, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button"
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }), children && iconName && 'px-4 py-2')}
                ref={ref}
                {...props}
            >
                {iconName && size === 'icon' ? <><CaralIcon name={iconName} /> {children}</>
                    :
                    children
                }
            </Comp>
        )
    }
)
Button.displayName = "Button"

export { Button, buttonVariants };

