"use client"

import * as AvatarPrimitive from "@radix-ui/react-avatar"
import * as React from "react"

import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib/utils"

/** 
 * It can display images, icons or user initials, with different sizes and shapes to suit different contexts. 
 * 
 * It is used in user profiles, comments, chat participant lists and team views to aid in quick identification. 
*/
const Avatar = React.forwardRef<
    React.ElementRef<typeof AvatarPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
    <AvatarPrimitive.Root
        ref={ref}
        className={cn(
            "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
            className
        )}
        {...props}
    />
))
Avatar.displayName = AvatarPrimitive.Root.displayName

const AvatarImage = React.forwardRef<
    React.ElementRef<typeof AvatarPrimitive.Image>,
    React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
    <AvatarPrimitive.Image
        ref={ref}
        className={cn("aspect-square h-full w-full", className)}
        {...props}
    />
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName

const AvatarFallback = React.forwardRef<
    React.ElementRef<typeof AvatarPrimitive.Fallback>,
    React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
    <AvatarPrimitive.Fallback
        ref={ref}
        className={cn(
            "flex h-full w-full items-center justify-center rounded-full bg-muted",
            className
        )}
        {...props}
    />
))
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

export { Avatar, AvatarFallback, AvatarImage }


const avatarVariants = cva(
    "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
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
                default: "h-10 w-10 text-base",
                sm: "h-8 w-8 text-sm",
                md: "h-12 w-12 text-lg",
                lg: "h-16 w-16 text-xl",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

export interface AvatarProps
    extends React.ComponentProps<typeof Avatar>,
    VariantProps<typeof avatarVariants> {
    src: string
    fallback: string
}

export const AvatarComponent = React.forwardRef<HTMLDivElement, AvatarProps>(
    ({ className, src, fallback, size, ...props }, ref) => {
        return (
            <Avatar
                className={cn(avatarVariants({ size, className }))}
                ref={ref}
                {...props}
            >
                <AvatarImage src={src} alt="avatar" />
                <AvatarFallback>{fallback}</AvatarFallback>
            </Avatar>
        )
    }
)
