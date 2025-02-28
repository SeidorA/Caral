import { FC, PropsWithChildren } from "react";
import "./tab.scss";



interface tabpromp extends PropsWithChildren {
    status?: 'Default' | 'Active' | 'Dessable';
    title?: string;
    onClick?: () => void;
}


export const Tab: FC<tabpromp> = ({ onClick, status = 'Default', title }) => {
    
    return(
        <button className={`tab tab-${status}`} onClick={onClick}>
            {title}
        </button>
    )
}

/** Enter the tabs that make up this grid */
export const TabContainer: FC<PropsWithChildren> = ({ children }) => {
    return(
        <div className="rowtab">
            {children}
        </div>
        )
    }