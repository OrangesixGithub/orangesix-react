import { Box } from "../../src/box";
import React, { useEffect, useState } from "react";
import { PickList } from "../../src/picklist";

const Root = () => {
    const [data, setData] = useState<any>([]);

    useEffect(() => {
        setTimeout(() => {
            setData([
                { id: 1, label: "i.Maq", active: false },
                { id: 2, label: "Terra", active: false },
                { id: 3, label: "Legislador", active: true },
            ]);
        }, 1000);
    }, []);

    return (
        <Box className="bg-light rounded"
             css={{ fontSize: ".95em" }}
             size="50">
            <PickList data={data}
                      sourceHeader="Disponível"
                      targetHeader="Utilizado"
                      onChange={setData}/>
        </Box>
    );
};
export default Root;