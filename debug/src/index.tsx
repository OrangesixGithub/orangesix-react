import { Box } from "../../src/box";
import React, { useEffect, useState } from "react";
import { Table } from "../../src/table";

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
            { id: 123, nome: "Paulo Henrique", usuario: "paulo.souza", order: 20 },
            { id: 231, nome: "Poliana", usuario: "poliana.frogeri", order: 21 },
            { id: 332, nome: "Yasmin", usuario: "yasmin.souza", order: 22 },
            { id: 532, nome: "Geovana", usuario: "geovana.souza", order: 23 },
            { id: 432, nome: "Rafaela", usuario: "rafaela.alves", order: 24 }
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
                   onReorder={console.log}
                   onSelection={setSelectedRow}/>
        </Box>
    );
};
export default Root;