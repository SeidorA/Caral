import { PropsWithChildren, useState, ChangeEvent } from "react";
import './input.scss';
import { CaralIcon } from 'iconcaral2';

interface inputProps extends PropsWithChildren {
    /**  */
    type?: "text" | "password" | "date" | "textarea" ;
    placeholder?: string;
    value?: string;
    label?: string;
    /**adds required to the input element */
    required?: boolean;
    /** adds optional to the input element */
    optional?: boolean;
    /** Support text for input */
    helper?: string;
    /** Adds a contextual icon for the input */
    ContextIcon?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;  
    id?: string
}

/** An input field includes a label and a text field users can type text into. They typically appear in forms and dialogs.*/ 

export const Input = ({ type = 'text', placeholder = 'Name', value, onChange, label, required=false, optional= false, helper, ContextIcon, id}: inputProps) => {
    const [inputType, setInputType] = useState(type);

    const togglePasswordVisibility = () => {
        setInputType(inputType === 'password' ? 'text' : 'password');
    };

    return (
        <>
            <div className="input_caral">
                {label && <label htmlFor={value}> 
                    {label}
                    {required && <span className="Required">Required</span>} 
                    {optional && <span className="Optional">Optional</span>} 
                </label>}

                
                {type === 'password' ? (
                    <div className="inputpassword">
                        <input type={inputType} placeholder={placeholder} value={value} onChange={onChange} className="input_password" id={id} />
                        <button type="button" className="btn-see" onClick={togglePasswordVisibility}>
                            {inputType === 'password' ? <CaralIcon name="eye" /> : <CaralIcon name="eyeSlash" /> }
                        </button>
                    </div>
                ) : type === 'date' ? (
                    <input type="date" placeholder={placeholder} value={value} onChange={onChange} id={id} className="input" />
                ) : type === 'textarea' ? (
                    <textarea placeholder={placeholder} value={value}  id={id} className="input" />
                ) :
                
                (
                    <>
                        {ContextIcon && <span className={`contextualion ${label ? 't-50' : 'm-50'} ${helper ? 'b-50' : ''}`} ><CaralIcon name={ContextIcon} /></span>}
                        <input type={inputType} placeholder={placeholder} value={value} onChange={onChange} id={id} className={`input ${ContextIcon ? 'contextualintut' : ''}`} />
                    </>
                )}
                {helper && <span className="helper">{helper}</span>}
            </div>
        </>
    )
}