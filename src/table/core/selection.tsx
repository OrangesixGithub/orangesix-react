import React from "react";
import { TableProps } from "../types";
import { STOREAction } from "../@types/context";
import { DataTableProps, DataTableSelectionSingleChangeEvent } from "primereact/datatable";

/**
 * Componente - `Table`
 *
 * Define as configurações do modo de seleção de dados.
 */
export function tableSelection(
    props: TableProps<any>,
    DTOSetState: React.Dispatch<STOREAction>
): Partial<DataTableProps<any>> {

    function onSelect(e: DataTableSelectionSingleChangeEvent<any>) {
        if (props.onSelection) {
            props.onSelection(e.value);
            DTOSetState({ type: "setOnSelected", payload: e.value });
        }
    }

    return {
        metaKeySelection: props.onSelection !== undefined,
        selection: props.selection,
        selectionMode: props.onSelection !== undefined ? "single" : undefined,
        onSelectionChange: onSelect,
    };
}