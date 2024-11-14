import React, { useEffect, useRef } from "react";

import { Box } from "../../src/box";
import { TablePivot } from "../../src/tablepivot";
import { TablePivotProps, TablePivotRefProps } from "../../src/tablepivot/types";

const PivotTableOptions: TablePivotProps["pivotOptions"] = {
    grid: {
        showHeaders: false
    },
    configuratorButton: false
};

const PivotTableSlice: TablePivotProps["pivotSlice"] = {
    rows: [
        { uniqueName: "prioridade" },
        { uniqueName: "cliente" },
    ],
    measures: [
        { uniqueName: "valor", active: true, grandTotalCaption: "Total valor" },
    ],
    expands: {
        expandAll: true,
    }
};

const PivotTableCustom = (cellBuilder, cellData) => {
    if (cellData.type == "value") {
        if (cellData.rowIndex % 2 == 1 && cellData.value > 250) {
            cellBuilder.text = `<p><img class="me-1" style='width: 20px' src='https://static.wixstatic.com/media/63ea58_3c088f23c07645c6a64aacd2372b431c~mv2.png/v1/fit/w_252,h_336,q_90/63ea58_3c088f23c07645c6a64aacd2372b431c~mv2.png'/>${cellData.value}</p>`;
        }
    }
};

const Root = () => {
    const pivotRef = useRef<TablePivotRefProps>(null);

    useEffect(() => {
        setTimeout(() => {
            pivotRef.current?.webdatarocks?.setReport({
                dataSource: {
                    data: [
                        { cliente: "DIRETRIZ INFORMÁTICA", prioridade: "Alta", valor: 50 },
                        { cliente: "DIRETRIZ INFORMÁTICA", prioridade: "Alta", valor: 200 },
                        { cliente: "DIRETRIZ INFORMÁTICA", prioridade: "Alta", valor: 106 },
                        { cliente: "DIRETRIZ INFORMÁTICA", prioridade: "Alta", valor: 100 },
                        { cliente: "PREF. MUN. ELOI MENDES", prioridade: "Média", valor: 108 },
                        { cliente: "PREF. MUN. ELOI MENDES", prioridade: "Média", valor: 200 },
                        { cliente: "PREF. MUN. ELOI MENDES", prioridade: "Baixa", valor: 250 },
                    ]
                },
                options: PivotTableOptions,
                slice: { ...PivotTableSlice, expands: { expandAll: true } }
            });
        }, 1000);
    });

    return (
        <Box size="100">
            <Box size="100">
                <TablePivot toolbarOptions={{
                    connect: false,
                    open: false,
                    fullscreen: false,
                    save: false,
                    options: false
                }}
                            pivotCustomizeCell={PivotTableCustom}
                            pivotOptions={PivotTableOptions}
                            ref={pivotRef}
                            size="100"/>
            </Box>
        </Box>
    );
};
export default Root;
