import React, { useState } from "react";
import { Box } from "../../../dist/box";
import { Table } from "../../../src/table";

const Core = () => {
    const [select, setSelect] = useState(null);

    return (
        <Box align="align-items-center"
             className="bg-white"
             size="50">
            <Table
                column={[
                    { id: "id", header: "Código", sort: true, style: { width: "90px" } },
                    { id: "name", header: "Nome", sort: true, style: { width: "200px" } },
                    { id: "sobrenome", header: "Sobrenome", sort: true, style: { width: "200px" } },
                    { id: "cidade", header: "Cidade", sort: true, style: { width: "150px" } },
                    { id: "idade", header: "Idade", sort: true, style: { width: "100px" } },
                ]}
                data={[
                    { id: 1, name: "Luiz Fernando", sobrenome: "Bernardes", cidade: "varginha", idade: 30 },
                    { id: 2, name: "Dayana", sobrenome: "Davanzo", cidade: "varginha", idade: 28 },
                    { id: 3, name: "Lara", sobrenome: "de Paula Davanzo", cidade: "varginha", idade: 3 },
                    { id: 4, name: "Malu", sobrenome: "Dog", cidade: "varginha", idade: 5 },
                    { id: 5, name: "Luzia", sobrenome: "Sebastião", cidade: "varginha", idade: 55 }
                ]}
                paginator={true}
                paginatorAlign="center"
                paginatorRow={5}
                selection={select}
                styleHover={true}
                styleResizable={true}
                styleSize="small"
                styleStriped={true}
                styleType="bordered"
                onSelection={value => setSelect(value)}/>
        </Box>
    );
};
export default Core;
