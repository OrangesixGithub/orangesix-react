import React from "react";
import { Box } from "../../src/box";
import { Table } from "../../src/table";

const Root = () => {
    return (
        <>
            <Box css={{ fontSize: ".9em" }}
                 size="50">
                <Table paginator
                       styleStriped
                       column={[
                           { id: "id", header: "Código", sort: true },
                           { id: "name", header: "Nome", sort: true },
                       ]}
                       data={[
                           { id: 1, name: "Nando" },
                           { id: 2, name: "Giovane" },
                           { id: 3, name: "Lara" },
                           { id: 4, name: "Dayana" },
                           { id: 5, name: "Dayana" },
                           { id: 6, name: "Dayana" },
                           { id: 7, name: "Dayana" },
                           { id: 8, name: "Dayana" },
                           { id: 9, name: "Dayana" },
                       ]}
                       paginatorRow={5}
                       selectionMode="checkbox"
                       styleSize="small"/>
            </Box>
        </>
    );
};
export default Root;