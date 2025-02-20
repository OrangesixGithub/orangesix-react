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

    function onReorder(e: DataTableRowReorderEvent<any>) {
        //Desenvolver função do range de dados
        // [
        //     {id: ???, order: ???},
        //     {id: ???, order: ???},
        //     {id: ???, order: ???},
        // ]
        if (props.onReorder) {
            props.onReorder([]);
        }
    }

    return {
        reorderableColumns: props.reorder === "all" || props.reorder === "columns",
        reorderableRows: props.reorder === "all" || props.reorder === "rows",
        onRowReorder: onReorder
    };
}