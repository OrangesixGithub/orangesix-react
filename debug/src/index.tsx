import { Box } from "../../src/box";
import React, { useState } from "react";
import { InputFilter } from "../../src/inputfilter";

const Root = () => {
    const [value, setValue] = useState<any>(undefined);

    console.log(value);

    return (
        <Box size="100">
            <p className="w-100">Componente - Filtro</p>
            <InputFilter required
                         icon="funnel-fill"
                         label="Data"
                         options={["=", ">", "<"]}
                         type="number"
                         value={value}
                         onChange={setValue}/>
        </Box>
    );
};
export default Root;
