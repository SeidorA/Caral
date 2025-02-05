import { FC, PropsWithChildren } from "react";
import "./charts.scss";

interface BtnProps extends PropsWithChildren {
  color?: string;
  percentage?: number;
}

export const Chart: FC<BtnProps> = ({ color = 'blue', percentage = 0 }) => {
  const style = {
    '--porcentaje': `${percentage}`,
    '--color': color,
  } as React.CSSProperties;

  return (
    <div className="porcentajes" style={style}>
      <svg width="150" height="150">
        <circle r="65" cx="50%" cy="50%" pathLength="100" />
        <circle r="65" cx="50%" cy="50%" pathLength="100" />
      </svg>
      <span>{percentage}%</span>
    </div>
  );
};