import React, { useState } from "react";
import { Box } from "../../../dist/box";
import { Editor } from "../../../src/editor";

const Core = () => {
    const [editor, setEditor] = useState(null);
    
    return (
        <Box align="align-items-center"
             className="bg-white"
             size="100">
            <Editor required
                    icon="check-lg"
                    label="Editor de texto"
                    name="editor"
                    value={editor}
                    onChange={setEditor}/>
        </Box>
    );
};
export default Core;
