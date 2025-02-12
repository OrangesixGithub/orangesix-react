import { ApiComponentProps } from "../api/types";
import { PickListProps as PickListPrimeProps } from "primereact/picklist";

export interface PickListDataProps {
    /**
     * Indificador do objeto
     */
    id: any;

    /**
     * Label do objeto
     */
    label: string;

    /**
     * Define se objeto está ativo ou inativo
     */
    active?: boolean
}

export interface PickListProps extends ApiComponentProps, Pick<PickListPrimeProps, "sourceHeader" | "targetHeader" | "filter" | "filterBy"> {
    /**
     * Define o array de objeto que será manipulado pelo componente
     */
    data: PickListDataProps[]

    /**
     * Define a chave de indentificação do objeto de dados
     */
    dataKey?: string

    /**
     * Callback executado quando o valor do PickList é alterado
     */
    onChange(value: PickListDataProps[]): void;
}
