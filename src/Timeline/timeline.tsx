import { FC, PropsWithChildren } from "react";
import "./timeline.scss";
import { CaralIcon } from 'iconcaral2';


interface timelineProps extends PropsWithChildren {
    number?: number;
    status?: 'Default' | 'Done' | 'Dessable';
    title?: string;
    line?: boolean;
    onClick?: () => void;

    first?: boolean;
    end?: boolean;
}
export const Timeline_step: FC<timelineProps> = ({ number, status, title, onClick, line = false }) => {

    return (
        <button className={`timeline_step timeline-${status} ${line ? 'line-wht' : ''}`}  onClick={onClick}>
            <div className="content">
                <div className="timeline-number" >{number}</div>
                <span >{title}</span>
            </div>
            {line && <div className="line"></div> }
        </button>
    );
}

export const Timeline: FC<timelineProps> = ({ number, status, first = false, end = false }) => {


    return (
        <div className={`timeline ${end ? 'justify-end' : ''}`} >

            <div className={`dot dot-${status}`}>
                {status === 'Done'  && <CaralIcon name="Check" size="15" color="#fff" />}
                {number && <span>{number}</span>}
            </div>
            {first && <div className="line-conector "></div>}            
            {end && <div className="line-conector "></div>}
        </div>
    )
}

export const Timeline_item: FC<timelineProps> = ({ number, status, first = false, end = false, children }) => {
    return (
        <div className="flex gap-2">
            <Timeline status={status} number={number} first={first} end={end}></Timeline>

            <div className="py-5">
                {children}
            </div>
        </div>

    )
}
