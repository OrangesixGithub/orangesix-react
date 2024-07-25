import React from "react";
import { Box } from "../../../dist/box";

const Core = () => {
    return (
        <div className="container-fluid d-flex flex-wrap">
            <Box size="12-5">
                <p>Box 12.5</p>
            </Box>
            <Box size="12-5">
                <p>Box 17.5</p>
            </Box>
            <Box size="50">
                <p>Box 50</p>
            </Box>
            <Box size="25">
                <p>Box 50</p>
            </Box>
        </div>
    );
};
export default Core;
