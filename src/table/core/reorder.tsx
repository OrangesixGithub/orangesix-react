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
            let data: any = e.value;
            let orders = data.map((item: any) => item.order).sort((a: any, b: any) => a - b);
            data.forEach((item: any, index: number) => {
                item.order = orders[index];
            });

            if (e.dragIndex < e.dropIndex) {
                return props.onReorder(data.filter((_: any, index: number) => {
                    return index >= e.dragIndex && index <= e.dropIndex;
                }));
            }

            if (e.dragIndex > e.dropIndex) {
                return props.onReorder(data.filter((_: any, index: number) => {
                    return index >= e.dropIndex && index <= e.dragIndex;
                }));
            }
            //Up to Down
            // if (e.dragIndex < e.dropIndex) {
            //     let indexInit: number = e.dragIndex > 0 ? (e.dragIndex - 1) : e.dragIndex;
            //     let orderInit: number = e.value[indexInit].order;
            //     let indexEnd: number = e.dropIndex;
            //     let result: any[] = [];
            //
            //     //First positon
            //     if (e.dragIndex === 0) {
            //         orderInit = orderInit - 1;
            //     }
            //
            //     for (let i = indexInit; i <= indexEnd; i++) {
            //         e.value[i].order = orderInit;
            //         orderInit++;
            //         result.push({
            //             id: e.value[i].id,
            //             order: e.value[i].order
            //         });
            //     }
            //     props.onReorder(result);
            // }

            //Down to Up
            // if (e.dragIndex > e.dropIndex) {
            //     let indexInit: number = e.dragIndex < (e.value.length - 1) ? (e.dragIndex + 1) : e.dragIndex;
            //     let orderInit: number = e.value[indexInit].order;
            //     let indexEnd: number = e.dropIndex;
            //     let result: any[] = [];
            //
            //     //Last positon
            //     if (e.dragIndex === (e.value.length - 1)) {
            //         orderInit = orderInit + 1;
            //     }
            //
            //     for (let i = indexInit; i >= indexEnd; i--) {
            //         e.value[i].order = orderInit;
            //         orderInit--;
            //         result.push({
            //             id: e.value[i].id,
            //             order: e.value[i].order
            //         });
            //     }
            //     props.onReorder(result);
            // }
        }
    }

    return {
        reorderableColumns: props.reorder === "all" || props.reorder === "columns",
        reorderableRows: props.reorder === "all" || props.reorder === "rows",
        onRowReorder: onReorder
    };
}
