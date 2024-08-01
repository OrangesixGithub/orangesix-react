import React, { useState } from "react";
import { Box } from "../../../dist/box";
import { Table } from "../../../src/table";

const Core = () => {
    const [select, setSelect] = useState(null);

    return (
        <div className="container-fluid d-flex flex-wrap">
            <Box className="position-relative"
                 css={{ background: "#fff" }}
                 size="50">
                <Table
                    paginator
                    styleResizable
                    column={[
                        { id: "id", header: "Código", sort: true, style: { width: "90px" } },
                        { id: "name", header: "Nome", sort: true, style: { width: "200px" } },
                        { id: "sobrenome", header: "Sobrenome", sort: true, style: { width: "200px" } },
                        { id: "cidade", header: "Cidade", sort: true, style: { width: "150px" } },
                        { id: "idade", header: "Idade", sort: true, style: { width: "100px" }, frozen: true },
                    ]}
                    data={[
                        { id: 1, name: "Luiz Fernando", sobrenome: "Bernardes", cidade: "varginha", idade: 30 },
                        { id: 2, name: "Dayana", sobrenome: "Davanzo", cidade: "varginha", idade: 28 },
                        { id: 3, name: "Lara", sobrenome: "de Paula Davanzo", cidade: "varginha", idade: 3 },
                        { id: 4, name: "Malu", sobrenome: "Dog", cidade: "varginha", idade: 5 },
                        { id: 5, name: "Luzia", sobrenome: "Sebastião", cidade: "varginha", idade: 55 }
                    ]}
                    paginatorAlign="start"
                    selection={select}
                    selectionMode="checkbox"
                    styleSize="small"
                    styleType="bordered"
                    templeteHeader={<div className="p-1 px-2"><p>Família de Paula Davanzo</p></div>}
                    onSelection={setSelect}/>
            </Box>
        </div>
    );
};
export default Core;
