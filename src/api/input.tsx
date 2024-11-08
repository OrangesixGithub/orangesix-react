import React from "react";
import { ApiFieldComponentProps } from "./types";

/**
 * API - `InputLabel`
 *
 * Um componente utilizado como label em todos os componente de campo do pacote.
 * Permite personalizar o estilo e o conteúdo através de propriedades.
 */
export const InputLabel = ({ iconPrefix = "bi bi-", ...props }: ApiFieldComponentProps) => {
    /*
    |------------------------------------------
    | render() - Renderização do componente
    |------------------------------------------
    */
    return props.label
        && <p className='form-label'>
            {props.icon && <i className={iconPrefix + props.icon + " me-1"}/>}
            {props.label}
            {props.required && <span className="text-danger">*</span>}
        </p>;
};