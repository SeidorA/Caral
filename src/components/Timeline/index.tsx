import { FC, PropsWithChildren } from "react";

import { CaralIcon } from 'iconcaral2';


interface timelineProps extends PropsWithChildren {
  number?: number;
  status?: "Done" | "Disable" | "Default";
  title?: string;
  line?: boolean;
  onClick?: () => void;
  first?: boolean;
  end?: boolean;
}

const statusStyles = {
  Done: "bg-seidor-aprove-default border-seidor-aprove-hard",
  Disable: "bg-seidor-gray-hard border-seidor-gray-light",
  Default: "bg-seidor-gray-light border-gray-400",
};

export const TimeStep: FC<timelineProps> = ({ number = 1, status = "Default", title, onClick, line = false }) => {

  return (
    <button className={`flex items-center gap-2 ${line ? 'w-full' : ''}`} onClick={onClick}>
      <div className="flex items-center gap-1">
        <div className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${statusStyles[status]}`} >{number}</div>
        <span className="text-xs font-thin">{title}</span>
      </div>
      {line && <div className="inline-block h-px w-full bg-seidor-gray-hard"></div>}
    </button>
  );
}

export const Timeline: FC<timelineProps> = ({ number, status = "Default", first = false, end = false }) => {


  return (
    <div className={`relative flex flex-col items-center w-8  ${end ? "justify-end" : ""}`} >
      <div
        className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full border-2 ${statusStyles[status]
          }`}
      >
        {status === "Done" && <CaralIcon name="check" size={15} color="#fff" />}
        {number && <span>{number}</span>}
      </div>

      {first && <div className="w-px inline-block bg-seidor-gray-medium h-1/2" />}
      {end && <div className="w-px inline-block bg-seidor-gray-medium h-1/2" />}
    </div>
  );
};


export const TimelineItem: FC<timelineProps> = ({ number, status, first = false, end = false, children }) => {
  return (
    <div className="flex gap-2 ">
      <Timeline status={status} number={number} first={first} end={end} />

      <div className="py-5 min-h-10 h-full flex content-center">
        {children}
      </div>
    </div>

  )
}
