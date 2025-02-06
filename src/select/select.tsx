import React from "react";
import { Box } from "../box";
import { SelectProps } from "./types";
import { ApiFieldModeProps } from "../api/types";
import { SelectControlled } from "./core/controlled";
import { InputFeedback, InputLabel } from "../api";
import { SelectHookForm } from "./core/hookForm";

/**
 * Componente - `Select`
 *
 * Um componente versátil que é utilizado para entrada de dados do tipo lista de seleção.
 */
export function Select<T extends ApiFieldModeProps = "Controlled">(props: SelectProps<T> & { mode?: T }) {
    let propsCore = props as any;

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
                ? <SelectControlled {...propsCore}/>
                : <SelectHookForm {...propsCore}/>}
            <InputFeedback {...propsCore}/>
        </Box>
    );
}