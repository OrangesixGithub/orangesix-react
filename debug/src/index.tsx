import { Box } from "../../src/box";
import React, { useState } from "react";
import { Autocomplete } from "../../src/autocomplete";
import { AutocompleteDataProps } from "../../src/autocomplete/types";

const Root = () => {
    const [value, setValue] = useState("");
    const [itens, setItens] = useState<AutocompleteDataProps[]>([]);

    const search = () => {
        console.log("ex");
        setItens([
            { code: 1, name: "Brasil" },
            { code: 2, name: "Argentina" },
            { code: 3, name: "Alemanha" },
            { code: 4, name: "Canadá" },
            { code: 5, name: "Canadá" },
            { code: 6, name: "Canadá" },
            { code: 7, name: "Canadá" },
        ]);
    };

    return (
        <Box size="50">
            <Autocomplete required
                          data={itens}
                          icon="house"
                          label="Nando"
                          name="id_pessoa"
                          value={value}
                          onChange={setValue}
                          onSearch={search}/>
        </Box>
    );
};
export default Root;