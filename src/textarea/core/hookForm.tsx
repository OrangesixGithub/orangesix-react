import React from "react";
import { TextareaProps } from "../types";
import { InputTextarea, InputTextareaProps } from "primereact/inputtextarea";
import { Controller } from "react-hook-form";
import { InputFeedback } from "../../api";

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
        <Controller render={({ field, formState: { errors } }) => {
            return <>
                <InputTextarea {...core}
                               {...field}
                               invalid={!!errors[props.name]}
                               ref={props.ref}
                               required={props.required}
                               onBlur={(e) => props.onBlur ? props.onBlur(e.target.value) : null}/>
                <InputFeedback {...props}
                               errors={errors}/>
            </>;
        }}
                    control={props.control}
                    name={props.name}
                    rules={{ required: !props.required ? false : "Campo obrigatório" }}/>

    );
}