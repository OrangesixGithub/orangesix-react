import React from "react";
import { Input } from "../../src/input";
import { useForm } from "react-hook-form";

const Root = () => {
    const { register, formState: { errors }, handleSubmit } = useForm({});

    return (
        <form className="w-100"
              onSubmit={handleSubmit(data => console.log(data))}>
            <Input required
                   errors={errors}
                   icon="gear"
                   label="Entrada de dados"
                   mode="HookForm"
                   name="pessoa"
                   placeholder="Digite o texto"
                   register={register}
                   size="25"/>
        </form>
    );
};
export default Root;