"use client"

import { CaralIcon } from 'iconcaral2';
import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
          success:
            "group-[.toast]:bg-seidor-aprove group-[.toast]:text-seidor-aprove-foreground group-[.toast]:border-seidor-aprove group-[.toast]:shadow-lg",
          info:
            "group-[.toast]:bg-seidor-info group-[.toast]:text-seidor-info-foreground group-[.toast]:border-seidor-info group-[.toast]:shadow-lg",
          error:
            "group-[.toast]:bg-seidor-danger group-[.toast]:text-seidor-danger-foreground group-[.toast]:border-seidor-danger group-[.toast]:shadow-lg",
          loading:
            "group-[.toast]:bg-seidor-sakura group-[.toast]:text-seidor-sakura-foreground group-[.toast]:border-seidor-sakura group-[.toast]:shadow-lg",
          default:
            "group-[.toast]:bg-background group-[.toast]:text-foreground group-[.toast]:border-border group-[.toast]:shadow-lg",
        },
      }}
      icons={{
        success: <CaralIcon name="check" size={14} />,
        info: <CaralIcon name="circleInfo" size={14} />,
        error: <CaralIcon name="xCircle" size={14} />,
        loading: <CaralIcon name="sync" size={14} classname='animate-spin' />,
      }}
      {...props}
    />
  )
}

export { Toaster };

