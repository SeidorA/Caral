import { FC, PropsWithChildren } from "react";
<<<<<<< HEAD
import { CaralIcon } from 'iconcaral2';
=======
import "./button.scss";
import { CaralIcon, Icons } from 'iconcaral2';
>>>>>>> 5b2690c124793cb4249b3d52a863437a79c69dcc

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
<<<<<<< HEAD
export const Btn: FC<BtnProps> = ({ children = "Buttom", color = "Default", icon , large= false, disabled = false, JustIcon = false, onClick, type= "button" }) => {
  const btnClass = `btn ${color ? `bg-info` : ''} ${large ? 'btn-large' : ''} ${JustIcon ? 'btn-icon-only' : ''}`;
=======
export const Btn: FC<BtnProps> = ({ children = "Buttom", color = "Default", icon, large = false, disabled = false, JustIcon = false, onClick, type = "button" }) => {
  const btnClass = `btn ${color ? `btn-${color}` : ''} ${large ? 'btn-large' : ''} ${JustIcon ? 'btn-icon-only' : ''}`;
>>>>>>> 5b2690c124793cb4249b3d52a863437a79c69dcc

  
  const textColor = ["info", "approve", "warning", "danger", "indigo", "sakura", "Default"].includes(color) ? 'text-white' : 'text-carbon';
  const btntail = `py-4 px-3 flex align-middle justify-center gap-2 transition-all duration-500 ease-in-out rounded-md bg-${color} ${textColor}`;
  
  
  return (
<<<<<<< HEAD
    <button type={type} className={btntail}  disabled={disabled} onClick={onClick}>
      {icon &&  <CaralIcon name={icon} /> }
=======
    <button type={type} className={btnClass} disabled={disabled} onClick={onClick}>
      {icon && <CaralIcon name={icon} />}
>>>>>>> 5b2690c124793cb4249b3d52a863437a79c69dcc
      {!JustIcon && children}
    </button>
  );
};



export const BtnSerach: FC<BtnProps> = ({ Maxw = "700px", onClick }) => {

  const style = {
    '--Max_whidth': `${Maxw}`,
  } as React.CSSProperties;

  return (
<<<<<<< HEAD
    <button className="search " style={style} onClick={onClick}> 
      <CaralIcon name="Search "  />
      <span>Search</span>     
=======
    <button className="search" style={style} onClick={onClick}>
      <CaralIcon name="search" />
      <span>Search</span>
>>>>>>> 5b2690c124793cb4249b3d52a863437a79c69dcc
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
