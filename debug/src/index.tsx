import { Box } from "../../src/box";
import React, { useEffect, useState } from "react";
import { Table } from "../../src/table";

const Root = () => {

    const [selectedRow, setSelectedRow] = useState<any>(null);
    const [registers, setRegisters] = useState<any>([]);

    let column = [
        {
            id: "id",
            header: "ID",
        },
        {
            id: "nome",
            header: "Nome",
        },
        {
            id: "usuario",
            header: "Usuário",
        },
    ];

    useEffect(() => {
        setRegisters([
            { id: 123, nome: "Paulo Henrique", usuario: "paulo.souza" },
            { id: 231, nome: "Poliana", usuario: "poliana.frogeri" },
            { id: 332, nome: "Yasmin", usuario: "yasmin.souza" },
            { id: 532, nome: "Geovana", usuario: "geovana.souza" },
            { id: 432, nome: "Rafaela", usuario: "rafaela.alves" }
        ]);
    }, []);

    console.log(registers);

    return (
        <Box className="bg-light rounded"
             css={{ fontSize: ".95em" }}
             size="85">
            <Table reorderableColumns={false}
                   reorderableRows={false}
                   column={column}
                   data={registers}
                   selection={selectedRow}
                   selectionMode="checkbox"
                   onRowReorder={setRegisters}
                   onSelection={setSelectedRow}/>
        </Box>
    );
};
export default Root;