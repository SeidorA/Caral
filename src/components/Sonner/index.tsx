"use client"

import { CaralIcon } from 'iconcaral2';
import { useTheme } from "next-themes";
import { Toaster as Sonner, toast } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast: "toast group",
          content: "group-data-[type]:py-2.5 group-data-[type]:pr-2.5 group-data-[type]:data-[content]:gap-2.5 group-data-[type]:w-full group-data-[type]:h-[113px]",
          title: "group-[.toast]:data-[title]:font-semibold text-[12px] group-data-[type]:border-b group-data-[type='success']:border-seidor-aprove group-data-[type='info']:border-seidor-info group-data-[type='error']:border-seidor-danger group-data-[type='warning']:border-seidor-warning group-data-[type]:h-[33px] ",
          description: "group-[.toast]:data-[description]:font-normal text-[10px] h-full",
          icon: "group-[.toast]:group-data-[type]:justify-center group-data-[type='success']:bg-seidor-aprove group-data-[type='error']:bg-seidor-danger group-data-[type='warning']:bg-seidor-warning group-data-[type='info']:bg-seidor-info group-data-[type]:data-[icon]:h-[113px] group-data-[type]:data-[icon]:w-[38px] rounded-l-[6px] group-data-[type]:px-[7px] [&_svg]:size-6 [&_svg]:shrink-0 [&_svg]:text-white group-data-[type='loading']:bg-seidor-gray-carbon",
          actionButton: "group-data-[type]:data-[button]:bg-transparent group-data-[type='success']:data-[button]:text-seidor-aprove group-data-[type='error']:data-[button]:text-seidor-danger group-data-[type='warning']:data-[button]:text-seidor-warning group-data-[type='info']:data-[button]:text-seidor-info group-data-[type]:absolute group-data-[type]:bottom-2 group-data-[type]:right-4",
          closeButton: "absolute group-[.toaster]:data-[close-button]:left-auto group-[.toaster]:data-[close-button]:top-4 group-[.toaster]:data-[close-button]:right-1 group-[.toaster]:data-[close-button]:bg-transparent group-[.toast]:data-[button]:text-seidor-gray-carbon group-[.toaster]:data-[close-button]:border-none",
          success: "group-[.toaster]:bg-seidor-aprove-light group-[.toaster]:text-seidor-gray-carbon group-[.toaster]:p-0",
          info: "group-[.toaster]:bg-seidor-light group-[.toaster]:text-seidor-gray-carbon group-[.toaster]:p-0",
          error: "group-[.toaster]:bg-seidor-danger-light group-[.toaster]:text-seidor-gray-carbon group-[.toaster]:p-0",
          warning: "group-[.toaster]:bg-seidor-warning-light group-[.toaster]:text-seidor-gray-carbon group-[.toaster]:p-0",
          loading: "group-[.toaster]:bg-seidor-light group-[.toaster]:text-seidor-gray-carbon group-[.toaster]:p-0",
        },
      }}
      icons={{
        success: <CaralIcon name="check" />,
        info: <CaralIcon name="circleInfo" size={24} />,
        error: <CaralIcon name="xCircle" size={24} />,
        warning: <CaralIcon name="triangleExclamation" size={24} />,

      }}
      {...props}
    />
  )
}

export { toast, Toaster };

