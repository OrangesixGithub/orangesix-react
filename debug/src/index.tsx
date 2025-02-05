import { useForm } from "react-hook-form";
import React, { useRef, useEffect } from "react";

import { Input } from "../../src/input";
import { Textarea } from "../../src/textarea";

const Root = () => {
    const ref = useRef<HTMLTextAreaElement>(null);
    const { register, formState: { errors }, handleSubmit } = useForm({});

    useEffect(() => {
        console.log(ref.current?.placeholder);
    }, []);

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
                      ref={ref}
                      register={register}
                      size="25"/>
            <button type="submit">Enviar</button>
        </form>
    );
};
export default Root;