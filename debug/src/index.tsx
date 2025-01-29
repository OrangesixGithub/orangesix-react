import React from "react";
import { Box } from "../../src/box";
import { Table } from "../../src/table";

const Root = () => {
    return (
        <Box className="p-2 rounded"
             css={{ background: "#202020" }}
             size="50">
            <Table paginator
                   column={[
                       { id: "id", header: "Código", sort: true },
                       { id: "name", header: "Nome", sort: true },
                   ]}
                   data={[
                       { id: 1, name: "Nando" },
                       { id: 2, name: "Giovane" },
                   ]}
                   paginatorAlign="end"
                   styleSize="small"/>
        </Box>
    );
};
export default Root;