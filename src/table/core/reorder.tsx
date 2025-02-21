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
        if (props.onReorder) {
            //Up to Down
            if (e.dragIndex < e.dropIndex) {
                let indexInit: number = e.dragIndex > 0 ? (e.dragIndex - 1) : e.dragIndex;
                let orderInit: number = e.value[indexInit].order;
                let indexEnd: number = e.dropIndex;
                let result: any[] = [];

                //First positon
                if (e.dragIndex === 0) {
                    orderInit = orderInit - 1;
                }

                for (let i = indexInit; i <= indexEnd; i++) {
                    e.value[i].order = orderInit;
                    orderInit++;
                    result.push({
                        id: e.value[i].id,
                        order: e.value[i].order
                    });
                }
                props.onReorder(result);
            }

            //Down to Up
            if (e.dragIndex > e.dropIndex) {
                let indexInit: number = e.dragIndex < (e.value.length - 1) ? (e.dragIndex + 1) : e.dragIndex;
                let orderInit: number = e.value[indexInit].order;
                let indexEnd: number = e.dropIndex;
                let result: any[] = [];

                //Last positon
                if (e.dragIndex === (e.value.length - 1)) {
                    orderInit = orderInit + 1;
                }

                for (let i = indexInit; i >= indexEnd; i--) {
                    e.value[i].order = orderInit;
                    orderInit--;
                    result.push({
                        id: e.value[i].id,
                        order: e.value[i].order
                    });
                }
                props.onReorder(result);
            }
        }
    }

    return {
        reorderableColumns: props.reorder === "all" || props.reorder === "columns",
        reorderableRows: props.reorder === "all" || props.reorder === "rows",
        onRowReorder: onReorder
    };
}
