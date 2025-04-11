import React, { FC } from 'react';
import { AvatarComponent } from '.';

interface AvatarStackFields extends React.HTMLAttributes<HTMLDivElement> {
  maxChildren?: number;
  size?: "default"| "sd"| "md"| "lg"; // Add the size property with an appropriate type
}

export const AvatarStack: FC<AvatarStackFields> = ({ children, maxChildren = 3, size, ...props }) => {
  // Convertir los hijos en un array y filtrar para mostrar solo el número máximo permitido
  const visibleChildren = React.Children.toArray(children).slice(0, maxChildren);
  const extraChildrenCount = "+" + Math.max(React.Children.count(children) - maxChildren, 0);

  return (
    <div className="inline-flex items-start" {...props}>
      {visibleChildren.map((child, index) => (
        <>
        {React.isValidElement(child) ? React.cloneElement(child, { size }) : child}
        </>
      ))}
      {extraChildrenCount > 0 && (
       
        <AvatarComponent
            fallback={extraChildrenCount}
            size={size}
            variant="ghost"
        />

      )}
    </div>
  );
};

