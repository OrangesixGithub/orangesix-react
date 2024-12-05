import React from "react";
import { Box } from "../../src/box";
import { Table } from "../../src/table";

const Root = () => {
    return (
        <Box size="50">
            <Table styleResizable
                   styleStriped
                   column={[
                       { id: "id", header: "Cód", style: { userSelect: "text" } },
                       { id: "name", header: "Nome", style: { userSelect: "text" } },
                       { id: "age", header: "Idade" },
                   ]}
                   data={[
                       { id: 1, name: "Lara", age: 4 },
                       { id: 2, name: "Luiz Fernando", age: 30 },
                       { id: 3, name: "Dayana", age: 28 },
                       { id: 4, name: "Malu", age: 7 },
                   ]}
                   styleSize="small"
                   styleType="bordered"/>
        </Box>
    );
};
export default Root;