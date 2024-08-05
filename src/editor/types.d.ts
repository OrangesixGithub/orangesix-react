import { ApiComponentProps, ApiFieldComponentProps } from "../api/types";

export interface EditorProps extends ApiComponentProps, ApiFieldComponentProps {

    /**
     * Define o valor de entrada do campo
     */
    value: any

    /**
     * Atualiza state com valor digitado no campo
     */
    onChange(value: any): void

    /**
     * Define o tipo de editor de texto que será renderizado
     */
    module?: "basic" | "complete"
}