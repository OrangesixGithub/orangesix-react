import { Box } from "../../src/box";
import { Table } from "../../src/table";
import React, { useEffect, useState } from "react";

const Root = () => {

    const [selectedRow, setSelectedRow] = useState<any>(null);
    const [registers, setRegisters] = useState<any[]>([]);

    let column = [
        { id: "id", header: "ID" },
        { id: "nome", header: "Nome" },
        { id: "usuario", header: "Usuário" },
    ];

    useEffect(() => {
        setRegisters([
            { id: 111, nome: "Paulo Henrique", usuario: "paulo.souza", order: 20 },
            { id: 222, nome: "Poliana", usuario: "poliana.frogeri", order: 21 },
            { id: 333, nome: "Yasmin", usuario: "yasmin.souza", order: 22 },
            { id: 444, nome: "Geovana", usuario: "geovana.souza", order: 23 },
            { id: 555, nome: "Pedro", usuario: "pedro.gaspar", order: 24 },
            { id: 666, nome: "José", usuario: "jose.santos", order: 25 },
            { id: 777, nome: "Marcos", usuario: "marcos.silva", order: 26 },
            { id: 888, nome: "Dora", usuario: "dora.alves", order: 27 },
            { id: 999, nome: "Rafaela", usuario: "rafaela.frogeri", order: 28 }
        ]);
    }, []);

    return (
        <Box className="bg-light rounded"
             css={{ fontSize: ".95em" }}
             size="85">
            <Table column={column}
                   data={registers}
                   reorder="all"
                   selection={selectedRow}
                   selectionMode="checkbox"
                   onReorder={data => console.log('post: ', data)}
                   onSelection={setSelectedRow}/>
        </Box>
    );
};
export default Root;