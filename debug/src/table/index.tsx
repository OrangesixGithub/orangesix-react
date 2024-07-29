import React from "react";
import { Box } from "../../../dist/box";
import { Table } from "../../../src/table";

const Core = () => {
    return (
        <div className="container-fluid d-flex flex-wrap">
            <Box css={{ background: "#fff" }}
                 size="50">
                <Table
                    paginator
                    styleResizable
                    column={[
                        { id: "id", header: "Código", sort: true },
                        { id: "name", header: "Nome", sort: true },
                        { id: "idade", header: "Idade", sort: true }
                    ]}
                    data={[
                        { id: 1, name: "Luiz Fernando", idade: 30 },
                        { id: 2, name: "Dayana", idade: 28 },
                        { id: 3, name: "Lara", idade: 3 },
                        { id: 4, name: "Malu", idade: 5 },
                    ]}
                    lazy={{
                        paginationPage: 1,
                        paginationTotal: 100
                    }}
                    paginatorAlign="end"
                    paginatorRow={10}
                    styleSize="small"
                    styleType="bordered"
                    onPaginator={console.log}
                    onSort={console.log}/>
            </Box>
        </div>
    );
};
export default Core;
