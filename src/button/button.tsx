import { FC, PropsWithChildren } from "react";
import "./button.scss";
import { CaralIcon, Icons } from 'iconcaral2';

interface BtnProps extends PropsWithChildren {
  color?: "info" | "approve" | "warning" | "danger" | "indigo" | "sakura" | "Default" | 'outline' | 'ligth';
  /** The name of the icon to display on the button. */
  icon?: Icons;
  /**  Boolean option to determine whether the icon is large or not */
  large?: boolean;
  /** Disable the use of this button with this property */
  disabled?: boolean;
  /** Remove the text and leave only the icon, it is important to state the icon */
  JustIcon?: boolean;
  /** Function that is executed when the button is clicked. */
  onClick?: () => void;
  /** Maximum width that the search button will have */
  Maxw?: number;
  /**
   * Type of button.
   */
  type?: "submit" | "reset" | "button";
}



/**  Buttons allow users to perform actions or to trigger an event. */
export const Btn: FC<BtnProps> = ({ children = "Buttom", color = "Default", icon, large = false, disabled = false, JustIcon = false, onClick, type = "button" }) => {
  const btnClass = `btn ${color ? `btn-${color}` : ''} ${large ? 'btn-large' : ''} ${JustIcon ? 'btn-icon-only' : ''}`;

  return (
    <button type={type} className={btnClass} disabled={disabled} onClick={onClick}>
      {icon && <CaralIcon name={icon} />}
      {!JustIcon && children}
    </button>
  );
};



export const BtnSerach: FC<BtnProps> = ({ Maxw = "700px", onClick }) => {

  const style = {
    '--Max_whidth': `${Maxw}`,
  } as React.CSSProperties;

  return (
    <button className="search" style={style} onClick={onClick}>
      <CaralIcon name="search" />
      <span>Search</span>
    </button>
  );
}

export const BtnPlus: FC<BtnProps> = ({ children, onClick, }) => {
  return (
    <button className="plus" onClick={onClick}>
      <CaralIcon name="plus" />
      <span>{children}</span>
    </button>
  );
}
