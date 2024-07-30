import React, { useState } from "react";
import { Box } from "../../../dist/box";
import { Table } from "../../../src/table";

const Core = () => {
    const [select, setSelect] = useState(null);
    const [rows, setRows] = useState<any>(5);
    const [lazy, setLazy] = useState<any>({
        sortField: "name",
        sortOrder: 1,
        paginationTotal: 100,
        paginationPage: 1
    });


    return (
        <div className="container-fluid d-flex flex-wrap">
            <Box css={{ background: "#fff" }}
                 size="50">
                <Table
                    paginator
                    styleResizable
                    column={[
                        { id: "id", header: "Código", sort: true, style: { minWidth: "100px" } },
                        { id: "name", header: "Nome", sort: true },
                        { id: "idade", header: "Idade", sort: true }
                    ]}
                    data={[
                        { id: 1, name: "Luiz Fernando", idade: 30 },
                        { id: 2, name: "Dayana", idade: 28 },
                        { id: 3, name: "Lara", idade: 3 },
                        { id: 4, name: "Malu", idade: 5 },
                        { id: 5, name: "Luzia", idade: 55 },
                        { id: 6, name: "Luiz Fernando", idade: 52 },
                    ]}
                    lazy={lazy}
                    paginatorAlign="start"
                    paginatorRow={rows}
                    selection={select}
                    styleSize="small"
                    styleType="bordered"
                    onPaginator={(number, elements) => {
                        setLazy({
                            ...lazy,
                            paginationPage: number
                        });
                        setRows(elements);
                    }}
                    onSort={(field, order) => setLazy({
                        ...lazy,
                        sortField: field,
                        sortOrder: order
                    })}
                    onSelection={setSelect}/>
            </Box>
        </div>
    );
};
export default Core;
