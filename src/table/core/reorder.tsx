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

    function onReorder (e: DataTableRowReorderEvent<any>) {
        if (props.onReorder) {
            props.onReorder(e.value);
        }
    }

    return {
        reorderableColumns: props.reorderable === "all" || props.reorderable === "columns",
        reorderableRows: props.reorderable === "all" || props.reorderable === "rows",
        onRowReorder: onReorder
    };
}