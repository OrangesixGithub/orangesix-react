import React from "react";
import { Box } from "../../src/box";
import { Button } from "../../src/button";

const Root = () => {
    return (
        <Box className="bg-light rounded"
             size="100">
            <Button icon="gear"
                    label="Teste"/>
        </Box>
    );
};
export default Root;