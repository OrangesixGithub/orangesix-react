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
        paginator: props.paginator ?? false,
        paginatorClassName: "pagination",
        totalRecords: props?.lazy?.paginationTotal ?? undefined,
        first: props?.lazy?.paginationPage === undefined ? 0 : ((props?.lazy?.paginationPage ?? 0) - 1) * (props.paginatorRow ?? 10),
        rows: props.paginator ? (props.paginatorRow ?? 10) : undefined,
        rowsPerPageOptions: [5, 10, 15, 20, 50, 100],
        paginatorTemplate: {
            layout: "RowsPerPageDropdown FirstPageLink PageLinks LastPageLink CurrentPageReport",
            CurrentPageReport: options => {
                return (
                    <p className="text-secondary mx-2"
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
                                // @ts-ignore
                                event.value = Number(e.target.value);
                                options.onChange(event);
                            }}>
                        {options.options.map(obj => <option key={obj.value}
                                                            value={obj.value}>{obj.label}</option>)}
                    </select>
                );
            }
        },
        paginatorRight: props.templatePaginationRight,
        paginatorLeft: props.templatePaginationLeft,
        onPage: props.lazy !== undefined ? onPage : undefined,
    };
}