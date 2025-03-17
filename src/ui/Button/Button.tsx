import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib/utils"
import { CaralIcon } from 'iconcaral2';

const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-6 [&_svg]:shrink-0",
    {
        variants: {
            variant: {
                default:
                    "bg-seidor-blue-dark text-primary-foreground shadow hover:bg-seidor-blue-dark/90",
                info:
                    "bg-seidor-info-default text-primary-foreground shadow-sm hover:bg-seidor-info-default/90",
                aprove:
                    "bg-seidor-aprove-default text-primary-foreground shadow-sm hover:bg-seidor-aprove-default/90",
                warning:
                    "bg-seidor-warning-default text-primary-foreground shadow-sm hover:bg-seidor-warning-default/90",
                danger:
                    "bg-seidor-danger-default text-primary-foreground shadow-sm hover:bg-seidor-danger-default/90",
                indigo:
                    "bg-seidor-indigo-default text-primary-foreground shadow-sm hover:bg-seidor-indigo-default/90",
                sakura:
                    "bg-seidor-sakura-default text-primary-foreground shadow-sm hover:bg-seidor-sakura-default/90",
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
                icon: "h-11 w-11",
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

type Icons = 'menu' | 'dots' | 'list' | 'pause' | 'x' | 'arrowDownToLine' | 'bluetooth' | 'bluetoothSlash' | 'bolt' | 'boltSlash' | 'camera' | 'cameraSecurity' | 'cameraSecurityRoof' | 'charBarScreen' | 'charScreen' | 'chartFile' | 'chartSimple' | 'circles' | 'clickCheck' | 'clickCursor' | 'clickTab' | 'cloud' | 'cloudFly' | 'cloudSync' | 'cloudUp' | 'code' | 'command' | 'comments' | 'commentsServer' | 'cube' | 'dron' | 'fileDown' | 'fileZip' | 'gear' | 'image' | 'job' | 'laptop' | 'link' | 'magic' | 'mapBranch' | 'mensagePc' | 'mobile' | 'mouseCalendar' | 'network' | 'pc' | 'qr' | 'robot' | 'satellite' | 'shakePhone' | 'shieldHalved' | 'sliderHorizontal' | 'sliderVertical' | 'sms' | 'squareFace' | 'storage' | 'sunBright' | 'sunMoon' | 'tab' | 'toggleOff' | 'toggleOn' | 'upRightFromSquare' | 'video' | 'volume' | 'wifi' | 'wifiLeft' | 'wrench' | 'wrenchPrice' | 'airplane' | 'anchor' | 'bus' | 'car' | 'dispenser' | 'flag' | 'globe' | 'globeMap' | 'helicopter' | 'locationPin' | 'map' | 'moto' | 'motorcycle' | 'oilWell' | 'planeArrival' | 'planeDeparture' | 'plane' | 'scraper' | 'signsPost' | 'skateboard' | 'skateboardElectric' | 'trailer' | 'train' | 'truckMedical' | 'truck' | 'accessible' | 'arrowsLeftRight' | 'arrowsLeftRightToLine' | 'arrowsMaximize' | 'arrowsMinimize' | 'arrowsMove' | 'arrowsUpDown' | 'arrowDown' | 'arrowLeft' | 'arrowPointer' | 'arrowRight' | 'arrowUp' | 'arrowUpArrowDown' | 'assist' | 'AWS' | 'Azure' | 'AzureSql' | 'badgeArrowUp' | 'badgeSync' | 'bank' | 'barbell' | 'bars' | 'basketShopping' | 'bell' | 'book' | 'bookmark' | 'box' | 'building' | 'businessTime' | 'calculator' | 'calendar' | 'calendarTime' | 'calendaEuro' | 'cartShopping' | 'cartShoppingCircle' | 'cartShoppingPin' | 'cartShoppingPlus' | 'cartShoppingSlash' | 'certificate' | 'chats' | 'check' | 'checkBox' | 'checkFile' | 'checkList' | 'checkSearch' | 'chevronsDown' | 'chevronsLeft' | 'chevronsRigth' | 'chevronsUp' | 'chevronDown' | 'chevronDownBox' | 'chevronDownCircle' | 'chevronLeft' | 'chevronLeftBox' | 'chevronLeftCircle' | 'chevronRigth' | 'chevronRigthCircle' | 'chevronUp' | 'chevronUpBox' | 'chevronUpCircle' | 'circleInfo' | 'circleBars' | 'city' | 'clock' | 'cloudStorage' | 'coffee' | 'creditCard' | 'cubeInCube' | 'cupeUpView' | 'dislike' | 'dislikeFile' | 'dolar' | 'dolarReceipt' | 'dolarScreen' | 'downStairs' | 'dropBox' | 'edit' | 'editFile' | 'editScreen' | 'envelope' | 'envelopeOpen' | 'envelopeSend' | 'euro' | 'eye' | 'female' | 'eyeSlash' | 'file' | 'fileClick' | 'fileShare' | 'filter' | 'flagPointer' | 'fullJoin' | 'fullJoinW' | 'GoogleStorage' | 'healtFile' | 'historyChart' | 'hospital' | 'house' | 'iD' | 'infoFile' | 'innerJoin' | 'key' | 'leaf' | 'leafPlant' | 'learn' | 'leftJoin' | 'ligthOn' | 'like' | 'likeFile' | 'lockOpen' | 'lock' | 'lockSlash' | 'lockSquare' | 'lockSync' | 'male' | 'megaphone' | 'mesagge' | 'message' | 'messagePhone' | 'moneyBills' | 'moneyBill' | 'moneySlash' | 'newspaper' | 'newFile' | 'note' | 'noFound' | 'oracle' | 'peopleDress' | 'percent' | 'percentCircle' | 'personCopy' | 'piggyBank' | 'pin' | 'portafolio' | 'presentationScreenBar' | 'presentationScreenChart' | 'price' | 'print' | 'puzzle' | 'puzzleOut' | 'quote' | 'receipt' | 'redshift' | 'refreshPresentation' | 'rigthJoin' | 'rigthJoinW' | 'Saleforce' | 'SAP' | 'save' | 'scaleBalanced' | 'schedule' | 'screenBar' | 'screenChart' | 'screenView' | 'search' | 'searchPerson' | 'eeedling' | 'seedlingBottle' | 'seedlingPot' | 'shop' | 'Snowflake' | 'star' | 'store' | 'sync' | 'trash' | 'triangleExclamation' | 'upStairs' | 'user' | 'users' | 'usersMap' | 'usersWifi' | 'userConfig' | 'virus' | 'waveScreen' | 'wheat' | 'window' | 'xCircle' | 'zoomIn' | 'zoomOut' | 'cancelExecution' | 'continueExecution' | 'database' | 'folder' | 'Cloudera' | 'Teradata' | 'arrowUpToLine' | 'Whatsapp' | 'Google' | 'Databricks' | 'OData' | 'play' | 'plus' | 'less' | 'SapOdata' | 'AmazonRedshift' | 'GoogleBigquery' | 'Teams' | 'closeSidebarLeft' | 'closeSidebarRigt' | 'copy' | 'Deepseek' | 'Gemini' | 'OpenAI';

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, children, variant, size, iconName, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button"
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            >
                {iconName && size === 'icon' ? <CaralIcon name={iconName} />
                    :
                    children
                }
            </Comp>
        )
    }
)
Button.displayName = "Button"

export { Button }
