import React, { FC, PropsWithChildren } from "react";
import "./avatar.scss";
import { CaralIcon } from 'iconcaral2';

interface avatarProps extends PropsWithChildren {
    bgcolor?:  "info" | "approve" | "warning" | "danger" | "indigo" | "sakura" |"Default" | 'outline' | 'ligth';
    color?:  "info" | "approve" | "warning" | "danger" | "indigo" | "sakura" |"Default" | 'outline' | 'ligth';
    icon?: string;
    size?: "sm" | "md" | "lg" | "xl";
    img?: string;
    cont?: string;
    onClick?: () => void;
}

/** 
 * It can display images, icons or user initials, with different sizes and shapes to suit different contexts. 
 * 
 * It is used in user profiles, comments, chat participant lists and team views to aid in quick identification. 
*/
export const Avatar: FC<avatarProps> = ({  color = "Default", icon, size = "lg", img, cont ="ej" }) => {
    const avatarClass = ` ${color ? `avatar-${color}` : ''} ${size ? `avatar-${size}` : ''}`;
    const imgClass = `avatar ${size ? `avatar-${size}` : ''}`;

    return (
        <>
            {icon && <div className={avatarClass}> <CaralIcon name={icon} size={size} /> </div>}
            {img && <div className={imgClass} style={{ backgroundImage: `url(${img})` }}></div>}
            {cont && <div className={avatarClass}> {cont} </div>}
        </>
    );
};

export const EditaAvatar: FC<avatarProps> = ({  color, icon, size, img, cont, onClick }) => {
    return (

        <div className="edit-avatar">
            <Avatar color={color} icon={icon} size={size} img={img} cont={cont} />
            <button  onClick={onClick} className="edit-avatar-btn">
                <CaralIcon name="Edit" size="10px" color="#fff"/>
            </button>
                
        </div>
    )
}

export const AvatarStack: FC<avatarProps> = ({ children, size }) => {
    const childrenArray = React.Children.toArray(children);
    const visibleChildren = childrenArray.slice(0, 3);
    const hiddenCount = childrenArray.length - 3;

  

    return (
        <div className="avatar-stack">
            {visibleChildren}
            {hiddenCount > 0 && (
                <div className={`avatar-mising avatar-${size}`}>
                    +{hiddenCount}
                </div>
            )}
        </div>
    )
}