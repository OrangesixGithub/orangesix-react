import React from "react";
import { RadioProps } from "../types";

type Props = {
    core: RadioProps<"Controlled">
};

/**
 * Core - `RadioControlled`
 * Define o componente controlled
 */
export function RadioControlled({ core, ...props }: RadioProps<"Controlled"> & Props) {
    /*
    |------------------------------------------
    | render() - Renderização do componente
    |------------------------------------------
    */
    return props.options.map((item) => {
            return (
                <div className="d-flex align-items-center form-check"
                     key={item.value}>
                    <input checked={item.value === props.value}
                           className="form-check-input"
                           disabled={props.disabled || item.disabled}
                           id={props.name + "-" + item.value}
                           name={props.name}
                           required={props.required}
                           type="radio"
                           value={item.value}
                           onChange={event => props.onChange(event.target.value)}/>
                    <label className="ms-2"
                           htmlFor={props.name + "-" + item.value}>{item.label}</label>
                </div>
            );
        }
    );
}