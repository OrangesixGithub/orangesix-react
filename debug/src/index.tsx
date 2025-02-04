import React from "react";
import { Box } from "../../src/box";
import { Table } from "../../src/table";

const Root = () => {
    return (
        <>
            <Box size="30">
                <Table paginator
                       column={[
                           { id: "id", header: "Cód" },
                           { id: "nome", header: "Nome" },
                           { id: "sobrenome", header: "Sobrenome" },
                       ]}
                       data={[
                           { id: 1, nome: "Luiz Fernando" },
                           { id: 2, nome: "Dayana" },
                           { id: 3, nome: "Lara" },
                       ]}
                       styleSize="small"/>
            </Box>
        </>
    );
};
export default Root;