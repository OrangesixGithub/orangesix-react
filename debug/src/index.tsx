import { Box } from "../../src/box";
import React, { useState } from "react";
import { PickList } from "../../src/picklist";

const Root = () => {
    const [data, setData] = useState<any>([
        { id: 1, label: "i.Maq", active: false },
        { id: 2, label: "Terra", active: false },
        { id: 3, label: "Legislador", active: true },
    ]);
    console.log(data);

    return (
        <Box className="bg-light rounded"
             css={{ fontSize: ".95em" }}
             size="50">
            <PickList filter
                      data={data}
                      sourceHeader="Disponível"
                      targetHeader="Utilizado"
                      onChange={setData}/>
        </Box>
    );
};
export default Root;