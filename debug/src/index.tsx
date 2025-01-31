import React from "react";
import { Box } from "../../src/box";
import { Table } from "../../src/table";

const Root = () => {
    return (
        <Box className="p-2 rounded"
             size="50">
            <Table column={[
                { id: "id", header: "Código", sort: true },
                { id: "name", header: "Nome", sort: true },
            ]}
                   data={[
                       { id: 1, name: "Nando" },
                       { id: 2, name: "Giovane" },
                       { id: 3, name: "Lara" },
                       { id: 4, name: "Dayana" },
                   ]}
                   styleSize="small"/>
        </Box>
    );
};
export default Root;