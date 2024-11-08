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
                         data={[]}
                         icon="funnel-fill"
                         label="Data"
                         options={["=", "!="]}
                         type="autocomplete"
                         value={value}
                         onChange={setValue}
                         onSearch={() => null}/>
        </Box>
    );
};
export default Root;
