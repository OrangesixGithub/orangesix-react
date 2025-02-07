import React from "react";
import { InputProps } from "../types";
import { InputFeedback } from "../../api";
import { InputText } from "primereact/inputtext";
import { Password, PasswordProps } from "primereact/password";
import { InputMask, InputMaskProps } from "primereact/inputmask";

type Props = {
    masker: InputMaskProps,
    password: PasswordProps
    core: any & { ref: React.Ref<HTMLInputElement> | undefined },
};

/**
 * Core - `InputControlled`
 * Define o componente controlled
 */
export function InputControlled({ core, password, masker, ...props }: InputProps<"Controlled"> & Props) {
    /*
    |------------------------------------------
    | render() - Renderização do componente
    |------------------------------------------
    */
    return (
        <>
            {props.mask !== undefined
                ? <InputMask {...core}
                             {...masker}
                             value={props.value}
                             onBlur={event => {
                                 if (props.onBlur) {
                                     props.onBlur(event.target.value);
                                 }
                             }}
                             onChange={event => props.onChange(event.target.value)}/>
                : (props.type === "password"
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
                                 onChange={event => props.onChange(event.target.value)}/>)}
            <InputFeedback {...props}/>
        </>
    );
}