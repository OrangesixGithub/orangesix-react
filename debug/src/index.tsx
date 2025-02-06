import React from "react";
import { useForm } from "react-hook-form";

import { Input } from "../../src/input";
import { Radio } from "../../src/radio";
import { Select } from "../../src/select";
import { Textarea } from "../../src/textarea";

const Root = () => {
    const { handleSubmit, control } = useForm({
        defaultValues: {
            input: "teste",
            textarea: "nando",
            radio: "radio1",
            select: 1
        }
    });

    return (
        <form className="w-100"
              onSubmit={handleSubmit(data => console.log(data))}>
            <Input required
                   control={control}
                   icon="gear"
                   label="Input"
                   mode="HookForm"
                   name="input"
                   placeholder="Digite o texto"
                   size="25"/>
            <Textarea autoResize
                      required
                      control={control}
                      icon="file-text"
                      label="Textarea"
                      mode="HookForm"
                      name="textarea"
                      placeholder="Digite o textarea"
                      size="25"/>
            {/*<Radio required*/}
            {/*       options={[*/}
            {/*           { value: "radio1", label: "Radio 1" },*/}
            {/*           { value: "radio2", label: "Radio 2" },*/}
            {/*           { value: "radio3", label: "Radio 3" },*/}
            {/*       ]}*/}
            {/*       icon="toggle-on"*/}
            {/*       label="Radio"*/}
            {/*       mode="HookForm"*/}
            {/*       name="radio"*/}
            {/*       size="25"/>*/}
            {/*<Select init*/}
            {/*        required*/}
            {/*        options={[*/}
            {/*            { id: 1, name: "Nando" },*/}
            {/*            { id: 2, name: "Dayana" },*/}
            {/*        ]}*/}
            {/*        icon="list"*/}
            {/*        label="Select"*/}
            {/*        mode="HookForm"*/}
            {/*        name="select"*/}
            {/*        placeholder="Selecione o dados"*/}
            {/*        size="25"/>*/}
            <button type="submit">Enviar</button>
        </form>
    );
};
export default Root;