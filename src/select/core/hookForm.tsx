import React from "react";
import { SelectProps } from "../types";

/**
 * Core - `SelectHookForm`
 * Define o componente controlled
 */
export function SelectHookForm(props: SelectProps<"HookForm"> & { mode?: any }) {
    let init = !props.init
        ? null
        : (typeof props.init === "boolean"
            ? <option value=''>Selecione {props.label?.toLowerCase() ?? ""}</option>
            : <option value=''>{props.init}</option>);
    let sizes = props.sizes === "small" ? "form-select-sm" : props.sizes === "large" ? "form-select-lg" : "";

    /*
    |------------------------------------------
    | render() - Renderização do componente
    |------------------------------------------
    */
    return (
        <select className={`form-select ${sizes}`}
                disabled={props.disabled}
                id={props.id}
                {...props.register(props.name, {
                    required: !props.required ? false : "Campo obrigatório",
                    onChange: (e) => props.onChange ? props.onChange(e.target.value) : null
                })}>
            {init}
            {props.options.map((item) => (
                <option disabled={item.disabled}
                        key={item.id}
                        value={item.id}>{item.name}</option>
            ))}
        </select>
    );
}