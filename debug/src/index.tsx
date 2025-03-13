import React from "react";
import { Box } from "../../src/box";
import { Loading } from "../../src/loading";

const Root = () => {
    return (
        <Box className="bg-light rounded"
             size="100">
            <Loading className="rounded"
                     text="Carregando os dados..."
                     visible={true}/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias architecto
                asperiores atque esse illo
                iure laboriosam, nam odio placeat quae quisquam sapiente totam ullam! Ipsa quo sunt tempora vero
                voluptatum?</p>
        </Box>
    );
};
export default Root;