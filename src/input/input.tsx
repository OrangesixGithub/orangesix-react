import React from "react";
import { Box } from "../box";
import { InputProps } from "./types";
import { InputHookForm } from "./core/hookForm";
import { ApiFieldModeProps } from "../api/types";
import { InputFeedback, InputLabel } from "../api";
import { InputControlled } from "./core/controlled";
import { InputTextProps } from "primereact/inputtext";

/**
 * Componente - `Input`
 *
 * Um componente versátil que é utilizado para entrada de dados simples.
 */
export function Input<T extends ApiFieldModeProps = "Controlled">(props: InputProps<T> & { mode?: T }) {

    let propsCore = props as any;
    let sizes = props.sizes === "small" ? "p-inputtext-sm" : props.sizes === "large" ? "p-inputtext-lg" : "";
    let core: InputTextProps & { ref: React.Ref<HTMLInputElement> | undefined } = {
        className: sizes,
        disabled: props.disabled,
        id: props.id,
        keyfilter: props.keyFilter,
        name: props.name,
        placeholder: props.placeholder,
        ref: props.ref,
        required: props.required,
        style: { width: "100%" },
        type: props.type ?? "text",
    };

    /*
    |------------------------------------------
    | render() - Renderização do componente
    |------------------------------------------
    */
    return (
        <Box className={props.className}
             css={props.css}
             size={props.size ?? "100"}>
            <InputLabel {...props}/>
            {!props.mode || props.mode === "Controlled"
                ? <InputControlled core={core}
                                   {...propsCore}/>
                : <InputHookForm core={core}
                                 {...propsCore}/>}
            <InputFeedback {...propsCore}/>
        </Box>
    );
}