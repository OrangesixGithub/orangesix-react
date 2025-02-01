import React from "react";
import { Box } from "../../src/box";
import { Tabview } from "../../src/tabview";

const Root = () => {
    const [index, setIndex] = React.useState(1);

    return (
        <>
            <Box size="30">
                <Tabview tabs={[
                    { tab: "Aba 1", content: <p>Aba n° 1</p>, icon: "house" },
                    { tab: "Aba 2", content: <p>Aba n° 2</p>, icon: "gear" },
                ]}
                         tabIndex={index}
                         onChange={event => setIndex(event.index)}/>
            </Box>
        </>
    );
};
export default Root;