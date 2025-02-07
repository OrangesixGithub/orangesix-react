import React from "react";
import { InputProps } from "../types";
import { InputFeedback } from "../../api";
import { InputText } from "primereact/inputtext";
import { Password, PasswordProps } from "primereact/password";

type Props = {
    core: any & { ref: React.Ref<HTMLInputElement> | undefined },
    password: PasswordProps
};

/**
 * Core - `InputControlled`
 * Define o componente controlled
 */
export function InputControlled({ core, password, ...props }: InputProps<"Controlled"> & Props) {
    /*
    |------------------------------------------
    | render() - Renderização do componente
    |------------------------------------------
    */
    return (
        <>
            {props.type === "password"
                ? <Password {...core}
                            {...password}
                            value={props.value}
                            onBlur={event => {
                                if (props.onBlur) {
                                    props.onBlur(event.target.value);
                                }
                            }}
                            onChange={event => props.onChange(event.target.value)}/>
                : <InputText {...core}
                             ref={props.ref}
                             value={props.value}
                             onBlur={event => {
                                 if (props.onBlur) {
                                     props.onBlur(event.target.value);
                                 }
                             }}
                             onChange={event => props.onChange(event.target.value)}/>}
            <InputFeedback {...props}/>
        </>
    );
}