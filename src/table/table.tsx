import { Box } from "../box";
import { TableProps } from "./types";
import { ThemeProvider } from "../api";
import { tableCore } from "./core/core";
import { tableSort } from "./core/sort";
import React, { useReducer } from "react";
import { reducer } from "./store/Reducer";
import { Column } from "primereact/column";
import { classNames } from "primereact/utils";
import { DataTable } from "primereact/datatable";
import { tableSelection } from "./core/selection";
import { tablePagination } from "./core/pagination";
import { PropsContext, PropsModule } from "./@types/context";
import { bootstrapColumnStyle, bootstrapTableStyle } from "./styled";

const TableContext = React.createContext<PropsContext>({
    DTOState: null, DTOSetState: () => null
});

TableContext.displayName = "Table";

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
    const css = props.css !== undefined ? ThemeProvider._currentValue.css(props.css) : "";

    //@ts-ignore
    const [DTOState, DTOSetState] = useReducer(reducer, Object.assign(initState, props));

    /*
    |------------------------------------------
    | render() - Renderização do componente
    |------------------------------------------
    */
    return (
        <TableContext.Provider value={{ DTOState, DTOSetState }}>
            <Box size={props.size ?? "100"}>
                {/*@ts-ignore*/}
                <DataTable<any>
                    pt={{ ...bootstrapTableStyle(props) }}
                    tableClassName={classNames([props.className, css])}
                    {...tableCore(props)}
                    {...tableSelection(props, DTOSetState)}
                    {...tableSort(DTOState, DTOSetState)}
                    {...tablePagination(DTOState, DTOSetState)}>
                    {props.column.map(obj => {
                        let css = obj.style !== undefined ? ThemeProvider._currentValue.css(obj.style) : "";
                        return (
                            <Column
                                unstyled
                                align={obj.align}
                                alignHeader={obj.alignHeader}
                                body={obj.body}
                                className={classNames([obj.className, css])}
                                field={obj.id}
                                header={obj.header}
                                key={obj.id}
                                pt={{ ...bootstrapColumnStyle(obj) }}
                                sortable={obj.sort ?? false}/>
                        );
                    })}
                </DataTable>
            </Box>
        </TableContext.Provider>
    );
}