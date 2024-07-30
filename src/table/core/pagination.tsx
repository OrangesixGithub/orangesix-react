import React from "react";
import { TableProps } from "../types";
import { PaginatorChangeEvent } from "primereact/paginator";
import { DataTableBaseProps, DataTableStateEvent } from "primereact/datatable";

/**
 * Componente - `Table`
 *
 * Define as configurações do modo de paginação de resultado.
 */
export function tablePagination(
    props: TableProps<any>
): Partial<DataTableBaseProps<any>> {

    function onPage(event: DataTableStateEvent) {
        let paginationPage = event.first / (props.paginatorRow ?? 10);
        if (props.onPaginator) {
            props.onPaginator(paginationPage + 1, event.rows);
        }
    }

    return {
        first: props?.lazy?.paginationPage === undefined ? 0 : ((props?.lazy?.paginationPage ?? 0) - 1) * (props.paginatorRow ?? 10),
        paginatorClassName: "pagination",
        paginator: props.paginator ?? false,
        rows: props.paginator ? (props.paginatorRow ?? 10) : undefined,
        rowsPerPageOptions: [5, 10, 15, 20, 50, 100],
        totalRecords: props?.lazy?.paginationTotal ?? undefined,
        paginatorTemplate: {
            layout: "RowsPerPageDropdown FirstPageLink PageLinks LastPageLink CurrentPageReport",
            CurrentPageReport: options => {
                return (
                    <p className="text-secondary-300 mx-2"
                       style={{ fontSize: ".9em" }}>Total de registros: {options.totalRecords}</p>
                );
            },
            RowsPerPageDropdown: options => {
                return (
                    <select className="form-select form-select-sm mx-2"
                            style={{ maxWidth: "60px" }}
                            value={options.value}
                            onChange={(e) => {
                                const event = {} as PaginatorChangeEvent;
                                event.value = e.target.value;
                                options.onChange(event);
                            }}>
                        {options.options.map(obj => <option key={obj.value}
                                                            value={obj.value}>{obj.label}</option>)}
                    </select>
                );
            }
        },
        onPage: props.lazy !== undefined ? onPage : undefined,
        paginatorRight: props.templatePaginationRight,
        paginatorLeft: props.templatePaginationLeft
    };
}