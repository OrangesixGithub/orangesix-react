import { ApiComponentProps, ApiFieldComponentProps } from "../api/types";

interface InputFilterBaseProps<T extends keyof InputFilterOptionsMap> extends ApiComponentProps, ApiFieldComponentProps {
    /**
     * Valor inicial do componente
     */
    value?: string

    /**
     * Retorna o valor modificado pelo componente
     */
    onChange(value: string | null): void

    /**
     * Define o tipo do filtro
     */
    type?: T;

    /**
     * Define as opções do filtro
     */
    options?: Array<InputFilterOptionsMap[T]>;
}

interface InputFilterAutocompleteProps {
    /**
     * Sugestões do autocomplete
     */
    data: Array<{ id: number, label: string }>

    /**
     * Realiza a pesquisa do autocomplete de acordo com query
     */
    onSearch(query: string, selected?: number[]): void

    /**
     * Define o número de elementos que poser ser selecionado no autocomplete
     */
    autocompleteSelectLimit?: number

    /**
     * Define a altura da caixa de seleção dos dados
     */
    autocompleteScrollHeight?: string
}

export type InputFilterProps<T extends keyof InputFilterOptionsMap> = T extends "autocomplete"
    ? InputFilterBaseProps<"autocomplete"> & InputFilterAutocompleteProps
    : InputFilterBaseProps<T>;

export type InputFilterCoreProps<T extends keyof InputFilterOptionsMap> = InputFilterProps<T> & {
    options: any[],
    select: string
}

export type InputFilterOptionsMap = {
    text: "=" | "!=" | "%" | "!%"
    date: "=" | "!=" | "<" | ">" | "<=" | ">=" | "{}"
    autocomplete: "=" | "!=" | "%" | "!%"
    number: "=" | "!=" | "<" | ">" | "<=" | ">="
}

export type InputFilterOptionsProps = "=" | "!=" | "<" | ">" | "<=" | ">=" | "{}" | "%" | "!%";