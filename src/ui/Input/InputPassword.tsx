import { CaralIcon } from "iconcaral2"
import * as React from "react"
import { Input } from "."
import { cn } from "../../utils"
import { Button } from "../Button"

const InputPassword = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
    ({ className, type, ...props }, ref) => {
        const [showPassword, setShowPassword] = React.useState(false)
        const disabled = props.disabled
        return (
            <div className="relative">
                <Input
                    type={showPassword ? 'text' : 'password'}
                    className={cn('hide-password-toggle pr-10', className)}
                    placeholder='•••••••••••'
                    ref={ref}
                    {...props}
                />
                <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent border-l border-l-seidor-gray-dark rounded-l-none [&_svg]:size-6"
                    onClick={() => setShowPassword((prev) => !prev)}
                    disabled={disabled}
                >
                    {showPassword && !disabled ? (
                        <CaralIcon name='eyeSlash' color='#94A3B8' />
                    ) : (
                        <CaralIcon name='eye' color='#94A3B8' />
                    )}
                    <span className="sr-only">
                        {showPassword ? 'Hide password' : 'Show password'}
                    </span>
                </Button>

                {/* hides browsers password toggles */}
                <style>{`
                        .hide-password-toggle::-ms-reveal,
                        .hide-password-toggle::-ms-clear {
                            visibility: hidden;
                            pointer-events: none;
                            display: none;
                        }
                    `}</style>
            </div>
        )
    }
)

InputPassword.displayName = "InputPassword"

export { Input, InputPassword }
