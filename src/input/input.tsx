import React from "react";
import { Box } from "../box";
import { InputProps } from "./types";
import { InputHookForm } from "./core/hookForm";
import { ApiFieldModeProps } from "../api/types";
import { InputControlled } from "./core/controlled";
import { InputTextProps } from "primereact/inputtext";
import { InputLabel, InputProps as getInputProps } from "../api";

/**
 * Componente - `Input`
 *
 * Um componente versátil que é utilizado para entrada de dados simples.
 */
export function Input<T extends ApiFieldModeProps = "Controlled">(props: InputProps<T> & { mode?: T }) {

    let propsCore = props as any;
    let sizes = props.sizes === "small" ? "p-inputtext-sm" : props.sizes === "large" ? "p-inputtext-lg" : "";
    let core: InputTextProps & { ref: React.Ref<HTMLInputElement> | undefined } = {
        ...getInputProps(propsCore),
        className: sizes,
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
        </Box>
    );
}