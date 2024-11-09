import { Box } from "../../src/box";
import { Chip } from "primereact/chip";
import React, { useState } from "react";
import { filterLegendAutocomplete, InputFilter } from "../../src/inputfilter";

const Root = () => {
    const [value, setValue] = useState<any>(undefined);
    const [data, setData] = useState<any>([]);

    return (
        <Box size="100">
            <p className="w-100">Componente - Filtro</p>
            <Chip className="my-2 fs-7"
                  label={filterLegendAutocomplete(value, data)}/>
            <InputFilter required
                         data={data}
                         icon="funnel-fill"
                         label="Data"
                         options={["=", "!="]}
                         type="autocomplete"
                         value={value}
                         onSearch={() => setData([
                             { id: 1, label: "Luiz Fernando" },
                             { id: 2, label: "Dayana" },
                             { id: 3, label: "Lara" },
                         ])}
                         onChange={setValue}/>
        </Box>
    );
};
export default Root;
