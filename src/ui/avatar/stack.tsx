import React, { FC, ReactElement } from 'react';
import { AvatarComponent, AvatarProps } from '.';

interface AvatarStackFields extends React.HTMLAttributes<HTMLDivElement> {
  maxChildren?: number; // Número máximo de elementos a renderizar
  size?: "default" | "sm" | "md" | "lg"; // Tamaños permitidos para los avatares
}

export const AvatarStack: FC<AvatarStackFields> = ({ children, maxChildren = 3, size = "default", ...props }) => {
  // Convertir los hijos en un array y limitar al número máximo permitido
  const childrenArray = React.Children.toArray(children) as ReactElement<AvatarProps>[];
  const visibleChildren = childrenArray.slice(0, maxChildren);
  const extraChildrenCount = React.Children.count(children) - maxChildren;

  return (
    <div className="flex -space-x-4" {...props}>
      {visibleChildren.map((child, index) =>
        React.cloneElement(child, { size, key: index }) // Asegurar que cada hijo tenga una clave única y el tamaño correcto
      )}
      {extraChildrenCount > 0 && (
        <AvatarComponent
          fallback={`+${extraChildrenCount}`}
          size={size}
          variant="ghost"
          className=' ring-2 ring-white'
        />
      )}
    </div>
  );
};

