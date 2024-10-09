import { Box } from "../box";
import { TableProps } from "./types";
import React, { useState } from "react";
import { tableCore } from "./core/core";
import { tableSort } from "./core/sort";
import { tableGroup } from "./core/group";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { tableSelection } from "./core/selection";
import { tablePagination } from "./core/pagination";
import { bootstrapColumnStyle, bootstrapTableStyle } from "./styled";

/**
 * Componente - `Table`
 *
 * Um componente versátil que pode ser utilizado para criar tabela de dados.
 * Permite personalizar o estilo e o conteúdo através de propriedades.
 */
export function Table<T = any>(props: TableProps<T>) {
    const [expandedRows, setExpandedRows] = useState([]);

    /*
    |------------------------------------------
    | render() - Renderização do componente
    |------------------------------------------
    */
    return (
        <Box className="p-0"
             size={props.size ?? "100"}>
            {/*@ts-ignore*/}
            <DataTable<any>
                pt={{ ...bootstrapTableStyle(props) }}
                tableClassName={props.className}
                {...tableCore(props)}
                {...tableSort(props)}
                {...tableSelection(props)}
                {...tablePagination(props)}
                {...tableGroup(props, expandedRows, setExpandedRows)}>
                {props.selectionMode === "checkbox"
                    && <Column align="center"
                               headerStyle={{ width: "2.5rem" }}
                               pt={{ ...bootstrapColumnStyle() }}
                               selectionMode="multiple"/>}
                {props.column.map(obj => {
                    return (
                        <Column
                            unstyled
                            align={obj.align}
                            alignFrozen={obj.frozen ? "right" : undefined}
                            alignHeader={obj.alignHeader}
                            body={obj.body}
                            field={obj.id}
                            frozen={obj.frozen !== undefined}
                            header={obj.header}
                            key={obj.id}
                            pt={{ ...bootstrapColumnStyle() }}
                            sortable={obj.sort ?? false}
                            style={obj.style}/>
                    );
                })}
            </DataTable>
        </Box>
    );
}