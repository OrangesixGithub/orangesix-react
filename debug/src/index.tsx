import { Box } from "../../src/box";
import React, { useState } from "react";
import { InputFilter } from "../../src/inputfilter";

const Root = () => {
    const [value, setValue] = useState("10/10/2024{}28/12/2024");

    return (
        <Box size="100">
            <p className="w-100">Componente - Filtro</p>
            <InputFilter required
                         icon="funnel-fill"
                         label="Data"
                         options={["=", ">", "<", ">=", "<=", "{}"]}
                         type="date"
                         value={value}
                         onChange={setValue}/>
        </Box>
    );
};
export default Root;
