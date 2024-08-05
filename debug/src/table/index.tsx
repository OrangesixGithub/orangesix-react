import React from "react";
import { Box } from "../../../src/box";
import { Table } from "../../../src/table";

const Core = () => {
    let data = [
        {
            id: 1,
            nome: "Luiz Fernando",
            sobrenome: "Bernardes de Paula",
            idade: 30,
            receita: "R$ 10.250,00",
            despesa: "R$ 2.500,00",
            familia: { name: "De Paula Davanzo" }
        },
        {
            id: 2,
            nome: "Dayana",
            sobrenome: "Davanzo",
            idade: 27,
            receita: "R$ 8.250,00",
            despesa: "R$ 1.500,00",
            familia: { name: "De Paula Davanzo" }
        },
        {
            id: 3,
            nome: "Lara",
            sobrenome: "de Paula Davanzo",
            idade: 3,
            despesa: "R$ 500,00",
            familia: { name: "De Paula Davanzo" }
        },
        {
            id: 4,
            nome: "Malu",
            despesa: "R$ 200,00",
            sobrenome: "de Paula Davanzo",
            idade: 5,
            familia: { name: "De Paula Davanzo" }
        },
        {
            id: 5,
            nome: "João Naves",
            receita: "R$ 12.000,00",
            despesa: "R$ 2.000,00",
            sobrenome: "Davanzo Riso",
            idade: 5,
            familia: { name: "Davanzo Alves" }
        },
        {
            id: 6,
            nome: "Nilva",
            despesa: "R$ 1.200,00",
            sobrenome: "Davanzo Riso",
            idade: 5,
            familia: { name: "Davanzo Alves" }
        },
    ];

    const headerTemplate = (data) => {
        return (
            <span className="fw-bold ms-2">{data.familia.name}</span>
        );
    };

    return (
        <Box align="align-items-center"
             className="bg-white"
             size="50">
            <Table rowExpandable
                   styleResizable
                   column={[
                       { id: "id", header: "Código", sort: true },
                       { id: "nome", header: "Nome" },
                       { id: "sobrenome", header: "sobrenome" },
                       { id: "idade", header: "Idade" },
                       { id: "receita", header: "Receita" },
                       { id: "despesa", header: "Despesa" }
                   ]}
                   data={data}
                   rowGroup="familia.name"
                   rowGroupHeaderTemplate={headerTemplate}
                   rowGroupMode="subheader"
                   styleSize="small"
                   styleType="bordered"/>
        </Box>
    );
};
export default Core;
