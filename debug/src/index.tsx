import React, { useEffect, useState, useRef } from "react";

import { Box } from "../../src/box";
import { TablePivot } from "../../src/tablepivot";
import { TablePivotRefProps } from "../../src/tablepivot/types";

const Root = () => {
    const [data, setData] = useState<any>([]);
    const pivotRef = useRef<TablePivotRefProps>(null);

    useEffect(() => {
        setTimeout(() => {
            setData([
                { Cliente: "DIRETRIZ INFORMÁTICA", Prioridade: "Alta", Valor: 50 },
                { Cliente: "DIRETRIZ INFORMÁTICA", Prioridade: "Alta", Valor: 200 },
                { Cliente: "DIRETRIZ INFORMÁTICA", Prioridade: "Alta", Valor: 106 },
                { Cliente: "DIRETRIZ INFORMÁTICA", Prioridade: "Alta", Valor: 100 },
                { Cliente: "PREF. MUN. ELOI MENDES", Prioridade: "Média", Valor: 108 },
                { Cliente: "PREF. MUN. ELOI MENDES", Prioridade: "Média", Valor: 200 },
                { Cliente: "PREF. MUN. ELOI MENDES", Prioridade: "Baixa", Valor: 250 },
            ]);
        }, 2000);
    }, []);

    useEffect(() => {
        console.log(data);
        console.log(pivotRef.current?.webdatarocks?.updateData({
            data: data
        }));
    }, [data]);

    return (
        <Box size="100">
            <Box className="m-0 p-0"
                 size="100">
                <TablePivot pivotOptions={{
                    grid: {
                        showFilter: false,
                        showHeaders: false
                    },
                    configuratorButton: false
                }}
                            pivotSlice={{
                                rows: [
                                    { uniqueName: "Cliente" },
                                    { uniqueName: "Prioridade" },
                                ],
                                columns: [
                                    { uniqueName: "Prioridade" }
                                ],
                                measures: [
                                    { uniqueName: "Valor", active: true, grandTotalCaption: "Total" },
                                ],
                                expands: {
                                    expandAll: true,
                                }
                            }}
                            toolbarOptions={{
                                connect: false,
                                open: false,
                                fullscreen: false,
                                save: false,
                                options: false
                            }}
                            pivotDataSource={data}
                            ref={pivotRef}
                            size="100"/>
            </Box>
        </Box>
    );
};
export default Root;
