import React from "react";
import { InputProps } from "../types";
import { InputText, InputTextProps } from "primereact/inputtext";

type Props = {
    core: InputTextProps & { ref: React.Ref<HTMLInputElement> | undefined }
};

/**
 * Core - `InputHookForm`
 * Define o componente utilizando o HookForm
 */
export function InputHookForm({ core, ...props }: InputProps<"HookForm"> & Props) {
    /*
    |------------------------------------------
    | render() - Renderização do componente
    |------------------------------------------
    */
    return (
        <InputText {...core}
                   {...props.register(props.name, {
                       required: !props.required ? false : "Campo obrigatório",
                       onBlur: (e) => props.onBlur ? props.onBlur(e.target.value) : null,
                       onChange: (e) => props.onChange ? props.onChange(e.target.value) : null
                   })}
                   invalid={props.errors[props.name]}
                   ref={props.ref}/>
    );
}