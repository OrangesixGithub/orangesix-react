import React from "react";
import { useForm } from "react-hook-form";

import { Input } from "../../src/input";
import { Radio } from "../../src/radio";
import { Textarea } from "../../src/textarea";

const Root = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    return (
        <form className="w-100"
              onSubmit={handleSubmit(data => console.log(data))}>
            <Input errors={errors}
                   icon="gear"
                   label="Input"
                   mode="HookForm"
                   name="input"
                   placeholder="Digite o texto"
                   register={register}
                   size="25"/>
            <Textarea autoResize
                      errors={errors}
                      icon="file-text"
                      label="Textarea"
                      mode="HookForm"
                      name="textarea"
                      placeholder="Digite o textarea"
                      register={register}
                      size="25"/>
            <Radio required
                   options={[
                       { value: "radio1", label: "Radio 1" },
                       { value: "radio2", label: "Radio 2" },
                       { value: "radio3", label: "Radio 3" },
                   ]}
                   errors={errors}
                   icon="toggle-on"
                   label="Radio"
                   mode="HookForm"
                   name="radio"
                   register={register}
                   size="25"/>
            <button type="submit">Enviar</button>
        </form>
    );
};
export default Root;