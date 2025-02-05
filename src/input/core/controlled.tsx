import React from "react";
import { InputProps } from "../types";
import { InputText, InputTextProps } from "primereact/inputtext";

type Props = {
    core: InputTextProps & { ref: React.Ref<HTMLInputElement> | undefined }
};

/**
 * Core - `InputControlled`
 * Define o componente controlled
 */
export function InputControlled({ core, ...props }: InputProps<"Controlled"> & Props) {
    /*
    |------------------------------------------
    | render() - Renderização do componente
    |------------------------------------------
    */
    return (
        <InputText {...core}
                   value={props.value}
                   onBlur={event => {
                       if (props.onBlur) {
                           props.onBlur(event.target.value);
                       }
                   }}
                   onChange={event => props.onChange(event.target.value)}/>
    );
}