import React from "react";
import { Box } from "../../../src/box";
import { Table } from "../../../src/table";

const Core = () => {
    let dados: any = [];

    for (let i = 1; i < 50; i++) {
        dados.push({ id: i, name: "Nome - " + i });
    }

    return (
        <Box size="50">
            <Table paginator
                   column={[
                       { id: "id", header: "COD" },
                       { id: "name", header: "Nome" },
                   ]}
                   data={dados}
                   paginatorRow={5}/>
        </Box>
    );
};
export default Core;
