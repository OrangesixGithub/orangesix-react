import React from "react";
import { TableProps } from "../types";
import { STOREAction } from "../@types/context";
import { DataTableProps, DataTableStateEvent } from "primereact/datatable";

export function tableSort(
    DTOState: TableProps<any>,
    DTOSetState: React.Dispatch<STOREAction>
): Partial<DataTableProps<any>> {

    function onSort(event: DataTableStateEvent) {
        DTOSetState({
            type: "setLazy", payload: {
                ...event,
                paginationPage: event.first,
                paginationTotal: DTOState?.lazy?.paginationTotal ?? undefined
            }
        });
        if (DTOState.onSort) {
            DTOState.onSort(event.sortField, event.sortOrder);
        }
    }

    return {
        sortField: DTOState.lazy?.sortField,
        sortOrder: DTOState.lazy?.sortOrder ?? null,
        onSort: DTOState.lazy !== undefined ? onSort : undefined
    };
}