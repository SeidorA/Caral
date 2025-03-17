'use client'
import { useSidebar } from "./sidebar"
import { CaralIcon, Icons } from "iconcaral2"
import { useIsMobile } from "../../hooks/use-mobile"
import { Button } from "../Button/Button"
import { cn } from "../../lib/utils"

export function CustomTrigger({ side }: { side: "left" | "right" }) {
    const { toggleSidebar, open } = useSidebar()

    if (!open) return null;

    const isLeft = side === 'left'

    const position = isLeft ? '-right-4' : '-left-4'
    const icon: Icons = isLeft ? 'arrowLeft' : 'arrowRight'
    return (
        <Button onClick={toggleSidebar} variant='outline' size='icon' className={cn("z-50 w-6 h-6 rounded-full absolute top-4 bg-seidor-gray-light border-none", position)}>
            <CaralIcon name={icon} classname="bg-seidor-info-default rounded-full text-white" size={24} />
            <span className="sr-only">Trigger</span>
        </Button>
    )
}

export function MenuTrigger() {
    const { toggleSidebar, open } = useSidebar()
    const isMobile = useIsMobile()

    if (open) return null;

    return (
        !isMobile && (
            <Button onClick={toggleSidebar} variant='ghost' size='icon' className="bg-none group-data-[collapsible=icon]:!size-9 [&>svg]:size-5 group-data-[collapsible=icon]:justify-center rounded-full">
                <CaralIcon name='menu' />
                <span className="sr-only">Trigger</span>
            </Button>
        )
    )
}