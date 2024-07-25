import React from "react";
import { Box } from "../../../src/box";

const Core = () => {
    return (
        <div className="container-fluid d-flex flex-wrap">
            <Box css={{
                "@md": {
                    width: "calc(50% - $$margin)"
                }
            }}
                 align="flex-end"
                 justify="space-between"
                 padding="4"
                 size="25">
                <p>Box 25</p>
                <p>Box 25</p>
            </Box>
            <Box size="50">
                <p>Box 50</p>
            </Box>
            <Box css={{
                "@md": {
                    width: "calc(50% - $$margin)"
                }
            }}
                 size="25">
                <p>Box 50</p>
            </Box>
        </div>
    );
};
export default Core;
