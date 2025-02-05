import React from "react";
import { TextareaProps } from "../types";
import { InputTextarea, InputTextareaProps } from "primereact/inputtextarea";

type Props = {
    core: InputTextareaProps & { ref: React.Ref<HTMLInputElement> | undefined }
};

/**
 * Core - `TextareaHookForm`
 * Define o componente utilizando o HookForm
 */
export function TextareaHookForm({ core, ...props }: TextareaProps<"HookForm"> & Props) {
    /*
    |------------------------------------------
    | render() - Renderização do componente
    |------------------------------------------
    */
    return (
        <InputTextarea {...core}
                       {...props.register(props.name, {
                           required: !props.required ? false : "Campo obrigatório",
                           onBlur: (e) => props.onBlur ? props.onBlur(e.target.value) : null,
                           onChange: (e) => props.onChange ? props.onChange(e.target.value) : null
                       })}
                       invalid={props.errors[props.name]}
                       ref={props.ref}/>
    );
}