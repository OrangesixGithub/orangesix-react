import React from "react";
import { RadioProps } from "../types";

type Props = {
    core: RadioProps<"HookForm">
};

/**
 * Core - `RadioHookForm`
 * Define o componente utilizando o HookForm
 */
export function RadioHookForm({ core, ...props }: RadioProps<"HookForm"> & Props) {
    /*
    |------------------------------------------
    | render() - Renderização do componente
    |------------------------------------------
    */
    return props.options.map((item) => {
            return (
                <div className="d-flex align-items-center form-check"
                     key={item.value}>
                    <input className={"form-check-input " + (!props.errors[props.name] ? "" : "is-invalid")}
                           disabled={props.disabled || item.disabled}
                           id={props.name + "-" + item.value}
                           type="radio"
                           value={item.value}
                           {...props.register(props.name, {
                               required: !props.required ? false : "Campo obrigatório"
                           })}/>
                    <label className="ms-2 form-check-label"
                           htmlFor={props.name + "-" + item.value}>{item.label}</label>
                </div>
            );
        }
    );
}