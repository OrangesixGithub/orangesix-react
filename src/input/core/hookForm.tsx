import React from "react";
import { InputProps } from "../types";
import { InputFeedback } from "../../api";
import { Controller } from "react-hook-form";
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
        <Controller render={({ field, formState: { errors } }) => {
            return (
                <>
                    <InputText {...core}
                               {...field}
                               invalid={!!errors[props.name]}
                               ref={props.ref}
                               required={props.required}
                               onBlur={(e) => props.onBlur ? props.onBlur(e.target.value) : null}/>
                    <InputFeedback {...props}
                                   errors={errors}/>
                </>
            );
        }}
                    control={props.control}
                    name={props.name}
                    rules={{ required: !props.required ? false : "Campo obrigatório" }}/>

    );
}