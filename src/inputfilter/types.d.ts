import { ApiComponentProps, ApiFieldComponentProps } from "../api/types";

export type InputFilterOptionsProps = "=" | "!=" | "<" | ">" | "<=" | ">=" | "{}" | "%" | "!%";

export type InputFilterOptionsMap = {
    text: "=" | "!=" | "%" | "!%"
    date: "=" | "!=" | "<" | ">" | "<=" | ">=" | "{}"
    autocomplete: "=" | "!=" | "%" | "!%"
}

export interface InputFilterProps<T extends keyof InputFilterOptionsMap = "text"> extends ApiComponentProps, ApiFieldComponentProps {
    /**
     * Valor inicial do componente
     */
    value: string

    /**
     * Retorna o valor modificado pelo componente
     */
    onChange(value: string): void

    /**
     * Define o tipo do filtro
     */
    type?: T;

    /**
     * Define as opções do filtro
     */
    options?: Array<InputFilterOptionsMap[T]>;
}