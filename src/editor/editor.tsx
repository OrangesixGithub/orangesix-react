import React from "react";
import { Box } from "../box";
import { EditorProps } from "./types";
import { Editor as PrimeEditor } from "primereact/editor";

/**
 * Componente - `Editor`
 *
 * Um componente versátil que pode ser utilizado para criar um palco de edição de texto.
 */
export const Editor = ({ iconPrefix = "bi bi-", module = "complete", ...props }: EditorProps) => {

    //Realiza a configuração do módulo básico do editor
    const moduleBasic = () => {
        return (
            <span className="ql-formats">
                <button className="ql-bold"></button>
                <button className="ql-italic"></button>
                <button className="ql-underline"></button>
            </span>
        );
    };

    /*
    |------------------------------------------
    | render() - Renderização do componente
    |------------------------------------------
    */
    return (
        <Box className="p-0"
             size={props.size ?? "100"}>
            {props.label
                && <label className="form-label">
                    {props.icon && <i className={(iconPrefix + props.icon) + " me-1"}/>}
                    {props.label}
                    {props.required && <span className="text-danger">*</span>}
                </label>}
            <PrimeEditor className={"w-100 " + (props.className ?? "")}
                         headerTemplate={module === "basic" ? moduleBasic() : undefined}
                         name={props.name}
                         placeholder={props.placeholder ?? "Digite o texto..."}
                         readOnly={props.disabled ?? false}
                         required={props.required}
                         style={props.css}
                         value={props.value}
                         onTextChange={(e: any) => props.onChange(e.htmlValue)}/>
        </Box>
    );
};