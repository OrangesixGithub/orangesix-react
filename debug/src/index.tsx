import React from "react";
import { useForm } from "react-hook-form";

import { Input } from "../../src/input";
import { Radio } from "../../src/radio";
import { Select } from "../../src/select";
import { Switch } from "../../src/switch";
import { Textarea } from "../../src/textarea";

const Root = () => {
    const { handleSubmit, control } = useForm({
        defaultValues: {
            input: "123",
            textarea: "Entrada de texto longo",
            radio: "radio1",
            select: 1,
            switch: true
        }
    });

    return (
        <form className="w-100"
              onSubmit={handleSubmit(data => console.log(data))}>
            <Input required
                   control={control}
                   icon="gear"
                   label="Input"
                   mask="cpf"
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
            <Radio required
                   options={[
                       { value: "radio1", label: "Switch 1" },
                       { value: "radio2", label: "Switch 2" },
                       { value: "radio3", label: "Switch 3" },
                   ]}
                   control={control}
                   icon="toggle-on"
                   label="Switch"
                   mode="HookForm"
                   name="radio"
                   size="25"/>
            <Select init
                    required
                    options={[
                        { id: 1, name: "Nando" },
                        { id: 2, name: "Dayana" },
                    ]}
                    control={control}
                    icon="list"
                    label="Select"
                    mode="HookForm"
                    name="select"
                    placeholder="Selecione o dados"
                    size="25"/>
            <Switch control={control}
                    icon="gear"
                    label="Status"
                    legend="lorem ipsum dolor"
                    mode="HookForm"
                    name="switch"
                    size="25"/>
            <button type="submit">Enviar</button>
        </form>
    );
};
export default Root;