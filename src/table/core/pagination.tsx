import React from "react";
import { TableProps } from "../types";
import { STOREAction } from "../@types/context";
import { PaginatorChangeEvent } from "primereact/paginator";
import { DataTableBaseProps, DataTableStateEvent } from "primereact/datatable";

/**
 * Componente - `Table`
 *
 * Define as configurações do modo de paginação de resultado.
 */
export function tablePagination(
    DTOState: TableProps<any>,
    DTOSetState: React.Dispatch<STOREAction>
): Partial<DataTableBaseProps<any>> {

    function onPage(event: DataTableStateEvent) {
        let paginationPage = event.first / (DTOState.paginatorRow ?? 10);
        DTOSetState({ type: "setPaginatorRow", payload: event.rows });
        DTOSetState({
            type: "setLazy",
            payload: {
                ...event,
                paginationPage: paginationPage === 0 ? 1 : paginationPage + 1,
                paginationTotal: DTOState?.lazy?.paginationTotal ?? undefined
            }
        });
        if (DTOState.onPaginator) {
            DTOState.onPaginator(paginationPage + 1, event.rows);
        }
    }

    return {
        first: DTOState?.lazy?.paginationPage === undefined ? 0 : ((DTOState?.lazy?.paginationPage ?? 0) - 1) * (DTOState.paginatorRow ?? 10),
        paginatorClassName: "pagination",
        paginator: DTOState.paginator ?? false,
        rows: DTOState.paginator ? (DTOState.paginatorRow ?? 10) : undefined,
        rowsPerPageOptions: [5, 10, 15, 20, 50, 100],
        totalRecords: DTOState?.lazy?.paginationTotal ?? undefined,
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
        onPage: DTOState.lazy !== undefined ? onPage : undefined,
        paginatorRight: DTOState.templatePaginationRight,
        paginatorLeft: DTOState.templatePaginationLeft
    };
}