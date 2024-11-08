import React from "react";
import { handleGetValueText } from "../function/handle";
import { InputFilterOptionsMap, InputFilterProps } from "../types";

/**
 * Core - `Text`
 * Campo do filtro tipo texto
 */
export function Text<T extends keyof InputFilterOptionsMap = "text">(props: InputFilterProps<T> & {
    options: any[]
    select: string
}) {
    return (!props.type || props.type === "text") && (
        <input className="form-control input-filter-field"
               disabled={props.disabled}
               id={(props.id ?? "input-filter") + "-text"}
               name={(props.name ?? "input-filter") + "-text"}
               placeholder={props.placeholder}
               value={handleGetValueText<T>(props.value, props.options)}
               onChange={event => props.onChange(event.target.value + props.select)}/>
    );
}