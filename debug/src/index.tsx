import { Box } from "../../src/box";
import { Select } from "../../src/select";
import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";

const Root = () => {
    const ref = useRef<any>(null);
    const { control } = useForm();

    useEffect(() => {
        console.log(ref);
    }, []);

    return (
        <form id="formLogin">
            <Box className="bg-light rounded"
                 css={{ fontSize: ".95em" }}
                 size="50">
                <Select init
                        options={[
                            { id: 1, name: "Nando" }
                        ]}
                        control={control}
                        label="E-mail"
                        mode="HookForm"
                        name="select"
                        ref={ref}/>
            </Box>
        </form>
    );
};
export default Root;