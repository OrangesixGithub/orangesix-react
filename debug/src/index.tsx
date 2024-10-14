import { Box } from "../../src/box";
import React, { useState } from "react";
import { Editor } from "../../src/editor";

const Root = () => {
    const [value, setValue] = useState("");
    return (
        <Box size="50">
            <p>Componente - Editor</p>
            <Editor icon="code-slash"
                    label="Descrição"
                    name="descricao"
                    options="full"
                    value={value}
                    onChange={setValue}/>
        </Box>
    );
};
export default Root;
