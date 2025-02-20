import { TableProps } from "../types";
import { DataTableProps, DataTableRowReorderEvent } from "primereact/datatable";

/**
 * Componente - `Table`
 *
 * Define as configurações do modo de ordenação colunas e tabelas.
 */
export function tableReorder(
    props: TableProps<any>
): Partial<DataTableProps<any>> {

    function onRowReorder (e: DataTableRowReorderEvent<any>) {
        if (props.onRowReorder) {
            props.onRowReorder(e.value);
        }
    }

    return {
        reorderableColumns: props.reorderableColumns,
        reorderableRows: props.reorderableRows,
        onRowReorder: onRowReorder
    };
}