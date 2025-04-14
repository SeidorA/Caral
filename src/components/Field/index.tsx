import { Input } from "../Input";
import { Label } from "../Label";
import { InputPassword } from "../Input/InputPassword";
import { FC } from "react";

interface FieldsType extends React.InputHTMLAttributes<HTMLInputElement> {
    id?: string;
    placeholder?: string;
    required?: boolean;
    optional?: boolean ;
    helper?: string;
    label?: string;
  }


const Field: FC<FieldsType> = ({
    label = "Label",
    id,
    placeholder = "Placeholder",
    type,
    helper,
    ...props // Captura las propiedades adicionales
  },) => {
    return (
      <div className="grid w-full items-center gap-1.5">
        <div className="flex items-center gap-2">
          <Label htmlFor={id}>
            {label} 
          
          {props.required && <span className="text-seidor-danger ml-1">
            {navigator.language.startsWith("es") ? "Requerido" : "Required"}
          </span>
          }

          {props.optional && <span className="text-seidor-gray-medium ml-1">
            {navigator.language.startsWith("es") ? "Opcional" : "Optional"}
          </span>
          }

          </Label>
        </div>
        
        {type === "password" ? <InputPassword id={id} {...props} /> : (
          <Input
            id={id}
            placeholder={placeholder}
            type={type}
            {...props} 
          />
        )}


        <p>
          <small className="text-seidor-gray-hard">{helper}</small>
        </p>
      </div>
    );
  };
  
  export { Field };