import { Box } from "../box";
import { TableProps } from "./types";
import { tableSort } from "./core/sort";
import { reducer } from "./store/Reducer";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import React, { useReducer, useRef } from "react";
import { tablePagination } from "./core/pagination";
import { PropsContext, PropsModule } from "./@types/context";
import { bootstrapColumnStyle, bootstrapTableStyle } from "./styled";

const TableContext = React.createContext<PropsContext>({
    DTOState: null, DTOSetState: () => null
});

/**
 * Componente - `Table`
 *
 * Um componente versátil que pode ser utilizado para criar tabela de dados.
 * Permite personalizar o estilo e o conteúdo através de propriedades.
 */
export function Table<T = any>(props: TableProps<T>) {
    const initState: PropsModule = {
        lazy: props.lazy
    };
    //@ts-ignore
    const [DTOState, DTOSetState] = useReducer(reducer, Object.assign(initState, props));

    return (
        <TableContext.Provider value={{ DTOState, DTOSetState }}>
            <Box size={props.size ?? "100"}>
                <DataTable<any>
                    emptyMessage={props.emptyMessage ?? "Não há informações disponíveis no momento!"}
                    footer={props.templeteHeader}
                    header={props.templateFooter}
                    lazy={props.lazy !== undefined}
                    pt={{ ...bootstrapTableStyle(props) }}
                    resizableColumns={props.styleResizable ?? false}
                    tableClassName={props.className}
                    value={props.data as any}
                    {...tableSort(DTOState, DTOSetState)}
                    {...tablePagination(DTOState, DTOSetState)}>
                    {props.column.map(obj => (
                        <Column
                            unstyled
                            align={obj.align}
                            alignHeader={obj.alignHeader}
                            body={obj.body}
                            className={obj.className}
                            field={obj.id}
                            header={obj.header}
                            key={obj.id}
                            pt={{ ...bootstrapColumnStyle(obj) }}
                            sortable={obj.sort ?? false}/>
                    ))}
                </DataTable>
            </Box>
        </TableContext.Provider>
    );
};