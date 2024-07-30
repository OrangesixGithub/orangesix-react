import { TableSortProps } from "./@types/sort";
import { SortOrder } from "primereact/datatable";
import { ApiComponentProps } from "../api/types";
import { TableStyleProps } from "./@types/style";
import { TableColumnProps } from "./@types/column";
import { TableTemplateProps } from "./@types/template";
import { TableSelectionProps } from "./@types/selection";
import { TablePaginationProps } from "./@types/pagination";

export interface TableProps<T> extends TableStyleProps, TableSelectionProps, TableTemplateProps, TableSortProps, TablePaginationProps, Omit<ApiComponentProps, | "margin" | "padding"> {

    /**
     * Uma matriz de objeto que renderiza o cabeçalho
     */
    column: Array<TableColumnProps>

    /**
     * Uma matriz de objetos a serem exibidos.
     */
    data: Array<T>

    /**
     * Texto a ser exibido quando não há dados.
     */
    emptyMessage?: string

    /**
     * Define se a gerenciamento da tabela vai ser manual ou dinamica
     */
    lazy?: {
        sortField?: string
        sortOrder?: SortOrder
        paginationPage?: number
        paginationTotal?: number
    }
}